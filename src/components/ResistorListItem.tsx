import * as React from "react";
import ResistorImage from "./ResistorImage";

export default function ResistorListItem({
  value,
  tolerance,
  className,
  powerRating,
  quantity,
  removeResistor,
}) {
  return (
    <li
      key={value}
      className="flex flex-col border rounded-3xl p-4 bg-white w-full"
    >
      <div className="flex-1 font-bold flex justify-between">
        <div>{value}</div>

        <div className={`px-2 py-1 rounded-full text-xs ${className}`}>
          {tolerance} %
        </div>

        <div className="px-2 py-1 rounded-full text-white bg-green-400 text-xs">
          {powerRating}
        </div>
      </div>

      <div className="flex-1 self-center">
        <ResistorImage value="7173" />
      </div>

      <div className="flex-1 text-gray-700 text-center">
        Quantity: {quantity}
      </div>
    </li>
  );
}
