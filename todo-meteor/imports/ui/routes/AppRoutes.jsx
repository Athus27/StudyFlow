import React from "react";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ProtectedRouted } from "./ProtectecRouted";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<ProtectedRouted>
            <Dashboard/>
          </ProtectedRouted>}
        />
        <Route
          path="/user"
          element={<ProtectedRouted>
            <User />
          </ProtectedRouted>}
        />
      </Routes>
    </BrowserRouter>
  );
};
