import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";
import LogoutButton from "../Components/LogoutButton";
import { Link } from "react-router-dom";
import ListActivities from "../Components/ListActivities";
import { useNavigate } from "react-router-dom";

const AdminMainView = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState("");

  const navigate = useNavigate();

  const handleActivityClick = (id) => {
    navigate(`/admin/activity/${id}`);
  };

  return (
    <Box display="flex">
      <Box
        minWidth={200}
        p={2}
        borderRight={1}
        display="flex"
        flexDirection="column"
      >
        <Link to="/admin/new_actividad">
          <Button variant="outlined"> Crear nueva actividad</Button>
        </Link>

        <Button onClick={() => setActiveComponent("requests")}>
          Solicitudes de registro
        </Button>

        <Button onClick={() => setActiveComponent("activities")}>
          Actividades
        </Button>

        <LogoutButton onLogout={onLogout} />
      </Box>

      <Box p={2} flexGrow={1}>
        {activeComponent === "requests" && <RegistrationRequests />}
        {activeComponent === "activities" && (
          <ListActivities onActivityClick={handleActivityClick} />
        )}
      </Box>
    </Box>
  );
};

export default AdminMainView;
