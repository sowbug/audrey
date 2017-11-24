#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#if defined(_WIN32)
#include <winsock.h>
#else
#define TRUE (1==1)
#define FALSE (!TRUE)
#endif

#define RIDICULOUSLY_LARGE_SIZE (1024 * 1024)

typedef unsigned int uint32;

char *file_buf = NULL;

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
        if (file_size > 0 && file_size <= RIDICULOUSLY_LARGE_SIZE) {
            file_buf = (char*)malloc(file_size);
            if (NULL != file_buf) {
                uint32 bytes_read = 0;
                bytes_read = fread(file_buf, 1, file_size, f);
                if (bytes_read == file_size) {
                    fprintf(stderr, "Read file of size %d.\n", bytes_read);
                    *mem_size = bytes_read;
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

void print_help(void)
{
    printf("usage: postfile localfile remote_IP remote_filename \n");
}

static void init_socketlib(void)
{
    WSADATA wsaData;
#if defined(_WIN32)
    WSAStartup(MAKEWORD(1,1), &wsaData);
#endif
}

static void term_socketlib(void)
{
#if defined(_WIN32)
    WSACleanup();
#endif
}

static void send_file(SOCKET s, char *p, int n)
{
    printf("Sending %d bytes", n);
    while (n > 0) {
        int b = n;
        b = send(s, p, b, 0);
        if (b > 0) {
            printf(".");
            n -= b;
            p += b;
        }
    }
    printf(" done.\n");
}

static void read_response(SOCKET s)
{
    do {
        char c = '\0';
        int r = recv(s, &c, 1, 0);
        if (0 == r) {
            printf("\n");
            return;
        }
        if (1 == r) {
            printf("%c", c);
            continue;
        }
        return;
    } while (1);
}

#define POST_HEADER "POST /cgi-bin/upload?%s HTTP/1.0\r\nContent-Type: application/octet-stream\r\nContent-Length: %d\r\n\r\n"
static void post_file(char *file_buf,
                      int file_size,
                      char *ip,
                      char *remote_filename)
{
    struct sockaddr_in name;
    struct in_addr addr;
    SOCKET s;
    int r;

    init_socketlib();

    s = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

    name.sin_family = AF_INET;
    name.sin_port = htons(80);
    addr.S_un.S_addr = inet_addr(ip);
    name.sin_addr = addr;

    r = connect(s, (struct sockaddr*)&name, sizeof(struct sockaddr_in));
    if (0 == r) {
        char *post_header = (char*)malloc(1024 + strlen(remote_filename));

        sprintf(post_header,
            POST_HEADER,
            remote_filename,
            file_size);
        printf("Sending this header:\n\n---\n%s\n---\n\n", post_header);
        send(s, post_header, strlen(post_header), 0);
        free(post_header);

        printf("Sending file of size %d.\n", file_size);
        send_file(s, file_buf, file_size);

        {
            char c = '\0';
            int nn = 10000;
            while (nn--) {
                send(s, &c, 1, 0);
            };
        }

        printf("\n\nWaiting for response from server...\r\n");
        read_response(s);
        closesocket(s);
        printf("Done.\n");
    }

    term_socketlib();
}

int main(int argc, char *argv[])
{
    if (4 != argc) {
        print_help();
        return 1;
    } else {
        int file_size = 0;
        file_buf = copy_file_into_memory(argv[1], &file_size);
        if (NULL != file_buf) {
            post_file(file_buf, file_size, argv[2], argv[3]);
            free(file_buf);
        } else {
            fprintf(stderr, "Couldn't read file.\n");
            return 1;
        }
        return 0;
    }
}

