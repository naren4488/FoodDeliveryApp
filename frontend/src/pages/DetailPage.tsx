import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItemCard from "@/components/MenuItemCard";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { MenuItem } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prevCartItems) => {
      // 1. check if item is already in cart
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id,
      );

      let updatedCartItem;
      // 2. if item is in cart -> update quantity
      // 3. if item not in cart -> add it as a new item
      if (existingCartItem) {
        updatedCartItem = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        updatedCartItem = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }
      return updatedCartItem;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItem = prevCartItems.filter(
        (item) => cartItem._id !== item._id,
      );

      return updatedCartItem;
    });
  };

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
            <MenuItemCard
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>
        <div className="">
          <Card>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
