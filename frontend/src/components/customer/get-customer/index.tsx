"use client";

import { useModal } from "@/store/modal/modal-store";
import { UseGetCustomer } from "@/hooks/useGetCustomer";
import { useEffect } from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./column";

const Customer = () => {
  const { result, getCustomer } = UseGetCustomer();
  const {  isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      getCustomer();
    }
  }, [isOpen, getCustomer]);

  return (
    <div className="dark:bg-zinc-700/70 bg-gray-200/30 p-2 h-[40%] md:ml-4">
      <div className="flex justify-between items-center">

      </div>
      <DataTable columns={columns} data={result} />
    </div>
  );
};

export default Customer;
