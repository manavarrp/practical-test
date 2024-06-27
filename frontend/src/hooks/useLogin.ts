import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import axios from "axios";
import { useAuthState } from "@/store/auth/auth-store";
import { LoginParams } from "@/interfaces";
import { loginService } from "@/service";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setAuthToken } = useAuthState();

  const login = useCallback(
    async ({ email, password }: LoginParams): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await loginService({ email, password });
        const { flag, token, message } = response;

        if (flag && token) {
          toast.success(message);
          setAuthToken(token);
          router.push("/dashboard");
        } else {
          throw new Error(message || "Login failed");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          const backendErrorMessage = error.response.data.message;
          toast.error(backendErrorMessage || "Error inesperado en el servidor");
        } else {
          toast.error("Error inesperado en el servidor");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [router, setAuthToken]
  );

  return { login, isLoading };
};

export default useLogin;
