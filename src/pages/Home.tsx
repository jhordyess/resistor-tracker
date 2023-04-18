import * as React from "react";
import SearchBar from "@components/SearchBar";
import ResistorList from "@components/ResistorList";
import AddResistor from "@components/AddResistor";
import ResistorListItem from "@components/ResistorListItem";
import { Resistor } from "@utils/types";
import { format2SIUnits } from "@utils/cals";

const convertPowerRating = (powerRating: number) => {
  if (powerRating === 0.25) return "1/4 W";
  if (powerRating === 0.5) return "1/2 W";
  if (powerRating === 1) return "1 W";
  if (powerRating === 2) return "2 W";
};

const chooseColor = (tolerance: number) => {
  let color = tolerances.find((t) => t.value === tolerance)?.color;
  if (color === "brown") color = "bg-amber-700";
  if (color === "gold") color = "bg-yellow-500";
  if (color === "silver") color = "bg-gray-500";
  if (color === "none") {
    return `text-gray-700 bg-white-200 border border-gray-200`;
  }
  return `text-white ${String(color)}`;
};

let resistorListDef: Resistor[] = [
  { value: 10, powerRating: 0.25, tolerance: 5, quantity: 1 },
  { value: 47, powerRating: 0.5, tolerance: 5, quantity: 10 },
  { value: 100, powerRating: 1, tolerance: 10, quantity: 5 },
  { value: 220, powerRating: 1, tolerance: 5, quantity: 6 },
  { value: 470, powerRating: 0.5, tolerance: 1, quantity: 1 },
  { value: 1000, powerRating: 0.25, tolerance: 20, quantity: 3 },
];

/**
 * Resistor Tolerance List
 * Not included E3 and E192
 */
const tolerances = [
  { value: 1, color: "brown", eSeries: 96 },
  { value: 2, color: "red", eSeries: 48 },
  { value: 5, color: "gold", eSeries: 24 },
  { value: 10, color: "silver", eSeries: 12 },
  { value: 20, color: "none", eSeries: 6 },
];

export default function Home() {
  const [resistorList, setResistorList] = React.useState(resistorListDef);

  const [searchValue, setSearchValue] = React.useState("");

  let searchedResistors = [];

  if (searchValue.length < 1) {
    searchedResistors = resistorList;
  } else {
    searchedResistors = resistorList.filter((resistor) => {
      const resVal = resistor.value.toString();
      const searchText = searchValue.toLowerCase();
      return resVal.includes(searchText);
    });
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container p-8 mx-auto">
        <header className="bg-white p-4">
          <h1 className="text-xl font-bold text-gray-800">Resistor Tracker</h1>
        </header>
        <main className="">
          <h2>My inventory</h2>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <ResistorList>
            {searchedResistors.map((resistor) => (
              <ResistorListItem
                key={
                  resistor.value +
                  resistor.tolerance +
                  resistor.powerRating +
                  ""
                }
                value={format2SIUnits(resistor.value)}
                tolerance={resistor.tolerance}
                className={chooseColor(resistor.tolerance)}
                powerRating={convertPowerRating(resistor.powerRating)}
                quantity={resistor.quantity}
                removeResistor={() => {}}
              />
            ))}
          </ResistorList>
          <AddResistor />
        </main>
      </div>
    </div>
  );
}
