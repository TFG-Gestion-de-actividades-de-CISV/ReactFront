import React from "react";
import NinosInscriptionForm from "../Components/NinosInscriptionForm";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const NinosInscriptionView = () => {
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
          <NinosInscriptionForm activity={id} />
        </Box>
      </Container>
    </>
  );
};

export default NinosInscriptionView;
