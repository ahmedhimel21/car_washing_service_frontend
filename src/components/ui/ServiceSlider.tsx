import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { useGetServicesQuery } from "../../redux/features/services/servicesEndpoints";
import { TService } from "../../types";
import { Skeleton } from "antd";

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
        {(services?.data as TService[])?.map((service) => {
          return (
            <SwiperSlide key={service._id}>
              <div className="max-w-[385px] mx-auto sm:mx-0 flex flex-col h-full justify-between">
                <Skeleton loading={isFetching} active>
                  <img
                    src={service.image}
                    alt="serviceImage"
                    className="w-[380px] h-[284px]"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg uppercase font-bold mb-1">
                      {service.name}
                    </h3>
                    <h3 className="text-[13px] text-secondary uppercase mb-1 truncate">
                      {service.description}
                    </h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {service.price}
                    </h3>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <button className="btn btn-accent btn-lg w-full">
                      See Details
                    </button>
                  </div>
                </Skeleton>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default ServiceSlider;
