import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Alert, AlertTitle, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NinosInscriptionDetail from "../Components/NinosInscriptionDetail";
import config from "../config";
import MonitorInscriptionDetail from "../Components/MonitorInscriptionDetail";
import LiderInscriptionDetail from "../Components/LiderInscriptionDetail";
import MayoresInscriptionDetail from "../Components/MayoresInscriptionDetail";
import AdminMainButton from "./AdminMainButton";
import ParentInscriptionDetail from "../Components/ParentInscriptionDetail";

const InscriptionDetailView = () => {
  const location = useLocation();
  const { id, user_email, rol } = location.state;

  const [data, setData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = `${config.apiUrl}/activities/get_inscription/${id}/${user_email}/${rol}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  const handleAccept = () => {
    const acceptUrl = `${config.apiUrl}/activities/accept_inscription/${data.id}/`;
    fetch(acceptUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error aceptando la inscripción");
        }
        return response.json();
      })
      .then(() => {
        setSuccessMessage("Inscripción aceptada con éxito.");
        setData((prevData) => ({ ...prevData, status: 1 }));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleReject = () => {
    const rejectUrl = `${config.apiUrl}/activities/reject_inscription/${data.id}/`;
    fetch(rejectUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error rechazando la inscripción");
        } else {
          setSuccessMessage("Inscripción rechazada con éxito.");
          setData((prevData) => ({ ...prevData, status: 2 }));
        }
      })

      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <Container>
      {rol === "ninos" && data && <NinosInscriptionDetail data={data} />}
      {rol === "mayores" && data && <MayoresInscriptionDetail data={data} />}
      {rol === "lider" && data && <LiderInscriptionDetail data={data} />}
      {rol === "monitor" && data && <MonitorInscriptionDetail data={data} />}
      {rol === "parent" && data && <ParentInscriptionDetail data={data} />}

      {data && data.status === 0 && (
        <Stack direction="row" spacing={2} marginTop={2}>
          <Button variant="contained" color="primary" onClick={handleAccept}>
            Aceptar
          </Button>
          <Button variant="contained" color="error" onClick={handleReject}>
            Rechazar
          </Button>
        </Stack>
      )}

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
      <AdminMainButton />
    </Container>
  );
};

export default InscriptionDetailView;
