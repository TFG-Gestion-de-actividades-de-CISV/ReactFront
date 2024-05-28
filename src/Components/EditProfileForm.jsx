import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Alert, AlertTitle } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import config from "../config";

const EditProfileForm = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const urlGetProfile = `${config.apiUrl}/web_user/profile`;

  const urlUpdateProfile = `${config.apiUrl}/web_user/profile/update/`;

  useEffect(() => {
    fetch(urlGetProfile, {
      method: "GET",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        reset(data);
      })
      .catch((error) => {
        console.error("Error al obtener el perfil:", error);
      });
  }, [reset]);

  const onSubmit = (data) => {
    fetch(urlUpdateProfile, {
      method: "PUT",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Perfil actualizado con éxito!");
          setErrorMessage(null);
        } else {
          setErrorMessage(
            "Ha ocurrido un error. Por favor, inténtalo de nuevo."
          );
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
        setSuccessMessage(null);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("name")}
              label="Nombre"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("surnames")}
              label="Apellidos"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("city")}
              label="Ciudad"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("postal_code")}
              label="Código Postal"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone")}
              label="Teléfono"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("birthdate")}
              label="Fecha de Nacimiento"
              size="small"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
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
              Actualizar Perfil
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditProfileForm;
