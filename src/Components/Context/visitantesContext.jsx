import React, { useEffect, createContext, useState } from "react";
import { GetVisitantes } from "../Services/visitantes";

export const VisitantesContext = createContext();

export const VisitantesProvider = (props) => {
  const [Visitantes, setVisitantes] = useState([]);
  const handlerVisitantes = async () => {
    try {
      const { data: response } = await GetVisitantes();
      setVisitantes(response.data);
    } catch (error) {
      console.error("Error al obtener VisitantesContext", error);
    }
  };

  useEffect(() => {
    handlerVisitantes();
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
