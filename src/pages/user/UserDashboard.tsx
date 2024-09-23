/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Statistic } from "antd";
import { useGetUserBookingQuery } from "../../redux/features/booking/bookingEndpoints";
import { useAppSelector } from "../../redux/hooks";
import dayjs from "dayjs";

const { Countdown } = Statistic;

const UserDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data: bookings, isFetching } = useGetUserBookingQuery(undefined);
  // Filter past bookings
  const pastBookings = bookings?.data?.filter((booking: any) => {
    const slotDateTime = dayjs(`${booking.slot.date} ${booking.slot.endTime}`);
    return slotDateTime.isBefore(dayjs());
  });
  const tableData = pastBookings?.map(
    ({
      _id,
      service,
      slot,
    }: {
      _id: string;
      service: { name: string; price: string };
      slot: { date: string; startTime: string; endTime: string };
    }) => {
      return {
        key: _id,
        serviceName: service?.name,
        price: service?.price,
        date: slot?.date,
        startTime: slot?.startTime,
        endTime: slot?.endTime,
      };
    }
  );

  const columns = [
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  // Filter upcoming bookings
  const upcomingBookings = bookings?.data?.filter((booking: any) => {
    const slotDateTime = dayjs(
      `${booking.slot.date} ${booking.slot.startTime}`
    );
    return slotDateTime.isAfter(dayjs());
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Welcome back {user?.name}
      </h1>
      <h3 className="text-xl font-bold text-center mb-3">Past Bookings</h3>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        loading={isFetching}
      />
      <h3 className="text-xl text-center font-bold mt-4">Upcoming Bookings</h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
          upcomingBookings?.length < 3 ? "justify-center" : ""
        } mt-6`}
      >
        {upcomingBookings?.map((booking: any) => {
          const slotDateTime = dayjs(
            `${booking.slot.date} ${booking.slot.startTime}`
          );
          const countdownValue = slotDateTime.valueOf();

          return (
            <div
              key={booking._id}
              className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-2">
                {booking.service.name}
              </h3>
              <p className="mb-1">
                <span className="font-semibold">Service Date:</span>{" "}
                {booking.slot.date}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Start Time:</span>{" "}
                {booking.slot.startTime}
              </p>
              <Countdown
                title={
                  <span className="text-white font-semibold">
                    Time Remaining
                  </span>
                }
                value={countdownValue}
                className="text-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDashboard;
