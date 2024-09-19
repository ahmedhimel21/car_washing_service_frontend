import Navigation from "../components/ui/Header";
import { useGetSingleServiceQuery } from "../redux/features/services/servicesEndpoints";
import { useParams } from "react-router-dom";
import { useGetAvailableSlotsQuery } from "../redux/features/slots/slotsEndpoints";
import { notification, Skeleton } from "antd";
import { TSlot } from "../types/slot.types";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

const ServiceDetails = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const { id } = useParams();
  const date = format(new Date(), "yyy-MM-dd");
  const { data: service, isFetching, isLoading } = useGetSingleServiceQuery(id);

  // Fetch available slots for the selected date
  const { data: slots } = useGetAvailableSlotsQuery({ date, id });

  const handleSlotClick = (slot: { startTime: string; endTime: string }) => {
    setSelectedSlot(`${slot.startTime} - ${slot.endTime}`);
  };

  const bookingButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedSlot && bookingButtonRef.current) {
      bookingButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSlot]);

  const handleBooking = () => {
    if (selectedSlot) {
      notification.success({
        message: "Service Booked",
        description: `You have booked ${service?.data?.name} on ${date} at ${selectedSlot}.`,
      });
    }
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-[1920px] mx-auto">
        <div className="h-full xl:h-full">
          <div className="container xl:pt-10 mx-auto flex justify-center items-center">
            {/*card  */}
            <div className="max-w-[985px] mx-auto sm:mx-0 h-full mt-16">
              <Skeleton loading={isFetching || isLoading} active>
                <img
                  src={service?.data.image}
                  alt="serviceImage"
                  className="w-[980px] h-[484px] rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-lg uppercase font-bold mb-1">
                    {service?.data.name}
                  </h3>
                  <h3 className="text-[13px] text-secondary uppercase mb-1">
                    {service?.data.description}
                  </h3>
                  <div className="flex justify-between items-center">
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      $ {service?.data.price}
                    </h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      🕝{service?.data.duration}
                    </h3>
                  </div>
                </div>
              </Skeleton>
            </div>
          </div>
          {/* /* Available Slots */}
          <div className="slots mb-6 container mx-auto">
            <h2 className="text-2xl font-semibold mb-5 text-center">
              Available Time Slots for{" "}
              <span className="text-accent font-bold">{date}</span>
            </h2>
            {isLoading ? (
              <p>Loading slots...</p>
            ) : (
              <div className="grid grid-cols-3 xl:grid-cols-5 gap-4">
                {slots?.data?.map((slot: TSlot) => (
                  <button
                    key={slot._id}
                    className={`btn ${
                      slot.isBooked === "available"
                        ? "btn-accent"
                        : "btn-disabled"
                    } btn-lg w-full`}
                    disabled={slot.isBooked !== "available"}
                    onClick={() =>
                      handleSlotClick({
                        startTime: slot.startTime,
                        endTime: slot.endTime,
                      })
                    }
                  >
                    {`${slot.startTime} - ${slot.endTime}`}
                  </button>
                ))}
              </div>
            )}
            {selectedSlot && (
              <div className="my-6" ref={bookingButtonRef}>
                <button
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="btn btn-primary btn-lg max-w-[230px] mx-auto"
                >
                  Book This Service
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
