export const isGzipCompressed = (buf: Buffer): boolean => {
  return buf[0] === 0x1f && buf[1] === 0x8b && buf[2] === 0x08;
};
