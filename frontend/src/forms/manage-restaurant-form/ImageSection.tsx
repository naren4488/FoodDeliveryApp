import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control } = useFormContext();
  return (
    <div className=" space-y-2">
      <div>
        <h2 className="text-2xl font-bold ">Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search resuls. Adding a new image will overwrite the existing one.
        </FormDescription>
      </div>
      <div className="flex w-1/2 flex-col gap-8">
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white hover:cursor-pointer"
                  type="file"
                  accept=".jpeg, .jpg, .png, .webp"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
