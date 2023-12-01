'use client'

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='max-w-[700px] w-[95%] mt-14' id='faq'>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer border-t-2 p-4"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            {openIndex === index ? <FiMinus /> : <FiPlus />}
          </div>
          {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
