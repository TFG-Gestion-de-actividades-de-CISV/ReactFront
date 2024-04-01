import React from "react";
import { Container } from "@mui/material";
import SignupForm from "../Components/SignupForm";

const LoginView = () => {
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          minHeight: "90vh",
          alignItems: "center",
        }}
      >
        <SignupForm />
      </Container>
    </>
  );
};

export default LoginView;
