import * as React from "react";
import ResistorImage from "./ResistorImage";
import { format2SIUnits, readResistorValueInverse } from "@utils/calculations";
import { Resistor } from "@utils/types";

const convertPowerRating = (powerRating: Resistor["powerRating"]) => {
  if (powerRating === 0.25) return "1/4 W";
  if (powerRating === 0.5) return "1/2 W";
  if (powerRating === 1) return "1 W";
  if (powerRating === 2) return "2 W";
};

export default function ResistorListItem({
  value,
  tolerance,
  className,
  powerRating,
  quantity,
  addQuantity,
  subtractQuantity,
}) {
  return (
    <li
      key={value}
      className="flex flex-col border rounded-3xl p-4 bg-white w-full"
    >
      <div className="flex-1 font-bold flex justify-between">
        <div>{format2SIUnits(value)}</div>

        <div className={`px-2 py-1 rounded-full text-xs ${className}`}>
          {tolerance} %
        </div>

        <div className="px-2 py-1 rounded-full text-white bg-green-400 text-xs">
          {convertPowerRating(powerRating)}
        </div>
      </div>

      <div className="flex-1 self-center py-2">
        <ResistorImage
          value={[...readResistorValueInverse(value), String(tolerance)]}
          powerRating={powerRating}
        />
      </div>

      <div className="flex-1 text-gray-700 flex gap-3 justify-center align-middle">
        <div className="self-center">Quantity</div>
        <div className="rounded-full border flex gap-3 justify-evenly">
          <button
            className="hover:bg-gray-50 text-black font-bold p-2 rounded-full"
            onClick={subtractQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M16 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z"
              />
            </svg>
          </button>
          <div className="self-center">{quantity}</div>
          <button
            className="hover:bg-gray-50 text-black font-bold p-2 rounded-full"
            onClick={addQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M9 2a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V2z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
