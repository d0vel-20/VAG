import { Navbar } from "@/components/Navbar";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import hero from '@/assets/hero.jpg'
import {Link } from 'react-router-dom'
import { Search } from "@/components/Search";
import { WhyChooseUsSection } from "@/components/Choose";
import { Footer } from "@/components/Footer";
import { products } from "@/data/data";
import { categories } from "@/data/data";
import ProductCard from "@/components/Product";
import CountdownTimer from "@/components/Countdown";
import { flashSaleProducts } from "@/data/data";
import { Topbar } from "@/components/Topbar";
import { blogs } from "@/data/data";
import { BlogCard } from "@/components/Blogcard";
import { FAQ } from "@/components/Faq";



const flashSaleEndTime = '2024-10-01T23:59:59';

export const Home = () => {
  return (
    <>
      {/* top bar */}
        
      {/* ------------------------------------------------------------------- */}
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-cover bg-center px-2" style={{ backgroundImage: 'url("https://res.cloudinary.com/da1sagzgc/image/upload/v1727470224/hero_etugac.jpg")' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      
      {/* ================================================================================== */}
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Vision Africa Group
        </h1>
        <p className="mt-4 text-[px] md:text-lg max-w-2xl">
        Your trusted name in impprtation and distribution of high-quality electronics and electrical products in Nigeria since 2008. <br /> At vision Africa group we pride ourselves of being leading suppliers of the latest innovation of electronics and electrical appliances

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

{/* ==================================================================================== */}

    {/* Latest Products */}

    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

    {/* ===================================================================================== */}

        {/* flash sale */}
        <div className="max-w-7xl mx-auto p-6 bg-highlightColor rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Limited Time Flash Sale!</h2>
        <CountdownTimer endTime={flashSaleEndTime} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

        {/* ============================================================================= */}
    {/* EXplore */}
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

    {/* ======================================================================================== */}
    {/* blog section */}

    <section className="py-12 px-6 md:px-12 bg-primaryColor">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-textColor">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </section>

    {/* ============================================== */}
   

    {/* why choose us */}
    <WhyChooseUsSection/>
    <FAQ/>
 
    </>
  );
};
