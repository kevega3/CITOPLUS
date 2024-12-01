import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Body from "./Components/Body/body";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "./Components/Context/alertContext";
import { VisitantesProvider } from "./Components/Context/visitantesContext";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <VisitantesProvider>
        <BrowserRouter>
          <div className="wrapper">
            <div className="content">
              <Header />
              <Body />
            </div>
            <Footer className="footer" />
          </div>
        </BrowserRouter>
      </VisitantesProvider>
    </AlertProvider>
  </StrictMode>
);
