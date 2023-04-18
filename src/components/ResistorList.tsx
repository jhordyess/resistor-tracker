import * as React from "react";

export default function ResistorList({ children }) {
  return (
    <div>
      Resistor List
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {children}
      </ul>
    </div>
  );
}
