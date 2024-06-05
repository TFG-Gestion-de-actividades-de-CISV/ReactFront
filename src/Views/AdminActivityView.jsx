import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent } from "@mui/material";
import config from "../config";
import { useNavigate } from "react-router-dom";

const AdminActivityView = () => {
  const { id } = useParams();
  const [inscriptions, setInscriptions] = useState([]);
  const navigate = useNavigate();

  const url = `${config.apiUrl}/activities/all_inscriptions/${id}`;

  const rolString = {
    ninos: "NIño",
    lider: "Lider",
    monitor: "Monitr",
    mayor: "Mayor",
  };

  const handleInscriptionClick = (rol, user_email) => {
    navigate(`/admin/get_inscription/${id}/${user_email}/${rol}`);
  };

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setInscriptions(data))
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Inscripciones
      </Typography>
      {inscriptions.map((inscription) => (
        <Card
          key={inscription.id}
          sx={{ marginBottom: 5 }}
          onClick={() =>
            handleInscriptionClick(inscription.rol, inscription.user_email)
          }
        >
          <CardContent>
            <Typography variant="h5">
              {inscription.user_name} {inscription.user_surnames}
            </Typography>
            <Typography variant="subtitle1">{inscription.activity}</Typography>
            <Typography variant="body2">
              <b>Email:</b> {inscription.user_email}
            </Typography>
            <Typography variant="body2">
              <b>Rol:</b> {rolString[inscription.rol]}
            </Typography>
            <Typography variant="body2">
              <b>Estado:</b> {inscription.status}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
export default AdminActivityView;
