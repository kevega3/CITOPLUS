import React, { useState, useEffect, useContext, useRef } from "react";
import { TextField, Box, Grid, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BadgeIcon from "@mui/icons-material/Badge";
import { VisitantesContext } from "../Context/visitantesContext";
export default function Buscar() {
  const [Nombre, setNombre] = useState("");
  const [FechaVisita, setFechaVisita] = useState("");
  const [NumeroIdentificacion, setNumeroIdentificacion] = useState("");
  const typingTimeoutRef = useRef(null);
  const debounceTime = 500; // tiempo en milisegundos
  const { handlerVisitantes } = useContext(VisitantesContext);

  const isValidDate = (dateString) => {
    return (
      /^\d{4}-\d{2}-\d{2}$/.test(dateString) && !isNaN(Date.parse(dateString))
    );
  };

  const handleSubmit = async () => {
    let body = { Nombre, NumeroIdentificacion };
    console.log(body);
    if (!isValidDate(FechaVisita)) {
      await handlerVisitantes(body);
    } else {
      body.FechaVisita = FechaVisita;
      await handlerVisitantes(body);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      handleSubmit();
    }, debounceTime);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Box
      component="form"
      sx={{
        maxWidth: "100%",
        width: "100%",
        margin: "auto",
        mt: 1,
        p: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ flexWrap: "nowrap" }}
      >
        <Grid item xs={2}>
          <TextField
            fullWidth
            size="small"
            label="Nombre o Apellido"
            value={Nombre}
            onChange={handleInputChange(setNombre)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            size="small"
            label="Fecha (YYYY-MM-DD)"
            value={FechaVisita}
            onChange={handleInputChange(setFechaVisita)}
            placeholder="YYYY-MM-DD"
            error={FechaVisita !== "" && !isValidDate(FechaVisita)}
            helperText={
              FechaVisita !== "" && !isValidDate(FechaVisita)
                ? "Agregue una Fecha válida"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            fullWidth
            label="Número de Identificación"
            value={NumeroIdentificacion}
            onChange={handleInputChange(setNumeroIdentificacion)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
