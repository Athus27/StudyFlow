import React from "react";

const handleUserClick = () => {
  // Lógica para lidar com o clique no ícone do usuário
  console.log("User icon clicked!");
  
}


export const Header = () => {
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
        <a><img src="/user-icon.png" alt="User" className="user-icon" onClick={handleUserClick} /></a>
      </nav>
    </div>
  );
};
