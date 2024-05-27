import {
  Button,
  TextField,
  Typography,
  Grid,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import config from "../config";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = `${config.apiUrl}/web_user/change_password/`;

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
            console.log(data);
            navigate("/");
          });
        } else {
          response.json().then((data) => {
            setErrorMessage(data.error);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Cambiar contraseña
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              required
              size="small"
              fullWidth
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
          <Grid item xs={12}>
            <TextField
              label="Contraseña actual"
              required
              size="small"
              type="password"
              fullWidth
              {...register("password_old")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña nueva"
              required
              size="small"
              type="password"
              fullWidth
              {...register("password_new")}
            />
          </Grid>

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
              Cambiar contraseña
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
