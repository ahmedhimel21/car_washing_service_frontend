/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMostBookedServiceQuery } from "../../redux/features/booking/bookingEndpoints";
import { useAppSelector } from "../../redux/hooks";
import { Column } from "@ant-design/plots";

const AdminDashboard = () => {
  const { data: bookings } = useGetMostBookedServiceQuery(undefined);
  console.log(bookings);

  // Process the data to count bookings for each service
  const serviceBookingCount = bookings?.data?.reduce(
    (acc: any, booking: any) => {
      const serviceName = booking?.serviceName; // Assuming service has a name field
      if (!acc[serviceName]) {
        acc[serviceName] = 0;
      }
      acc[serviceName]++;
      return acc;
    },
    {}
  );

  let formattedData;
  if (serviceBookingCount) {
    formattedData = Object.entries(serviceBookingCount)?.map(
      ([service, count]) => ({
        service,
        bookings: count,
      })
    );
  }

  // Define chart config
  const config = {
    data: formattedData,
    xField: "service",
    yField: "bookings",
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
      <h1 className="text-2xl font-bold text-center">
        Welcome Back {user?.name}
      </h1>
      <div>
        <Column {...config} />
      </div>
    </div>
  );
};

export default AdminDashboard;
