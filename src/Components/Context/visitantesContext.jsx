// visitantesContext.jsx
import React, { useEffect, createContext, useState } from "react";
import { GetVisitantes } from "../Services/visitantes";

export const VisitantesContext = createContext();

export const VisitantesProvider = (props) => {
  const [Visitantes, setVisitantes] = useState([]);

  const handlerVisitantes = async (body) => {
    try {
      const { data: response } = await GetVisitantes(body);
      setVisitantes(response.data);
    } catch (error) {
      console.error("Error al obtener VisitantesContext", error);
    }
  };

  useEffect(() => {
    // Llamada inicial con un objeto vacío
    handlerVisitantes({});
  }, []);

  return (
    <VisitantesContext.Provider
      value={{
        Visitantes,
        handlerVisitantes,
      }}
    >
      {props.children}
    </VisitantesContext.Provider>
  );
};
