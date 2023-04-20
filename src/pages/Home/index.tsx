import * as React from "react";
import { Provider } from "./context";
import UI from "./UI";

export default () => (
  <Provider>
    <UI />
  </Provider>
);
