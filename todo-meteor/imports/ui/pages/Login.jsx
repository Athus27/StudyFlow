// erro: useEffect dentro de função (proibido) + return null inútil
// correto (profissional)

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Header } from "../components/common/Header";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  /** @param {HTMLFormElement} event */
  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        setError(err.message);
      } else {
        console.log("login efetuado com sucesso");
        navigate("/dashboard"); 
      }
    });
  };

  return (
    <div>
      <Header />

      <div className="user-page">
        <h1 className="text-center">Enter Your Credentials</h1>

        <form className="input-form" onSubmit={handleLogin}>
          <input className="input" type="text" name="username" placeholder="Username" />
          <input className="input" type="password" name="password" placeholder="Password" />

          <button className="button" type="submit">Login</button>

          <Link to="/register" className="link-style">
            Não cadastrado? Clique aqui para registrar-se
          </Link>
        </form>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};