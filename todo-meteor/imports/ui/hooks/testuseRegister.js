// Simule o schema (exemplo simples)
// @ts-nocheck // Ignora erros de tipagem (ex: uso de 'any') neste arquivo
// Explicação: Adicionando '@ts-nocheck' no topo, o TypeScript ignora todos os erros de tipo, útil para playgrounds JS.
const RegisterSchema = {
  safeParse: (data) => {
    if (!data.email) {
      return {
        success: false,
        error: { issues: [{ message: "Email obrigatório." }] },
      };
    }
    return { success: true, data };
  },
};



// Função de erro
const mapServerErrorCode = (code, reason) => {
  const errorMap = {
    "email-already-exists": "Este e-mail ja esta em uso.",
    // ...outros erros
  };
  const normalizedCode = typeof code === "string" ? code : "";
  if (normalizedCode && errorMap[normalizedCode])
    return errorMap[normalizedCode];
  if (
    String(reason || "")
      .toLowerCase()
      .includes("something went wrong. please check your credentials")
  )
    return "E-mail ou username ja cadastrado.";
  return reason || "Erro interno no servidor.";
};

// Função fake para simular Meteor.callAsync
const fakeRegister = async (validatedData) => {
  console.log("hll")
  if (validatedData.email === "existe@email.com") {
    const err = {
      error: "email-already-exists",
      reason: "Email já cadastrado",
    };
    throw err;
  }
  return true;
};

// Função principal para testar
const register = async (formDataObject) => {
  try {
    const validationResult = RegisterSchema.safeParse(formDataObject);
    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0];
      const message = firstIssue?.message || "Dados invalidos.";
      console.log("Erro de validação:", message);
      return { success: false };
    }
    const validatedData = validationResult.data;
    await fakeRegister(validatedData);
    console.log("Registro bem-sucedido!");
    return { success: true };
  } catch (err) {
    const message = mapServerErrorCode(err?.error, err?.reason || err?.message);
    console.log("Erro de registro:", message);
    return { success: false };
  }
};

// Teste
register({ email: "" }); // Deve dar erro de validação
register({ email: "existe@email.com" }); // Deve dar erro de email já cadastrado
register({ email: "novo@email.com" }); // Deve registrar com sucesso
