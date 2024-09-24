import { Skeleton } from "antd";
import Navigation from "../components/ui/Header";
import { useGetReviewsQuery } from "../redux/features/review/reviewEndpoints";
import TestimonialCard from "../components/ui/TestimonialCard";
import { TTestimonial } from "../types";

const Reviews = () => {
  // get reviews data from backend
  const {
    data: reviews,
    isFetching,
    isLoading,
  } = useGetReviewsQuery(undefined);

  return (
    <>
      <>
        <Navigation></Navigation>
        <div className="max-w-[1920px] mx-auto">
          <div className="h-full xl:h-full">
            <div className="container xl:pt-10 mx-auto flex justify-center items-center">
              {/*card  */}
              <div className="mt-32 xl:mt-16">
                <Skeleton loading={isFetching || isLoading} active>
                  {reviews?.data?.map((review: TTestimonial) => (
                    <div className="mb-8 border p-5 shadow-inner">
                      {/* reuseable card */}
                      <TestimonialCard
                        key={review?._id}
                        address={review?.address}
                        message={review?.message}
                        name={review?.name}
                        rating={review?.rating}
                      ></TestimonialCard>
                    </div>
                  ))}
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Reviews;
