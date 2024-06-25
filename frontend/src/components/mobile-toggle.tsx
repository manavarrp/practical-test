import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavigationSidebar from "./navigation/navigation-sidebar";

export const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 flex gap-0">
        <NavigationSidebar />
      </SheetContent>
    </Sheet>
  );
};
