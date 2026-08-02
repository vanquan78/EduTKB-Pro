import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/inter";

import "./index.css";

import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/utilities.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);