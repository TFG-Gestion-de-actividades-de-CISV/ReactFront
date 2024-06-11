import React from "react";
import EditProfileForm from "../Components/EditProfileForm";
import { useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserMainButton from "./UserMainButton";

const EditProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate("/change_password");
  };
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
          <EditProfileForm />

          <Button
            onClick={handleChangePassword}
            variant="contained"
            sx={{ mt: 3 }}
          >
            Cambiar Contraseña
          </Button>

          <UserMainButton />
        </Box>
      </Container>
    </>
  );
};

export default EditProfileView;
