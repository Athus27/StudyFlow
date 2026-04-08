import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Header } from "../Header";

export const Login = () => {
  const [error, setError] = useState("");
  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username"))
    const password = String(formData.get("password"))

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        setError(err.message); 
      } else {
        console.log("login efetuado com sucesso");
      }
    });
  };

  return (
    <div>
      <Header />

      <div className="user-page">
        <h1 className="text-center">Enter Your Credentials</h1>

        <form className="input-form" onSubmit={handleLogin}>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className="button" type="submit">
            Login
          </button>
          <Link to="/register" className="link-style">
            Não cadastrado? Clique aqui para registrar-se
          </Link>
        </form>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
console.log(Meteor.userId());
