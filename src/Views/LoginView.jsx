import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../Components/LoginForm";

const LoginView = ({ onLogin }) => {
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
        <LoginForm onLogin={onLogin} />
      </Container>
    </>
  );
};

export default LoginView;
