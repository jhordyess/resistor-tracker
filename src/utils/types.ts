export interface Resistor {
  value: number;
  quantity: number;
  powerRating: 0.25 | 0.5 | 1 | 2;
  tolerance: 5 | 10 | 20; // 5%, 10%, 20%
}
export type ESeries = 6 | 12 | 24;
