// import { useState } from 'react';
// import { FiPlus, FiMinus } from 'react-icons/fi';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface FAQProps {
//   faqs: FAQItem[];
// }

// const FAQ: React.FC<FAQProps> = ({ faqs }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     if (openIndex === index) {
//       setOpenIndex(null);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <div>
//       {faqs.map((faq, index) => (
//         <div key={index} className="mb-4">
//           <div
//             className="flex items-center justify-between cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <h3 className="text-xl font-semibold">{faq.question}</h3>
//             {openIndex === index ? <FiMinus /> : <FiPlus />}
//           </div>
//           {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQ;
