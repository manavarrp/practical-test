import { postCustomerService, putCustomerService } from "@/service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

interface CustomerParams {
    identificationNumber: string;
    name: string;
    lastName: string;
    occupationId: number;
}

export const UsePutCustomer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const putCustomer  = useCallback(async ({ identificationNumber, name, lastName, occupationId }: CustomerParams) => {
        try {
            setIsLoading(true);
            const response = await putCustomerService({ identificationNumber, name, lastName, occupationId });
            toast.success('El cliente se ha actualizado exitosamente');
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
        } finally {
            setIsLoading(false);
        }
    }, []); 
    return { putCustomer, isLoading };

}