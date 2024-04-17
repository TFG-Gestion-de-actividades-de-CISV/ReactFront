import { Button, TextField, Typography, Grid, Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
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
            <Button color="primary" size="small">
              Forgot password?
            </Button>
          </Grid>

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
