import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const paymentDetails = location.state?.paymentDetails;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700">Thank you for your payment.</p>
        {paymentDetails && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Service: {"paymentDetails.service"}
            </p>
            <p className="text-sm text-gray-600">
              Time Slot: {"paymentDetails.slot"}
            </p>
            <p className="text-sm text-gray-600">
              Amount Paid: {"paymentDetails.amount"}
            </p>
          </div>
        )}
        <a
          href="/"
          className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
