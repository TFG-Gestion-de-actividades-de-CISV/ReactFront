import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Alert,
  AlertTitle,
} from "@mui/material";
import config from "../config";

const ListInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = `${config.apiUrl}/activities/user_inscriptions`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching inscriptions");
        }
        return response.json();
      })
      .then((data) => {
        setInscriptions(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Aceptado":
        return "green";
      case "Rechazado":
        return "red";
      case "Pendiente":
        return "grey";
      default:
        return "black";
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Mis Inscripciones
      </Typography>
      {errorMessage && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      {inscriptions.length === 0 ? (
        <Typography variant="body1">No tienes inscripciones.</Typography>
      ) : (
        inscriptions.map((inscription) => (
          <Card key={inscription.id} sx={{ marginBottom: 5 }}>
            <CardContent>
              <Typography variant="h5">{inscription.activity_name}</Typography>
              <Typography variant="body2">Rol: {inscription.rol}</Typography>
              <Typography
                variant="body2"
                style={{ color: getStatusColor(inscription.status) }}
              >
                Estado: {inscription.status}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ListInscriptions;
