import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const [showLinks, setShowLinks] = useState(false);
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
					<img src="/assets/icons/logo.svg" className="logo" />
					<h1 className="img-link">StudyFlow</h1>
					{/* transformando imagem em um menu */}
					<div className="nav-links">
						<button type="button" onClick={() => setShowLinks((current) => !current)}>
							<img src="/assets/icons/menu-icon.svg" alt="Menu" className="w-6 h-6" />
						</button>
						{showLinks && (
							<div className="top-menu">
								<a href="/" className="nav-link">
									Home
								</a>
								<a href="/about" className="nav-link">
									About
								</a>
								<a href="/contact" className="nav-link">
									Contact
								</a>
							</div>
						)}
					</div>
				</div>
				{shouldShowUserButton && (
					<button type="button" className="user-button" onClick={handleUserClick} aria-label="Abrir página do usuário">
						<img src="/assets/icons/user-icon.svg" alt="User" className="user-icon" />
					</button>
				)}
			</nav>
		</div>
	);
};
