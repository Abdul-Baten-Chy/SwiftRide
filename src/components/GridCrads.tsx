import { useGetAllCarsQuery } from "@/redux/Feature/Api/carApi";
import { TCar } from "@/Utills/type";
import { Card } from "./Card";

export function GridCards() {
  const { data, isLoading, isError } = useGetAllCarsQuery(undefined);

  const cars = data?.data
    ?.filter((item) => item.isElectric == true)
    .slice(0, 7);
  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2> {data?.message}</h2>;
  console.log(cars);
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-10 mt-20">
        <h3 className="font-montserrat text-3xl font bold text-black font-bold">
          <span className="text-customBlue">Feat</span>ured Cars
        </h3>
        <div className="w-[64px] border-b-2 border-blue-400 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {cars &&
            cars.map((car: TCar) => <Card key={car._id} item={car}></Card>)}
        </div>
      </div>
    </div>
  );
}
