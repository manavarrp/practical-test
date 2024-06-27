import LoginButton from "@/components/auth/login-button";
import GetProfileButton from "@/components/profile/get-profile-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main
    className="flex h-full flex-col items-center mt-20 justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
             from-sky-600 to-blue-900 height-screen"
  >
    <section className="space-y-6 text-center">
      <h1
        className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className
        )}
      >
        Sistema de Gestión
      </h1>
      <article>
        <p className="text-white text-lg">Contenido inicial</p>
      </article>
      <div className="flex justify-around mb-10">
        <LoginButton>
          <Button variant="secondary" size="lg">
            Clientes
          </Button>
        </LoginButton>
        <GetProfileButton />
      </div>
    </section>
  </main>
  );
}
