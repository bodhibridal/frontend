// import React from 'react';
// // import Navbar from '../components/common/Navbar';
// // import DemoRibbon from '../components/common/DemoRibbon';
// // import Footer from '../components/common/Footer';
// import Navbar from "../comman/Navbar";
// //import DemoRibbon from "../comman/DemoRibbon";
// import DemoRibbon from "../comman/DemoRibbon";
// import Footer from "../home/NewFoooter";
// import {useEffect , useState } from "react";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//     useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const faqs = [
//     {
//       question: "How does this matrimony platform work?",
//       answer: "You create your profile, set your preferences, and start getting matches based on your details. You can also search profiles manually and connect with them."
//     },
//     {
//       question: "Are my details safe on this website?",
//       answer: "Yes. Your personal information and photos stay secure. We never share your data with any third party."
//     },
//     {
//       question: "Is creating an account free?",
//       answer: "Yes, creating a profile is completely free. You can register, upload photos, and browse matches without any charges."
//     },
//     {
//       question: "What are the benefits of upgrading to a membership plan?",
//       answer: "list",
//       listData : {
//         intor: "Premium members get additional features like:",
//         items: [
//           "Viewing contact details",
//           "Sending unlimited messages",
//           "Priority profile listing",
//           "Direct chat access",
//           "Advanced search filters"  
//         ]
//       }
//     },
//     {
//       question: "How do I contact another member?",
//       answer: "If you have a premium/membership plan, you can directly view contact details or send messages."
//     },
//     {
//       question: "What if I forget my password?",
//       answer: "You can reset your password easily by clicking Forgot Password on the login page."
//     },
//     {
//       question: "Can I delete or deactivate my profile?",
//       answer: "Yes, you can delete or temporarily hide your profile anytime from your account settings."
//     },
//      {
//       question: "Do you offer customer support?",
//       answer: "Yes. You can reach us anytime through our contact form, email Our support team responds promptly."
//     },

//   ];

//   return (
//     <div style={{ minHeight: '100vh' }}>
//         <DemoRibbon/>
//         <Navbar/>
//       {/* Google Fonts */}
//       <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

//       {/* FAQ Section with Split Background */}
//       <section style={{ 
//         display: 'flex',
//         minHeight: '100vh'
//       }}>
        
//         {/* LEFT SIDE - Red-400 Background */}
//         <div style={{
//           width: '35%',
//           backgroundColor: '#f87171',              // ⭐ red-400
//           padding: '60px 40px',
//           display: 'flex',
//           alignItems: 'flex-start',
//           justifyContent: 'center'
//         }}>
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.15)',
//             padding: '60px 45px',
//             borderRadius: '15px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             width: '100%',
//             marginTop: '20px'
//           }}>
//             {/* FAQ Badge */}
//             <span style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: '15px',
//               color: '#ffffff',
//               fontWeight: '600',
//               letterSpacing: '4px',
//               textTransform: 'uppercase',
//               marginBottom: '20px',
//               display: 'block'
//             }}>
//               FAQ
//             </span>

//             {/* Main Heading */}
//             <h2 style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: '42px',
//               color: '#ffffff',
//               fontWeight: '700',
//               lineHeight: '1.2',
//               marginBottom: '30px'
//             }}>
//               Frequently Asked Questions
//             </h2>

//             {/* Paragraph */}
//             <p style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: '17px',
//               color: 'rgba(255, 255, 255, 0.95)',
//               lineHeight: '1.9',
//               margin: '0'
//             }}>
//               Find answers to the most common questions about our matrimony platform. We've kept everything clear, simple, and helpful so you can enjoy a smooth and secure experience.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE - White Background with FAQ */}
//         <div style={{
//           width: '65%',
//           backgroundColor: '#ffffff',
//           padding: '60px 50px',
//           display: 'flex',
//           flexDirection: 'column'
//         }}>
//           <div style={{ width: '100%' }}>
//             {faqs.map((faq, index) => (
//               <div key={index} style={{ marginBottom: '18px' }}>
                
