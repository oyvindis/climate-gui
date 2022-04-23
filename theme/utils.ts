export const valueToHex = (value?: number): string => {
  if (typeof value !== 'number') {
    return '';
  }

  if (value < 0) {
    return '00';
  }

  if (value > 100) {
    return 'ff';
  }

  return (Math.round((value / 100) * 255) + 0x10000)
    .toString(16)
    .substr(-2)
    .toLowerCase();
};
