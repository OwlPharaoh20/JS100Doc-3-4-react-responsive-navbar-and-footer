// src/components/Accordion.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'You can track your order using the tracking number provided in your confirmation email.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'Yes, we offer 24/7 customer support. You can contact us anytime via email or phone.',
  },
  // Add more FAQs as needed
];

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="container mx-auto p-6 border-b">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
  <div
    className="py-2 overflow-hidden transition-max-height duration-500 ease-in-out"
    style={{ maxHeight: activeIndex === index ? '500px' : '0px' }}
  >
    <p className="text-gray-700">{faq.answer}</p>
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Accordion;
  
