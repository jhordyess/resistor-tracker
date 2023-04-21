import * as React from "react";
import colors from "@utils/resistorColors";
import { Resistor } from "@utils/types";
import { createPortal as teleport } from "react-dom";
import ResistorImg from "@components/ResistorListItem/ResistorImage";
import { format2SIUnits } from "@utils/calculations";
import { States, powerRatingMap } from ".";

const fourBand = [
  {
    name: "firstDigit",
    label: "1st Digit",
    options: colors.color1,
  },

  {
    name: "secondDigit",
    label: "2nd Digit",
    options: colors.color2,
  },
  {
    name: "multiplier",
    label: "Multiplier",
    options: colors.multiply,
  },
  {
    name: "tolerance",
    label: "Tolerance",
    options: colors.tolerance,
  },
];

interface ModalProps {
  handleModalClose: () => void;
  handleAdd: () => void;
  states: States;
  setState: (prop: string, value: string) => void;
  value: number;
  msg: string;
}

const Modal = ({
  handleModalClose,
  handleAdd,
  states,
  setState,
  value,
  msg,
}: ModalProps) => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div
      className="fixed inset-0 bg-black opacity-50"
      id="modal-background"
    ></div>

    <div className="bg-white rounded-lg shadow-lg z-10 p-4 h-screen sm:h-auto overflow-y-scroll sm:overflow-y-auto">
      <h2 className="text-xl font-bold mb-2">Add new resistor</h2>
      <div className="flex flex-col items-center">
        <p className="text-black">{format2SIUnits(value)}</p>
        <ResistorImg
          value={[
            states.firstDigit,
            states.secondDigit,
            states.multiplier,
            states.tolerance,
          ]}
          height={100}
          width={300}
          bandWidth={24}
          powerRating={powerRatingMap[states.powerRating]}
        />
      </div>
      <div className="text-gray-700 mb-4 grid grid-cols-1   sm:grid-cols-2 md:grid-cols-4 gap-3">
        {fourBand.map(({ name, label, options }, index) => (
          <div className="flex flex-col" key={index}>
            <label htmlFor={name}>{label}</label>
            <select
              name={name}
              value={states[name]}
              onChange={(e) => {
                setState(name, e.target.value);
              }}
              className="p-2 rounded w-full sm:w-40 border"
            >
              <option value="-" disabled>
                -
              </option>
              {options.map(({ value, text, className, eSeries }, index) => (
                <option
                  value={value}
                  key={index + "" + value}
                  className={
                    className +
                    " " +
                    (value === "4" ||
                    value === "9" ||
                    value === "-1" ||
                    value === "-2" ||
                    eSeries
                      ? "text-black"
                      : "text-white")
                  }
                >
                  {text}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="text-gray-700 mb-4 grid grid-cols-1 sm:flex gap-3 sm:justify-center">
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="p-2 rounded w-full sm:w-40 border"
            min={1}
            step={1}
            value={states.quantity}
            onChange={(e) => {
              setState("quantity", e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="powerRating">Power Rating</label>
          <select
            name="powerRating"
            className="p-2 rounded w-full sm:w-40 border"
            value={states.powerRating}
            onChange={(e) => {
              setState("powerRating", e.target.value);
            }}
          >
            <option value="-" disabled>
              -
            </option>
            <option value="1/4">1/4 W</option>
            <option value="1/2">1/2 W</option>
            <option value="1">1 W</option>
            <option value="2">2 W</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="self-center">
          {msg && <p className="text-red-500">{msg}</p>}
        </div>
        <div className="flex gap-4 justify-end">
          <button
            className="bg-white hover:bg-gray-100 text-black font-bold py-1 px-4 rounded-lg border"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

interface UIProps {
  states: States;
  setState: (prop: string, value: string) => void;
  handleOutsideClick: (e) => void;
  handleModalClose: () => void;
  handleModalOpen: () => void;
  isModalOpen: boolean;
  handleAdd: () => void;
  value: number;
  msg: string;
}

const UI = ({
  states,
  setState,
  handleOutsideClick,
  handleModalClose,
  handleModalOpen,
  isModalOpen,
  handleAdd,
  value,
  msg,
}: UIProps) => (
  <div onClick={handleOutsideClick} className="self-center">
    <button
      className="hover:bg-gray-100 text-black font-bold p-2 rounded-lg border border-gray-400"
      onClick={handleModalOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3 h-3"
      >
        <path d="M9 2a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V2z" />
      </svg>
    </button>

    {isModalOpen &&
      teleport(
        <Modal
          handleModalClose={handleModalClose}
          handleAdd={handleAdd}
          states={states}
          setState={setState}
          value={value}
          msg={msg}
        />,
        document.getElementById("modal-root")
      )}
  </div>
);
export default UI;
