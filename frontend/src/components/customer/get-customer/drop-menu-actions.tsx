import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useModal } from "@/store/modal/modal-store";
import { MoreHorizontal } from "lucide-react";
import { Customer } from "@/interfaces";

interface DropdownMenuActionsProps {
  customer: Customer;
}

export const DropdownMenuActions: React.FC<DropdownMenuActionsProps> = ({ customer }) => {
  const { onOpen } = useModal();

  const handleEditClick = () => {
    onOpen("updateCustomer", { customer });
  };


  const handleDeleteClick = () => {
    onOpen("deleteCustomer", { customer });
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-bold">Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleEditClick}>Editar</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteClick}>Eliminar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
