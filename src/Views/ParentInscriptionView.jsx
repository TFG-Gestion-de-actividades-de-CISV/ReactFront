import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import ParentInscriptionForm from "../Components/ParentInscriptionForm";
import UserMainButton from "./UserMainButton";

const ParentInscriptionView = () => {
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
          <ParentInscriptionForm activity={id} />
          <UserMainButton />
        </Box>
      </Container>
    </>
  );
};

export default ParentInscriptionView;
