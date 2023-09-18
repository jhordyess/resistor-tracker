import ResistorImage from "./ResistorImage";
import { format2SIUnits, readResistorValueInverse } from "@/utils/calculations";
import { Resistor } from "@/utils/types";

const convertPowerRating = (powerRating: Resistor["powerRating"]) => {
  if (powerRating === 0.25) return "1/4 W";
  if (powerRating === 0.5) return "1/2 W";
  if (powerRating === 1) return "1 W";
  if (powerRating === 2) return "2 W";
  else return "";
};

export default function ResistorListItem({
  value,
  tolerance,
  className,
  powerRating,
  quantity,
  addQuantity,
  subtractQuantity,
}: {
  value: number;
  tolerance: number;
  className: string;
  powerRating: Resistor["powerRating"];
  quantity: number;
  addQuantity: () => void;
  subtractQuantity: () => void;
}) {
  return (
    <li
      key={value}
      className="flex w-full flex-col rounded-3xl border bg-white p-4"
    >
      <div className="flex flex-1 justify-between font-bold">
        <div>{format2SIUnits(value)}</div>

        <div className={`rounded-full px-2 py-1 text-xs ${className}`}>
          {tolerance} %
        </div>

        <div className="rounded-full bg-green-400 px-2 py-1 text-xs text-white">
          {convertPowerRating(powerRating)}
        </div>
      </div>

      <div className="flex-1 self-center py-2">
        <ResistorImage
          value={[...readResistorValueInverse(value), String(tolerance)]}
          powerRating={powerRating}
        />
      </div>

      <div className="flex flex-1 justify-center gap-3 align-middle text-gray-700">
        <div className="self-center">Quantity</div>
        <div className="flex justify-evenly gap-3 rounded-full border">
          <button
            className="rounded-full p-2 font-bold text-black hover:bg-gray-50"
            onClick={subtractQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path
                fillRule="evenodd"
                d="M16 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z"
              />
            </svg>
          </button>
          <div className="self-center">{quantity}</div>
          <button
            className="rounded-full p-2 font-bold text-black hover:bg-gray-50"
            onClick={addQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path d="M9 2a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V2z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
