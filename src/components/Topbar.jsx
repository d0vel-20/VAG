import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Topbar = () => {
  return (
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
        <Link to='/login'>Sign In</Link>
      </div>
      <div className=" w-[130px] h-[30px] flex items-center justify-center rounded-md text-textColor bg-accentColor">
      <Link to='/signup'>Getting Started</Link>
      </div>
    </div>
  </header>
  )
}
