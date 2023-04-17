import * as React from "react";

interface Resistor {
  value: number;
  quantity: {
    "1/4W"?: number;
    "1/2W"?: number;
    "1W"?: number;
    "2W"?: number;
  };
}

let resistorListIni: Resistor[] = [
  {
    value: 10000,
    quantity: {
      "1/4W": 5,
    },
  },
  {
    value: 220,
    quantity: {
      "1/4W": 25,
      "1/2W": 5,
    },
  },
  {
    value: 1000000,
    quantity: {
      "1/4W": 1,
    },
  },
  {
    value: 470,
    quantity: {
      "1W": 100,
    },
  },
  {
    value: 1000,
    quantity: {
      "2W": 1,
    },
  },
];

const calculateTotalQuantity = (quantity: Resistor["quantity"]) => {
  let totalQuantity = 0;
  for (const key in quantity) {
    totalQuantity += quantity[key];
  }
  return totalQuantity;
};

const format2SIUnits = (value: number) => {
  const units = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  let unitIndex = 0;
  while (value >= 1000) {
    value /= 1000;
    unitIndex++;
  }
  return `${value.toFixed(2)} ${units[unitIndex]}`;
};

export default function ResistorList() {
  const [resistorList, setResistorList] = React.useState<Resistor[]>([]);

  const subtractQuantity = (wattage: string, value: number) => () => {
    const newResistorList = resistorList.map((resistor) => {
      if (resistor.value === value) {
        resistor.quantity[wattage] = resistor.quantity[wattage] - 1;
      }
      return resistor;
    });
    setResistorList(newResistorList);
  };

  const addQuantity = (wattage: string, value: number) => () => {
    const newResistorList = resistorList.map((resistor) => {
      if (resistor.value === value) {
        resistor.quantity[wattage] = resistor.quantity[wattage] + 1;
      }
      return resistor;
    });
    setResistorList(newResistorList);
  };

  const removeWattage = (wattage: string, value: number) => () => {
    const newResistorList = resistorList.map((resistor) => {
      if (resistor.value === value) {
        const array = Object.entries(resistor.quantity);
        const newQuantity = array.filter(([key]) => key !== wattage);
        return {
          ...resistor,
          quantity: Object.fromEntries(newQuantity),
        };
      }
      return resistor;
    });
    setResistorList(newResistorList);
  };

  const removeResistor = (value: number) => () => {
    const newResistorList = resistorList.filter(
      (resistor) => resistor.value !== value
    );
    setResistorList(newResistorList);
  };

  React.useEffect(() => {
    setResistorList(resistorListIni);
  }, []);

  return (
    <div>
      Resistor List
      <ul className="">
        {resistorList.map((resistor) => (
          <li
            key={resistor.value}
            className="flex flex-col mt-3 mb-3 border rounded-3xl p-2s"
          >
            <div className="flex-1 flex items-center border-b-2">
              <div className="w-1/3">imagen</div>

              <div className="w-1/3 flex flex-col">
                <div className="flex-1">
                  <p>{format2SIUnits(resistor.value)}&Omega;</p>
                  <p>
                    Quantity:&nbsp; {calculateTotalQuantity(resistor.quantity)}
                  </p>
                </div>
              </div>

              <div className="w-1/3">
                <button onClick={removeResistor(resistor.value)}>x</button>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1">
                {Object.entries(resistor.quantity).map(
                  ([wattage, quantity]) => (
                    <div key={wattage} className="flex mt-2 mb-2">
                      <div className="w-1/2">
                        {wattage} {quantity}
                      </div>
                      <div className="w-1/2 flex gap-1">
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded-full"
                          onClick={addQuantity(wattage, resistor.value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 4v6h6a1 1 0 0 1 0 2H10v6a1 1 0 1 1-2 0v-6H2a1 1 0 1 1 0-2h6V4a1 1 0 0 1 2 0z"
                            />
                          </svg>
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full"
                          onClick={subtractQuantity(wattage, resistor.value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z"
                            />
                          </svg>
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded-full"
                          onClick={removeWattage(wattage, resistor.value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.717 10L19 3.717 16.283 1 10 7.283 3.717 1 1 3.717 7.283 10 1 16.283 3.717 19 10 12.717 16.283 19 19 16.283 12.717 10z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
