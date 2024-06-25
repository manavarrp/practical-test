"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/store/modal/modal-store";
import { UseDeleteCustomer } from "@/hooks/useDeleteCustomer";

export const DeleteCustomer = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "deleteCustomer";
  const { isLoading, deleteCustomer } = UseDeleteCustomer();

  const handleDelete = async () => {
    if (data.customer?.id) {
      await deleteCustomer({ id: data.customer.id });
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-red-900 p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">Eliminar Cliente</DialogTitle>
          <DialogDescription className="text-center text-red-400">
            ¿Estas seguro de eliminar este registro?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <Button disabled={isLoading} onClick={handleDelete} variant={"destructive"}>
            Eliminar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
