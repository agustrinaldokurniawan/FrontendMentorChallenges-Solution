import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles.css";

const element = document.getElementById("root") as HTMLElement;
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
