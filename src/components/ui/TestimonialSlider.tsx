import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import TestimonialCard from "./TestimonialCard";

const data = [
  {
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message:
      "The car wash service was amazing! My car has never looked this clean before. Highly recommend!",
    address: "123 Main St, Los Angeles, CA",
  },
  {
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    message:
      "Super convenient and fast! The booking process was simple, and the service was top-notch.",
    address: "456 Oak Avenue, Chicago, IL",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px] mb-4"
      >
        {data.slice(-2).map((person, index) => {
          const { name, message, address } = person;
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                message={message}
                name={name}
                address={address}
              ></TestimonialCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="btn btn-accent btn-lg max-w-[168px] mx-auto">
        See All Reviews
      </button>
    </motion.div>
  );
};

export default TestimonialSlider;
