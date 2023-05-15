/**
 * gzip files contain a 10-byte header, containing a:
 * - magic number (1f 8b)
 * - the compression method (08 for DEFLATE)
 * - 1-byte of header flags, a 4-byte timestamp, compression flags and the operating system ID.
 *
 * @see https://en.wikipedia.org/wiki/Gzip#File_format
 */
export const isGzipCompressed = (buf: Buffer): boolean => {
  return buf[0] === 0x1f && buf[1] === 0x8b && buf[2] === 0x08;
};
