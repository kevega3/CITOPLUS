import React, { StrictMode, useState } from "react";

import { createRoot } from "react-dom/client";
import Body from "./Components/Body/body";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "./Components/Context/alertContext";
import { VisitantesProvider } from "./Components/Context/visitantesContext";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Login from "./Components/Login/login";

import "./index.css";

const App = () => {
  const [Usuario, setUsuario] = useState(localStorage.getItem("datos"));

  return (
    <StrictMode>
      <AlertProvider>
        <BrowserRouter>
          <div className="wrapper">
            <div className="content">
              <Header />
              {Usuario ? (
                <VisitantesProvider>
                  {" "}
                  <Body />
                </VisitantesProvider>
              ) : (
                <Login setUsuario={setUsuario} />
              )}
            </div>
            <Footer className="footer" />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
