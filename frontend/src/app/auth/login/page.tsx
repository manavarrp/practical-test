import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Test | Inicio de Sesión",
  description: "Inicio de Sesión",
};

const LoginPage = () => {
  return ( <LoginForm />
  )
}

export default LoginPage