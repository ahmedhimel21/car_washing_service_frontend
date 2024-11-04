import { FaLeaf, FaMoneyBillWave, FaStar, FaUserTie } from "react-icons/fa";
import { cardVariants } from "../../../utils/variants";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us bg-white pt-24 xl:pt-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Reason Card 1 */}
          <motion.div
            className="reason-card p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaLeaf className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Eco-Friendly Products
            </h3>
            <p className="text-gray-600">
              We use environmentally friendly products that are safe for your
              car and the planet.
            </p>
          </motion.div>

          {/* Reason Card 2 */}
          <motion.div
            className="reason-card p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaUserTie className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Experienced Staff
            </h3>
            <p className="text-gray-600">
              Our team is highly trained and dedicated to providing the best
              service for your vehicle.
            </p>
          </motion.div>

          {/* Reason Card 3 */}
          <motion.div
            className="reason-card p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaMoneyBillWave className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Affordable Pricing
            </h3>
            <p className="text-gray-600">
              We offer competitive pricing to ensure quality service without
              breaking the bank.
            </p>
          </motion.div>

          {/* Reason Card 4 */}
          <motion.div
            className="reason-card p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaStar className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              We prioritize customer satisfaction and aim to exceed your
              expectations every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
