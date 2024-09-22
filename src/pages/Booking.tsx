/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/ui/Header";
import { useGetSingleServiceQuery } from "../redux/features/services/servicesEndpoints";
import { Button, Col, Row, Skeleton } from "antd";
import CForm from "../components/form/CForm";
import CInput from "../components/form/CInput";

import "./booking.css";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { useCreateBookingMutation } from "../redux/features/booking/bookingEndpoints";
import CSelect from "../components/form/CSelect";
import { carTypeOptions } from "../constant/booking.constant";

const Booking = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  // Check if user is logged in, if not, redirect to login page
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true }); // replace: true to prevent navigating back to the protected page
    }
  }, [user, navigate]);

  const { id, slot, slotId } = useParams();
  const { data: service, isFetching, isLoading } = useGetSingleServiceQuery(id);
  const [createBooking] = useCreateBookingMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Booking on processing...");
    const formData = {
      cus_name: data.name,
      cus_email: data.email,
      cus_phone: data.phone,
      vehicleType: data?.vehicleType,
      vehicleBrand: data?.vehicleBrand,
      vehicleModel: data?.vehicleModel,
      manufacturingYear: Number(data?.manufacturingYear),
      registrationPlate: data?.registrationPlate,
      amount: service?.data?.price,
      slotId: slotId,
      serviceId: service?.data?._id,
    };
    console.log(formData);
    try {
      const res = await createBooking(formData);
      console.log(res);
      if (res?.data?.data?.result) {
        toast.success("Payment successful", { id: toastId });
        window.open(res?.data?.data?.payment_url, "_blank");
        navigate("/payment/success");
      }
      if (!(res?.error as any).data?.success) {
        toast.error("Failed payment", { id: toastId });
        navigate("/payment/fail");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-[1920px] mx-auto">
        <div className="h-full xl:screen">
          <div className="container xl:pt-10 mx-auto">
            <div className="shadow-lg">
              <Row
                className="booking-page mt-0 xl:mt-10 rounded-md"
                style={{ minHeight: "80vh" }}
              >
                {/* Right Section */}
                <Col xs={24} md={12} className="booking-col-right">
                  <div className="booking-container">
                    <Skeleton loading={isFetching || isLoading} active>
                      <img
                        src={service?.data.image}
                        alt="serviceImage"
                        className="w-[980px] h-[384px] rounded-lg"
                      />
                      <div className="flex-grow mt-3">
                        <h3 className="text-lg uppercase font-bold mb-1 text-black">
                          {service?.data?.name}
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
                </Col>
                {/* Left Section */}
                <Col xs={24} md={12} className="booking-col-left p-5">
                  <div className="booking-form-container">
                    <h2 className="payment-title">Payment</h2>
                    {/* booking Form */}

                    <CForm
                      // resolver={zodResolver(loginValidationSchema)}
                      onSubmit={onSubmit}
                    >
                      <CInput
                        type="text"
                        name="name"
                        label="Name"
                        initialValue={user?.name}
                      ></CInput>
                      <CInput
                        type="email"
                        name="email"
                        label="Email"
                        initialValue={user?.email}
                      ></CInput>
                      <CInput
                        type="text"
                        name="phone"
                        label="Phone"
                        initialValue={user?.phone}
                      ></CInput>
                      <div className="flex gap-3">
                        <CSelect
                          label="Vehicle Type"
                          name="vehicleType"
                          options={carTypeOptions}
                        ></CSelect>
                        <CInput
                          type="text"
                          name="vehicleBrand"
                          label="Vehicle Brand"
                        ></CInput>
                      </div>
                      <div className="flex gap-3">
                        <CInput
                          type="text"
                          name="vehicleModel"
                          label="Vehicle Model"
                        ></CInput>
                        <CInput
                          type="number"
                          name="manufacturingYear"
                          label="Manufacture Year"
                        ></CInput>
                      </div>
                      <div className="flex gap-3">
                        <CInput
                          type="text"
                          name="registrationPlate"
                          label="Registration Plate"
                        ></CInput>

                        <CInput
                          type="text"
                          name="selectedTime"
                          label="Selected Time"
                          initialValue={slot}
                          disabled={true}
                        ></CInput>
                      </div>

                      <Button
                        className="btn btn-accent btn-lg rounded-md"
                        htmlType="submit"
                      >
                        Pay Now
                      </Button>
                    </CForm>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
