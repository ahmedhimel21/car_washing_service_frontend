import { FaCheckCircle, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { imageVariants, textVariants } from "../../../utils/variants";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="about-us bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="text-section md:w-1/2 space-y-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800">About AquaClean</h2>
          <p className="text-gray-600">
            AquaClean is dedicated to delivering top-quality car washing
            services with eco-friendly products. Our mission is to make car
            cleaning convenient, affordable, and satisfying for every customer.
          </p>
          <p className="text-gray-600">
            With years of experience, a passion for quality, and a
            customer-first approach, we stand out by providing the best care for
            your vehicle.
          </p>

          {/* Core Values Section */}
          <div className="core-values grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <FaHandsHelping className="text-red-500 text-2xl" />
              <p className="text-gray-600 font-medium">
                Customer-Focused Service
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="text-red-500 text-2xl" />
              <p className="text-gray-600 font-medium">Eco-Friendly Products</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-red-500 text-2xl" />
              <p className="text-gray-600 font-medium">Professional Staff</p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="image-section md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="./team.jpg"
            alt="AquaClean Team"
            className="rounded-lg shadow-lg w-full md:w-4/5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
