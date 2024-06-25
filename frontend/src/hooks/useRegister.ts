// hooks/useLogin.ts
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
        const { flag, message } = await registerService({
          name,
          lastName,
          email,
          password,
          confirmPassword,
        });

        if (flag) {
            toast.success("Registro exitoso");
              router.push("/auth/login");
            // Redirigir a /auth/login después de 3 segundos
        } else {
          throw new Error(message || "Registration failed");
        }
      } catch (error) {
        console.error("Registration error:", error); 
        toast.error("Error en el registro");
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  return { register, isLoading };
};

export default useRegister;
