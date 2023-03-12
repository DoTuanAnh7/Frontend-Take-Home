export const fixedNumber = (number, digits = 2) => {
  return number.toFixed(2);
};
export const formatQty = number => {
  if (number % 1000000000 === 0) {
    return new Intl.NumberFormat().format(number / 1000000000) + 'B';
  }
  if (number % 1000000 === 0) {
    return new Intl.NumberFormat().format(number / 1000000) + 'T';
  }
  if (number % 1000 === 0) {
    return new Intl.NumberFormat().format(number / 1000) + 'K';
  }
  return number;
};
