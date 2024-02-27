import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

export const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        onClick={async () => await loginWithRedirect()}
        className=" bg-red-500 font-bold text-white hover:bg-red-600 hover:text-white"
      >
        Log In
      </Button>
    </div>
  );
};
