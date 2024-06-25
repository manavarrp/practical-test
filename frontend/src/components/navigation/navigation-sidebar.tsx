"use client";

// components/NavigationSidebar.tsx
import { Separator } from "@/components/ui/separator";
import NavigationLogo from "./navigation-logo";
import Link from "next/link";
import NavigationItems from "./navigation-items";



import { Button } from "@/components/ui/button"; // Assumes you have a button component
import { useRouter } from "next/navigation";
import { useAuthState } from "@/store/auth/auth-store";

const NavigationSidebar = () => {
  const router = useRouter();
  const { logOut } = useAuthState();

  const handleLogOut = () => {
    logOut();
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5] justify-between">
      <div>
        <Link href={"/"}>
          <NavigationLogo />
        </Link>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        <NavigationItems />
      </div>
      <div className="flex mb-10 justify-center">
        <Button onClick={handleLogOut} variant={"destructive"}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default NavigationSidebar;
