import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import LiderInscriptionForm from "../Components/LiderInscriptionForm";

const LiderInscriptionView = () => {
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
          <LiderInscriptionForm activity={id} />
        </Box>
      </Container>
    </>
  );
};

export default LiderInscriptionView;
