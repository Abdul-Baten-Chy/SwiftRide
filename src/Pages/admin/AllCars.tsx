import { useGetAllCarsQuery } from "@/redux/Feature/Api/carApi";
import { CarList } from "./CarList";

export function AllCars() {
  const { data, isLoading, isError } = useGetAllCarsQuery(undefined);
  if (isLoading) <p>Loading data...</p>;
  if (isError) <p>something went wrong...</p>;
  console.log(data?.data);

  return (
    <>
      <div className="mr-20">
        <h3 className="font-lato text-2xl text-center py-2 mb-6 bg-[#F0F1FF] mt-10 mx-auto ">
          All the Car available
        </h3>
        {data && <CarList cars={data?.data}></CarList>}
      </div>
    </>
  );
}
