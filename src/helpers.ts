export const getPercent = (source: number, target: number): number => {
  return ((target / source) * 100) | 0;
};
export const sum = (accum: number, curr: number) => accum + curr;
