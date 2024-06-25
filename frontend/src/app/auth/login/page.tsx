import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Test | Inicio de Sesión",
  description: "Sign in to your account",
};

const LoginPage = () => {
  return ( <LoginForm />
  )
}

export default LoginPage