import React from "react";
import { Container } from "@mui/material";
import SignupForm from "../Components/SignupForm";

const LoginView = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <SignupForm />
      </Container>
    </>
  );
};

export default LoginView;
