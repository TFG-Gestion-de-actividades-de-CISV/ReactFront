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
import CisvConditionsDialog from "./CisvConditionsDialog";

const MonitorInscriptionForm = ({ activity }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      dni: "",
      languages: "",
      allergy: "",
      image_authorization: false,
      emergency_phone: "",
      t_shirt_size: "",
      medicines: "",
      health_card: null,
      pago: null,
      cisv_safeguarding: null,
      criminal_offenses_certificate: null,
      sexual_crimes_certificate: null,
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [sexualCrimesUrl, setSexualCrimesUrl] = useState(null);
  const [criminalOffensesUrl, setCriminalOffensesUrl] = useState(null);
  const [cisvSafeguardingUrl, setCisvSafeguardingUrl] = useState(null);
  const [healthCardUrl, setHealthCardUrl] = useState(null);
  const [pagoUrl, setPagoUrl] = useState(null);
  const [cisvAutorization, setCisvAutorization] = useState(false);

  const url = `${config.apiUrl}/activities/monitor_inscription/`;
  const getOrCreateUrl = `${config.apiUrl}/activities/get_or_create_inscription/monitor`;

  useEffect(() => {
    fetch(getOrCreateUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // Si hay datos, actualiza los valores del formulario
          reset(data);
          if (data.health_card) {
            setHealthCardUrl(data.health_card);
          }
          if (data.criminal_offenses_certificate) {
            setCriminalOffensesUrl(data.criminal_offenses_certificate);
          }
          if (data.sexual_crimes_certificate) {
            setSexualCrimesUrl(data.sexual_crimes_certificate);
          }
          if (data.cisv_safeguarding) {
            setCisvSafeguardingUrl(data.cisv_safeguarding);
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

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (
        key === "health_card" ||
        key === "pago" ||
        key == "cisv_safeguarding" ||
        key == "criminal_offenses_certificate" ||
        key == "sexual_crimes_certificate"
      ) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    fetch(url, {
      method: "POST",
      credentials: "include",
      body: formData,
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
              name="dni"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="DNI"
                  size="small"
                  type="text"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="languages"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Idiomas"
                  size="small"
                  type="text"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="allergy"
              control={control}
              defaultValue=""
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
              required
              InputLabelProps={{
                shrink: true,
              }}
              {...register("emergency_phone", { value: "" })}
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
              {...register("t_shirt_size", { value: "" })}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Medicamentos"
              size="small"
              type="text"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
              {...register("medicines", { value: "" })}
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
            <Typography> Certificado de delitos sexuales</Typography>
            <input
              type="file"
              accept=".pdf"
              {...register("sexual_crimes_certificate")}
            />
            {sexualCrimesUrl && (
              <div>
                <a
                  href={sexualCrimesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificado de delitos sexuales
                </a>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography> Certificado de delitos penales</Typography>
            <input
              type="file"
              accept=".pdf"
              {...register("criminal_offenses_certificate")}
            />
            {criminalOffensesUrl && (
              <div>
                <a
                  href={criminalOffensesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificado de delitos penales
                </a>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography> CISV Safeguarding</Typography>
            <input
              type="file"
              accept=".pdf"
              {...register("cisv_safeguarding")}
            />
            {cisvSafeguardingUrl && (
              <div>
                <a
                  href={cisvSafeguardingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver CISV Safeguarding
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
            <CisvConditionsDialog
              checked={cisvAutorization}
              onChange={(e) => setCisvAutorization(e.target.checked)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">¿Autoriza usar su imagen?</Typography>

            <Controller
              name="image_authorization"
              required
              control={control}
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
            <Button
              variant="outlined"
              type="submit"
              disabled={!cisvAutorization}
            >
              Inscribirse
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default MonitorInscriptionForm;
