import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "@pages/Home";
import "./styles.css";

const root = createRoot(document.getElementById("app"));
root.render(<Home />);
