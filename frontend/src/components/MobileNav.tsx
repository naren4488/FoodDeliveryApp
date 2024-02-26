import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-red-500">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className=" mt-5 space-y-3">
          <SheetTitle>
            <span>Welcome to FoodDeliveryApp!</span>
          </SheetTitle>
          <Separator />
          <SheetDescription>
            <Button className=" w-full bg-red-500 font-bold hover:bg-red-600">
              Log In
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
