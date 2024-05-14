import React from "react";
import { useParams } from "react-router-dom";

const AdminActivityView = () => {
  const { id } = useParams();
  return <div>AdminActivityView con is = {id}</div>;
};

export default AdminActivityView;
