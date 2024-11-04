import { Skeleton } from "antd";
import { TService } from "../../types";
import { Link } from "react-router-dom";

// service card props types
type TServiceCardProps = {
  service: TService;
  isFetching: boolean;
};

const ServiceCard = ({ service, isFetching }: TServiceCardProps) => {
  return (
    <div className="max-w-[385px] mx-auto sm:mx-0 flex flex-col h-full justify-between">
      <Skeleton loading={isFetching} active>
        <img
          src={service?.image}
          alt="serviceImage"
          className="w-[380px] h-[284px]"
        />
        <div className="flex-grow">
          <h3 className="text-lg uppercase font-bold mb-1">{service?.name}</h3>
          <h3 className="text-[13px] text-secondary uppercase mb-1 truncate">
            {service?.description.slice(0, 150)}...
          </h3>
          <div className="flex justify-between items-center">
            <h3 className="mb-10 text-xl text-accent font-bold uppercase">
              $ {service?.price}
            </h3>
            <h3 className="mb-10 text-xl text-accent font-bold uppercase">
              🕝{service?.duration}
            </h3>
          </div>
        </div>
        <div className="flex justify-center mt-auto">
          <Link
            to={`/services/${service?._id}`}
            className="btn btn-accent btn-lg w-full"
          >
            See Details
          </Link>
        </div>
      </Skeleton>
    </div>
  );
};

export default ServiceCard;
