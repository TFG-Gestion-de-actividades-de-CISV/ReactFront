import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import LogoutButton from "../Components/LogoutButton";

const UserMainView = ({ onLogout }) => {
  const [showRequests, setShowRequests] = useState(false);
  return (
    <>
      <Typography>User Main View</Typography>

      <LogoutButton onLogout={onLogout} />
    </>
  );
};

export default UserMainView;
