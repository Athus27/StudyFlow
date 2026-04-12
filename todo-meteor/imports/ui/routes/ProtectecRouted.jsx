import React from "react";
import { Meteor } from "meteor/meteor";
import { Navigate } from "react-router-dom";

/**
 * @param {{ children: React.ReactNode }} props
 */
export const ProtectedRouted = ({ children }) => {
  const isAuthenticated = !!Meteor.userId();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
