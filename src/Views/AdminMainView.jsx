import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";
import LogoutButton from "../Components/LogoutButton";
import { Link } from "react-router-dom";

const AdminMainView = ({ onLogout }) => {
  const [showRequests, setShowRequests] = useState(false);
  return (
    <>
      <Typography>Admin Main View</Typography>
      {/*<LogoutButton onLogout={onLogout} />*/}

      <Link to="/admin/new_actividad">
        <Button variant="outlined"> Crear nueva actividad</Button>
      </Link>

      <Button onClick={() => setShowRequests(!showRequests)}>
        Show Registration Requests
      </Button>
      {showRequests && <RegistrationRequests />}
    </>
  );
};

export default AdminMainView;
