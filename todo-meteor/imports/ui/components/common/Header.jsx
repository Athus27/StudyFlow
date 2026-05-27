import React from "react";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
  //verificar se a url atual é a página de login ou registro para não mostrar o botão de usuário
  const atual_url = window.location.href;
  const shouldShowUserButton = !atual_url.includes("/register") && !atual_url.includes("/login");

  const handleUserClick = () => {
    navigate("/user");
  };

  return (
    <div className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src="/logo.svg" className="logo" />
          <h1 >StudyFlow</h1>
        </div>
        {/* 
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        */} 
        {shouldShowUserButton && (
          <button type="button" className="user-button" onClick={handleUserClick} aria-label="Abrir página do usuário">
            <img src="/user-icon.png" alt="User" className="user-icon" />
          </button>
        )}
      </nav>
    </div>
  );
};
