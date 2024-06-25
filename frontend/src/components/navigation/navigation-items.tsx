"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Users } from "lucide-react";
import { Sheet, SheetClose } from "../ui/sheet";

const NavigationItems = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <div className="flex flex-col ml-2 mt-8 space-y-2">
        <SheetClose asChild>
          <Link href="/dashboard">
            <div
              className={cn(
                "px-2 py-2 rounded-md flex items-center gap-x-2 w-[90%] hover:bg-blue-800 hover:text-white dark:hover:bg-zinc-700/50 transition mb-1",
                pathname === "/dashboard"
                  ? "bg-blue-900 dark:bg-zinc-700 text-white"
                  : "text-blue-900 "
              )}
            >
              <Users className="flex-shrink-0 w-5 h-5  dark:text-zinc-400" />
              <p className="font-semibold text-sm   dark:text-zinc-400 dark:hover:text-zinc-300">
                Clientes
              </p>
            </div>
          </Link>
        </SheetClose>
      </div>
    </Sheet>
  );
};

export default NavigationItems;
