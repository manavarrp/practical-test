"use client";

import { useForm } from "react-hook-form";
import CardWrapped from "../commons/card-wrapped";
import { z } from "zod";
import { LoginSchema } from "@/shemas";
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
import useLogin from "@/hooks/useLogin";



const LoginForm = () => {
  const { login, isLoading } = useLogin();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
console.log('proces', process.env.JWT_SECRET)
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    try {
      await login(values);
      // Redirige al dashboard u otra página después del inicio de sesión
      
    } catch (error) {
      console.error('Login error:', error);
      // Maneja el error de inicio de sesión
    }
  };
  return (
    <CardWrapped
      headerLabel="Bienvenido"
      backButtonLabel="¿No tienes una cuenta?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
          </div>

          <Button disabled={isLoading} className="w-full" type="submit" variant={"primary"}>
            Ingresar
          </Button>
        </form>
      </Form>
    </CardWrapped>
  );
};

export default LoginForm;
