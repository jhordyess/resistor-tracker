import { Context } from "@pages/Home/context";
import * as React from "react";

export default function SearchBar() {
  const { searchValue, setSearchValue } = React.useContext(Context);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
      className="w-full p-2 rounded-lg border"
    />
  );
}
