import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const ListActivities = () => {
  const [activities, setActivities] = useState([]);

  const url = "http://localhost:8000/activities/all_activities";

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
        <Card key={activity.id} sx={{ marginBottom: 5 }}>
          <CardContent>
            <Typography variant="h5"> {activity.name}</Typography>
            <Typography variant="body2">
              Dirección: {activity.adress}
            </Typography>
            <Typography variant="body2">
              Fecha de inicio: {activity.date_start}
            </Typography>
            <Typography variant="body2">
              Fecha de final: {activity.date_end}
            </Typography>
            <Typography variant="body2">
              Hora de inicio: {activity.hours_start}
            </Typography>
            <Typography variant="body2">Precio: {activity.price}</Typography>
            <Typography variant="body2">
              Lista de embalaje: {activity.packing_list}
            </Typography>
            <Typography variant="body2">
              Reunión familias: {activity.family_reunion}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ListActivities;
