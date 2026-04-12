import { useState } from "react";
import { Meteor } from "meteor/meteor";
import { RegisterSchema } from "../../api/schemas/user.schema";

const INITIAL_STATE = {
  error: "",
  loading: false,
};

/**
 * @param {string | number | undefined} code
 * @param {string | undefined} reason
 * @returns {string}
 */
const mapServerErrorCode = (code, reason) => {
  /** @type {Record<string, string>} */
  const errorMap = {
    "email-already-exists": "Este e-mail ja esta em uso.",
    "username-already-exists": "Este username ja esta em uso.",
    "user-already-exists": "E-mail ou username ja cadastrado.",
    "password-too-short": "Senha muito curta.",
    "password-mismatch": "As senhas nao coincidem.",
  };

  const normalizedCode = typeof code === "string" ? code : "";

  if (normalizedCode && errorMap[normalizedCode]) {
    return errorMap[normalizedCode];
  }

  if (
    String(reason || "")
      .toLowerCase()
      .includes("something went wrong. please check your credentials")
  ) {
    return "E-mail ou username ja cadastrado.";
  }

  return reason || "Erro interno no servidor.";
};

// função Hook
export const useRegister = () => {
  const [state, setState] = useState(INITIAL_STATE);

  /**
   * @param {Record<string, unknown>} formDataObject
   * @returns {Promise<{ success: boolean }>}
   */
  const register = async (formDataObject) => {
    setState(INITIAL_STATE);
    setState((currentState) => ({ ...currentState, loading: true }));

    try {
      const validationResult = RegisterSchema.safeParse(formDataObject);

      if (!validationResult.success) {
        const firstIssue = validationResult.error.issues[0];
        const message = firstIssue?.message || "Dados invalidos.";

        setState({ error: message, loading: false });
        return { success: false };
      }

      const validatedData = validationResult.data;

      await Meteor.callAsync("users.register", validatedData);

      setState({ error: "", loading: false });
      return { success: true };
    } catch (err) {
      console.error("[useRegister] register error:", err);

      const handledError = /** @type {any} */ (err);
      const message = mapServerErrorCode(
        handledError?.error,
        handledError?.reason || handledError?.message,
      );

      setState({ error: message, loading: false });
      return { success: false };
    }
  };
  //copia tudo que ta no state e register adiciona a função register no mesmo objeto
  return { ...state, register };
};
