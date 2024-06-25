import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { registerService } from "@/service";
import { useRouter } from "next/navigation";

interface RegisterParams {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  flag: boolean;
  message?: string;
  errors?: Record<string, string>; 
}

interface BackendError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const isBackendError = (error: unknown): error is BackendError => {
  return typeof error === 'object' && error !== null && 'response' in error;
};

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
          toast.success("Registro exitoso");
          router.push("/auth/login");
        } 
      } catch (error: unknown) {
        if (isBackendError(error)) {
          const backendErrorMessage = error.response?.data?.message;
    
          if (backendErrorMessage) {
            toast.error(backendErrorMessage);
          }
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
