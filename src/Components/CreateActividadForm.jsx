import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";

import {
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";

const CreateActividadForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = `${config.apiUrl}/activities/create_activity/`;

  function onSubmit(data) {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setSuccessMessage("Actividad creada exitosamente");
            setErrorMessage(null);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
        setSuccessMessage(null);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Nueva Actividad
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre de actividad"
              required
              size="small"
              type="text"
              fullWidth
              {...register("name")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Dirección"
              required
              size="small"
              type="text"
              fullWidth
              {...register("adress")}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Fecha de inicio</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              type="date"
              fullWidth
              required
              {...register("date_start")}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Fecha de final</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              type="date"
              fullWidth
              required
              {...register("date_end")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Horas de entrada/salida"
              required
              size="small"
              type="text"
              fullWidth
              {...register("hours_start")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Precio"
              required
              size="small"
              type="text"
              fullWidth
              {...register("price")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Packing list"
              required
              size="small"
              type="text"
              multiline
              fullWidth
              {...register("packing_list")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Reunión familias"
              size="small"
              type="text"
              multiline
              fullWidth
              {...register("family_reunion")}
            />
          </Grid>

          {successMessage && (
            <Grid item xs={12}>
              <Alert severity="success">
                <AlertTitle>Éxito</AlertTitle>
                {successMessage}
              </Alert>
            </Grid>
          )}

          {errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
              </Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Crear
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateActividadForm;
