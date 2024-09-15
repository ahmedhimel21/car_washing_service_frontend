import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link to="/" className="cursor-pointer">
              <img src="/logo.png" alt="logo" width={200} height={200} />
            </Link>
            <div className="text-secondary">
              AquaClean provides premium car wash.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone></FaPhone>
                <div className="font-medium">(+880)18463-43410</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope></FaEnvelope>
                <div className="font-medium">office@AquaClean.com</div>
              </div>
            </div>
          </div>
          <div className=" flex-1 flex  flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Bangladesh</a>
                </li>
                <li>
                  {" "}
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat-Wed:</div>
                <div className="font-semibold">9:00AM - 9:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Thu:</div>
                <div className="font-semibold">9:00AM - 7:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Fri:</div>
                <div className="font-semibold">CLosed</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Contacts</h3>
            <div className="mb-9 text-secondary">
              Have questions or need to book a service? We're here to help!
            </div>
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your Message"
                className="outline-none bg-white h-full border border-lg rounded-md  pl-4 focus:border-accent"
              />
              <button type="submit" className="btn h-14 btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="text-center py-10 border-t text-sm">
        Copyright &copy; AquaClean 2024. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;