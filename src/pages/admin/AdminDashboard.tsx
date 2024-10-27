/* eslint-disable @typescript-eslint/no-explicit-any */
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
  };

  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back {user?.name}
        </h1>
        <div className="flex flex-wrap gap-6">
          {/* Active Users Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <Card className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <FaUsers className="text-5xl mr-4 text-yellow-200" />
                  <div>
                    <h3 className="text-xl font-bold">Active Users</h3>
                    <p className="text-lg text-white">{12}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Total Posts Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <FaFileAlt className="text-5xl mr-4 text-yellow-200" />
                  <div>
                    <h3 className="text-xl font-bold">Total Services</h3>
                    <p className="text-lg text-white">{8}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Total Payments Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <FaMoneyBillWave className="text-5xl mr-4 text-yellow-200" />
                  <div>
                    <h3 className="text-xl font-bold">Total Payments</h3>
                    <p className="text-lg text-white">{8000}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Monthly Activity Card */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <Card className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <FaChartLine className="text-5xl mr-4 text-yellow-200" />
                  <div>
                    <h3 className="text-xl font-bold">Monthly Activity</h3>
                    <p className="text-lg text-white">{12}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="mt-12">
          <Column {...config} />
          <p className="text-center">Booking progress Chart</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
