import React from "react";
import { Meteor } from "meteor/meteor";

const handleLogin = (event) => {
  // impede o comportamento padrão do navegador.que seria recarregar a página
  event.preventDefault();
  //event.target representa o formulário. Aqui acessamos os inputs pelo atributo "name". */
  const username = event.target.username.value;
  const password = event.target.password.value;
  //Método do Meteor responsável por autenticar o usuário. Ele envia username e password para o servidor. Se os dados estiverem corretos, o usuário é logado.
  Meteor.loginWithPassword(username, password);
  console.log(
    "Login attempted with username:",
    username,
    "and password:",
    password,
  );
};

export const Login = () => {
  return (
    <div className="login-page">
      <h1 className="text-center">Enter Your Credentials</h1>
      {/* // esse é o formulário padrão para meteor */}
      <form className="login-form" onSubmit={handleLogin}>
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
      </form>
    </div>
  );
};
