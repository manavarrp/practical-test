import { postCustomerService } from "@/service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

interface CustomerParams {
    identificationNumber: string;
    name: string;
    lastName: string;
    occupationId: number;
}

export const UsePostCustomer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const postCustomer  = useCallback(async ({ identificationNumber, name, lastName, occupationId }: CustomerParams) => {
        try {
            setIsLoading(true);
            const response = await postCustomerService({ identificationNumber, name, lastName, occupationId });
            toast.success('El cliente se ha creado exitosamente');
            return response.data;
        } catch (error) {
            console.error('Error al crear el cliente:', error);
        } finally {
            setIsLoading(false);
        }
    }, []); 
    return { postCustomer, isLoading };

}