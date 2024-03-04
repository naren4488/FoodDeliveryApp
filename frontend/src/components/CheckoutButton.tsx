import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLaoding,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className=" flex-1 bg-red-500 hover:bg-red-600">
        Login to checkout
      </Button>
    );
  }

  if (isAuthLaoding) {
    return <LoadingButton />;
  }

  return (
    <Button className="flex-1 bg-red-500 hover:bg-red-600">Checkout</Button>
  );
};

export default CheckoutButton;
