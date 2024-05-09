import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";
import LogoutButton from "../Components/LogoutButton";
import { Link } from "react-router-dom";
import ListActivities from "../Components/ListActivities";

const AdminMainView = ({ onLogout }) => {
  const [showRequests, setShowRequests] = useState(false);
  const [showActivities, setActivities] = useState(false);

  return (
    <>
      <Typography>Admin Main View</Typography>
      <LogoutButton onLogout={onLogout} />

      <Link to="/admin/new_actividad">
        <Button variant="outlined"> Crear nueva actividad</Button>
      </Link>

      <Button onClick={() => setShowRequests(!showRequests)}>
        Show Registration Requests
      </Button>
      {showRequests && <RegistrationRequests />}

      <Button onClick={() => setActivities(!showActivities)}>
        Show Activites
      </Button>
      {showActivities && <ListActivities />}
    </>
  );
};

export default AdminMainView;
