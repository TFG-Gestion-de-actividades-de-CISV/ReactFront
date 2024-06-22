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
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = `${config.apiUrl}/web_user/change_password/`;

  function onSubmit(data) {
    const passwordValidation =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordValidation.test(data.password_new)) {
      setErrorMessage(
        "La contraseña debe contener al menos una letra mayúscula, un número, un símbolo y tener al menos 8 caracteres de longitud."
      );
      return;
    }

    if (data.password_new !== data.repeat_password_new) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

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
            setSuccessMessage("Contraseña cambiada exitosamente");
            setErrorMessage(null);
          });
        } else {
          response.json().then((data) => {
            setErrorMessage(data.error);
            setSuccessMessage(null);
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

          <Grid item xs={12}>
            <TextField
              label="Repite contraseña nueva"
              required
              size="small"
              type="password"
              fullWidth
              {...register("repeat_password_new")}
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
              Cambiar contraseña
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
