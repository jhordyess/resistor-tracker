import UI from "./UI";
import { Context } from "@/pages/Home/context";
import { Resistor } from "@/utils/types";
import { checkStandardResistor, readResistorValue } from "@/utils/calculations";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  toleranceMap,
  powerRatingMap,
  type States,
  defaultStates,
} from "./constants";

export default function AddResistor() {
  const { appendResistor } = useContext(Context);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [states, setStates] = useState<States>(defaultStates);

  const [value, setVal] = useState<number>(0);
  const [msg, setMsg] = useState<string>("");
  const [sw, setSw] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setStates(defaultStates);
    setSw(false);
    setMsg("");
  };

  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLDivElement).id === "modal-background") {
      handleModalClose();
    }
  };

  const setState = (prop: string, value: string) => {
    setStates((prevStates) => ({ ...prevStates, [prop]: value }));
  };

  const validation = useCallback(
    (fun: () => void = () => {}) => {
      const {
        firstDigit,
        secondDigit,
        multiplier,
        tolerance,
        // powerRating,
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
    },
    [states, value]
  );

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

  useEffect(() => {
    const { firstDigit, secondDigit, multiplier } = states;
    setVal(readResistorValue(firstDigit, secondDigit, multiplier));
  }, [states]);

  useEffect(() => {
    if (sw) validation();
  }, [value, validation, sw]);

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
