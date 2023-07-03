import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthenticated } from "../../redux/selectors";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector(getUserAuthenticated);
  console.log(" isAuthenticated :", user);
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
