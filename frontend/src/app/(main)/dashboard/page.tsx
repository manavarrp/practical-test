
import Customer from "@/components/customer/get-customer";
import CreateCustomerButton from "@/components/customer/get-customer/create-customer-button";
import HeaderComponent from "@/components/header-component";
import { Users } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Test | Dashboard",
  description: "Gestion de Clientes",
};

const DashboradPage = () => {
  return (
    <>
    <div className="flex justify-around md:justify-between">
      <HeaderComponent
        title="Clientes"
        icon={<Users className=" w-10 h-10 text-blue-900 dark:text-zinc-400" />}
      />
      <CreateCustomerButton />

    </div>
      <div className=" h-[40%] md:w-[98%]">
        <Customer />
      </div>
    </>
  );
};

export default DashboradPage;
