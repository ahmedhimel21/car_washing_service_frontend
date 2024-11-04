/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from "../components/ui/Header";
import { useGetSingleServiceQuery } from "../redux/features/services/servicesEndpoints";
import { Link, useParams } from "react-router-dom";
import { useGetAvailableSlotsQuery } from "../redux/features/slots/slotsEndpoints";
import { Skeleton } from "antd";
import { TSlot } from "../types/slot.types";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

const ServiceDetails = () => {
  // selected slot state
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  // get id from params
  const { id } = useParams();
  // present date format
  const date = format(new Date(), "yyy-MM-dd");
  // get single service data
  const { data: service, isFetching, isLoading } = useGetSingleServiceQuery(id);

  // Fetch available slots for the selected date
  const { data: slots } = useGetAvailableSlotsQuery({ date, id });

  // handling slot click and set to state
  const handleSlotClick = (slot: {
    startTime: string;
    endTime: string;
    _id: string;
  }) => {
    setSelectedSlot(`${slot.startTime} - ${slot.endTime}, ${slot._id}`);
  };

  const slot = selectedSlot?.split(",")[0];
  const slotId = selectedSlot?.split(",")[1].trim();

  //if click on slot the booking btn show by automatic scroll
  const bookingButtonRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (selectedSlot && bookingButtonRef.current) {
      bookingButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSlot]);

  return (
    <>
      <Navigation />
      <div className="max-w-[1280px] mx-auto px-4 py-8 min-h-screen pt-24 xl:pt-32">
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full md:w-3/4 xl:w-2/3 bg-white shadow-lg rounded-lg p-8 mb-10">
            <Skeleton loading={isFetching || isLoading} active>
              <img
                src={service?.data.image}
                alt="serviceImage"
                className="w-full h-64 md:h-80 object-cover rounded-md mb-6 shadow-md"
              />
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">
                  {service?.data.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {service?.data.description}
                </p>
                <ul className="flex justify-center flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  {service?.data?.features?.map((feature: any, index: any) => (
                    <li key={index} className="flex items-center">
                      <span>✅ {feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-6 mb-6">
                  <span className="text-2xl font-bold text-accent">
                    ${service?.data.price}
                  </span>
                  <span className="text-2xl font-bold text-accent flex items-center gap-1">
                    🕝 {service?.data.duration} min
                  </span>
                </div>
              </div>
              <div className="slots mb-8 container mx-auto">
                <h2 className="text-2xl font-semibold mb-5 text-center">
                  Available Time Slots for{" "}
                  <span className="text-accent font-bold">{date}</span>
                </h2>
                {isLoading ? (
                  <p>Loading slots...</p>
                ) : (
                  <div
                    className={`${
                      slots?.data?.length < 3
                        ? "flex justify-center"
                        : "grid grid-cols-3 xl:grid-cols-3"
                    } gap-4`}
                  >
                    {slots?.data?.map((slot: TSlot) => (
                      <button
                        key={slot._id}
                        className={`btn ${
                          slot.isBooked === "available"
                            ? "btn-accent"
                            : "btn-disabled"
                        } btn-lg w-[225px]`}
                        disabled={slot.isBooked !== "available"}
                        onClick={() =>
                          handleSlotClick({
                            startTime: slot.startTime,
                            endTime: slot.endTime,
                            _id: slot._id,
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
                    <Link to={`/booking/${id}/${slot}/${slotId}`}>
                      <button className="btn btn-primary btn-lg max-w-[230px] mx-auto">
                        Book This Service
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </Skeleton>
          </div>
          {/* <div className="w-full md:w-3/4 xl:w-2/3 bg-white shadow-lg rounded-lg p-8 mt-8 mb-8">
            <h3 className="text-2xl font-semibold text-center mt-8 mb-6 text-gray-800">
              Customer Reviews
            </h3>
            <List
              itemLayout="horizontal"
              dataSource={reviews}
              renderItem={(review) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar>{review.name[0]}</Avatar>}
                    title={
                      <span className="font-medium text-gray-800">
                        {review.name} - {review.date}
                      </span>
                    }
                    description={
                      <>
                        <Rate disabled defaultValue={review.rating} />
                        <p className="text-gray-600">{review.comment}</p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
            <h3 className="text-xl font-semibold text-center mb-4">
              Add Your Review
            </h3>
            <Form
              name="reviewForm"
              layout="vertical"
              className="max-w-lg mx-auto"
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="rating"
                label="Your Rating"
                rules={[{ required: true, message: "Please select a rating" }]}
              >
                <Rate />
              </Form.Item>
              <Form.Item
                name="comment"
                label="Your Review"
                rules={[{ required: true, message: "Please write a comment" }]}
              >
                <TextArea rows={4} placeholder="Share your experience" />
              </Form.Item>
              <Form.Item className="text-center">
                <Button
                  htmlType="submit"
                  className="btn btn-accent w-[169px] mx-auto h-12"
                >
                  Submit Review
                </Button>
              </Form.Item>
            </Form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
