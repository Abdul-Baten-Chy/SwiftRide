import { motion } from "framer-motion";
import calender from "../../assets/icons/calenderCart.png";
import creditCart from "../../assets/icons/creditCart.png";
import mobile from "../../assets/icons/mobile.png";
import pricetag from "../../assets/icons/priceCat.png";
import responsivIcon from "../../assets/icons/responsiveCart.png";
import Support from "../../assets/icons/supportCart.png";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-16 max-w-[1280px] mx-auto px-10 mt-16">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={responsivIcon}
          alt="responsive"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          User-Friendly Interface
        </h3>
        <p className="font-lato text-[16px] max-w-[300px] leading-6 text-center mx-auto text-gray-400 font-light">
          Ensure that your website or app is intuitive and easy to navigate. A
          smooth booking process with clear options.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={Support}
          alt="support"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          24/7 Customer Support
        </h3>
        <p className="font-lato text-[16px] max-w-[300px] leading-6 text-center text-gray-400 font-light mx-auto">
          Ensure that support is available around the clock to assist with any
          issues or questions.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={calender}
          alt="calender"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          Flexible Rental Options
        </h3>
        <p className="font-lato text-[16px] mx-auto max-w-[300px] leading-6 text-center text-gray-400 font-light">
          Provide a range of rental options, including short-term and long-term
          rentals, as well as one-way rentals if applicable.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={pricetag}
          alt="price tag"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          Competitive Pricing
        </h3>
        <p className="font-lato text-[16px] mx-auto max-w-[300px] leading-6 text-center text-gray-400 font-light">
          Offer competitive rates and be transparent about all fees. Include a
          price comparison tool if possible.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={mobile}
          alt="mobile"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          Mobile App Integration
        </h3>
        <p className="font-lato text-[16px] mx-auto max-w-[300px] leading-6 text-center text-gray-400 font-light">
          Ensure that your website or app is intuitive and easy to navigate. A
          smooth booking process with clear options.
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={creditCart}
          alt="credit card"
          className="w-[80px] block mx-auto mb-4"
        />
        <h3 className="font-montserrat text-black text-lg uppercase text-center mb-4 ">
          Easy Payment Options
        </h3>
        <p className="font-lato text-[16px] mx-auto max-w-[300px] leading-6 text-center text-gray-400 font-light">
          Provide multiple payment methods and make the payment process as
          simple as possible.
        </p>
      </motion.div>
    </div>
  );
}
