import RegisterForm from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test | Registro",
  description: "Sign in to your account",
};


const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
