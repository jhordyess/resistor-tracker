import * as React from "react";
import UI from "./UI";
import { Context } from "@pages/Home/context";
import { Resistor } from "@utils/types";
import { checkStandardResistor, readResistorValue } from "@utils/calculations";

const toleranceMap: Record<string, Resistor["tolerance"]> = {
  "5": 5,
  "10": 10,
  "20": 20,
};
export const powerRatingMap: Record<string, Resistor["powerRating"]> = {
  "1/4": 0.25,
  "1/2": 0.5,
  "1": 1,
  "2": 2,
};

export interface States {
  firstDigit: string;
  secondDigit: string;
  multiplier: string;
  tolerance: string;
  quantity: string;
  powerRating: string;
}

const defaultStates: States = {
  firstDigit: "-",
  secondDigit: "-",
  multiplier: "-",
  tolerance: "-",
  quantity: "",
  powerRating: "-",
};

export default function AddResistor() {
  const { appendResistor } = React.useContext(Context);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [states, setStates] = React.useState<States>(defaultStates);

  const [value, setVal] = React.useState<number>(0);
  const [msg, setMsg] = React.useState<string>("");
  const [sw, setSw] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setStates(defaultStates);
    setSw(false);
    setMsg("");
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      handleModalClose();
    }
  };

  const setState = (prop: string, value: string) => {
    const sts = { ...states };
    sts[prop] = value;
    setStates(sts);
  };

  const validation = (fun: () => void = undefined) => {
    const {
      firstDigit,
      secondDigit,
      multiplier,
      tolerance,
      powerRating,
      quantity,
    } = states;
    const resp = check();
    setMsg(resp);
    if (resp === "") if (fun) fun();

    function check(): string {
      if (firstDigit === "-") return "First digit is required";

      if (secondDigit === "-") return "Second digit is required";

      if (multiplier === "-") return "Multiplier is required";

      if (tolerance === "-") return "Tolerance is required";

      if (states.quantity === "") return "Quantity is required";

      if (Number(quantity) <= 0) return "Quantity must be greater than 0";

      if (quantity.includes(".")) return "Quantity must be an integer";

      if (states.powerRating === "-") return "Power rating is required";

      return checkStandardResistor(value, states.tolerance);
    }
  };

  const handleAdd = () => {
    setSw(true);
    validation(() => {
      const resistor: Resistor = {
        value,
        quantity: Number(states.quantity),
        tolerance: toleranceMap[states.tolerance],
        powerRating: powerRatingMap[states.powerRating],
      };
      appendResistor(resistor);
      handleModalClose();
    });
  };

  React.useEffect(() => {
    const { firstDigit, secondDigit, multiplier } = states;
    setVal(readResistorValue(firstDigit, secondDigit, multiplier));
  }, [states]);

  React.useEffect(() => {
    if (sw) validation();
  }, [value]);

  return (
    <UI
      states={states}
      setState={setState}
      handleAdd={handleAdd}
      handleOutsideClick={handleOutsideClick}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
      value={value}
      msg={msg}
    />
  );
}
