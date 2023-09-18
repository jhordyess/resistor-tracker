import { useContext } from "react";
import SearchBar from "@/components/SearchBar";
import ResistorList from "@/components/ResistorList";
import AddResistor from "@/components/AddResistor";
import ResistorListItem from "@/components/ResistorListItem";
import colors from "@/utils/resistorColors";
import { Context } from "./context";

const chooseColor = (tolerance: number) => {
  const t = colors.tolerance.find((t) => t.value === String(tolerance));
  if (t?.eSeries === 6) {
    return `text-gray-700 border border-gray-200 ${t.className}`;
  }
  return `text-white ${t?.className}`;
};

const HomeUI = () => {
  const { searchedResistors, subtractQuantity, addQuantity } =
    useContext(Context);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <header className="flex flex-col justify-between gap-2 rounded-lg bg-white p-4 sm:flex-row">
          <div className="flex gap-4">
            <h1 className="self-center text-xl font-bold text-gray-800">
              Resistor Track
            </h1>
            <AddResistor />
          </div>
          <div>
            <SearchBar />
          </div>
        </header>
        <main className="py-4">
          <ResistorList>
            {searchedResistors.map(
              ({ value, powerRating, tolerance, quantity }) => (
                <ResistorListItem
                  key={value + tolerance + powerRating + ""}
                  value={value}
                  tolerance={tolerance}
                  className={chooseColor(tolerance)}
                  powerRating={powerRating}
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
        <footer className="mt-8 text-center">
          Made with 💪 by&nbsp;
          <a
            className="text-blue-600 hover:text-blue-400"
            href="https://www.jhordyess.com"
            target="_blank"
          >
            Jhordyess
          </a>
          <br />
          <a
            href="https://github.com/jhordyess/resistor-tracker"
            target="_blank"
            className="text-blue-600 hover:text-blue-400"
          >
            👉 View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};

export default HomeUI;
