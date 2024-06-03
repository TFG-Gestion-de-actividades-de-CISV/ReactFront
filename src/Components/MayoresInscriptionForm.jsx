import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Switch,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import config from "../config";

const MayoresInscriptionForm = ({ activity }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      allergy: "",
      cisv_authorization: false,
      emergency_phone: "",
      t_shirt_size: "",
      medicines: "",
      health_card: null,
      pago: null,
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [healthCardUrl, setHealthCardUrl] = useState(null);
  const [pagoUrl, setPagoUrl] = useState(null);

  const url = `${config.apiUrl}/activities/mayores_inscription/`;

  useEffect(() => {
    const getOrCreateUrl = `${config.apiUrl}/activities/get_or_create_inscription/mayores`;

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "health_card" || key === "pago") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    fetch(getOrCreateUrl, {
      method: "GET",
      credentials: "include",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // Si hay datos, actualiza los valores del formulario
          reset(data);
          if (data.health_card) {
            setHealthCardUrl(data.health_card);
          }
          if (data.pago) {
            setPagoUrl(data.pago);
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener la inscripción:", error);
      });
  }, [reset]);

  const onSubmit = (data) => {
    data["activity"] = activity;

    console.log(data);

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
            setSuccessMessage("Inscripción exitosa!");
            setErrorMessage(null);
          });
        } else {
          response.json().then((data) => {
            if (data.error.emergency_phone) {
              setErrorMessage(data.error.emergency_phone);
              setSuccessMessage(null);
            } else {
              setErrorMessage(data.error);
              setSuccessMessage(null);
            }
          });
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
            <Controller
              name="allergy"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Alergias"
                  size="small"
                  type="text"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono de emergencia"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
              {...register("emergency_phone")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Tamaño de camiseta"
              size="small"
              type="text"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
              {...register("t_shirt_size")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Medicamentos"
              size="small"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
              {...register("medicines")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography> Tarjeta Sanitaria</Typography>
            <input type="file" accept=".pdf" {...register("health_card")} />
            {healthCardUrl && (
              <div>
                <a
                  href={healthCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Tarjeta Sanitaria
                </a>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography> Comprobante de pago</Typography>

            <input type="file" accept=".pdf" {...register("pago")} />
            {pagoUrl && (
              <div>
                <a href={pagoUrl} target="_blank" rel="noopener noreferrer">
                  Ver comprobante de pago
                </a>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">¿Autorización de CISV?</Typography>

            <Controller
              name="cisv_authorization"
              control={control}
              required
              render={({ field }) => (
                <Switch {...field} checked={field.value} color="primary" />
              )}
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
              Inscribirse
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default MayoresInscriptionForm;
