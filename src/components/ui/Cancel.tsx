const CancelPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">
          Payment Canceled
        </h1>
        <p className="text-lg text-gray-700">
          You have canceled the payment process.
        </p>
        <a
          href="/checkout"
          className="mt-6 inline-block bg-yellow-500 text-white py-2 px-4 rounded"
        >
          Go to Checkout
        </a>
      </div>
    </div>
  );
};

export default CancelPage;
