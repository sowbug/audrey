/*  Copyright (c) 2001 Mike Tsao

    Do whatever you want with this source code. I don't care.
    
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DEFAULT_COMPACT_FLASH_FILE_SIZE (62592 * 512)
#define AUDREY_FLASH_SIZE (16 * 1024 * 1024)
#define IMAGE_SIZE_OFFSET (0x1e8fe00)
#define IMAGE_SIGNATURE 'KOJA'
#define IMAGE_TRAILER_SIZE (0x10)
#define IMAGE_FINAL_FILLER_SIZE (0x1f0)
#define IMAGE_EMPTY_SPACE (AUDREY_FLASH_SIZE + IMAGE_TRAILER_SIZE + IMAGE_FINAL_FILLER_SIZE)

/*
    Flash card larger than 1 gigabyte? I doubt user wanted to do that.
    I am so sure that I'll disallow it.
*/
#define RIDICULOUSLY_LARGE_NUMBER (1000 * 1024 * 1024)

#define TRUE (1==1)
#define FALSE (!TRUE)

typedef unsigned int uint32;

static uint32 get_file_size(FILE *f)
{
    uint32 saved_position = 0;
    uint32 file_size = 0;
    saved_position = (uint32)ftell(f);
    fseek(f, 0, SEEK_END);
    file_size = (uint32)ftell(f);
    fseek(f, (long)saved_position, SEEK_SET);
    return file_size;
}

static char *copy_file_into_memory(char *file_name, uint32 *mem_size)
{
    FILE *f = NULL;
    char *file_buf = NULL;

    *mem_size = 0;

    f = fopen(file_name, "rb");
    if (NULL != f) {
        uint32 file_size = get_file_size(f);
        if (file_size > 0 && file_size <= AUDREY_FLASH_SIZE) {
            file_buf = (char*)malloc(file_size);
            if (NULL != file_buf) {
                uint32 bytes_read = 0;
                bytes_read = fread(file_buf, 1, file_size, f);
                if (bytes_read == file_size) {
                    fprintf(stderr, "Read file of size %d.\n", bytes_read);
                    *mem_size = bytes_read;
                    if (0x01000000 == bytes_read) {
                        fprintf(stderr, "WARNING: This image will overwrite the IPL!\n");
                        fprintf(stderr, "That is OK if your image contains an IPL, but ");
                        fprintf(stderr, "it risks destroying the device permanently.\n");
                        fprintf(stderr, "Please be careful!\n");
                    }
                    if (0x00fc0000 != bytes_read &&
                        0x01000000 != bytes_read) {
                        fprintf(stderr, "WARNING: The input image is a strange size. Be careful!\n");
                    }
                    if (bytes_read < 6 ||
                        !(  0xeb == (unsigned char)file_buf[0] && 
                            0x4c == (unsigned char)file_buf[1] &&
                            0x44 == (unsigned char)file_buf[2] &&
                            0x44 == (unsigned char)file_buf[3] &&
                            0x44 == (unsigned char)file_buf[4] &&
                            0x44 == (unsigned char)file_buf[5])) {
                        fprintf(stderr, "WARNING: The input image does not appear to begin with a ");
                        fprintf(stderr, "Neutrino kernel.\nOdds are high that your Audrey will stop ");
                        fprintf(stderr, "working if you flash this image to it.\n");

                    }
                } else {
                    fprintf(stderr, "Expected %d bytes but got %d instead.\n",
                        file_size,
                        bytes_read);
                    free(file_buf);
                    file_buf = NULL;
                }
            } else {
                fprintf(stderr, "Couldn't allocate %d bytes.\n", file_size);
            }
        } else {
            fprintf(stderr, "File was a weird size: %d.\n", file_size);
        }
        fclose(f);
    } else {
        fprintf(stderr, "Couldn't load file '%s.'\n", file_name);
    }
    return file_buf;
}

static uint32 compute_checksum(char *file_buf, uint32 file_size)
{
    uint32 checksum = 0;
    uint32 *p = (uint32 *)file_buf;
    while (file_size != 0) {
        checksum += *p++;
        file_size -= sizeof(uint32);
    }
    return checksum;
}

static void serialize_uint32(uint32 n, FILE *f)
{
    char c = '\0';
    c = (char)(n);
    fwrite(&c, 1, 1, f);
    c = (char)(n >> 8);
    fwrite(&c, 1, 1, f);
    c = (char)(n >> 16);
    fwrite(&c, 1, 1, f);
    c = (char)(n >> 24);
    fwrite(&c, 1, 1, f);
}

static void fill_empty(uint32 count, int is_flash, FILE *f)
{
    char c = 0;
    if (is_flash) {
        c = (char)(0xff);
    }
    while (0 != count--) {
        fwrite(&c, 1, 1, f);
    }
}

static void print_help(void)
{
    fprintf(stderr, "usage: mkcf afs_file_name afs_output_file_name "
        "[flash_file_size default=%d]\n",
        DEFAULT_COMPACT_FLASH_FILE_SIZE);
}

int main(int argc, char* argv[])
{
    char *ifn = NULL, *ofn = NULL;
    uint32 of_size = DEFAULT_COMPACT_FLASH_FILE_SIZE;
    int result = 1;
    char *file_buf = NULL;
    uint32 file_size = 0;
    
    if (1 == argc) {
        print_help();
        return 0;
    }
    if (argc > 1) {
        if (0 == strcmp(argv[1], "-h") ||
            0 == strncmp(argv[1], "--h", 3)) {
            print_help();
            return 0;
        }
    }
    if (argc < 3) {
        fprintf(stderr, "Missing arguments.\n");
        print_help();
        return 1;
    }

    ifn = argv[1];
    ofn = argv[2];
    if (argc >= 4) {
        of_size = atoi(argv[3]);
        if (0 == of_size || of_size > RIDICULOUSLY_LARGE_NUMBER) {
            fprintf(stderr, "Requested output file size was unreasonable.\n");
            return 1;
        }
    }

    file_buf = copy_file_into_memory(argv[1], &file_size);
    if (NULL != file_buf) {
        FILE *out = NULL;
        uint32 checksum = 0;
        checksum = compute_checksum(file_buf, file_size);
        fprintf(stderr, "File checksum is %8x.\n", checksum);
        out = fopen(argv[2], "wb");
        if (NULL != out) {
            fprintf(stderr, "Creating output file '%s' of size %d...",
                argv[2],
                of_size);
            fwrite(file_buf, 1, file_size, out);
            fill_empty(AUDREY_FLASH_SIZE - file_size, TRUE, out);
            fill_empty(of_size - IMAGE_EMPTY_SPACE, FALSE, out);
            serialize_uint32(file_size, out);
            serialize_uint32(0, out);
            serialize_uint32(IMAGE_SIGNATURE, out);
            serialize_uint32(checksum, out);
            fill_empty(IMAGE_FINAL_FILLER_SIZE, FALSE, out);
            fclose(out);
            fprintf(stderr, "done!\n");
            result = 0;
        } else {
            fprintf(stderr, "Couldn't open output file %s.\n", argv[2]);
        }
        free(file_buf);
    }
    return result;
}
