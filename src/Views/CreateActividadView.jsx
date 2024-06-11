import React from "react";
import { Container, Paper } from "@mui/material";
import CreateActividadForm from "../Components/CreateActividadForm";
import AdminMainButton from "./AdminMainButton";

const CreateActividadView = () => {
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
          <CreateActividadForm />
          <AdminMainButton />
        </Paper>
      </Container>
    </>
  );
};

export default CreateActividadView;
