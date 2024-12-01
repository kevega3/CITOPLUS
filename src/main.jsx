import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Body from "./Components/Body/body";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "./Components/Context/alertContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
    </AlertProvider>
  </StrictMode>
);
