import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
  title: string;
}
const Header = ({ label, title }: HeaderProps) => {
  return (
    <section className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1>
      <article>
        <p className="text-muted-foreground text-sm">{label}</p>
      </article>
    </section>
  );
};

export default Header;
