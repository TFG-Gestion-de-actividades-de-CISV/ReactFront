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
import { useForm } from "react-hook-form";

const NinosInscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [formData, setFormData] = useState({
    allergy: "",
    cisv_authorization: false,
    emergency_phone: "",
    t_shirt_size: "",
    medicines: "",
  });

  const url = "http://localhost:8000/activities/ninos_inscription/";

  useEffect(() => {
    // Reemplaza 'role' con el rol correspondiente y asegúrate de que la URL sea correcta
    const getOrCreateUrl =
      "http://localhost:8000/activities/get_or_create_inscription/ninos";

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
          // Si hay datos, actualiza el estado del formulario
          setFormData(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la inscripción:", error);
      });
  }, []);

  const onSubmit = (data) => {
    data["activity"] = "1";

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
            setErrorMessage(data.error);
            setSuccessMessage(null);
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
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Inscripción de Niños
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Alergias"
              size="small"
              type="text"
              fullWidth
              value={formData.allergy}
              {...register("allergy")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">¿Autorización de CISV?</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Switch
              value={formData.cisv_authorization}
              {...register("cisv_authorization")}
              color="primary"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono de emergencia"
              size="small"
              type="text"
              fullWidth
              required
              value={formData.emergency_phone}
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
              value={formData.t_shirt_size}
              {...register("t_shirt_size")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Medicamentos"
              size="small"
              type="text"
              fullWidth
              value={formData.medicines}
              {...register("medicines")}
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

export default NinosInscriptionForm;
