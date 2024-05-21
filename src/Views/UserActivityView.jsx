import React from "react";
import { useParams } from "react-router-dom";
import NinosInscriptionForm from "../Components/NinosInscriptionForm";

const UserActivityView = () => {
  const { id } = useParams();

  return (
    <>
      <div>UserActivityView con is = {id}</div>

      <NinosInscriptionForm />
    </>
  );
};

export default UserActivityView;
