import React from "react";
export const Header = () => {
  return (
    <div className="header">
      <nav className="nav container">
        <div className="logo-container">
          <img src="/logo.svg" className="logo" />
          <h1 className="logo-text">StudyFlow</h1>
        </div>

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
        <a>Login</a>
      </nav>
    </div>
  );
};
