"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/store/modal/modal-store";
import { useAuthState } from "@/store/auth/auth-store";

export const GetProfile = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { user } = useAuthState();


  const isProfileModalOpen = isOpen && type === "getProfile";

 

  return (
    <Dialog open={isProfileModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-gray-900 p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">Perfil del Usuario</DialogTitle>
            <DialogDescription className="text-center text-gray-400">
              Aquí está la información de tu perfil
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 space-y-4">
          <p><strong>Id:</strong> {user?.id}</p>
            <p><strong>Nombre:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Rol:</strong> {user?.role}</p>
          </div>
          <div className="flex justify-center py-4">
            <Button onClick={onClose} variant={"primary"}>
              Cerrar
            </Button>
          </div>
        </DialogContent>
      
    </Dialog>
  );
};
