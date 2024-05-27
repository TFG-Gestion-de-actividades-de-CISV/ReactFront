import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import MonitorInscriptionForm from "../Components/MonitorInscriptionForm";

const MonitorInscriptionView = () => {
  const { id } = useParams();
  return (
    <>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
        >
          <MonitorInscriptionForm activity={id} />
        </Box>
      </Container>
    </>
  );
};

export default MonitorInscriptionView;
