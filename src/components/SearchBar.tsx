import * as React from "react";

export default function SearchBar({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}
