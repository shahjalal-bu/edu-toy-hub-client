import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import GlobalSpinner from "../components/GlobalSpinner";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  

  if (loading) {
    return <GlobalSpinner />;
  }
  if (!currentUser) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PublicRoute;
