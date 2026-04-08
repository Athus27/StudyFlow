import React from "react";
import { useRegister } from "./Register/useRegister.js";
import { RegisterPage } from "./Register/RegisterPage.jsx";

export const Register = () => {
  const { register, error, loading } = useRegister();

  /** @param {HTMLFormElement} formElement */
  const buildRegisterData = (formElement) => {
    const formData = new FormData(formElement);

    return {
      username: String(formData.get("username")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      confirmPassword: String(formData.get("confirmPassword")),
    };
  };

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleRegister = async (event) => {
    event.preventDefault(); // impede reload da página (comportamento padrão do form)

    const result = await register(buildRegisterData(event.currentTarget));

    if (result.success) {
      event.currentTarget.reset();
    }
  };

  return <RegisterPage error={error} loading={loading} onSubmit={handleRegister} />;
};
