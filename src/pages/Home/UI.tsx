import * as React from "react";
import SearchBar from "@components/SearchBar";
import ResistorList from "@components/ResistorList";
import AddResistor from "@components/AddResistor";
import ResistorListItem from "@components/ResistorListItem";
import { format2SIUnits } from "@utils/cals";
import { Resistor } from "@utils/types";
import colors from "@utils/resistorColors";
import { Context } from "./context";

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

const HomeUI = () => {
  const { searchedResistors, subtractQuantity, addQuantity } =
    React.useContext(Context);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container p-8 mx-auto">
        <header className="bg-white p-4 flex gap-4 rounded-lg">
          <h1 className="text-xl font-bold text-gray-800">Resistor Track</h1>
          <AddResistor />
          <SearchBar />
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
};

export default HomeUI;
