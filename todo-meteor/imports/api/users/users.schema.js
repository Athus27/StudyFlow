import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username deve ter no mínimo 3 caracteres")
      .trim(),
    email: z.string().email("E-mail inválido").toLowerCase().trim(),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
