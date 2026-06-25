// src/pages/Register/Register.jsx
import React, { useEffect, useState } from "react";
import { useRegister } from "../hooks/useRegister.js";
import { RegisterPage } from "./Register/RegisterPage.jsx";
import { recuperarListaDeEstados, recuperarListaDeCidades } from "../../api/locations/locations.js";

export const Register = () => {
	const { register, error, loading } = useRegister();

	const [estadoSelecionado, setEstadoSelecionado] = useState("");
	const [listaEstados, setListaEstados] = useState([]);
	const [listaCidades, setListaCidades] = useState([]);

	useEffect(() => {
		recuperarListaDeEstados()
			.then((dados) => setListaEstados(dados)) // Salva no React
			.catch((err) => console.error("[Register] falha ao carregar estados:", err));
	}, []);

	/** @param {React.ChangeEvent<HTMLSelectElement>} event */
	const handleEstadoChange = (event) => {
		const estadoId = event.currentTarget.value;

		setEstadoSelecionado(estadoId); // Libera o select de cidades na tela
		if (!estadoId) return;

		// 3. Busca as cidades do estado selecionado
		recuperarListaDeCidades(estadoId)
			.then((dados) => setListaCidades(dados)) // Salva as cidades no React
			.catch((err) => console.error("[Register] falha ao carregar cidades:", err));
	};

	/** @param {HTMLFormElement} formElement */
	const buildRegisterData = (formElement) => {
		const formData = new FormData(formElement);
		return {
			username: String(formData.get("username")),
			email: String(formData.get("email")),
			password: String(formData.get("password")),
			confirmPassword: String(formData.get("confirmPassword"))
		};
	};

	/** @param {React.FormEvent<HTMLFormElement>} event */
	const handleRegister = async (event) => {
		event.preventDefault();
		const registerData = buildRegisterData(event.currentTarget);

		console.log("Dados que serao enviados:", registerData);

		const result = await register(registerData);
		if (result.success) {
			event.currentTarget.reset();
			setEstadoSelecionado("");
		}
	};

	return (
		<RegisterPage
			error={error}
			loading={loading}
			onSubmit={handleRegister}
			onEstadoChange={handleEstadoChange}
			estadoSelecionado={estadoSelecionado}
			listaEstados={listaEstados} // Enviando os arrays para o HTML
			listaCidades={listaCidades}
		/>
	);
};
