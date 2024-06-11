import React, { useState } from "react";
import { TextField, Button, Container, Alert, AlertTitle } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import config from "../config";

const EditActivityForm = ({ activity, onActivityUpdated }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: activity,
  });

  const onSubmit = (data) => {
    fetch(`${config.apiUrl}/activities/update_activity/${activity.id}/`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setSuccessMessage("Actividad editada exitosamente");
            setErrorMessage(null);
          });
        } else {
          response.json().then((data) => {
            if (data.error.price) {
              setErrorMessage(data.error.price);
              setSuccessMessage(null);
            } else if (data.error.non_field_errors) {
              setErrorMessage(data.error.non_field_errors);
              setSuccessMessage(null);
            } else {
              setErrorMessage(data.error);
              setSuccessMessage(null);
            }
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Nombre" fullWidth margin="normal" />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="adress"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Dirección" fullWidth margin="normal" />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="date_start"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Fecha de inicio"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="date_end"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Fecha de final"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              error={!!errors.date_end}
              helperText={errors.date_end ? "Este campo es requerido" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="hours_start"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Hora de inicio"
              fullWidth
              margin="normal"
              error={!!errors.hours_start}
              helperText={errors.hours_start ? "Este campo es requerido" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Precio"
              fullWidth
              margin="normal"
              error={!!errors.price}
              helperText={errors.price ? "Este campo es requerido" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="packing_list"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Lista de embalaje"
              fullWidth
              margin="normal"
              error={!!errors.packing_list}
              helperText={errors.packing_list ? "Este campo es requerido" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="family_reunion"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Reunión familias"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Button type="submit" variant="outlined" color="primary">
          Editar
        </Button>
      </form>

      {successMessage && (
        <Alert severity="success">
          <AlertTitle>Éxito</AlertTitle>
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default EditActivityForm;
