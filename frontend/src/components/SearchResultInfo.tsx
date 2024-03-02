import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className=" flex flex-col justify-between gap-3 text-xl font-bold lg:flex-row lg:items-center">
      <span>
        {total} Restaurants found in {city}
        <Link
          className=" ml-1 cursor-pointer text-sm font-semibold text-blue-500 underline"
          to="/"
        >
          Change location
        </Link>
      </span>
      insert sort drowpdown here
    </div>
  );
};

export default SearchResultInfo;
