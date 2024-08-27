import { motion } from "framer-motion";
import video from "../../assets/vedio.mp4";
import Testimonial from "./Testimonial";

function WhoWeAre() {
  return (
    <motion.div
      className="flex mt-28 gap-10 max-w-[1280px] mx-auto px-12"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="flex-1  bg-[#dbe7ec ] relative  hover:bg-[#dbe7ec] hover:text-[#333333] transition duration-700 ease-in">
        <Testimonial></Testimonial>
      </div>
      {/* video player */}
      <div className="flex-1 flex flex-col relative hover:scale-[101%] hover:text-[#333333] transition duration-700 ease-in">
        <div className="flex-1  relative ">
          <video
            src={video}
            className="object-cover w-full h-full overflow-hidden"
            autoPlay
            muted
            loop
          ></video>
          <div className="w-full h-full bg-gradient-to-r from-[#FC6075] to-[#f6b0b9] opacity-0 hover:opacity-75   absolute top-0 left-0 z-20 transition duration-700 "></div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6  bg-customBlue   p-6">
          <div className="p-3 bg-white ">
            <h3 className="text-3xl font-bold ">3.5 </h3>
            <p>Years Trust</p>
          </div>
          <div className="p-3 bg-white ">
            <h3 className="text-3xl font-bold ">36 </h3>
            <p>Renowned Shop</p>
          </div>
          <div className="p-3 bg-white ">
            <h3 className="text-3xl font-bold ">100k </h3>
            <p>Regular Customer</p>
          </div>
          <div className="p-3 bg-white ">
            <h3 className="text-3xl font-bold ">4.8 </h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhoWeAre;
