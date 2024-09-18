import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { useGetServicesQuery } from "../../redux/features/services/servicesEndpoints";
import { TService } from "../../types";
import ServiceCard from "./ServiceCard";

const ServiceSlider = () => {
  const { data: services, isFetching } = useGetServicesQuery(undefined);

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {(services?.data as TService[])?.slice(-6).map((service) => {
          return (
            <SwiperSlide key={service._id}>
              <ServiceCard
                service={service}
                isFetching={isFetching}
              ></ServiceCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default ServiceSlider;
