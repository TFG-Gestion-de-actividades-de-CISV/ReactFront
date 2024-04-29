import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

const RegistrationRequests = () => {
  const [users, setUsers] = useState([]);
  const [reasons, setReasons] = useState({});

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

  // Llamada a la API para aceptar al usuario
  const handleAccept = (userEmail) => {
    fetch(`http://localhost:8000/web_user/accept/${userEmail}`, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(users.filter((user) => user.email !== userEmail));
      })
      .catch((error) => console.error("Error:", error));
  };

  // Llamada a la API para rechazar al usuario
  const handleReject = (userEmail) => {
    fetch(`http://localhost:8000/web_user/reject_request/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, reason: reasons[userEmail] }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(users.filter((user) => user.email !== userEmail));
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleReasonChange = (event, userEmail) => {
    setReasons({ ...reasons, [userEmail]: event.target.value });
  };

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
            <TextField
              label="Razón del rechazo"
              variant="outlined"
              fullWidth
              value={reasons[user.email] || ""}
              onChange={(event) => handleReasonChange(event, user.email)}
              sx={{ marginTop: 2 }}
              multiline
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAccept(user.email)}
            >
              Aceptar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleReject(user.email)}
            >
              Rechazar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default RegistrationRequests;
