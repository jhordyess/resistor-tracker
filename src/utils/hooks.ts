import * as React from "react";
export function useSemiPersistentState<S>(
  key: string,
  initialState: S
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [value, setValue] = React.useState<S>(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); //? key is added to the dependency array to avoid the warning?

  return [value, setValue];
}
