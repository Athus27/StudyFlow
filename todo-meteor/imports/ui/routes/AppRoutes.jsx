import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ProtectedRouted } from "./ProtectedRouted";
import { routePaths } from "./routePaths";

const RootRedirect = () => {
  const navigate = useNavigate();
  //redireciona para /login ou dashboard dependendo se o usuário estiver logado ou não
  const isLoggedIn = false; //aqui você pode verificar se o usuário está logado ou não
  useEffect(() => {
    if (isLoggedIn) {
      navigate(routePaths.dashboard, { replace: true });
    } else {
      navigate(routePaths.login, { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return null;
};

const router = createBrowserRouter([
  //se tiver em / redireciona para /login ou dashboard dependendo se o usuário estiver logado ou não
  { path: routePaths.root, element: <RootRedirect /> },
  { path: routePaths.login, element: <Login /> },
  { path: routePaths.register, element: <Register /> },
  {
    element: <ProtectedRouted />,
    children: [
      { path: routePaths.dashboard, element: <Dashboard /> },
      { path: routePaths.dashboards, element: <User /> },
      { path: routePaths.user, element: <User /> },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
