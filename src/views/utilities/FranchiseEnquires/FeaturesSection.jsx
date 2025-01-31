import React from "react";

const features = [
  {
    title: "Target Audience",
    description:
      "We have a diverse target audience, ranging from plant enthusiasts to eco-conscious individuals.",
    icon: "🌱",
  },
  {
    title: "Preferences",
    description:
      "Customers prefer fresh, organic, and eco-friendly products that resonate with their lifestyle.",
    icon: "🌿",
  },
  {
    title: "Fresh Concept",
    description:
      "Our concept revolves around creating green spaces and selling eco-friendly products.",
    icon: "🌍",
  },
  {
    title: "Brand Value",
    description:
      "Biotech Maali is known for its trust, innovation, and customer satisfaction.",
    icon: "💡",
  },
];

const FeaturesSection = () => (
  <div className="py-8 md:py-16 bg-white-50">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <div className="text-2xl md:text-4xl mb-2 md:mb-4">
            {feature.icon}
          </div>
          <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
            {feature.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesSection;
