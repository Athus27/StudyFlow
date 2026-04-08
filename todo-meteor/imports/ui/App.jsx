import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./Counter.jsx";
import { Header } from "./Header.jsx";
import { Info } from "./Info.jsx";
import { Register } from './pages/Register';
// todo-meteor\temp\react-tests\TestTask.jsx
import { TestTask } from "../../temp/react-tests/TestTask.jsx";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
// tudo depois do => é o que a função retorna

//rafce cria componente rápido
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
