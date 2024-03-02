import { useSearchRestaurant } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurant(city);

  return (
    <div>
      SearchPage with {city}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            found : {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </div>
  );
};

export default SearchPage;
