/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char *buf4);
 */

/**
 * @param buf Destination buffer
 * @param n   Number of characters to read
 * @return    The number of actual characters read
 */
int _read(char* buf, int n) {
    int fp = 0;
    int n_read;
    int i;

    char temp[4];

    while (true) {
        n_read = read4(temp);
        if (n_read == 0) break;
        for (i = 0; i < n_read; i++) {
            buf[fp++] = temp[i];
            if (fp == n) return fp;
        }
    }

    return fp;
}
