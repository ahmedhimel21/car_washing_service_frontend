/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import { useGetServicesComparisonQuery } from "../../../redux/features/services/servicesEndpoints";
import { toast } from "sonner";

// Variants for modal animation
const modalVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ServiceComparison = () => {
  const { data: services } = useGetServicesComparisonQuery(undefined);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle service selection
  const handleSelectService = (id: number) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
  };

  // Open modal if two or more services are selected
  const handleCompare = () => {
    if (selectedServices.length >= 2) {
      setIsModalOpen(true);
    } else {
      toast.error("Please select at least two services to compare.");
    }
  };

  return (
    <section className="service-comparison px-4 lg:px-0 pt-24 xl:pt-24">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Compare Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-[1200px] mx-auto">
        {services?.data?.map((service: any) => (
          <div
            key={service._id}
            className="border p-4 rounded-lg shadow-lg bg-white text-center relative transition-transform transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {service.name}
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Price: ${service.price}
            </p>
            <p className="text-sm text-gray-500">
              Duration: {service.duration} mins
            </p>
            <button
              onClick={() => handleSelectService(service._id)}
              className={`mt-4 px-6 py-2 rounded-lg font-semibold ${
                selectedServices.includes(service._id)
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {selectedServices.includes(service._id)
                ? "Selected"
                : "Select for Comparison"}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleCompare}
          className="btn btn-accent h-12 max-w-[168px] mx-auto mt-12"
        >
          Compare Services
        </button>
      </div>

      {/* Comparison Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 lg:mx-0 relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-red-700 hover:text-red-900 text-xl"
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Service Comparison
            </h3>
            <div className="overflow-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 border-b border-gray-300 font-medium text-gray-700">
                      Feature
                    </th>
                    {selectedServices.map((id) => (
                      <th
                        key={id}
                        className="text-left py-3 px-4 border-b border-gray-300 font-medium text-gray-700"
                      >
                        {services?.data.find((s: any) => s._id === id)?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium text-gray-700">
                      Price
                    </td>
                    {selectedServices.map((id) => (
                      <td key={id} className="border px-4 py-2 text-gray-600">
                        ${services?.data.find((s: any) => s._id === id)?.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium text-gray-700">
                      Duration
                    </td>
                    {selectedServices.map((id) => (
                      <td key={id} className="border px-4 py-2 text-gray-600">
                        {
                          services?.data.find((s: any) => s._id === id)
                            ?.duration
                        }{" "}
                        mins
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium text-gray-700">
                      Features
                    </td>
                    {selectedServices.map((id) => (
                      <td key={id} className="border px-4 py-2 text-gray-600">
                        <ul className="list-disc list-inside">
                          {services?.data
                            .find((s: any) => s._id === id)
                            ?.features.map((feature: any, index: any) => (
                              <li key={index}>{feature}</li>
                            ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ServiceComparison;
