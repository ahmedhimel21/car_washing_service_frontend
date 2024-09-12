import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Keep Your Car <span className="text-accent">Clean</span> Always
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 xl:mb-10 mb-6"
            >
              AquaClean car wash is brand which is literally going to change the
              people think car cleaning.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
            >
              <button className="btn btn-accent btn-lg max-w-[168px] mx-auto xl:ml-36">
                <Link to="/services">Services</Link>
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[0px] min-[1680px]:right-[120px] xl:top-48"
          >
            <img src="/car.svg" alt="car" className="fill object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
