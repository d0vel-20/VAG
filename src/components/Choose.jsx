import React from 'react';

const features = [
  {
    title: 'Global Connections',
    description: 'We partner with reputable manufacturers from around the world, ensuring that our clients receive only the best products.',
    icon: '🌍' // You can replace this with an actual icon or image
  },
  {
    title: 'Local Expertise',
    description: 'Our deep understanding of the African market allows us to provide tailored solutions that meet the unique needs of retailers and distributors.',
    icon: '🏠' // Replace with actual icon
  },
  {
    title: 'Streamlined Logistics',
    description: 'We handle all aspects of the supply chain, from sourcing to delivery, making it easier for you to focus on growing your business.',
    icon: '🚚' // Replace with actual icon
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Why Choose Us?</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-highlightColor p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              {/* Icon Placeholder */}
              <div className="text-5xl text-blue-600 mb-4 text-center">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-textColor mb-2 text-center">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

