#include <sys/types.h>
#include <sys/stat.h>
#if defined(_WIN32)
#include <io.h>
#endif
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define COPY_BUFFER_SIZE (256)
#define QNX_MAX_FILENAME_SIZE (47)

#if defined(_WIN32)
#define	S_IRWXU	(S_IREAD | S_IREAD | S_IREAD)
#define	S_IRWXG	(0)
#define	S_IRWXO	(0)
#endif

char *result_string = "General error";

static void make_executable(char *file_name)
{
    chmod(file_name, S_IRWXU + S_IRWXG + S_IRWXO);
}

static int accept_file(char *file_name, int content_length)
{
    int result = 0;
    FILE *f = fopen(file_name, "wb");
    if (NULL != f) {
        char *p = (char*)malloc(COPY_BUFFER_SIZE);
        if (NULL != p) {
            do {
                int bytes_to_handle = 1;
                bytes_to_handle = (EOF != getchar()) ? 1 : 0;
                if (bytes_to_handle > 0) {
                    fwrite(p, 1, bytes_to_handle, f);
                    content_length -= bytes_to_handle;
                }
            } while (content_length > 0);
            free(p);
            result = 1;
            result_string = "Successfully wrote file.";
        } else {
            result_string = "Couldn't allocate buffer.";
        }
        fclose(f);
        make_executable(file_name);
    } else {
        result_string = "Couldn't create file.";
    }
    return result;
}

int main(void)
{
    int success = 0;
    char *file_name = NULL;
    int file_name_size = 0;
    char *content_length_str = NULL;
    int content_length = 0;

    printf("Content-Type:text/html\r\n\r\n");
    printf("<html><head><title>Upload</title></head><body>\r\n");

    content_length_str = getenv("CONTENT_LENGTH");
    if (NULL != content_length_str) {
        content_length = atoi(content_length_str);
    } else {
        printf("<p>No content sent.</p>");
    }

    file_name = getenv("QUERY_STRING");
    if (NULL != file_name) {
        file_name_size = strlen(file_name);
    }

    if (file_name_size > 0 && file_name_size < QNX_MAX_FILENAME_SIZE) {
        if (content_length > 0 && content_length < 1024 * 1024) {
            success = accept_file(file_name, content_length);
        } else {
            printf("<p>File size no good (min 1 byte, max 1MB).</p>");
        }
    } else {
        printf("<p>Filename size no good.</p>");
        if (0 == file_name_size) {
            file_name = NULL;
        }
    }

    if (0 != content_length) {
        printf("<p>File %s size %ld.</p>",
            (NULL != file_name) ? file_name : "[none]",
            content_length);
        printf("<p><b>Result: %s.</b></p>", result_string);
    }

/*
    If I either write a MIME parser or figure out where an existing shared
    library is, then I'll be able to use this and get rid of my icky post tool.

    printf("<p><form method=POST enctype=multipart/form-data ");
    printf("action=upload>File: <input type=file name=filedata><br>");
    printf("Destination Name: <input type=text name=filename>");
    printf("<input type=submit value=Upload></form>");
*/

    printf("</body></html>");
    return 0;
}
