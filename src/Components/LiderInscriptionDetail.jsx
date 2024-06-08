import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Link,
} from "@mui/material";

const LiderInscriptionDetail = ({ data }) => {
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
              <strong>DNI/NIE:</strong> {data.dni}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Profesión:</strong> {data.profession}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Idiomas:</strong> {data.languages}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Primeros Auxilios:</strong> {data.first_aid ? "Sí" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Alergias:</strong> {data.allergy}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Documentación de Delitos Sexuales:</strong>{" "}
              {data.sexual_crimes_certificate ? (
                <Link
                  href={data.sexual_crimes_certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Documento
                </Link>
              ) : (
                " No disponible"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Documentación de Delitos Penales:</strong>{" "}
              {data.criminal_offenses_certificate ? (
                <Link
                  href={data.criminal_offenses_certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Documento
                </Link>
              ) : (
                " No disponible"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Documento de Protección CISV:</strong>{" "}
              {data.cisv_safeguarding ? (
                <Link
                  href={data.cisv_safeguarding}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Documento
                </Link>
              ) : (
                " No disponible"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Tarjeta Sanitaria:</strong>{" "}
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
              <strong>Comprobante de Pago:</strong>{" "}
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
          </Grid>{" "}
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Autorización de Imagen:</strong>{" "}
              {data.image_authorization ? "Sí" : "No"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LiderInscriptionDetail;
