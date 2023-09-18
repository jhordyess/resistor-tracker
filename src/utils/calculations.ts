import { ESeries } from "./types";
import colors from "./resistorColors";

/**

Finds the nearest standard resistor value to a given value in a given resistor E series.
@param value The desired resistance value.
@param E The resistor E series to use.
@returns An array with the nearest standard resistor values to the desired value.
*/
const findAproxStandardResistor = (value: number, E: ESeries): number[] => {
  // Check if the value is valid
  if (value <= 0) {
    return [];
  }
  // Calculate the approximate position of the value in the series
  const posBrute = E * Math.log10(value);

  // Round the position to the nearest integer
  const pos = Math.round(posBrute);

  // Initialize the result array
  const ret = [];

  // Check resistors at suggested position and nearby positions
  const suggested = calculatePos(pos, E);
  if (suggested === value) ret.push(suggested);
  else if (suggested > value) {
    const suggested2 = calculatePos(pos - 1, E);
    if (suggested2 != -1) ret.push(suggested2);
    if (suggested != -1) ret.push(suggested);
  } else if (suggested < value) {
    const suggested2 = calculatePos(pos + 1, E);
    if (suggested != -1) ret.push(suggested);
    if (suggested2 != -1) ret.push(suggested2);
  }

  // Return the result array
  return ret;
};

/**

Calculates the standard resistor value at a given position in a given resistor E series.
@param pos The position of the resistor value to calculate.
@param E The resistor E series to use.
@returns The standard resistor value at the given position, or -1 if the position is invalid.
*/
function calculatePos(pos: number, E: ESeries): number {
  // Check if the position is valid
  if (pos < 0) return -1;
  // Determine if the series is E48 or higher
  // TODO E48 and higher doesn't have support yet
  const bool = E > 24;

  // Calculate the approximate resistor value
  const valueBrute = 10 ** (pos / E);

  // Round the value to the appropriate number of significant digits
  let valueRounded = Number(valueBrute.toPrecision(bool ? 3 : 2));

  // Adjust the value for certain edge cases
  if (!bool && valueRounded > 2.4 && valueRounded < 5.1) {
    valueRounded += 0.1;
    valueRounded = Number(valueRounded.toPrecision(2));
  }
  if (!bool && valueRounded === 8.3) valueRounded = 8.2;
  if (bool && valueRounded === 9.19) {
    valueRounded = 9.2;
  }

  // Return the rounded resistor value
  return valueRounded;
}

const format2SIUnits = (value: number) => {
  const units = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  let unitIndex = 0;
  while (value >= 1000) {
    value /= 1000;
    unitIndex++;
  }
  return `${value} ${units[unitIndex]}Ω`;
};

const readResistorValue = (
  first: string,
  second: string,
  multiply: string
): number => {
  let value = 0;
  try {
    const NMultiply = Number(multiply);

    value = Number(first + second);

    value *= Math.pow(10, NMultiply);
    return value || 0;
  } catch {
    console.info("Error reading resistor value");
    return 0;
  }
};

const readResistorValueInverse = (value: number): [string, string, string] => {
  const digits = value.toString();
  const first = digits.charAt(0);
  const second = digits.charAt(1);
  const NMultiply = Math.floor(Math.log10(value / Number(first + second)));
  const multiply = NMultiply.toString();
  return [first, second, multiply];
};

const checkStandardResistor = (value: number, tolerance: string): string => {
  let msg = "";
  const E = colors.tolerance.find((e) => e.value === tolerance)?.eSeries;
  if (!E) return "Invalid tolerance";
  const aproxRes = findAproxStandardResistor(value, E);
  if (aproxRes.length === 0) msg = "Invalid resistor value";
  if (aproxRes.length === 2 && aproxRes[0] !== value && aproxRes[1] !== value)
    msg =
      "Not a standard resistor, the nearest values are " +
      format2SIUnits(aproxRes[0]) +
      " and " +
      format2SIUnits(aproxRes[1]);
  return msg;
};

export {
  findAproxStandardResistor,
  format2SIUnits,
  readResistorValue,
  checkStandardResistor,
  readResistorValueInverse,
};
