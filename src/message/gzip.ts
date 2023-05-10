// @see https://en.wikipedia.org/wiki/Gzip#:~:text=%22gzip%22%20is%20often%20also%20used,and%20the%20operating%20system%20ID.
export const isGzipCompressed = (buf: Buffer): boolean => {
  return buf[0] === 0x1f && buf[1] === 0x8b && buf[2] === 0x08;
};
