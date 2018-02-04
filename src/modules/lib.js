export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

function plusSeven(x) {
  return x + 7;
}

function timesTwo(x) {
  return x * 2;
}

export function plusSevenTimesTwo(x) {
  x = plusSeven(x);
  x = timesTwo(x);
  return x;
}
