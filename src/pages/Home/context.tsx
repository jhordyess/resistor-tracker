import { useSemiPersistentState } from "@/utils/hooks";
import { Resistor } from "@/utils/types";
import { createContext } from "react";

const Context = createContext<{
  searchedResistors: Resistor[];
  subtractQuantity: (
    value: number,
    powerRating: number,
    tolerance: number
  ) => void;
  addQuantity: (value: number, powerRating: number, tolerance: number) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  appendResistor: (resistor: Resistor) => void;
}>({
  searchedResistors: [],
  subtractQuantity: () => {},
  addQuantity: () => {},
  searchValue: "",
  setSearchValue: () => {},
  appendResistor: () => {},
});

const resistorListDef: Resistor[] = [
  { value: 10, powerRating: 0.25, tolerance: 5, quantity: 1 },
  { value: 47, powerRating: 0.5, tolerance: 5, quantity: 10 },
  { value: 100, powerRating: 1, tolerance: 10, quantity: 5 },
  { value: 220, powerRating: 1, tolerance: 5, quantity: 6 },
  { value: 470, powerRating: 0.5, tolerance: 10, quantity: 1 },
  { value: 1000, powerRating: 0.25, tolerance: 20, quantity: 3 },
];

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [resistorList, setResistorList] = useSemiPersistentState<Resistor[]>(
    "resistorList",
    resistorListDef
  );

  const [searchValue, setSearchValue] = useSemiPersistentState<string>(
    "searchValue",
    ""
  );

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
    const newResistorList: Resistor[] = [];
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

  const appendResistor = (resistor: Resistor) => {
    // check if resistor already exist with value, powerRating and tolerance, if so, add quantity
    const resistorExists = resistorList.find((res) => {
      return (
        res.value === resistor.value &&
        res.powerRating === resistor.powerRating &&
        res.tolerance === resistor.tolerance
      );
    });
    if (resistorExists) {
      const newResistorList = resistorList.map((res) => {
        if (
          res.value === resistor.value &&
          res.powerRating === resistor.powerRating &&
          res.tolerance === resistor.tolerance
        ) {
          res.quantity = res.quantity + resistor.quantity;
        }
        return res;
      });
      window.alert("Resistor already exists, quantity added");
      setResistorList(newResistorList);
      return;
    }
    const newResistorList = [...resistorList, resistor];
    setResistorList(newResistorList);
  };

  return (
    <Context.Provider
      value={{
        searchedResistors,
        subtractQuantity,
        addQuantity,
        searchValue,
        setSearchValue,
        appendResistor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, Provider };
