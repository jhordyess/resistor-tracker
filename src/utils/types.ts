export interface Resistor {
  value: number;
  quantity: number;
  powerRating: 0.25 | 0.5 | 1 | 2;
  tolerance: 1 | 2 | 5 | 10 | 20; // 1%, 2%, 5%, 10%, 20%
}
