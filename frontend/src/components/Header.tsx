import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-red-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          className="text-3xl font-semibold tracking-tight text-red-500"
          to={"/"}
        >
          FoodDeliveryApp
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="max-sm:hidden">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
