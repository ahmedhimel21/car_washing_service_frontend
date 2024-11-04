import { Card } from "antd";
import { useGetMostBookedServiceQuery } from "../../redux/features/booking/bookingEndpoints";
import { useAppSelector } from "../../redux/hooks";
import { Column } from "@ant-design/plots";
import {
  FaChartLine,
  FaFileAlt,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

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
    height: 300, // Control chart height
  };

  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Welcome Back, {user?.name}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Cards */}
        <Card className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex items-center">
            <FaUsers className="text-4xl text-yellow-200" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <p className="text-white text-sm">{10}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex items-center">
            <FaFileAlt className="text-4xl text-yellow-200" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Total Services</h3>
              <p className="text-white text-sm">{9}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex items-center">
            <FaMoneyBillWave className="text-4xl text-yellow-200" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Total Payments</h3>
              <p className="text-white text-sm">{1890}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex items-center">
            <FaChartLine className="text-4xl text-yellow-200" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Monthly Activity</h3>
              <p className="text-white text-sm">{10}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Chart Section */}
      <div className="w-full mt-8">
        <Column {...config} />
        <p className="text-center text-sm mt-2">Booking Progress Chart</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
