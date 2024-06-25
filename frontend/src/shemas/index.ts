import * as z from "zod";

 // Reglas de validación de la contraseña
const passwordRules = z.string()
.min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
.max(16, { message: "La contraseña no debe tener más de 16 caracteres" })
.regex(/[0-9]/, { message: "La contraseña debe contener al menos un dígito" })
.regex(/[a-z]/, { message: "La contraseña debe contener al menos una letra minúscula" })
.regex(/[A-Z]/, { message: "La contraseña debe contener al menos una letra mayúscula" })
.regex(/[^a-zA-Z0-9]/, { message: "La contraseña debe contener al menos un carácter no alfanumérico" });


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
  lastName: z.string().min(1, { message: "Apellido es requerido" }),
  password: passwordRules,
  confirmPassword: passwordRules
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], 
});

  export const CustomerSchema = z.object({
    identificationNumber: z.string().min(1, { message: "Numero de identificación es requerido" }),
    name: z.string().min(1, { message: "El nombre es requerido" }),
    lastName: z.string().min(1, { message: "El apellido es requerido" }),
    occupationId: z.number().min(1, { message: "La ocupación es requerida" }),
  });
  



