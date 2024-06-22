import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import config from "../config";
import EditActivityForm from "../Components/EditActivityForm";
import AdminMainButton from "./AdminMainButton";

const EditActivityView = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.apiUrl}/activities/get_activity/${activityId}/`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setActivity(data))
      .catch((error) => console.error("Error:", error));
  }, [activityId]);

  const handleActivityUpdated = (updatedActivity) => {
    setActivity(updatedActivity);
    alert("Actividad actualizada con éxito");
  };

  if (!activity) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 5 }}>
        Editar Actividad
      </Typography>
      <EditActivityForm
        activity={activity}
        onActivityUpdated={handleActivityUpdated}
      />
      <AdminMainButton />
    </Container>
  );
};

export default EditActivityView;
