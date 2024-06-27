import RegisterForm from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test | Registro",
  description: "Crea tu cuenta",
};


const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
