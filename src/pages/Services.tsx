import { useState } from "react";
import Navigation from "../components/ui/Header";
import ServiceCard from "../components/ui/ServiceCard";
import { useGetServicesQuery } from "../redux/features/services/servicesEndpoints";
import { TService } from "../types";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [sort, setSort] = useState({});
  console.log(sort);

  const { data: services, isFetching } = useGetServicesQuery({
    searchTerm,
    minPrice,
    maxPrice,
    sort,
  });
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      setSort({ sort: "-price" });
    }
    if (event.target.value === "desc") {
      setSort({ sort: "price" });
    }
    if (event.target.value === "default") {
      setSort({ sort: "" });
    }
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-[1920px] mx-auto">
        <div className="h-full xl:h-full">
          <div className="container mx-auto xl:pt-10">
            {/* Search, Filter, and Sort Section */}
            <div className="mt-24 xl:mt-16 flex flex-col md:flex-row justify-between items-center py-6 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white p-4 rounded-lg shadow-lg">
              {/* Search Input */}
              <input
                type="text"
                placeholder="🔎 Search services..."
                className="p-3 w-full md:w-auto border border-transparent rounded-md shadow-md mb-4 md:mb-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Filter by Price */}
              <div className="flex items-center mb-4 md:mb-0 text-white">
                <span className="mr-3 font-bold">Price:</span>
                <input
                  type="number"
                  className="border p-2 w-full rounded-md shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                  placeholder="Min"
                  value={minPrice || ""}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <span className="mx-2">-</span>
                <input
                  type="number"
                  className="border p-2 w-full rounded-md shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                  placeholder="Max"
                  value={maxPrice || ""}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>

              {/* Sort by Price or Duration */}
              <div className="flex items-center">
                <label className="mr-3 font-bold">Sort by:</label>
                <select
                  className="border p-3 rounded-md shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                  onChange={handleSortChange}
                >
                  <option value="default">Duration</option>
                  <option value="asc">High to Low</option>
                  <option value="desc">Low to High</option>
                </select>
              </div>
            </div>

            {/*card  */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mb-6">
              {(services?.data as TService[])?.map((service) => (
                <ServiceCard
                  service={service}
                  isFetching={isFetching}
                ></ServiceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
