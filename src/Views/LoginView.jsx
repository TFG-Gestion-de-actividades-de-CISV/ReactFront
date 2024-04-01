import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../Components/LoginForm";

const LoginView = () => {
  return (
    <>
      <Container maxWidth="xs">
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginView;
