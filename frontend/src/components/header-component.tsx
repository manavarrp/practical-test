import { MobileToggle } from "./mobile-toggle";

interface HeaderComponentProps {
  title: string;
  icon: React.ReactElement | undefined;
}

const HeaderComponent = ({ title, icon }: HeaderComponentProps) => {
  return (
    <section>
      <header
        className="md:hidden w-[100%] text-md font-semibold  flex justify-end items-center
         h-12 border-neutral-200 dark:border-neutral-800 border-b-1
          transition fixed top-0 z-50 bg-neutral-200/20 dark:bg-zinc-700/40"
      >
        {" "}
        <MobileToggle />
      </header>

      <div className="flex mt-20 ml-4 gap-4">
        {icon}
        <p className="text-blue-900 text-4xl mb-8 font-bold flex dark:text-zinc-400">
          {title}
        </p>
      </div>
    </section>
  );
};

export default HeaderComponent;
