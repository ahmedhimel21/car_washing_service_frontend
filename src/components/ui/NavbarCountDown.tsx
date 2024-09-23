/* eslint-disable @typescript-eslint/no-explicit-any */
import { Statistic } from "antd";
import dayjs from "dayjs";
import { useGetUserBookingQuery } from "../../redux/features/booking/bookingEndpoints";

const { Countdown } = Statistic;

const NavbarCountDown = () => {
  const { data: bookings } = useGetUserBookingQuery(undefined);

  const upcomingBookings = bookings?.data?.filter((booking: any) => {
    const slotDateTime = dayjs(
      `${booking.slot.date} ${booking.slot.startTime}`
    );
    return slotDateTime.isAfter(dayjs());
  });
  // Find the next booking slot
  const nextBooking = upcomingBookings?.reduce((next: any, booking: any) => {
    const slotDateTime = dayjs(
      `${booking.slot.date} ${booking.slot.startTime}`
    );
    if (
      !next ||
      slotDateTime.isBefore(dayjs(next.slot.date + " " + next.slot.startTime))
    ) {
      return booking;
    }
    return next;
  }, null);
  // If no nextBooking found, return null or a placeholder
  if (!nextBooking) {
    return <div className="text-white">No upcoming bookings</div>;
  }

  // Component to display countdown in navbar
  const slotDateTime = dayjs(
    `${nextBooking.slot.date} ${nextBooking.slot.startTime}`
  ).valueOf();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Countdown
        title={
          <span style={{ color: "white", fontSize: "14px", lineHeight: "1.2" }}>
            Your Next Slot Starts In
          </span>
        }
        valueStyle={{ color: "red", fontSize: "24px" }}
        value={slotDateTime}
      />
    </div>
  );
};

export default NavbarCountDown;
