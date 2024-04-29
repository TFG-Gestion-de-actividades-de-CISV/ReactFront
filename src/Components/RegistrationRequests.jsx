import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const RegistrationRequests = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/web_user/registration_requests";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Solicitudes de registro
      </Typography>
      {users.map((user) => (
        <Card key={user.email} sx={{ marginBottom: 5 }}>
          <CardContent>
            <Typography variant="h5">
              {user.profile.name} {user.profile.surname}
              {user.profile.second_surname}
            </Typography>
            <Typography variant="subtitle1">{user.email}</Typography>
            <Typography variant="body2">Ciudad: {user.profile.city}</Typography>
            <Typography variant="body2">
              Código Postal: {user.profile.postal_code}
            </Typography>
            <Typography variant="body2">
              Teléfono: {user.profile.phone}
            </Typography>
            <Typography variant="body2">
              Fecha de Nacimiento: {user.profile.birthdate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Aceptar
            </Button>
            <Button variant="contained" color="error">
              Rechazar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default RegistrationRequests;
