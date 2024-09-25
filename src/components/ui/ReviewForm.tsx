import { Rate } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../../redux/features/review/reviewEndpoints";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { useAppSelector } from "../../redux/hooks";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ReviewForm = () => {
  // get user info from local state
  const user = useAppSelector((state) => state?.auth?.user);
  // rating state
  const [rating, setRating] = useState(0);
  // get reviews data from backend
  const { data: reviews } = useGetReviewsQuery(undefined);
  // calculating average rating
  const averageRating = Number(calculateAverageRating(reviews?.data));
  // post review function
  const [addReview] = useAddReviewMutation();

  // post review functionality
  const handleReview = async (e: FieldValues) => {
    const toastId = toast.loading("Posting your review");
    e.preventDefault();
    const reviewData = {
      name: user?.name,
      address: user?.address,
      message: e.target.message.value,
      rating: rating,
    };
    try {
      const res = await addReview(reviewData);
      if (res?.data?.success) {
        toast.success(res.data.message, { id: toastId });
        e.target.message.value = "";
        setRating(0);
      }
    } catch (err) {
      toast.error("Failed to create review");
    }
  };
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-[800px] mx-auto">
      {/* Black Overlay if not logged in */}
      {!user && (
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex justify-center items-center rounded-md">
          <Link to={"/login"} className="btn btn-accent w-[264px] h-12 mr-2">
            Login to leave a review
          </Link>
        </div>
      )}

      {/* Overall Rating */}
      <div className="mb-6 text-center">
        <motion.h2
          className="text-2xl font-bold h2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Overall Site Rating <br />{" "}
          <div className="bg-red-50 rounded-lg w-[222px] py-3 mx-auto shadow-md mt-3 flex justify-center items-center">
            <Rate allowHalf disabled value={averageRating}></Rate>
            <span className="text-[10px] text-gray-500 ml-2">
              {averageRating} Out of 5
            </span>
          </div>
        </motion.h2>
      </div>

      {/* Star Rating and Feedback Input */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="font-bold text-lg">Rate Us:</h3>
          <div className="flex gap-2 mt-2">
            <Rate
              onChange={(value) => setRating(value)}
              allowHalf
              value={rating}
            />
          </div>
        </div>
        <form onSubmit={handleReview}>
          <textarea
            required={true}
            placeholder="Leave your feedback"
            className="w-full p-4 border-2 border-gray-200 rounded-md focus:outline-none focus:border-accent"
            name="message"
          />
          <button type="submit" className="btn btn-accent w-full h-12 mt-5">
            Submit Review
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReviewForm;