//                 {/* Question Button - BIGGER SIZE */}
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   style={{
//                     width: '100%',
//                     backgroundColor: openIndex === index ? '#fef2f2' : '#F8F8F8',  // red-50 when open
//                     border: 'none',
//                     padding: '28px 32px',                   // ⭐ BIGGER PADDING
//                     minHeight: '80px',                      // ⭐ MIN HEIGHT
//                     borderRadius: '12px',                   // ⭐ MORE ROUNDED
//                     cursor: 'pointer',
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     textAlign: 'left',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.backgroundColor = '#fee2e2';  // red-100
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.backgroundColor = openIndex === index ? '#fef2f2' : '#F8F8F8';
//                   }}
//                 >
//                   <span style={{
//                     fontFamily: "'Poppins', sans-serif",
//                     color: '#333333',
//                     fontSize: '18px',                       // ⭐ BIGGER FONT
//                     fontWeight: '500',
//                     paddingRight: '25px',
//                     lineHeight: '1.6'                       // ⭐ BETTER LINE HEIGHT
//                   }}>
//                     {faq.question}
//                   </span>
                  
//                   {/* Plus Icon - BIGGER */}
//                   <div style={{
//                     width: '38px',                          // ⭐ BIGGER ICON
//                     height: '38px',
//                     backgroundColor: '#f87171',             // ⭐ red-400
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexShrink: '0',
//                     transition: 'transform 0.3s ease',
//                     transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
//                   }}>
//                     <svg
//                       style={{
//                         width: '18px',                      // ⭐ BIGGER PLUS
//                         height: '18px',
//                         color: '#ffffff',
//                       }}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       strokeWidth="3"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* Answer - BIGGER */}
//                 <div style={{
//                   maxHeight: openIndex === index ? '500px' : '0',
//                   overflow: 'hidden',
//                   transition: 'max-height 0.4s ease',
//                 }}>
//                   <div style={{
//                     backgroundColor: '#fef2f2',             // ⭐ red-50
//                     padding: '25px 32px',                   // ⭐ BIGGER PADDING
//                     borderRadius: '0 0 12px 12px',
//                     fontFamily: "'Poppins', sans-serif",
//                     color: '#555555',
//                     fontSize: '16px',
//                     lineHeight: '1.9',
//                     whiteSpace: 'pre-line',
//                     borderLeft: '4px solid #f87171'         // ⭐ red-400
//                   }}>
//                     {faq.answer === "list" ? (
//   <div>
//     <p style={{ margin: '0 0 15px 0', fontWeight: '500', color: '#333' }}>
//       {faq.listData.intro}
//     </p>
//     <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
//       {faq.listData.items.map((item, i) => (
//         <li key={i} style={{
//           display: 'flex',
//           alignItems: 'center',
//           marginBottom: '12px',
//           fontSize: '15px',
//           color: '#555'
//         }}>
//           <span style={{
//             width: '22px',
//             height: '22px',
//             backgroundColor: '#f87171',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '12px',
//             flexShrink: '0'
//           }}>
//             <svg style={{ width: '12px', height: '12px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </span>
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// ) : (
//   faq.answer
// )}

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </section>

//       {/* Responsive CSS */}
//       <style>{`
//         @media (max-width: 900px) {
//           section {
//             flex-direction: column !important;
//           }
//           section > div:first-child {
//             width: 100% !important;
//             padding: 50px 25px !important;
//           }
//           section > div:last-child {
//             width: 100% !important;
//             padding: 40px 20px !important;
//           }
//         }
//       `}</style>
//       <Footer/>

//     </div>
//   );
// };

// export default FAQ;




// import React from 'react';
// import { useEffect, useState } from "react";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const faqs = [
//     {
//       question: "How does this matrimony platform work?",
//       answer: "You create your profile, set your preferences, and start getting matches based on your details. You can also search profiles manually and connect with them."
//     },
//     {
//       question: "Are my details safe on this website?",
//       answer: "Yes. Your personal information and photos stay secure. We never share your data with any third party."
//     },
//     {
//       question: "Is creating an account free?",
//       answer: "Yes, creating a profile is completely free. You can register, upload photos, and browse matches without any charges."
//     },
//     {
//       question: "What are the benefits of upgrading to a membership plan?",
//       answer: "list",
//       listData: {
//         intor: "Premium members get additional features like:",
//         items: [
//           "Viewing contact details",
//           "Sending unlimited messages",
//           "Priority profile listing",
//           "Direct chat access",
//           "Advanced search filters"
//         ]
//       }
//     },
//     {
//       question: "How do I contact another member?",
//       answer: "If you have a premium/membership plan, you can directly view contact details or send messages."
//     },
//     {
//       question: "What if I forget my password?",
//       answer: "You can reset your password easily by clicking Forgot Password on the login page."
//     },
//     {
//       question: "Can I delete or deactivate my profile?",
//       answer: "Yes, you can delete or temporarily hide your profile anytime from your account settings."
//     },
//     {
//       question: "Do you offer customer support?",
//       answer: "Yes. You can reach us anytime through our contact form, email Our support team responds promptly."
//     },

//   ];

//   return (
//     <>
//       {/* Google Fonts */}
//       <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

//       {/* FAQ Section with Split Background */}
//       <section style={{
//         display: 'flex',
//         minHeight: '100vh'
//       }}>

//         {/* LEFT SIDE - Red-400 Background */}
//         <div style={{
//           width: '35%',
//           backgroundColor: '#f87171',              // ⭐ red-400
//           padding: '60px 40px',
//           display: 'flex',
//           alignItems: 'flex-start',
//           justifyContent: 'center'
//         }}>
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.15)',
//             padding: '60px 45px',
//             borderRadius: '15px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             width: '100%',
//             marginTop: '20px'
//           }}>
//             {/* FAQ Badge */}
//             <span style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: '15px',
//               color: '#ffffff',
//               fontWeight: '600',
//               letterSpacing: '4px',
//               textTransform: 'uppercase',
//               marginBottom: '20px',
//               display: 'block'
//             }}>
//               FAQ
//             </span>

//             {/* Main Heading */}
//             <h2 style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: '42px',
//               color: '#ffffff',
//               fontWeight: '700',
//               lineHeight: '1.2',
//               marginBottom: '30px'
//             }}>
//               Frequently Asked Questions
//             </h2>

//             {/* Paragraph */}
//             <p style={{
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: '17px',
//               color: 'rgba(255, 255, 255, 0.95)',
//               lineHeight: '1.9',
//               margin: '0'
//             }}>
//               Find answers to the most common questions about our matrimony platform. We've kept everything clear, simple, and helpful so you can enjoy a smooth and secure experience.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE - White Background with FAQ */}
//         <div style={{
//           width: '65%',
//           backgroundColor: '#ffffff',
//           padding: '60px 50px',
//           display: 'flex',
//           flexDirection: 'column'
//         }}>
//           <div style={{ width: '100%' }}>
//             {faqs.map((faq, index) => (
//               <div key={index} style={{ marginBottom: '18px' }}>

//                 {/* Question Button - BIGGER SIZE */}
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   style={{
//                     width: '100%',
//                     backgroundColor: openIndex === index ? '#fef2f2' : '#F8F8F8',  // red-50 when open
//                     border: 'none',
//                     padding: '28px 32px',                   // ⭐ BIGGER PADDING
//                     minHeight: '80px',                      // ⭐ MIN HEIGHT
//                     borderRadius: '12px',                   // ⭐ MORE ROUNDED
//                     cursor: 'pointer',
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     textAlign: 'left',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.backgroundColor = '#fee2e2';  // red-100
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.backgroundColor = openIndex === index ? '#fef2f2' : '#F8F8F8';
//                   }}
//                 >
//                   <span style={{
//                     fontFamily: "'Poppins', sans-serif",
//                     color: '#333333',
//                     fontSize: '18px',                       // ⭐ BIGGER FONT
//                     fontWeight: '500',
//                     paddingRight: '25px',
//                     lineHeight: '1.6'                       // ⭐ BETTER LINE HEIGHT
//                   }}>
//                     {faq.question}
//                   </span>

//                   {/* Plus Icon - BIGGER */}
//                   <div style={{
//                     width: '38px',                          // ⭐ BIGGER ICON
//                     height: '38px',
//                     backgroundColor: '#f87171',             // ⭐ red-400
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexShrink: '0',
//                     transition: 'transform 0.3s ease',
//                     transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
//                   }}>
//                     <svg
//                       style={{
//                         width: '18px',                      // ⭐ BIGGER PLUS
//                         height: '18px',
//                         color: '#ffffff',
//                       }}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       strokeWidth="3"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* Answer - BIGGER */}
//                 <div style={{
//                   maxHeight: openIndex === index ? '500px' : '0',
//                   overflow: 'hidden',
//                   transition: 'max-height 0.4s ease',
//                 }}>
//                   <div style={{
//                     backgroundColor: '#fef2f2',             // ⭐ red-50
//                     padding: '25px 32px',                   // ⭐ BIGGER PADDING
//                     borderRadius: '0 0 12px 12px',
//                     fontFamily: "'Poppins', sans-serif",
//                     color: '#555555',
//                     fontSize: '16px',
//                     lineHeight: '1.9',
//                     whiteSpace: 'pre-line',
//                     borderLeft: '4px solid #f87171'         // ⭐ red-400
//                   }}>
//                     {faq.answer === "list" ? (
//                       <div>
//                         <p style={{ margin: '0 0 15px 0', fontWeight: '500', color: '#333' }}>
//                           {faq.listData.intro}
//                         </p>
//                         <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
//                           {faq.listData.items.map((item, i) => (
//                             <li key={i} style={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               marginBottom: '12px',
//                               fontSize: '15px',
//                               color: '#555'
//                             }}>
//                               <span style={{
//                                 width: '22px',
//                                 height: '22px',
//                                 backgroundColor: '#f87171',
//                                 borderRadius: '50%',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 marginRight: '12px',
//                                 flexShrink: '0'
//                               }}>
//                                 <svg style={{ width: '12px', height: '12px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//                                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                                 </svg>
//                               </span>
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ) : (
//                       faq.answer
//                     )}

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </section>

//       {/* Responsive CSS */}
//       <style>{`
//         @media (max-width: 900px) {
//           section {
//             flex-direction: column !important;
//           }
//           section > div:first-child {
//             width: 100% !important;
//             padding: 50px 25px !important;
//           }
//           section > div:last-child {
//             width: 100% !important;
//             padding: 40px 20px !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default FAQ;








// src/pages/FAQ.jsx
// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/common/Navbar';
// import DemoRibbon from '../components/common/DemoRibbon';
// import Footer from '../components/common/Footer';

import React from 'react';
import { useEffect, useState } from "react";
import Navbar from "../comman/Navbar";
import DemoRibbon from "../comman/DemoRibbon";
import Footer from "../home/NewFoooter";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How does this matrimony platform work?",
      answer: "You create your profile, set your preferences, and start getting matches based on your details. You can also search profiles manually and connect with them."
    },
    {
      question: "Are my details safe on this website?",
      answer: "Yes. Your personal information and photos stay secure. We never share your data with any third party."
    },
    {
      question: "Is creating an account free?",
      answer: "Yes, creating a profile is completely free. You can register, upload photos, and browse matches without any charges."
    },
    {
      question: "What are the benefits of upgrading to a membership plan?",
      answer: "list",
      listData: {
        intro: "Premium members get additional features like:",
        items: [
          "Viewing contact details",
          "Sending unlimited messages",
          "Priority profile listing",
          "Direct chat access",
          "Advanced search filters"
        ]
      }
    },
    {
      question: "How do I contact another member?",
      answer: "If you have a premium/membership plan, you can directly view contact details or send messages."
    },
    {
      question: "What if I forget my password?",
      answer: "You can reset your password easily by clicking Forgot Password on the login page."
    },
    {
      question: "Can I delete or deactivate my profile?",
      answer: "Yes, you can delete or temporarily hide your profile anytime from your account settings."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes. You can reach us anytime through our contact form, email Our support team responds promptly."
    },
  ];

  return (
    <div className="min-h-screen">
  
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* FAQ Section with Split Background */}
      <section className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT SIDE - Red-400 Background */}
        <div className="w-full lg:w-[35%] bg-red-400 py-[50px] px-6 lg:py-[60px] lg:px-10 flex items-start justify-center">
          <div className="bg-white/15 py-10 px-6 lg:py-[60px] lg:px-[45px] rounded-[15px] backdrop-blur-[10px] border border-white/25 w-full mt-5">
            
            {/* FAQ Badge */}
            <span
              className="text-[15px] text-white font-semibold tracking-[4px] uppercase mb-5 block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              FAQ
            </span>

            {/* Main Heading */}
            <h2
              className="text-[32px] lg:text-[42px] text-white font-bold leading-[1.2] mb-[30px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h2>

            {/* Paragraph */}
            <p
              className="text-[16px] lg:text-[17px] text-white/95 leading-[1.9] m-0"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Find answers to the most common questions about our matrimony platform. We've kept everything clear, simple, and helpful so you can enjoy a smooth and secure experience.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - White Background with FAQ */}
        <div className="w-full lg:w-[65%] bg-white py-10 px-5 lg:py-[60px] lg:px-[50px] flex flex-col">
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-[18px]">

                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full border-none py-6 px-6 lg:py-7 lg:px-8 min-h-[70px] lg:min-h-[80px] rounded-xl cursor-pointer flex justify-between items-center text-left transition-all duration-300 hover:bg-red-100 ${
                    openIndex === index ? 'bg-red-50' : 'bg-[#F8F8F8]'
                  }`}
                >
                  <span
                    className="text-[#333333] text-base lg:text-lg font-medium pr-5 lg:pr-6 leading-[1.6]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {faq.question}
                  </span>

                  {/* Plus Icon */}
                  <div
                    className={`w-9 h-9 lg:w-[38px] lg:h-[38px] bg-red-400 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div
                    className="bg-red-50 py-5 px-6 lg:py-6 lg:px-8 rounded-b-xl text-[#555555] text-[15px] lg:text-base leading-[1.9] whitespace-pre-line border-l-4 border-red-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {faq.answer === "list" ? (
                      <div>
                        <p className="m-0 mb-4 font-medium text-[#333]">
                          {faq.listData.intro}
                        </p>
                        <ul className="m-0 p-0 list-none">
                          {faq.listData.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center mb-3 text-[14px] lg:text-[15px] text-[#555]"
                            >
                              <span className="w-[22px] h-[22px] bg-red-400 rounded-full flex items-center justify-center mr-3 shrink-0">
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  strokeWidth="3"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default FAQ;