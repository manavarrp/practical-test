"use client";

import { useForm } from "react-hook-form";
import CardWrapped from "../commons/card-wrapped";
import { z } from "zod";
import {  RegisterSchema } from "@/shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useRegister from "@/hooks/useRegister";


const RegisterForm = () => {
const { register, isLoading } = useRegister();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",

    },
  });

  const onSubmit =async (values: z.infer<typeof RegisterSchema>) => {
    try {
      await register(values);
      // Redirige al dashboard u otra página después del inicio de sesión
      
    } catch (error) {
      console.error('Register error:', error);
      // Maneja el error de inicio de sesión
    }
  };
  return (
    <CardWrapped
      headerLabel="Registrarse"
      backButtonLabel="¿Ya tienes una cuenta?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Ingresa tu nombre"
                      type="text"
                      className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
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
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Ingresa tu apellido"
                      type="text"
                      className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Ingresa tu correo"
                      type="email"
                      className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Ingresa tu password"
                      type="password"
                      className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verificar Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Ingresa tu password"
                      type="password"
                      className=" text-gray-900 text-sm  focus:border-blue-900 w-full focus-visible:ring-0 focus-visible:ring-offset"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
          <Button disabled={isLoading} className="w-full" type="submit" variant={"primary"}>
            Guardar
          </Button>
        </form>
      </Form>
    </CardWrapped>
  );
};

export default RegisterForm;
