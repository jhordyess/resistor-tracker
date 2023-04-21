import { ESeries } from "./types";

interface Color {
  value: string;
  text: string;
  className: string;
  hexColor: string;
  eSeries?: ESeries;
}

interface Colors {
  color1: Color[];
  color2: Color[];
  multiply: Color[];
  tolerance: Color[];
}

const colors: Colors = {
  color1: [
    {
      value: "1",
      text: "1 Brown",
      className: "bg-amber-700",
      hexColor: "#964B00",
    },
    { value: "2", text: "2 Red", className: "bg-red-500", hexColor: "#FF0000" },
    {
      value: "3",
      text: "3 Orange",
      className: "bg-orange-400",
      hexColor: "#FFA500",
    },
    {
      value: "4",
      text: "4 Yellow",
      className: "bg-yellow-300",
      hexColor: "#FFFF00",
    },
    {
      value: "5",
      text: "5 Green",
      className: "bg-green-500",
      hexColor: "#008000",
    },
    {
      value: "6",
      text: "6 Blue",
      className: "bg-blue-500",
      hexColor: "#0000FF",
    },
    {
      value: "7",
      text: "7 Violet",
      className: "bg-violet-500",
      hexColor: "#800080",
    },
    {
      value: "8",
      text: "8 Gray",
      className: "bg-gray-400",
      hexColor: "#808080",
    },
    { value: "9", text: "9 White", className: "bg-white", hexColor: "#FFFFFF" },
  ],
  color2: [
    { value: "0", text: "0 Black", className: "bg-black", hexColor: "#000000" },
    {
      value: "1",
      text: "1 Brown",
      className: "bg-amber-700",
      hexColor: "#964B00",
    },
    {
      value: "2",
      text: "2 Red",
      className: "bg-red-500",

      hexColor: "#FF0000",
    },
    {
      value: "3",
      text: "3 Orange",
      className: "bg-orange-400",
      hexColor: "#FFA500",
    },
    {
      value: "4",
      text: "4 Yellow",
      className: "bg-yellow-300",
      hexColor: "#FFFF00",
    },
    {
      value: "5",
      text: "5 Green",
      className: "bg-green-500",
      hexColor: "#008000",
    },
    {
      value: "6",
      text: "6 Blue",
      className: "bg-blue-500",
      hexColor: "#0000FF",
    },
    {
      value: "7",
      text: "7 Violet",
      className: "bg-violet-500",
      hexColor: "#800080",
    },
    {
      value: "8",
      text: "8 Gray",
      className: "bg-gray-400",
      hexColor: "#808080",
    },
    { value: "9", text: "9 White", className: "bg-white", hexColor: "#FFFFFF" },
  ],
  multiply: [
    {
      value: "0",
      text: "×1 Black",
      className: "bg-black",
      hexColor: "#000000",
    },
    {
      value: "1",
      text: "×10 Brown",
      className: "bg-amber-700",
      hexColor: "#964B00",
    },
    {
      value: "2",
      text: "×100 Red",
      className: "bg-red-500",
      hexColor: "#FF0000",
    },
    {
      value: "3",
      text: "×1k Orange",
      className: "bg-orange-400",
      hexColor: "#FFA500",
    },
    {
      value: "4",
      text: "×10k Yellow",
      className: "bg-yellow-300",
      hexColor: "#FFFF00",
    },
    {
      value: "5",
      text: "×100k Green",
      className: "bg-green-500",
      hexColor: "#008000",
    },
    {
      value: "6",
      text: "×1M Blue",
      className: "bg-blue-500",
      hexColor: "#0000FF",
    },
    {
      value: "7",
      text: "×10M Violet",
      className: "bg-violet-500",
      hexColor: "#800080",
    },
    {
      value: "8",
      text: "×100M Gray",
      className: "bg-gray-400",
      hexColor: "#808080",
    },
    {
      value: "9",
      text: "×1G White",
      className: "bg-white",
      hexColor: "#FFFFFF",
    },
    //TODO Does ÷10 and ÷100 exists in 4 Band Resistor 🤔
    // {
    //   value: "-1",
    //   text: "÷10 Gold",
    //   className: "bg-yellow-500",
    //   hexColor: "#FFC107",
    // },
    // {
    //   value: "-2",
    //   text: "÷100 Silver",
    //   className: "bg-gray-500",
    //   hexColor: "#607D8B",
    // },
  ],
  tolerance: [
    {
      value: "5",
      text: "± 5% Gold",
      className: "bg-yellow-500",
      hexColor: "#FFC107",
      eSeries: 24,
    },
    {
      value: "10",
      text: "± 10% Silver",
      className: "bg-gray-500",
      hexColor: "#607D8B",
      eSeries: 12,
    },
    {
      value: "20",
      text: "± 20% None",
      className: "bg-white",
      hexColor: "#FFFFFF",
      eSeries: 6,
    },
  ],
};

export default colors;
