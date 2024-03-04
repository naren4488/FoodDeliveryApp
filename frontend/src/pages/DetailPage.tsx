import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItemCard from "@/components/MenuItem";

import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  if (isLoading || !restaurant) {
    return "Loading...";
  }
  return (
    <div className="flex flex-col gap-10 ">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
      <div className=" grid gap-5 md:grid-cols-[4fr_2fr] md:px-32">
        <div className=" flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className=" text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItemCard menuItem={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
