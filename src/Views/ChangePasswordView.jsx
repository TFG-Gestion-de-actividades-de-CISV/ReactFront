import React from "react";
import { Container } from "@mui/material";
import ChangePasswordForm from "../Components/ChangePasswordForm";

const ChangePasswordView = () => {
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
        <ChangePasswordForm />
      </Container>
    </>
  );
};

export default ChangePasswordView;
