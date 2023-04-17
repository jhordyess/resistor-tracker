import * as React from "react";
import SearchBar from "@components/SearchBar";
import ResistorList from "@components/ResistorList";
import AddResistor from "@components/AddResistor";

export default function Home() {
  return (
    <div>
      <h1>Resistor Tracker</h1>
      <hr />
      <h2>My inventory</h2>
      <p>Here is a list of all the resistors I have in my inventory.</p>
      <SearchBar />
      <ResistorList />
      <AddResistor />
    </div>
  );
}
