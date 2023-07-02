import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector(getUser);
  console.log(user);
  return user.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
