import { CircleUserRound, Menu } from "lucide-react";
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
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

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
            {isAuthenticated ? (
              <span className="flex items-center gap-2 font-bold">
                <CircleUserRound className="text-red-500" />
                {user?.email}
              </span>
            ) : (
              <span>Welcome to FoodDeliveryApp!</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription>
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className=" w-full bg-red-500 font-bold hover:bg-red-600"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
