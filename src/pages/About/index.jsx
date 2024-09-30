import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import { Topbar } from '@/components/Topbar'
import { WhyChooseUsSection } from "@/components/Choose";

export const About = () => {
  return (
   <>

    {/* body of about page */}
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url('https://res.cloudinary.com/da1sagzgc/image/upload/v1727474789/geapple_hggdjw.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">About Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Welcome to our e-commerce website! We started with a passion for delivering the best quality products to our customers. With a focus on top-notch service and premium products, we aim to create a shopping experience like no other.
          </p>
          <p className="text-lg leading-relaxed">
            Our journey began in 2015 when we realized a gap in the market for unique, high-quality products that stand out. Today, we’re proud to serve thousands of happy customers across the globe, always focusing on innovation, customer satisfaction, and building a community of loyal shoppers.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-500">
                Passionate about innovation, John leads the team with a vision for the future.
              </p>
            </div>

            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600 mb-2">Chief Marketing Officer</p>
              <p className="text-gray-500">
                Jane’s creativity and strategic thinking have brought our brand to life.
              </p>
            </div>

            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Williams</h3>
              <p className="text-gray-600 mb-2">Product Manager</p>
              <p className="text-gray-500">
                Sarah ensures that every product meets our high standards of quality.
              </p>
            </div>

            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Customer Support</p>
              <p className="text-gray-500">
                Mike is dedicated to providing exceptional customer service every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is simple: to offer top-quality products, a seamless shopping experience, and unparalleled customer service. We believe in transparency, integrity, and going the extra mile for our customers. Our team works tirelessly to curate the best products, ensuring that they meet your expectations and more.
          </p>
        </div>
      </section>

      <WhyChooseUsSection/>
    </div>

   {/* footer */}
   </>
  )
}
