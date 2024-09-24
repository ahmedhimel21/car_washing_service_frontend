/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMostBookedServiceQuery } from "../../redux/features/booking/bookingEndpoints";
import { useAppSelector } from "../../redux/hooks";
import { Bar } from "@ant-design/plots";

const AdminDashboard = () => {
  const { data: bookings } = useGetMostBookedServiceQuery(undefined);
  const data = bookings?.data;
  // Define chart config
  const config = {
    data,
    xField: "count",
    yField: "serviceName",
    seriesField: "serviceName",
    colorField: "serviceName",
    legend: true,
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      count: { alias: "Number of Bookings" },
    },
    tooltip: {
      showTitle: false,
      formatter: (datum: any) => ({
        name: datum.serviceName,
        value: `${datum.count} bookings`,
      }),
    },
  };

  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Welcome Back {user?.name}
      </h1>
      <div>
        <Bar {...config} />
      </div>
    </div>
  );
};

export default AdminDashboard;
