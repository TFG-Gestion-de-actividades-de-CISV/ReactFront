import React from "react";
import NinosInscriptionForm from "../Components/NinosInscriptionForm";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import UserMainButton from "./UserMainButton";

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
          <UserMainButton />
        </Box>
      </Container>
    </>
  );
};

export default NinosInscriptionView;
