import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentIcon from "@mui/icons-material/Comment";
import { grey } from "@mui/material/colors";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import dayjs from "dayjs";

const Carvisitantes = ({ datos }) => {
  return (
    <Grid container>
      <Grid item key={datos.id}>
        <Card sx={{ maxWidth: 300, m: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={datos.imagen}
            alt={`${datos.nombre} ${datos.apellido}`}
            sx={{ objectFit: "contain", bgcolor: "grey.200" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <PersonIcon sx={{ color: grey[600], mr: 1 }} />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="text.secondary"
              >
                {datos.nombre} {datos.apellido}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <BadgeIcon sx={{ color: grey[600], mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {datos.tipo_identificacion}: {datos.numero_identificacion}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <CalendarTodayIcon sx={{ color: grey[600], mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Fecha de visita:{" "}
                {dayjs(datos.fecha_visita).format("DD/MM/YYYY HH:mm")}
              </Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mt={2}>
              <CommentIcon sx={{ color: grey[600], mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Comentarios:
                </Typography>
                <Typography variant="body2" paragraph>
                  {datos.comentarios}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Carvisitantes;
