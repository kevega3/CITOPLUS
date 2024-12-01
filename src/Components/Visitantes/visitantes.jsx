import React, { useContext, useEffect, useState } from "react";
import Carvisitantes from "./carvisitantes";
import { VisitantesContext } from "../Context/visitantesContext";
import Pagination from "@mui/material/Pagination";
import { Box, Grid, Typography } from "@mui/material";
function Visitantes() {
  const { Visitantes } = useContext(VisitantesContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(Visitantes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVisitantes = Visitantes.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Opcional: Scroll arriba al cambiar de página
  };

  return (
    <Box padding={4}>
      <Typography variant="h4" align="start" gutterBottom>
        Visitantes
      </Typography>
      {/* <div align={"end"}>
        <ModalCrearVehiculo />
      </div> */}
      <Grid container spacing={4}>
        {currentVisitantes.map((Visitante) => (
          <Grid item xs={12} sm={5} md={3} key={Visitante.id}>
            <Carvisitantes datos={Visitante} />
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  );
}

export default Visitantes;
