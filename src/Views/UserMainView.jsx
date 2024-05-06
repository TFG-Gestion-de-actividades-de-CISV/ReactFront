import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegistrationRequests from "../Components/RegistrationRequests";

const UserMainView = () => {
  const [showRequests, setShowRequests] = useState(false);
  return (
    <>
      <Typography>User Main View</Typography>
    </>
  );
};

export default UserMainView;
