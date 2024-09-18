import Navigation from "../components/ui/Header";
import ServiceCard from "../components/ui/ServiceCard";
import { useGetServicesQuery } from "../redux/features/services/servicesEndpoints";
import { TService } from "../types";

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery(undefined);
  console.log(services);
  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-[1920px] mx-auto">
        <div className="h-full xl:h-full border">
          <div className="container mx-auto xl:pt-10">
            <div className="mt-16 xl:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mb-6">
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
