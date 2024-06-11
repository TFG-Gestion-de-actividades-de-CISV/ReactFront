import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminMainButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/main");
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

export default AdminMainButton;
