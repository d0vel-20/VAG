// src/components/FAQ.js
import React, { useState } from 'react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any product within 30 days of receiving it. The product must be in its original packaging, unused, and in the same condition as when you received it. Please contact our support team for further instructions.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-7 business days for domestic orders. International orders may take longer depending on the destination. Once your order is shipped, we will send you a tracking number for your reference.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary based on your location. Please check the shipping details at checkout for more information.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with the tracking number and a link to track your shipment. You can also track your order directly from your account dashboard on our website.",
    },
    {
      question: "Can I cancel or change my order?",
      answer:
        "Yes, you can cancel or modify your order within 24 hours of placing it. After this period, the order may already be processed and shipped. Contact our customer support team for assistance with cancellations or changes.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

