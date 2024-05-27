import React from "react";
import MayoresInscriptionForm from "../Components/MayoresInscriptionForm";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const MayoresInscriptionView = () => {
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
          <MayoresInscriptionForm activity={id} />
        </Box>
      </Container>
    </>
  );
};

export default MayoresInscriptionView;
