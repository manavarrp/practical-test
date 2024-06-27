import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { RegisterParams, RegisterResponse } from "@/interfaces";
import { registerService } from "@/service";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const register = useCallback(
    async ({
      name,
      lastName,
      email,
      password,
      confirmPassword,
    }: RegisterParams): Promise<void> => {
      try {
        setIsLoading(true);
        const response: RegisterResponse = await registerService({
          name,
          lastName,
          email,
          password,
          confirmPassword,
        });

        if (response.flag) {
          toast.success(response.message || "Registro exitoso");
          router.push("/auth/login");
        } else {
          throw new Error(response.message || "Registro fallido");
        }
      } catch (error: unknown) {
        if (isAxiosError(error) && error.response) {
          const backendErrorMessage = error.response.data.message;
          toast.error(backendErrorMessage || "Error inesperado en el servidor");
        } else {
          toast.error("Error de red o desconocido");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  return { register, isLoading };
};

export default useRegister;
