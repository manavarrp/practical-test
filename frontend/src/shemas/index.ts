import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo invalido",
  }),
  password: z.string().min(3, { message: "Contraseña requerida" }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
      message: "Correo es requerido",
    }),
    name: z.string().min(1, { message: "Nombre es requerido" }),
    lastName: z.string().min(1, { message: "Nombre es requerido" }),
    password: z.string().min(6, { message: "Minimo 6 caracteres" }),
    confirmPassword: z.string().min(6, { message: "Minimo 6 caracteres" }),
  });

  export const CustomerSchema = z.object({
    identificationNumber: z.string().min(1, { message: "Numero de identificación es requerido" }),
    name: z.string().min(1, { message: "El nombre es requerido" }),
    lastName: z.string().min(1, { message: "El apellido es requerido" }),
    occupationId: z.number().min(1, { message: "La ocupación es requerida" }),
  });
  