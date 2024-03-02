import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClicked: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClicked: onExpandedClick,
}: Props) => {
  const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisineList);
  };
  const handleCuisinesReset = () => {
    onChange([]);
  };
  return (
    <>
      <div className=" flex items-center justify-between px-2">
        <div className=" mb-2 font-semibold ">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="mb-2 cursor-pointer text-sm font-semibold text-blue-500 underline"
        >
          Reset Filter
        </div>
      </div>
      <div className=" flex flex-col space-y-2">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  type="checkbox"
                  className="hidden"
                  id={`cuisine_${cuisine}`}
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisineChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 cursor-pointer items-center rounded-full px-4 py-2 
                text-sm font-semibold ${
                  isSelected
                    ? "border border-green-600 text-green-600 "
                    : "border border-slate-500"
                }`}
                >
                  {isSelected && <Check strokeWidth={3} size={20} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
