import { type Resistor } from "@/utils/types";

export const toleranceMap: Record<string, Resistor["tolerance"]> = {
  "5": 5,
  "10": 10,
  "20": 20,
};

export const powerRatingMap: Record<string, Resistor["powerRating"]> = {
  "1/4": 0.25,
  "1/2": 0.5,
  "1": 1,
  "2": 2,
};

export interface States {
  firstDigit: string;
  secondDigit: string;
  multiplier: string;
  tolerance: string;
  quantity: string;
  powerRating: string;
}

export const defaultStates: States = {
  firstDigit: "-",
  secondDigit: "-",
  multiplier: "-",
  tolerance: "-",
  quantity: "",
  powerRating: "-",
};
