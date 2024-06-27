import { CustomerParams } from "@/interfaces";
import { postCustomerService } from "@/service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

export const UsePostCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postCustomer = useCallback(
    async ({
      identificationNumber,
      name,
      lastName,
      occupationId,
    }: CustomerParams) => {
      try {
        setIsLoading(true);
        const response = await postCustomerService({
          identificationNumber,
          name,
          lastName,
          occupationId,
        });
        toast.success(
          response.message || "El cliente se ha creado exitosamente"
        );
        return response.data;
      } catch (error: unknown) {
        if (isAxiosError(error) && error.response) {
          const backendErrorMessage = error.response.data.message;
          toast.error(backendErrorMessage || "Error inesperado en el servidor");
        } else {
          toast.error("Error inesperado en el servidor");
        }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { postCustomer, isLoading };
};
