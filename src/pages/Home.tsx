import * as React from "react";
import SearchBar from "@components/SearchBar";
import ResistorList from "@components/ResistorList";
import AddResistor from "@components/AddResistor";
import ResistorListItem from "@components/ResistorListItem";
import { Resistor } from "@utils/types";
import { format2SIUnits } from "@utils/cals";
import colors from "@utils/resistorColors";

const convertPowerRating = (powerRating: Resistor["powerRating"]) => {
  if (powerRating === 0.25) return "1/4 W";
  if (powerRating === 0.5) return "1/2 W";
  if (powerRating === 1) return "1 W";
  if (powerRating === 2) return "2 W";
};

const chooseColor = (tolerance: number) => {
  let t = colors.tolerance.find((t) => t.value === String(tolerance));
  if (t.eSeries === 6) {
    return `text-gray-700 border border-gray-200 ${t.class}`;
  }
  return `text-white ${t.class}`;
};

let resistorListDef: Resistor[] = [
  { value: 10, powerRating: 0.25, tolerance: 5, quantity: 1 },
  { value: 47, powerRating: 0.5, tolerance: 5, quantity: 10 },
  { value: 100, powerRating: 1, tolerance: 10, quantity: 5 },
  { value: 220, powerRating: 1, tolerance: 5, quantity: 6 },
  { value: 470, powerRating: 0.5, tolerance: 10, quantity: 1 },
  { value: 1000, powerRating: 0.25, tolerance: 20, quantity: 3 },
];

export default function Home() {
  const [resistorList, setResistorList] =
    React.useState<Resistor[]>(resistorListDef);

  const [searchValue, setSearchValue] = React.useState("");

  let searchedResistors: Resistor[] = [];

  if (searchValue.length < 1) {
    searchedResistors = resistorList;
  } else {
    searchedResistors = resistorList.filter((resistor) => {
      const resVal = resistor.value.toString();
      const searchText = searchValue.toLowerCase();
      return resVal.includes(searchText);
    });
  }

  const subtractQuantity = (
    value: number,
    powerRating: number,
    tolerance: number
  ) => {
    let newResistorList: Resistor[] = [];
    resistorList.forEach((resistor) => {
      if (
        resistor.value === value &&
        resistor.powerRating === powerRating &&
        resistor.tolerance === tolerance
      ) {
        if (resistor.quantity > 1) resistor.quantity = resistor.quantity - 1;
        else return;
      }
      newResistorList.push(resistor);
    });
    setResistorList(newResistorList);
  };

  const addQuantity = (
    value: number,
    powerRating: number,
    tolerance: number
  ) => {
    const newResistorList = resistorList.map((resistor) => {
      if (
        resistor.value === value &&
        resistor.powerRating === powerRating &&
        resistor.tolerance === tolerance
      ) {
        resistor.quantity = resistor.quantity + 1;
      }
      return resistor;
    });
    setResistorList(newResistorList);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container p-8 mx-auto">
        <header className="bg-white p-4 flex gap-4 rounded-lg">
          <h1 className="text-xl font-bold text-gray-800">Resistor Track</h1>
          <AddResistor />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </header>
        <main className="py-4">
          <ResistorList>
            {searchedResistors.map(
              ({ value, powerRating, tolerance, quantity }) => (
                <ResistorListItem
                  key={value + tolerance + powerRating + ""}
                  value={format2SIUnits(value)}
                  tolerance={tolerance}
                  className={chooseColor(tolerance)}
                  powerRating={convertPowerRating(powerRating)}
                  quantity={quantity}
                  subtractQuantity={() => {
                    subtractQuantity(value, powerRating, tolerance);
                  }}
                  addQuantity={() => {
                    addQuantity(value, powerRating, tolerance);
                  }}
                />
              )
            )}
          </ResistorList>
        </main>
      </div>
    </div>
  );
}
