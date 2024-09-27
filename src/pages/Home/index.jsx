import { Navbar } from "@/components/Navbar";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import hero from '@/assets/hero.jpg'
import {Link } from 'react-router-dom'
import { Search } from "@/components/Search";
import { WhyChooseUsSection } from "@/components/Choose";
import { Footer } from "@/components/Footer";


const categories = [
  { name: 'Air Conditioners', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727474789/aircon_uqvnl5.jpg' },
  { name: 'Surveillance Cameras', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727474789/surve_gseicj.jpg' },
  { name: 'General Electronics', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727474789/geapple_hggdjw.jpg' },
  { name: 'Solar Power', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727475747/solar_ztnuwv.png' },
  { name: 'Smart Tv', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727475740/smart_ojjwvx.png' },
  { name: 'Sewing Machines', img: 'https://res.cloudinary.com/da1sagzgc/image/upload/v1727475738/sewing_f5sygg.jpg' }
];

export const Home = () => {
  return (
    <>
      {/* top bar */}
      <header className="flex items-center  justify-between w-full h-[60px] bg-primaryColor px-5">
        <div className="flex items-center justify-center gap-2 text-dividerColor">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <div className="w-[100px] h-[30px] border-2 rounded-md bg-highlightColor border-highlightColor text-textColor flex items-center justify-center">
            Sign In
          </div>
          <div className=" w-[130px] h-[30px] flex items-center justify-center rounded-md text-textColor bg-accentColor">
            Getting Started
          </div>
        </div>
      </header>
      {/* end of topbar */}
      {/* -------------------------------------------------------------------- */}
      {/* beginning of navbar */}
      <Navbar />
      {/* ------------------------------------------------------------------- */}
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/da1sagzgc/image/upload/v1727470224/hero_etugac.jpg")' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Vision Africa Group
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Your trusted importers and distributors of high-quality electronics
          and electrical appliances in Nigeria
        </p>
        
        <div className="mt-6 flex items-center justify-center gap-5">
          <Link
            href="/shop"
            className="px-6 py-1 bg-accentColor text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
        <Search/>
      </div>

      
    </section>

    <section className="py-16 bg-secondaryColor">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Explore by Categories</h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* Replace with actual image */}
                <img src={category.img} alt={category.name} className="w-full h-full object-cover"/>
              </div>

              {/* Category Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-accentColor group-hover:text-highlightColor transition-colors">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* why choose us */}
    <WhyChooseUsSection/>
    <Footer/>
    </>
  );
};
