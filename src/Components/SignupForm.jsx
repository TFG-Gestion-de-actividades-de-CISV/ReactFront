import {
  Button,
  TextField,
  Typography,
  Grid,
  Switch,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import config from "../config";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const url = `${config.apiUrl}/web_user/register/`;
  function onSubmit(data) {
    const passwordValidation =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordValidation.test(data.password)) {
      setErrorMessage(
        "La contraseña debe contener al menos una letra mayúscula, un número, un símbolo y tener al menos 8 caracteres de longitud."
      );
      return;
    }
    if (data.password !== data.repeat_password) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    const profileData = {
      name: data.name,
      surnames: data.surnames,
      city: data.city,
      postal_code: data.postal_code,
      phone: data.phone,
      birthdate: data.birthdate,
    };

    const userData = {
      email: data.email,
      password: data.password,
      profile: profileData,
      family_member_email: data.family_member_email,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setSuccessMessage(
              "Registro exitoso! Para continuar la petición deberá de ser aceptada por administrador "
            );
            setErrorMessage(null);
          });
        } else {
          response.json().then((data) => {
            if (data.Error.email) {
              setErrorMessage(data.Error.email);
              setSuccessMessage(null);
            } else if (data.Error.family_member_email) {
              setErrorMessage(data.Error.family_member_email);
              setSuccessMessage(null);
            } else if (data.Error.profile) {
              if (data.Error.profile.postal_code) {
                setErrorMessage(data.Error.profile.postal_code);
                setSuccessMessage(null);
              } else if (data.Error.profile.phone) {
                setErrorMessage(data.Error.profile.phone);
                setSuccessMessage(null);
              }
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
        setSuccessMessage(null);
      });
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
          <Grid item xs={12} md={8}>
            <TextField
              label="Apellidos"
              size="small"
              type="text"
              fullWidth
              required
              {...register("surnames")}
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
              {...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <Typography variant="p" color="error">
                El formato del email es incorrecto
              </Typography>
            )}
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
              {...register("repeat_password")}
            />
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
                {...register("family_member_email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
            )}
            {errors.family_member_email?.type === "pattern" && (
              <Typography variant="p" color="error">
                El formato del email es incorrecto
              </Typography>
            )}
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{ marginTop: 2 }}
            >
              Volver a Página Principal
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
