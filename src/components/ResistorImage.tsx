import * as React from "react";

const Resistor = ({ value, width = 192, height = 80, powerRating = 0 }) => {
  const xPadding = 10;
  const terminalLength = 10;
  const bandWidth = 6;

  const sepXBand = 5;
  const resistorWidth = 4 * (bandWidth + sepXBand) + sepXBand;

  const firstBand = xPadding + terminalLength + sepXBand;
  const secondBand = firstBand + bandWidth + sepXBand;
  const thirdBand = secondBand + bandWidth + sepXBand;
  const fourthBand = thirdBand + bandWidth + sepXBand;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="#F0F0F0" />

      <rect
        x={`${terminalLength + xPadding}%`}
        y="30%"
        width={`${resistorWidth}%`}
        height="50%" // usado para power rating
        rx="5"
        ry="5"
        fill="#D3D3D3"
      />

      <rect
        x={`${firstBand}%`}
        y="30%"
        width={`${bandWidth}%`}
        height="40%"
        fill="#0000FF"
      />
      <rect
        x={`${secondBand}%`}
        y="30%"
        width={`${bandWidth}%`}
        height="40%"
        fill="#008000"
      />
      <rect
        x={`${thirdBand}%`}
        y="30%"
        width={`${bandWidth}%`}
        height="40%"
        fill="#FFD700"
      />
      <rect
        x={`${fourthBand}%`}
        y="30%"
        width={`${bandWidth}%`}
        height="40%"
        fill="#8B0000"
      />

      <line
        x1={`${xPadding}%`}
        y1="50%"
        x2={`${terminalLength + xPadding}%`}
        y2="50%"
        stroke="#808080"
        stroke-width="3"
      />
      <line
        x1={`${resistorWidth + terminalLength + xPadding}%`}
        y1="50%"
        x2={`${100 - resistorWidth + terminalLength + xPadding}%`}
        y2="50%"
        stroke="#808080"
        stroke-width="3"
      />
    </svg>
  );
};

export default Resistor;
