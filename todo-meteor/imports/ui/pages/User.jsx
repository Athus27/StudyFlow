import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";

export const User = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const currentUser = Meteor.user();

  const handleLogout = () => {
    Meteor.logout((err) => {
      if (err) {
        setError(err.message);
        return;
      }

      navigate("/");
    });
  };

  return (
    <div>
      <Header />

      <div className="user-page">
        <h1 className="text-center">Minha Conta</h1>
        <p>Usuário: {currentUser?.username || "-"}</p>
        <p>Email: {currentUser?.emails?.[0]?.address || "-"}</p>

        <button type="button" className="button" onClick={handleLogout}>
          Sair da conta
        </button>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
