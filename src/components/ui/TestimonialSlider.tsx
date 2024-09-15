import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import TestimonialCard, { TTestimonialProps } from "./TestimonialCard";
import { useGetReviewsQuery } from "../../redux/features/review/reviewEndpoints";

const TestimonialSlider = () => {
  const { data: reviews } = useGetReviewsQuery(undefined);
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
        {reviews?.data?.slice(-2).map((person: TTestimonialProps) => {
          const { name, message, address } = person;
          return (
            <SwiperSlide key={person._id}>
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
