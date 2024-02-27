import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

export const Nav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <span>
          <UsernameMenu />
        </span>
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
