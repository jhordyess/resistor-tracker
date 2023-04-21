import * as React from "react";
import colors from "@utils/resistorColors";
import { Resistor } from "@utils/types";

const Resistor = ({
  value = ["1", "2", "3", "10"],
  powerRating = 0.5,
  width = 192,
  height = 80,
  bandWidth = 12,
}: {
  value?: string[];
  width?: number;
  height?: number;
  bandWidth?: number;
  powerRating?: Resistor["powerRating"];
}) => {
  const power2Width = Math.abs(powerRating - 1) * 5;
  const power2Height = 1 / powerRating;

  const xPadding = 0 + power2Width;
  const yPadding = 20 + power2Height;

  const terminalLength = width / 8;

  const blockWidth = width / 6;
  const blockHeight = height - 2 * yPadding;

  const factor = blockHeight / 5;

  // const bandWidth = 12;
  const bandHeight = blockHeight - factor;
  const sepXBand = 10;

  const block1 = {
    x: xPadding + terminalLength,
    width: blockWidth,
    y: yPadding,
    height: blockHeight,
  };

  const resistor = {
    x: block1.x + blockWidth,
    width: width - 2 * xPadding - 2 * terminalLength - 2 * blockWidth,
    y: block1.y + factor / 2,
    height: bandHeight,
  };

  const block2 = {
    x: resistor.x + resistor.width,
    width: blockWidth,
    y: block1.y,
    height: blockHeight,
  };

  const [terminal1, terminal2] = [
    { x1: xPadding, x2: xPadding + terminalLength },
    {
      x1: width - xPadding,
      x2: width - xPadding - terminalLength,
    },
  ];

  const firstBand = {
    x: resistor.x + sepXBand,
    width: bandWidth,
    y: resistor.y,
    height: resistor.height,
    fill:
      colors.color1.find((color) => color.value === value[0])?.hexColor ||
      "#D3D3D3",
  };

  const secondBand = {
    x: firstBand.x + bandWidth + sepXBand,
    width: bandWidth,
    y: resistor.y,
    height: resistor.height,
    fill:
      colors.color2.find((color) => color.value === value[1])?.hexColor ||
      "#D3D3D3",
  };

  const thirdBand = {
    x: secondBand.x + bandWidth + sepXBand,
    width: bandWidth,
    y: resistor.y,
    height: resistor.height,
    fill:
      colors.multiply.find((color) => color.value === value[2])?.hexColor ||
      "#D3D3D3",
  };

  const fourthBand = {
    x: width - xPadding - terminalLength - sepXBand - bandWidth,
    width: bandWidth,
    y: block1.y,
    height: block1.height,
    fill:
      colors.tolerance.find((color) => color.value === value[3])?.hexColor ||
      "#D3D3D3",
  };

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {/* Blocks */}
      <rect
        x={block1.x}
        width={block1.width}
        y={block1.y}
        height={block1.height}
        rx="5"
        ry="5"
        fill="#D3D3D3"
      />
      <rect
        x={block2.x}
        width={block2.width}
        y={block2.y}
        height={block2.height}
        rx="5"
        ry="5"
        fill="#D3D3D3"
      />

      {/* Resistor element */}
      <rect
        x={resistor.x}
        width={resistor.width}
        y={resistor.y}
        height={resistor.height}
        fill="#D3D3D3"
      />

      {/* 4 bands */}
      <rect
        x={firstBand.x}
        width={firstBand.width}
        y={firstBand.y}
        height={firstBand.height}
        fill={firstBand.fill}
      />
      <rect
        x={secondBand.x}
        width={secondBand.width}
        y={secondBand.y}
        height={secondBand.height}
        fill={secondBand.fill}
      />
      <rect
        x={thirdBand.x}
        width={thirdBand.width}
        y={thirdBand.y}
        height={thirdBand.height}
        fill={thirdBand.fill}
      />
      <rect
        x={fourthBand.x}
        width={fourthBand.width}
        y={fourthBand.y}
        height={fourthBand.height}
        fill={fourthBand.fill}
      />

      {/* Terminals */}
      <line
        x1={terminal1.x1}
        x2={terminal1.x2}
        y1="50%"
        y2="50%"
        stroke="#808080"
        strokeWidth="3"
      />
      <line
        x1={terminal2.x1}
        x2={terminal2.x2}
        y1="50%"
        y2="50%"
        stroke="#808080"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Resistor;
