/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/carousel-3.jpg";
import img2 from "../../assets/carousel-4.jpg";
import img3 from "../../assets/carousel-5.jpg";
import img4 from "../../assets/carousel-6.jpg";
import "./Hero.css";
import { SearchForm } from "./SearchForm";

// Array of objects containing image and text for each slide
const slides = [
  {
    img: img1,
    title: "Effortless Rentals, Unforgettable Rides",
    description:
      "Experience the freedom of the open road with our diverse range of rental vehicles. Whether you need a stylish sedan for a business trip or a rugged SUV for your weekend adventure, we’ve got you covered. Rent with ease and drive with confidence.",
  },
  {
    img: img2,
    title: "Explore the Road, with Confidence",
    description:
      "Discover the perfect vehicle to match your travel needs and enjoy a seamless rental experience with our easy online booking system. Your adventure starts here.",
  },
  {
    img: img3,
    title: "Your Adventure, Awaits",
    description:
      "From city streets to country trails, our cars are ready for your next journey. Choose from our wide selection and enjoy a smooth ride.",
  },
  {
    img: img4,
    title: "Drive with Style, and Comfort",
    description:
      "Rent a car that suits your style and enjoy ultimate comfort on the road. Whether for business or leisure, we have the right vehicle for you.",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below with reduced opacity
  visible: { opacity: 1, y: 0 }, // End at its original position with full opacity
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      setCurrentSlide(swiperInstance.activeIndex % slides.length);
    };

    swiperInstance.on("slideChange", handleSlideChange);
    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
    };
  }, []);

  return (
    <main
      style={{ height: "calc(100vh - 100px)", overflowX: "hidden" }}
      className="relative"
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              className="w-full h-auto object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-[1280px] w-full px-4">
                <motion.div
                  key={currentSlide} // Use currentSlide as the key to trigger re-render
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  transition={{ duration: 0.8 }}
                  className="px-8 text-white"
                >
                  <h2 className="text-left text-6xl leading-[60px] font-semibold text-white font-montserrat">
                    <span className="text-blue-300">
                      {slide.title.split(",")[0]}
                    </span>
                    <br /> {slide.title.split(",")[1]}
                  </h2>
                  <p className="font-lato font-[16px] max-w-[500px] mt-4">
                    {slide.description}
                  </p>
                  <Button className="bg-customBlue mt-4 px-8 font-montserrat uppercase font-semibold">
                    Explore
                  </Button>
                  <Link to="/register">
                    <Button className="bg-white text-black hover:text-white ml-4 mt-4 px-8 font-montserrat uppercase font-semibold">
                      Register
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-lg min-w-[300px] mx-auto p-6 bg-opacity-60  bg-black shadow-md rounded-lg absolute top-1/2 right-4 md:right-10 lg:right-20 z-20 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-[101%] hover:bg-opacity-100">
        <SearchForm />
      </div>
    </main>
  );
};

export default Hero;
