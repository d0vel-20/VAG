// src/components/WhatsAppButton.js
import React from 'react';

export const WhatsAppButton = () => {   
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number (in international format, without '+')
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 z-30 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 32 32"
        className="w-8 h-8"
      >
        <path d="M16 .269C7.555.269.663 7.174.663 15.618c0 2.77.725 5.484 2.108 7.884L.035 31.965l8.67-2.714a15.421 15.421 0 007.294 1.853c8.45 0 15.343-6.905 15.343-15.35C31.343 7.174 24.451.269 16 .269zm9.09 21.836c-.382 1.077-2.193 2.028-3.054 2.162-.79.119-1.741.165-2.79-.172-.645-.201-1.475-.48-2.544-.939-4.485-1.938-7.397-6.445-7.625-6.742-.228-.296-1.823-2.43-1.823-4.638 0-2.209 1.138-3.29 1.544-3.741.382-.44.831-.549 1.113-.549.276 0 .558 0 .804.015.263.01.605-.098.945.717.346.83 1.179 2.87 1.282 3.078.105.208.175.44.034.736-.137.293-.205.472-.41.723-.197.243-.43.544-.617.731-.207.204-.422.433-.182.84.238.406 1.057 1.735 2.273 2.816 1.57 1.408 2.88 1.855 3.308 2.062.428.207.673.173.924-.105.252-.277 1.074-1.247 1.362-1.674.289-.426.588-.358.982-.207.392.15 2.47 1.162 2.9 1.377.431.214.723.32.829.497.104.176.104.99-.278 2.067z" />
      </svg>
    </a>
  );
};

