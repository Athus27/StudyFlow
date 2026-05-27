import React from "react";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ProtectedRouted } from "./ProtectedRouted";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootRedirect = () => {
  const navigate = useNavigate();
  //redireciona para /login ou dashboard dependendo se o usuário estiver logado ou não
  const isLoggedIn = false; //aqui você pode verificar se o usuário está logado ou não
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return null;
};

const router = createBrowserRouter([
  //se tiver em / redireciona para /login ou dashboard dependendo se o usuário estiver logado ou não
  { path: "/", element: <RootRedirect /> },
  { path: "/login", element: <Login /> },
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
