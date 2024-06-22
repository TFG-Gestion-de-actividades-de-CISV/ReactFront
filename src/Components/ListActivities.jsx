import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  AlertTitle,
  Grid,
} from "@mui/material";
import config from "../config";
import { useNavigate } from "react-router-dom";

const ListActivities = ({ onActivityClick }) => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
  const [deleteActivityId, setDeleteActivityId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const url = `${config.apiUrl}/activities/all_activities`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleEditClick = (activityId) => {
    navigate(`/admin/edit_activity/${activityId}`);
  };

  const handleDeleteClick = (activityId) => {
    setDeleteActivityId(activityId);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    fetch(`${config.apiUrl}/activities/delete_activity/${deleteActivityId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar la actividad");
        }
        setSuccessMessage("Actividad eliminada exitosamente");
        setOpenDialog(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Ha ocurrido un error al eliminar la actividad.");
      });
  };

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Actividades
      </Typography>
      {activities.map((activity) => (
        <Card key={activity.id} sx={{ marginBottom: 5 }}>
          <CardContent>
            <Typography variant="h5"> {activity.name}</Typography>
            <Typography variant="body2">
              <b>Dirección:</b> {activity.adress}
            </Typography>
            <Typography variant="body2">
              <b>Fecha de inicio:</b> {activity.date_start}
            </Typography>
            <Typography variant="body2">
              <b>Fecha de final:</b> {activity.date_end}
            </Typography>
            <Typography variant="body2">
              <b>Hora de inicio:</b> {activity.hours_start}
            </Typography>
            <Typography variant="body2">
              <b>Precio:</b> {activity.price}
            </Typography>
            <Typography variant="body2">
              <b>Lista de embalaje:</b>
              {activity.packing_list}
            </Typography>
            <Typography variant="body2">
              <b>Reunión familias:</b> {activity.family_reunion}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
              onClick={() => onActivityClick(activity.id)}
            >
              Ver Inscripciones
            </Button>
            {isAdmin && (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleEditClick(activity.id)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteClick(activity.id)}
                >
                  Eliminar
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Estás seguro de que deseas eliminar esta actividad?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      {successMessage && (
        <Grid item xs={12}>
          <Alert severity="success">
            <AlertTitle>Éxito</AlertTitle>
            {successMessage}
          </Alert>
        </Grid>
      )}
      {errorMessage && (
        <Grid item xs={12}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        </Grid>
      )}
    </Container>
  );
};

export default ListActivities;
