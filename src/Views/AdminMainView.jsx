import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";

const AdminMainView = () => {
  const [showRequests, setShowRequests] = useState(false);
  return (
    <>
      <Typography>Admin Main View</Typography>
      <Button onClick={() => setShowRequests(!showRequests)}>
        Show Registration Requests
      </Button>
      {showRequests && <RegistrationRequests />}
    </>
  );
};

export default AdminMainView;
