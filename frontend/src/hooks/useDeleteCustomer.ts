import { deleteCustomerService } from "@/service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

interface DeleteCustomerParams {
  id: number;
}

export const UseDeleteCustomer = () => {
  const [isLoading, setLoading] = useState(false);

  const deleteCustomer = useCallback(async ({ id }: DeleteCustomerParams) => {
    try {
      setLoading(true);
      await deleteCustomerService(id);
      toast.success("El cliente ha sido eliminado");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { isLoading, deleteCustomer };
};
