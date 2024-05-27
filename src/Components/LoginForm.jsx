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
import { useState } from "react";
import config from "../config";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const url = `${config.apiUrl}/web_user/login/`;

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
            if (data.is_admin) {
              navigate("/admin/main");
            } else {
              navigate("/user/main");
            }
            onLogin(data.is_admin);
          });
        } else if (response.status === 404) {
          setErrorMessage("Email o contraseña incorrectas");
        } else {
          console.log("La respuesta del servidor no fue OK");
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
            <Typography variant="h2" align="center">
              Login
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
              label="Password"
              required
              size="small"
              type="password"
              fullWidth
              {...register("password")}
            />
          </Grid>

          <Grid item xs={12}>
            <Link to="/change_password">
              <Button color="primary" size="small">
                Forgot password?
              </Button>
            </Link>
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
              Login
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="p">
              ¿No tienes una cuenta?{" "}
              <Link to="/signup">
                <Button color="primary" size="small">
                  Registrate
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
