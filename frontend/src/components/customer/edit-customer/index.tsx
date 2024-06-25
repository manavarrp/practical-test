"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useModal } from "@/store/modal/modal-store";
import { UsePutCustomer } from "@/hooks/usePutCustomer";
import { UseGetOccupation } from "@/hooks/useGetOccupation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Occupations } from "@/interfaces";
import { CustomerSchema } from "@/shemas";
import { useEffect } from "react";

export const EditCustomer = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const { putCustomer, isLoading } = UsePutCustomer();
  const isModalOpen = isOpen && type === "updateCustomer";
  const { result } = UseGetOccupation();
  const { customer } = data;

  const form = useForm({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      identificationNumber: "",
      name: "",
      lastName: "",
      occupationId: 0,
    },
  });

  useEffect(() => {
    console.log("customer", customer);  
    if (customer) {
      form.setValue("identificationNumber", customer.identificationNumber);
      form.setValue("name", customer.name);
      form.setValue("lastName", customer.lastName);
      form.setValue("occupationId", customer.occupationId);
    }
  }, [customer, form]);
  const onSubmit = async (values: z.infer<typeof CustomerSchema>) => {
    try {
      await putCustomer(values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Editar Cliente
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Por favor completa los siguientes campos.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4 px-6">
              <FormField
                control={form.control}
                name="identificationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de identificación</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder="Ingresa número de identificación"
                        {...field}
                        type="text"
                        className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel >
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                        placeholder="Ingresa el nombre"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Apellidos
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                        type="text"
                        placeholder="Ingresa los apellidos"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occupationId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ocupación</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isLoading}
                        value={field.value.toString()}
                        onValueChange={(value) => field.onChange(Number(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una ocupación" />
                        </SelectTrigger>
                        <SelectContent>
                          {result.map((occupation: Occupations) => (
                            <SelectItem
                              key={occupation.id}
                              value={occupation.id.toString()}
                            >
                              {occupation.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading} variant={"primary"}>
                Actualizar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
