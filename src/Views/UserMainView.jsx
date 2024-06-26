import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import LogoutButton from "../Components/LogoutButton";
import ListActivities from "../Components/ListActivities";
import { useNavigate } from "react-router-dom";
import ListInscriptions from "../Components/ListInscriptions";

const UserMainView = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const navigate = useNavigate();

  const handleActivityClick = (id) => {
    navigate(`/user/activity/${id}`);
  };

  const handleProfileClick = (id) => {
    navigate(`/user/profile`);
  };
  return (
    <>
      <Box display="flex">
        <Box
          minWidth={200}
          p={2}
          borderRight={1}
          display="flex"
          flexDirection="column"
        >
          <Button onClick={() => setActiveComponent("activities")}>
            Actividades disponibles
          </Button>
          <Button onClick={() => setActiveComponent("inscriptions")}>
            Mis Inscripciones
          </Button>
          <Button onClick={handleProfileClick}>Profile</Button>

          <LogoutButton onLogout={onLogout} />
        </Box>

        <Box p={2} flexGrow={1}>
          {activeComponent === "activities" && (
            <ListActivities onActivityClick={handleActivityClick} />
          )}
          {activeComponent === "inscriptions" && <ListInscriptions />}
        </Box>
      </Box>
    </>
  );
};

export default UserMainView;
