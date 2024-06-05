import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NinosInscriptionDetail from "../Components/NinosInscriptionDetail";
import config from "../config";

const InscriptionDetailView = () => {
  const location = useLocation();
  const { id, user_email, rol } = location.state;

  const [data, setData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = `${config.apiUrl}/activities/get_inscription/${id}/${user_email}/${rol}`;

  useEffect(() => {
    console.log("Fetching URL: ", url);

    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data es" + data);
        setData(data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);
  return (
    <Container>
      {rol === "ninos" && data && <NinosInscriptionDetail data={data} />}

      {errorMessage && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default InscriptionDetailView;
