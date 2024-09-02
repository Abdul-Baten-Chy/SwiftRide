import { Button } from "@/components/ui/button";
import { useGetSingleCarQuery } from "@/redux/Feature/Api/carApi";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleCarQuery(id as string);
  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2> Something went wrong...</h2>;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" p-8  w-full max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={data?.data?.image}
              alt="Reebok Zig Kinetica 3"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-lato text-[#333333]">
              {data?.data?.name}
            </h2>
            <p className=" rounded-full mb-4 font-lato bg-customBlue font-semibold px-3 mt-2 py-1 inline-block text-black">
              Status: {data?.data?.status}
            </p>
            <div className="flex items-center mb-4 gap-2 flex-wrap">
              {data?.data?.features?.map((item, index) => (
                <Button
                  key={index}
                  className="font-lato text-[#333333] bg-[#F0F8FF]"
                >
                  {" "}
                  {item}
                </Button>
              ))}

              <span className="ml-2 text-gray-500 font-lato">(42 reviews)</span>
            </div>
            <p className="text-3xl font-bold mb-4 font-lato text-[#333333]">
              ${data?.data?.pricePerHour}
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 font-lato text-[#333333]">
                Color
              </h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-300 border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-black border border-gray-300 rounded-full cursor-pointer"></div>
              </div>
            </div>

            <Link to={`/checkout/${data?.data?._id}`}>
              {" "}
              <button className="w-full bg-black text-white py-3 rounded-lg font-lato hover:bg-customBlue hover:text-black transform ease-linear duration-500">
                Book Car
              </button>
            </Link>
            <p className="text-gray-500 mt-4">
              Free delivery on orders over $30.00
            </p>
            <p className="mt-4 font-lato text-[#333333]">
              {data?.data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
