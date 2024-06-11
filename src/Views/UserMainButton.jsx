import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserMainButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/main");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      sx={{ marginTop: 2 }}
    >
      Volver a Página Principal
    </Button>
  );
};

export default UserMainButton;
