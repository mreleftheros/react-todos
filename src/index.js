import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";
import { HashRouter } from "react-router-dom";

render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
