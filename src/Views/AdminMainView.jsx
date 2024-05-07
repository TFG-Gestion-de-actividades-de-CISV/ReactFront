import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";
import LogoutButton from "../Components/LogoutButton";

const AdminMainView = ({ onLogout }) => {
  const [showRequests, setShowRequests] = useState(false);
  return (
    <>
      <Typography>Admin Main View</Typography>
      <LogoutButton onLogout={onLogout} />
      <Button onClick={() => setShowRequests(!showRequests)}>
        Show Registration Requests
      </Button>
      {showRequests && <RegistrationRequests />}
    </>
  );
};

export default AdminMainView;
