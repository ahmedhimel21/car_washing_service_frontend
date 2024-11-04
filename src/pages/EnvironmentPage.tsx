import Navigation from "../components/ui/Header";

const EnvironmentalPage = () => {
  const practices = [
    {
      icon: "🌊",
      title: "Water Conservation",
      description: "We use 50% less water than traditional car washes.",
    },
    {
      icon: "🌱",
      title: "Biodegradable Products",
      description: "All cleaning products are 100% biodegradable.",
    },
    {
      icon: "♻️",
      title: "Recycling",
      description: "We recycle 80% of water and waste materials.",
    },
  ];

  return (
    <div className="bg-green-50">
      <Navigation></Navigation>
      <div className="min-h-screen pt-16 xl:pt-32 pb-10 px-4  w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Commitment to Sustainability
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          AquaClean is dedicated to eco-friendly practices to reduce our impact
          on the environment.
        </p>

        {/* Eco-Friendly Practices */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-white"
            >
              <div className="text-5xl text-green-500 mb-4 text-center">
                {practice.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {practice.title}
              </h3>
              <p className="text-gray-600 text-center">
                {practice.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Certifications
          </h3>
          <p className="text-center text-gray-600">
            We are certified by environmental organizations for our commitment
            to sustainable practices.
          </p>
        </div>

        {/* Customer Involvement */}
        <div className="max-w-3xl mx-auto bg-blue-50 p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            How You Can Help
          </h3>
          <p className="text-center text-gray-600 mb-4">
            Join us in our mission by choosing eco-friendly car care options.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Use a bucket instead of a hose to save water.</li>
            <li>Consider eco-friendly car products for home maintenance.</li>
            <li>Join our membership to support green initiatives.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalPage;
