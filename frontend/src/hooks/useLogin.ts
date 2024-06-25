import { useCallback, useState } from "react";
import axios from "@/axios";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginParams {
  email: string;
  password: string;
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const login = useCallback(
    async ({ email, password }: LoginParams): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await axios.post("/Account/login", {
          email,
          password,
        });
        const { flag, token, message } = response.data;

        if (flag && token) {
          toast.success("Bienvenido");
          // Establecer el token JWT en las cookies
          Cookies.set("token", token, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
          });

          // Redirigir al usuario al dashboard
          router.push("/dashboard");
          setIsLoading(false);
          
        } else {
          throw new Error(message || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error); 
        toast.error("Credenciales invalidas");
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  return { login, isLoading };
};

export default useLogin;
