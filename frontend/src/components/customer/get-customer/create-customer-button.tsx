"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/store/modal/modal-store";

const CreateCustomerButton = () => {
  const { onOpen } = useModal();

  return (
    <Button onClick={() => onOpen("createCustomer")} variant="primary" className="mt-20 mr-10">
      Crear cliente
    </Button>
  );
};

export default CreateCustomerButton;
