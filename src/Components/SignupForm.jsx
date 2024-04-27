import { Button, TextField, Typography, Grid, Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = "http://localhost:8000/web_user/register/";
  function onSubmit(data) {
    const profileData = {
      name: data.name,
      surname: data.surname,
      second_surname: data.second_surname,
      city: data.city,
      postal_code: data.postal_code,
      phone: data.phone,
      birthdate: data.birthdate,
    };

    const userData = {
      email: data.email,
      password: data.password,
      profile: profileData,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
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
              size="small"
              type="text"
              fullWidth
              required
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Primer apellido"
              size="small"
              type="text"
              fullWidth
              required
              {...register("surname")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Segundo apellido"
              size="small"
              type="text"
              fullWidth
              required
              {...register("second_surname")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Fecha de nacimiento</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              type="date"
              fullWidth
              required
              {...register("birthdate")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Correo electrónico"
              size="small"
              type="text"
              fullWidth
              required
              {...register("email")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Télefono"
              size="small"
              type="text"
              fullWidth
              required
              {...register("phone")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Ciudad"
              size="small"
              type="text"
              fullWidth
              required
              {...register("city")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Código postal"
              size="small"
              type="text"
              fullWidth
              required
              {...register("postal_code")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Contraseña"
              size="small"
              type="password"
              fullWidth
              required
              {...register("password")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Repite contraseña"
              size="small"
              type="password"
              fullWidth
              required
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

export default RegisterForm;
