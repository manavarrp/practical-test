""
import { Inter } from "next/font/google";

import "../globals.css";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { ModalProvider } from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="h-screen">
          <div className="hidden sm:flex w-60 z-20 flex-col inset-y-0 fixed">
            <NavigationSidebar />
          </div>
          <main className="md:ml-60 p-0">
            <ToastProvider>{children}</ToastProvider>
          </main>
        </div>
        <ModalProvider />
      </body>
    </html>
  );
}
