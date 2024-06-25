"use client";

import { CreateCustomer } from "@/components/customer/create-customer";
import { DeleteCustomer } from "@/components/customer/delete-customer";
import { EditCustomer } from "@/components/customer/edit-customer";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <CreateCustomer />
      <EditCustomer />
      <DeleteCustomer />
    </>
  );
};
