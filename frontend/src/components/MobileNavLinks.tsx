import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-4">
      <Link
        className="flex items-center bg-white font-bold hover:text-red-500"
        to="/user-profile"
      >
        User Profile
      </Link>
      <Button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo: "https://food-delivery-app-frontend-8435.onrender.com",
            },
          })
        }
        className="flex flex-1 bg-red-500 hover:bg-red-600"
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
