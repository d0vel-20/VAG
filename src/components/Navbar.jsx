import { useState } from 'react';
import {Link } from 'react-router-dom'
import {useActiveLink} from '@/utils/useActiveLink';

export const Navbar = () => {

  const isHomeActive = useActiveLink('/');
  const isAboutActive = useActiveLink('/about');


  const [isOpen, setIsOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleSolutionsMobile = () => setShowSolutions(!showSolutions);
  const toggleAboutMobile = () => setShowAbout(!showAbout);

  return (
    <nav className="bg-white sticky top-[0px] shadow-lg  z-10  ">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800"><Link to='/'>VAG</Link></div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-gray-800">
          <li><Link to="/" className={`${
                isHomeActive
                    ? 'text-accentColor'
                    : 'text-gray-800 '
                }`}>Home</Link></li>
            {/* Solutions with dropdown */}
            <li className="group relative">
              <Link to="/" className="hover:text-accentColor flex items-center">
                Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg space-y-2 py-2" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Brands</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Distributions</a></li>
              </ul>
            </li>

            <li><Link to="/product" className="hover:text-accentColor">Products</Link></li>
            <li><a href="#" className="hover:text-accentColor">FAQ</a></li>
            <li><a href="#" className="hover:text-accentColor">Blog</a></li>

            {/* About with dropdown */}
            <li className="group relative">
              <Link to="/about"  className={`${
                isAboutActive
                    ? 'text-accentColor flex items-center'
                    : 'text-gray-800 flex items-center '
                }`}>
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg  space-y-2 py-2" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Contact</Link></li>
              </ul>
            </li>

            <li><Link href="#" className="hover:text-accentColor">Cart</Link></li>
          </ul>
        </div>

        {/* Sliding Menu (Mobile) */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex items-center justify-between px-4 py-4">
            {/* Logo in mobile menu */}
            <div className="text-2xl font-bold text-primaryColor">VAG</div>
            {/* Close button */}
            <button onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="space-y-6 px-4 text-gray-800">
          <li><Link to="/" className="hover:text-accentColor">Home</Link></li>
            <li>
              <button onClick={toggleSolutionsMobile} className="hover:text-gray-600 flex items-center w-full text-left">
                Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showSolutions && (
                <ul className="pl-4 space-y-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Brands</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Distributions</a></li>
                </ul>
              )}
            </li>

            <li><Link to="/product" className="hover:text-gray-600">Products</Link></li>
            <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-600">Blog</a></li>

            <li>
              <button onClick={toggleAboutMobile} className="hover:text-gray-600 flex items-center w-full text-left">
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showAbout && (
                <ul className="pl-4 space-y-2">
                  <li><Link to="/about" className="block hover:text-gray-600">About Us</Link></li>
                  <li><a href="#" className="block hover:text-gray-600">Contact</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="hover:text-gray-600">Cart</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};







