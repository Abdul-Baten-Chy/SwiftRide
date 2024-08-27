// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/attachment-img.jpg";
// Import Swiper styles
import { FaQuoteLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Testimonial.css";
// import required modules
import { FaQuoteRight } from "react-icons/fa6";
import { Autoplay, EffectCube } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="relative h-full">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#333333]">
          <div className=" flex flex-col items-center justify-center mt-10">
            <div className="w-[150px] h-[150px] ">
              <img
                src={img}
                alt=""
                className="w-full overflow-hidden rounded-full border-2 p-2 border-white object-cover"
              />
            </div>
            <h3 className="mt-4 text-white font-montserrat text-xl uppercase">
              Author Name
            </h3>
            <h3 className="text-white mt-4">Rating:</h3>
            <p className="px-16 mt-8 text-white font-lato text-[16px]">
              <FaQuoteLeft className="text-customBlue text-2xl  " />
              We had a rental car in Mauritius for 1 week. Perfect service,
              hotel delivery (Intercontinental Hotel) and pick-up, everything
              went perfectly. Good instructions for the rental car and helpful
              tips for the island. I would rent a car again at any time. Greets
              to the friendly staff.
              <FaQuoteRight className=" text-2xl  " />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#333333]">
          <div className=" flex flex-col items-center justify-center mt-10">
            <div className="w-[150px] h-[150px] ">
              <img
                src={img}
                alt=""
                className="w-full overflow-hidden rounded-full border-2 p-2 border-white object-cover"
              />
            </div>
            <h3 className="mt-4 text-white font-montserrat text-xl uppercase">
              Author Name
            </h3>
            <h3 className="text-white mt-4">Rating:</h3>
            <p className="px-16 mt-8 text-white font-lato text-[16px]">
              <FaQuoteLeft className="text-customBlue text-2xl  " />
              We had a rental car in Mauritius for 1 week. Perfect service,
              hotel delivery (Intercontinental Hotel) and pick-up, everything
              went perfectly. Good instructions for the rental car and helpful
              tips for the island. I would rent a car again at any time. Greets
              to the friendly staff.
              <FaQuoteRight className=" text-2xl  " />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#333333]">
          <div className=" flex flex-col items-center justify-center mt-10">
            <div className="w-[150px] h-[150px] ">
              <img
                src={img}
                alt=""
                className="w-full overflow-hidden rounded-full border-2 p-2 border-white object-cover"
              />
            </div>
            <h3 className="mt-4 text-white font-montserrat text-xl uppercase">
              Author Name
            </h3>
            <h3 className="text-white mt-4">Rating:</h3>
            <p className="px-16 mt-8 text-white font-lato text-[16px]">
              <FaQuoteLeft className="text-customBlue text-2xl  " />
              We had a rental car in Mauritius for 1 week. Perfect service,
              hotel delivery (Intercontinental Hotel) and pick-up, everything
              went perfectly. Good instructions for the rental car and helpful
              tips for the island. I would rent a car again at any time. Greets
              to the friendly staff.
              <FaQuoteRight className=" text-2xl  " />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#333333]">
          <div className=" flex flex-col items-center justify-center mt-10">
            <div className="w-[150px] h-[150px] ">
              <img
                src={img}
                alt=""
                className="w-full overflow-hidden rounded-full border-2 p-2 border-white object-cover"
              />
            </div>
            <h3 className="mt-4 text-white font-montserrat text-xl uppercase">
              Author Name
            </h3>
            <h3 className="text-white mt-4">Rating:</h3>
            <p className="px-16 mt-8 text-white font-lato text-[16px]">
              <FaQuoteLeft className="text-customBlue text-2xl  " />
              We had a rental car in Mauritius for 1 week. Perfect service,
              hotel delivery (Intercontinental Hotel) and pick-up, everything
              went perfectly. Good instructions for the rental car and helpful
              tips for the island. I would rent a car again at any time. Greets
              to the friendly staff.
              <FaQuoteRight className=" text-2xl  " />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
