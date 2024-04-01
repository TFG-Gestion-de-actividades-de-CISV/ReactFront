import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../Components/LoginForm";

const LoginView = () => {
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginView;
