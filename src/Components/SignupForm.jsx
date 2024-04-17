import { Button, TextField, Typography, Grid, Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  const [alergias, setAlergias] = useState(false);
  const [familiares, setFamiliares] = useState(false);

  const handleSwitchAlergiasChange = (event) => {
    setAlergias(event.target.checked);
  };

  const handleSwitchFamiliaresChange = (event) => {
    setFamiliares(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Registro
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Nombre"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Primer apellido"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Segundo apellido"
              size="small"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Fecha de nacimiento</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required size="small" type="date" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Correo electrónico"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Télefono"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Ciudad"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Código postal"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Contraseña"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Repite contraseña"
              required
              size="small"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item md={6}>
            <Typography variant="h6">
              ¿Tiene alergias / restricciones alimenticias?
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Switch
              checked={alergias}
              onChange={handleSwitchAlergiasChange}
              color="primary"
            ></Switch>
          </Grid>

          <Grid item xs={12}>
            {alergias && (
              <TextField
                label="Alergias / restricciones alimenticias"
                size="small"
                type="text"
                fullWidth
                multiline
                minRows={3}
                maxRows={6}
              />
            )}
          </Grid>

          <Grid item md={6}>
            <Typography variant="h6">
              ¿Tiene algún familiar registrado?
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Switch
              checked={familiares}
              onChange={handleSwitchFamiliaresChange}
              color="primary"
            ></Switch>
          </Grid>

          <Grid item xs={12}>
            {familiares && (
              <TextField
                label="Correo electrónico del familiar"
                required
                size="small"
                type="text"
                fullWidth
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Registrarse
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">
              ¿Ya tienes una cuenta?
              <Link to="/login">
                <Button color="primary" size="small">
                  Login
                </Button>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
