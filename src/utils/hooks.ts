import { useEffect, useState } from "react";

export function useSemiPersistentState<S>(
  key: string,
  initialState: S
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [value, setValue] = useState<S>(
    JSON.parse(localStorage.getItem(key) || "") || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); //? key is added to the dependency array to avoid the warning?

  return [value, setValue];
}
