import { Button } from "./ui/button";
import { Input } from "./ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filter({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  // const handleCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedCategory = event.target.value;
  //   setCategory(selectedCategory === "all" ? null : selectedCategory);
  // };

  // const handlePriceRangeChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { name, value } = event.target;
  //   console.log(name, value);

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   setprice((prev: any) => ({
  //     ...prev,
  //     [name]: value === "" ? null : parseInt(value, 10),
  //   }));
  // };

  const handleReset = () => {
    setMaxPrice("");
    setMinPrice("");
  };
  return (
    <div className="flex gap-4">
      <div>
        <label className="font-lato text-[#333333]">
          <Input
            className="border border-green-300 min-h-8 rounded-full font-lato ml-4"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Minimum Price"
          />
        </label>
      </div>
      <div>
        <label className="font-lato text-[#333333]">
          <Input
            className="border border-green-300 min-h-8 rounded-full font-lato ml-4"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Maximum Price"
          />
        </label>
      </div>
      <div>
        <Button
          onClick={handleReset}
          className="min-h-8 font-lato bg-customBlue text-black font-semibold ml-4 hover:text-white"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Filter;
