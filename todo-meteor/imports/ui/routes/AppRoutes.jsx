import React from "react";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ProtectedRouted } from "./ProtectedRouted";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    element: <ProtectedRouted />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboards", element: <User /> },
      { path: "/user", element: <User /> },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
