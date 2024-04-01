import { Button, TextField, Typography, Grid } from "@mui/material";
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
              Sign up
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
            <TextField
              label="Repeat password"
              required
              size="small"
              type="password"
              fullWidth
              {...register("password2")}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Sign up
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="p">
              Already have an account?
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
