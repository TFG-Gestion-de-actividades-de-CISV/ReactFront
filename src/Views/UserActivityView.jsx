import React from "react";
import { useParams } from "react-router-dom";

const UserActivityView = () => {
  const { id } = useParams();

  return <div>UserActivityView con is = {id}</div>;
};

export default UserActivityView;
