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

import { CustomerSchema } from "@/shemas";
import { useModal } from "@/store/modal/modal-store";
import { UsePostCustomer } from "@/hooks/usePostCustomer";
import { UseGetOccupation } from "@/hooks/useGetOccupation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Occupations } from "@/interfaces";

export const CreateCustomer = () => {
  const { isOpen, onClose, type } = useModal();
  const { postCustomer, isLoading } = UsePostCustomer();
  const isModalOpen = isOpen && type === "createCustomer";
  const { result } = UseGetOccupation();

  const form = useForm({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      identificationNumber: "",
      name: "",
      lastName: "",
      occupationId: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof CustomerSchema>) => {
      await postCustomer(values);
      form.reset();
      onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Crear Cliente
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
                        disabled={isLoading}
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
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                        placeholder="Ingresa el nombre"
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
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
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
                Crear
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
