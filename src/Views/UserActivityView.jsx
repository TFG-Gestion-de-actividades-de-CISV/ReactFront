import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const UserActivityView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNinosClick = () => {
    navigate(`/user/activity/${id}/ninos`);
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
          <Button sx={{ m: 1 }}> Mayor (16-17 años)</Button>
          <Button sx={{ m: 1 }}> Líder (21+ años)</Button>
          <Button sx={{ m: 1 }}> Monitor (18-20 años)</Button>
          <Button sx={{ m: 1 }}> Padre / madre / tutor</Button>
        </Box>
      </Container>
    </>
  );
};

export default UserActivityView;
