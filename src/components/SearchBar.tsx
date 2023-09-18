import { Context } from "@/pages/Home/context";
import { useContext } from "react";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useContext(Context);

  const onSearchValueChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
      className="w-full rounded-lg border p-2"
    />
  );
}
