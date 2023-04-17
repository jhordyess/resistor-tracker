import * as React from "react";
import SearchBar from "@components/SearchBar";
import ResistorList from "@components/ResistorList";
import AddResistor from "@components/AddResistor";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-xl font-bold text-gray-800">Resistor Tracker</h1>
      </header>
      <main className="max-w-1xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2>My inventory</h2>
        <SearchBar />
        <ResistorList />
        <AddResistor />
      </main>
    </div>
  );
}
