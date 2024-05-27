import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const ListActivities = ({ onActivityClick }) => {
  const [activities, setActivities] = useState([]);

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

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Actividades
      </Typography>
      {activities.map((activity) => (
        <Card
          key={activity.id}
          sx={{ marginBottom: 5 }}
          onClick={() => onActivityClick(activity.id)}
        >
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
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ListActivities;
