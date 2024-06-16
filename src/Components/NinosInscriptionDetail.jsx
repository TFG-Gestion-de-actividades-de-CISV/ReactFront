import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Link,
} from "@mui/material";
const NinosInscriptionDetail = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Detalles de Inscripción de {data.user_name} {data.user_surnames}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Ciudad:</strong> {data.user_city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Código Postal:</strong> {data.user_postal_code}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Teléfono:</strong> {data.user_phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Fecha de Nacimiento:</strong> {data.user_birthdate}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Alergias:</strong> {data.allergy}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Teléfono de Emergencia:</strong> {data.emergency_phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Tamaño de Camiseta:</strong> {data.t_shirt_size}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Medicamentos:</strong> {data.medicines}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Tarjeta Sanitaria:</strong>
              {data.health_card ? (
                <Link
                  href={data.health_card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Tarjeta Sanitaria
                </Link>
              ) : (
                " No disponible"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Comprobante de Pago:</strong>
              {data.pago ? (
                <Link
                  href={data.pago}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Comprobante de Pago
                </Link>
              ) : (
                " No disponible"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Autorización de Imagen:</strong>{" "}
              {data.image_authorization ? "Sí" : "No"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <strong>Emails de Familiares:</strong>
              {data.family_members_emails
                ? data.family_members_emails.map((email, index) => (
                    <div key={index}>{email}</div>
                  ))
                : "No hay familiares"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default NinosInscriptionDetail;
