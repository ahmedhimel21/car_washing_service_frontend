/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/ui/Header";
import { useGetSingleServiceQuery } from "../redux/features/services/servicesEndpoints";
import { Button, Col, Row, Skeleton } from "antd";
import CForm from "../components/form/CForm";
import CInput from "../components/form/CInput";

import "./booking.css";
import { FieldValues } from "react-hook-form";
import { useMakePaymentMutation } from "../redux/features/payment/paymentEndpoints";
import { toast } from "sonner";

const Booking = () => {
  const navigate = useNavigate();
  const { id, slot, slotId } = useParams();
  const { data: service, isFetching, isLoading } = useGetSingleServiceQuery(id);
  const [makePayment] = useMakePaymentMutation();

  const onSubmit = async (data: FieldValues) => {
    const formData = {
      cus_name: data.name,
      cus_email: data.email,
      cus_phone: "01846343410",
      amount: service?.data?.price,
      slot: slotId,
      service: service?.data?._id,
    };
    try {
      const res = await makePayment(formData);
      if (res?.data?.data?.result) {
        toast.success("Payment successful");
        window.open(res?.data?.data?.payment_url, "_blank");
        navigate("/payment/success");
      }
      if (!(res?.error as any).data?.success) {
        toast.error("Failed payment");
        navigate("/payment/fail");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-[1920px] mx-auto">
        <div className="h-full xl:h-screen">
          <div className="container xl:pt-10 mx-auto">
            <div className="shadow-lg">
              <Row
                className="booking-page mt-0 xl:mt-16 rounded-md"
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
                <Col xs={24} md={12} className="booking-col-left">
                  <div className="booking-form-container">
                    <h2 className="payment-title">Payment</h2>
                    {/* booking Form */}
                    <CForm
                      // resolver={zodResolver(loginValidationSchema)}
                      onSubmit={onSubmit}
                    >
                      <CInput type="text" name="name" label="Name"></CInput>
                      <CInput type="email" name="email" label="Email"></CInput>
                      <CInput
                        type="text"
                        name="selectedTime"
                        label="Selected Time"
                        initialValue={slot}
                        disabled={true}
                      ></CInput>
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
