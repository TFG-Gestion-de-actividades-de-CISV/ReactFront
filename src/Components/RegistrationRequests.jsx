import { useEffect } from "react";
import { Container, Typography } from "@mui/material";

const RegistrationRequests = () => {
  const url = "http://localhost:8000/web_user/registration_requests";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Typography> llamada a API</Typography>
    </>
  );
};

export default RegistrationRequests;
