import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import UserMainButton from "./UserMainButton";
import config from "../config";

const UserActivityView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const url = `${config.apiUrl}/activities/get_activity/${id}/`;

    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setActivity(data));
  }, [id]);

  const handleNinosClick = () => {
    navigate(`/user/activity/${id}/ninos`);
  };
  const handleMayoresClick = () => {
    navigate(`/user/activity/${id}/mayores`);
  };
  const handleMonitorClick = () => {
    navigate(`/user/activity/${id}/monitor`);
  };

  const handleParentClick = () => {
    navigate(`/user/activity/${id}/parent`);
  };

  const handleLiderClick = () => {
    navigate(`/user/activity/${id}/lider`);
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
        >
          <Typography variant="h4" sx={{ m: 1 }}>
            Selecciona el rol
          </Typography>
          <Button onClick={handleNinosClick} sx={{ m: 1 }}>
            Niño (10-15 años)
          </Button>
          <Button onClick={handleMayoresClick} sx={{ m: 1 }}>
            Mayor (16-17 años)
          </Button>
          <Button onClick={handleLiderClick} sx={{ m: 1 }}>
            Líder (21+ años)
          </Button>
          <Button onClick={handleMonitorClick} sx={{ m: 1 }}>
            Monitor (18-20 años)
          </Button>
          <Button
            disabled={!activity || !activity.there_are_meting}
            sx={{ m: 1 }}
            onClick={handleParentClick}
          >
            Padre / madre / tutor
          </Button>
          <UserMainButton />
        </Box>
      </Container>
    </>
  );
};

export default UserActivityView;
