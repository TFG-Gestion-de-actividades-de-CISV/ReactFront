import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const url = "http://localhost:8000/web_user/logout/";

  const handleLogout = () => {
    fetch(url, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          onLogout();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error al realizar logout:", error);
      });
  };

  return (
    <Button variant="contained" size="small" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
