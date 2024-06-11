import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import config from "../config";
import { useNavigate } from "react-router-dom";

const ListActivities = ({ onActivityClick }) => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleEditClick(activity.id)}
              >
                Editar
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ListActivities;
