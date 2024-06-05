import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NinosInscriptionDetail from "../Components/NinosInscriptionDetail";
import config from "../config";

const InscriptionDetailView = () => {
  const { id: activityId, user_email: user_email, rol: role } = useParams();
  const [data, setData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = `${config.apiUrl}/activities/get_inscription/${activityId}/${user_email}/${role}`;

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
      {role === "ninos" && data && <NinosInscriptionDetail data={data} />}

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
