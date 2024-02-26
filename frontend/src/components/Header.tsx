import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-red-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-3xl tracking-tight text-red-500" to={"/"}>
          FoodDeliveryApp
        </Link>
      </div>
    </div>
  );
};

export default Header;
