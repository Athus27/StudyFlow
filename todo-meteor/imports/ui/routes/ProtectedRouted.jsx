import React from "react";
import { Meteor } from "meteor/meteor";
import { Navigate, Outlet } from "react-router-dom";

/**
 * @param {{ children: React.ReactNode }} props
 */
export const ProtectedRouted = ({  }) => {
  const isAuthenticated = !!Meteor.userId();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
