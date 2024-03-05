import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-red-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          className=" bg-red-500 font-bold text-white hover:bg-red-600 hover:text-white"
        >
          Log In
        </Button>
      )}
    </span>
  );
};
