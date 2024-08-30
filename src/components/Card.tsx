import { Link } from "react-router-dom";

export function Card({ item }) {
  return (
    <div className="min-w-[320px] overflow-hidden relative group font-lato border">
      <img
        src={item?.image}
        alt="Image description"
        className="w-full h-auto "
      />
      <div className="absolute bottom-0 bg-opacity-85 py-4 px-4 w-full font-montserrat font-medium text-lg left-1/2 -translate-x-1/2 group-hover:hidden text-black  ">
        <p className="font-lato text-lg ">{item?.name}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white transition-transform duration-800 transform translate-y-full group-hover:translate-y-0 flex flex-col justify-center p-4">
        <div className="mt-6 pl-5 ">
          <div className="flex flex-col  justify-between gap-2 py-4">
            <h3 className="font-lato font-bold text-lg text-left">
              {item?.name}
            </h3>
            <p className="font-lato text-left ">Color: {item?.color}</p>

            <p className="font-lato mt-2">{item?.description}</p>
            <div className="flex gap-4 mt-5  mb-2">
              <p className="font-lato text-black bg-customBlue hover:bg-cyan-500 rounded-full px-4 py-1 ">
                $ {item?.pricePerHour}
              </p>
              <p className="font-lato  bg-black hover:bg-slate-700 rounded-full px-4 py-1 ">
                {item?.status}
              </p>
            </div>
          </div>
          <div className="flex justify-center pr-5">
            <Link to={`/details/${item?._id}`}>
              <button className="bg-[#4a869e] w-[200px] text-center text-white  py-2 my-5 ">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
