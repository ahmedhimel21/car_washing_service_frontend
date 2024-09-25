/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMostBookedServiceQuery } from "../../redux/features/booking/bookingEndpoints";
import { useAppSelector } from "../../redux/hooks";
import { Column } from "@ant-design/plots";

const AdminDashboard = () => {
  const { data: bookings } = useGetMostBookedServiceQuery(undefined);
  const chartData = bookings?.data;

  // Define chart config
  const config = {
    data: chartData,
    xField: "serviceName",
    yField: "count",
    color: "#1890ff",
    columnStyle: {
      radius: [5, 5, 0, 0],
    },
    label: {
      position: "middle",
      style: {
        fill: "#fff",
        opacity: 0.6,
      },
    },
    meta: {
      service: { alias: "Service Name" },
      bookings: { alias: "Number of Bookings" },
    },
  };

  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Welcome Back {user?.name}
      </h1>
      <div>
        <Column {...config} />
        <p className="text-center">Booking progress Chart</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
