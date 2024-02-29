import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-red-500">
          <CircleUserRound className="text-red-500" />
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className="font-bold hover:text-red-500"
              to="/manage-restaurant"
            >
              Manage Restaurant
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="font-bold hover:text-red-500" to="/user-profile">
              User Profile
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo:
                      "https://food-delivery-app-frontend-8435.onrender.com",
                  },
                })
              }
              className="flex flex-1 bg-red-500 hover:bg-red-600"
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
