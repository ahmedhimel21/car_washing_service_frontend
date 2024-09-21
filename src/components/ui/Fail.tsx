import { useNavigate } from "react-router-dom";

const FailPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700">
          Sorry, your payment could not be processed.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Please try again or contact customer support if the issue persists.
        </p>
        <a
          onClick={goBack}
          className="mt-6 inline-block bg-red-500 text-white py-2 px-4 rounded"
        >
          Retry Payment
        </a>
      </div>
    </div>
  );
};

export default FailPage;
