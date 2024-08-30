import { Card } from "@/components/Card";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { useGetAllCarsQuery } from "@/redux/Feature/Api/carApi";
import { TCar } from "@/Utills/type";
import { useState } from "react";
import Hero from "./Hero";
function Products() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data, isLoading, isError } = useGetAllCarsQuery(searchTerm);
  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  let cars = data?.data;

  if (minPrice) {
    cars = cars?.filter((car) => car?.pricePerHour >= parseInt(minPrice));
  }
  if (maxPrice) {
    cars = cars?.filter((car) => car?.pricePerHour <= parseInt(maxPrice));
  }
  return (
    <div className="max-w-[1280px] mx-auto px-10">
      <Hero></Hero>
      <h2 className="text-3xl text-center mr-16 pt-16 font-montserrat text-[#333333]">
        Your Next Car is Just a Click Away!
      </h2>
      <div className="flex mt-8 justify-between">
        <SearchBar setSearchTerm={setSearchTerm} className="h-10"></SearchBar>
        <Filter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        ></Filter>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-12">
        {cars &&
          cars?.map((car: TCar) => <Card key={car?._id} item={car}></Card>)}
      </div>
    </div>
  );
}
export default Products;
