import { Rate } from "antd";
import { FaQuoteLeft } from "react-icons/fa";
import { TTestimonial } from "../../types";

const TestimonialCard = ({ message, name, address, rating }: TTestimonial) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <FaQuoteLeft className="text-accent text-7xl mb-6"></FaQuoteLeft>
        <div className="text-xl xl:text-4xl max-w-[874px] mb-12 font-medium">
          {message}
        </div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-secondary mb-2">{address}</div>
        <Rate disabled defaultValue={rating} />
      </div>
    </>
  );
};

export default TestimonialCard;
