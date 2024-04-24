import React from "react";
import { Container, Paper } from "@mui/material";
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
        <Paper
          elevation={20}
          sx={{
            padding: 3,
          }}
        >
          <SignupForm />
        </Paper>
      </Container>
    </>
  );
};

export default LoginView;
