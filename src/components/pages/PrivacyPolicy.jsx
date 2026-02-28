// import React, { useEffect } from 'react';  // ⬅️ useEffect add kiya
// // import Navbar from "../components/common/Navbar";
// // import Footer from "../components/common/Footer";

// import Navbar from "../comman/Navbar";
// import Footer from "../home/NewFoooter";

// function PrivacyPolicy() {

//   // ⭐ YE ADD KARO - Page top se open hoga
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const sections = [
//     {
//       id: 1,
//       title: "Introduction",
//       content: [
//         {
//           text: "BodhiBridal.com is an online matrimonial portal endeavouring constantly to provide you with matrimonial services. This privacy statement is common to all the matrimonial Website/apps operated under BodhiBridal.com. Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you.",
//           points: [],
//         },
//         {
//           text: "You acknowledge that you are disclosing information voluntarily. By accessing/using the website/apps and/or by providing your information, you consent to the collection and use of the info you disclose on the website/apps in accordance with this Privacy Policy.",
//           points: [],
//         },
//         {
//           subtitle: "Important Notice",
//           text: "If you do not agree for use of your information, please do not use or access this website/apps.",
//           points: [],
//           highlight: true,
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "What Information You Need to Give to Use This Website/Apps?",
//       content: [
//         {
//           subtitle: "Personal Information We Collect",
//           text: "The information we gather from members and visitors who apply for the various services our Website/Apps offers includes, but may not be limited to:",
//           points: [
//             "Photo of the user",
//             "Email address",
//             "Name",
//             "Date of birth",
//             "Educational qualifications",
//             "A user-specified password",
//             "Mailing address",
//             "Zip/Pin code",
//             "Telephone/Mobile number or Fax number",
//           ],
//         },
//         {
//           subtitle: "Payment Information",
//           text: "We use a secure server for credit card transactions to protect the credit card information of our users. If you establish a credit account with us to pay the fees we charge, some additional information is collected:",
//           points: [
//             "Billing address",
//             "Credit/Debit card number",
//             "Credit/Debit card expiration date",
//             "Tracking information from cheques or demand drafts",
//           ],
//         },
//         {
//           subtitle: "Cookies",
//           text: "Cookies are used to store the login information. Cookies are small files placed on your hard drive that will assist us in providing our services. You may also encounter Cookies or identical/related devices on certain pages of the website/apps that are placed by third parties. We do not control the use of cookies by third parties.",
//           points: [],
//         },
//         {
//           subtitle: "Automatic Data Collection",
//           text: "The user information we collect depends on the context of your interactions with us and the website or Apps, the choices you make and the products and features you use. When you access our websites or apps, the following data is collected automatically:",
//           points: [
//             "Device ID",
//             "Log files",
//             "Geographic Location",
//             "Device Information/specification",
//           ],
//         },
//         {
//           subtitle: "Social Media Login",
//           text: "If a user registers using social networking platforms such as Facebook, Google, LinkedIn and others, we may collect personal data you choose to allow us to access through their APIs.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Why Does Our Mobile Application Require Permissions From You?",
//       content: [
//         {
//           text: "Our services help connect users to their matches based on several parameters and preferences. To fix bugs within the application and improve the user experience, we require users to grant us access to the following:",
//           points: [],
//         },
//         {
//           subtitle: "📷 Camera",
//           text: "Access to the device's camera allows users to take their picture, and upload it as their profile picture on our portal.",
//           points: [],
//         },
//         {
//           subtitle: "👥 Contacts",
//           text: "The mobile application will obtain the user accounts that are associated with Facebook or Google+ for a quick signup process.",
//           points: [],
//         },
//         {
//           subtitle: "📍 Location",
//           text: "Based on their GPS coordinates, users are served with profiles of members located in the same vicinity. Also, users are provided with the information of our physical stores that are located nearest to the user's GPS coordinates.",
//           points: [],
//         },
//         {
//           subtitle: "📱 Phone",
//           text: "Our mobile application is optimized to work on multiple devices and networks. The device information and network details help analyze and fix issues that are isolated to a particular device or a particular network.",
//           points: [],
//         },
//         {
//           subtitle: "💬 SMS",
//           text: "The mobile application detects SMS(s) and auto-fills the OTP/PIN details for a faster and better user experience.",
//           points: [],
//         },
//         {
//           subtitle: "💾 Storage",
//           text: "The users can upload pictures from their device memory and use it as their profile picture. Furthermore, users can download horoscope details, profile details and astro-match results on to their device memory.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "How The Website/Apps Uses The Information It Collects/Tracks?",
//       content: [
//         {
//           text: "BodhiBridal.com collects information for the following purposes:",
//           points: [
//             "Data analysis",
//             "Identifying usage trends",
//             "Determining the effectiveness of our promotional campaigns",
//             "Evaluating and improving our websites or apps, products, and services",
//             "Marketing research",
//             "Ensuring that we are able to fulfil your requirements",
//             "Delivering personalized experience",
//           ],
//         },
//         {
//           subtitle: "IP Address Usage",
//           text: "We identify and use your IP address to help diagnose problems with our server, and to administer our website/apps. Your IP address is also used to help identify you and to gather broad demographic information.",
//           points: [],
//         },
//         {
//           subtitle: "Additional Uses",
//           text: "We may also use your personal information for:",
//           points: [
//             "Analysis of data and usage trends",
//             "Evaluation and improvement of our site/App",
//             "Marketing research",
//             "Prevention of frauds",
//           ],
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "For European Union Members (EU)",
//       content: [
//         {
//           text: "If you are located in the EU, you will be asked to provide consent to the collection, processing, and sharing of your personal information. Personal information means any information related to an identified or identifiable natural person.",
//           points: [],
//         },
//         {
//           subtitle: "Your Rights",
//           text: "You have the following rights:",
//           points: [
//             "Right to share and access your personal information",
//             "Right to withdraw consent for sharing your personal information at any point of time",
//             "Right to erase your personal information subject to applicable laws",
//           ],
//         },
//         {
//           subtitle: "Data Storage",
//           text: "Your personal information may be stored in databases located outside of the EU including in India. Where we transfer personal data outside of EU, we either transfer personal information to countries that provide an adequate level of protection or we have appropriate safeguards in place.",
//           points: [],
//         },
//         {
//           subtitle: "Identity Verification",
//           text: "We may require proof of or need to verify your identity before we can give effect to these rights. To request to review, update, or delete your personal information, please submit a request form by sending an email to privacy@bodhibridal.com.",
//           points: [],
//         },
//         {
//           subtitle: "Third Party Sharing (UK)",
//           text: "We may share your information with third parties who are an anti-fraud solution provider(s) located in UK. They help us to ensure we keep you safe from scammers and fraudsters.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "With Whom The Website/Apps Shares The Information It Collects/Tracks?",
//       content: [
//         {
//           subtitle: "Associates and Affiliates",
//           text: "We may share such identifiable information with our associates/affiliates/subsidiaries and such associates/affiliates/subsidiaries may market to you as a result of such sharing. Any information you give us is held with the utmost care and security.",
//           points: [],
//         },
//         {
//           subtitle: "Legal Requirements",
//           text: "We are bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer/visitor. Where required or permitted by law, information may be provided to others, such as:",
//           points: [
//             "Regulators and law enforcement agencies",
//             "To protect the rights, property or personal safety of other members or the general public",
//           ],
//         },
//         {
//           subtitle: "Fraud Prevention",
//           text: "We may voluntarily share your information with the following if we feel that the transaction is of suspicious nature:",
//           points: [
//             "Law enforcement agencies",
//             "Gateway service providers",
//             "Anti-fraud solution provider(s)",
//           ],
//         },
//         {
//           subtitle: "Corporate Transactions",
//           text: "From time to time, we may consider corporate transactions such as a merger, acquisition, reorganization, asset sale, or similar. In these instances, we may transfer or allow access to information to enable the assessment and undertaking of that transaction. If we buy or sell any business or assets, personal information may be transferred to third parties involved in the transaction.",
//           points: [],
//         },
//         {
//           subtitle: "Third Party Websites",
//           text: "Our website/apps link to other website/apps and may collect personally identifiable information about you. We are not responsible for the privacy policy or the contents of those linked website/apps.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 7,
//       title: "How Long Do We Keep Your Information?",
//       content: [
//         {
//           text: "As stipulated in the Privacy Policy, we will retain the information we collect from users under the following circumstances:",
//           points: [
//             "For as long as the users subscribe to our services to meet their suitable purpose(s) for which it was collected",
//             "For the sake of enforcing agreements",
//             "For performing audits",
//             "For resolving any form of disputes",
//             "For establishing legal defences",
//             "For pursuing legitimate businesses",
//             "To comply with the relevant applicable laws",
//           ],
//         },
//       ],
//     },
//     {
//       id: 8,
//       title: "What Are The Security Precautions In Respect Of Your Personal Information?",
//       content: [
//         {
//           text: "We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal control measures designed to protect the security of any personal information we process.",
//           points: [],
//         },
//         {
//           subtitle: "Security Measures",
//           text: "Our security measures include:",
//           points: [
//             "Secure server for credit card transactions",
//             "Organizational security measures",
//             "Technical security measures",
//             "Internal control measures",
//             "Security guidelines protecting against unauthorized access",
//           ],
//         },
//         {
//           subtitle: "Disclaimer",
//           text: "Please remember that we cannot guarantee that the internet itself is 100% secure. Once your information is in our possession, we adhere to security guidelines protecting it against unauthorized access.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 9,
//       title: "Change Of Privacy Policy",
//       content: [
//         {
//           text: "We may change this Privacy Policy without notice from time to time without any notice to you. However, changes will be updated in the Privacy Policy page.",
//           points: [],
//         },
//         {
//           text: "We recommend that you review this Privacy Policy periodically to stay informed about how we are protecting your information.",
//           points: [],
//         },
//       ],
//     },
//     {
//       id: 10,
//       title: "How To Address Your Grievance",
//       content: [
//         {
//           subtitle: "Grievance Officer Details",
//           text: "If you have any grievances or concerns regarding your privacy, please contact our Grievance Officer:",
//           points: [],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section - RED-400 COLOR */}
//       <section className="bg-red-400 py-16 sm:py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Privacy Policy
//           </h1>
//           <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-4">
//             Your privacy is important to us. This policy explains how we
//             collect, use, and protect your personal information.
//           </p>
//           <p className="text-sm text-white/70">Last Updated: January 2025</p>
//         </div>
//       </section>

//       {/* Introduction Box - RED-400 */}
//       <section className="py-12 md:py-16 border-b border-gray-100">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
//             <p className="text-gray-700 leading-relaxed">
//               Welcome to{" "}
//               <span className="font-bold text-red-400">BodhiBridal.com</span>
//               . We are an online matrimonial portal endeavouring constantly to
//               provide you with matrimonial services. Since we are strongly
//               committed to your right to privacy, we have drawn out a privacy
//               statement with regard to the information we collect from you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Quick Navigation - RED-400 */}
//       <section className="py-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
//           <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
//             Quick Navigation
//           </h3>
//           <div className="flex flex-wrap justify-center gap-2">
//             {sections.map((section) => (
//               <a
//                 key={section.id}
//                 href={`#section-${section.id}`}
//                 className="bg-white px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-red-400 hover:text-white transition-colors shadow-sm border border-gray-200"
//               >
//                 {section.id}. {section.title.substring(0, 25)}
//                 {section.title.length > 25 ? "..." : ""}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Policy Sections - RED-400 */}
//       <section className="py-12 md:py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="space-y-12">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className="scroll-mt-20"
//                 id={`section-${section.id}`}
//               >
//                 {/* Section Number & Title */}
//                 <div className="flex items-start gap-4 mb-6">
//                   <span className="flex-shrink-0 w-10 h-10 bg-red-400 text-white rounded-lg flex items-center justify-center font-bold">
//                     {section.id}
//                   </span>
//                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
//                     {section.title}
//                   </h2>
//                 </div>

//                 {/* Section Content */}
//                 <div className="pl-14 space-y-6">
//                   {section.content.map((item, idx) => (
//                     <div key={idx}>
//                       {item.subtitle && (
//                         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                           {item.subtitle}
//                         </h3>
//                       )}

//                       {item.highlight ? (
//                         <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
//                           <p className="text-red-700 font-medium">{item.text}</p>
//                         </div>
//                       ) : (
//                         <p className="text-gray-600 leading-relaxed mb-3">
//                           {item.text}
//                         </p>
//                       )}

//                       {item.points && item.points.length > 0 && (
//                         <ul className="space-y-2 ml-4">
//                           {item.points.map((point, pointIdx) => (
//                             <li
//                               key={pointIdx}
//                               className="flex items-start gap-3 text-gray-600"
//                             >
//                               <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
//                               <span>{point}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Divider */}
//                 {index < sections.length - 1 && (
//                   <div className="border-b border-gray-200 mt-10"></div>
//                 )}
//               </div>
//             ))}

//             {/* Grievance Officer Contact Card - RED-400 */}
//             <div
//               className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-200"
//               id="grievance"
//             >
//               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//                 <span className="text-2xl">📋</span> Grievance Officer Contact
//                 Details
//               </h3>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {/* Officer Info */}
//                 <div className="bg-white p-5 rounded-xl shadow-sm">
//                   <h4 className="font-bold text-gray-800 mb-3">
//                     Grievance Officer
//                   </h4>
//                   <p className="text-red-400 font-semibold text-lg mb-2">
//                     Mr. [Officer Name]
//                   </p>
//                   <p className="text-gray-600 text-sm">
//                     Appointed as per Section 5 (9) of the Information Technology
//                     (Reasonable Security & Procedures and Sensitive Personal
//                     Data or Information) Rule, 2011.
//                   </p>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="bg-white p-5 rounded-xl shadow-sm">
//                   <h4 className="font-bold text-gray-800 mb-3">
//                     Contact Details
//                   </h4>
//                   <ul className="space-y-3">
//                     <li className="flex items-start gap-3">
//                       <span className="text-red-400">📍</span>
//                       <span className="text-gray-600">
//                         BodhiBridal.com Limited,
//                         <br />
//                         [Your Address],
//                         <br />
//                         [City, State - PIN Code]
//                       </span>
//                     </li>
//                     <li className="flex items-center gap-3">
//                       <span className="text-red-400">✉️</span>
//                       <a
//                         href="mailto:grievanceofficer@bodhibridal.com"
//                         className="text-red-400 hover:underline"
//                       >
//                         grievanceofficer@bodhibridal.com
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Availability */}
//               <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
//                 <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
//                   <span>🕐</span> Availability
//                 </h4>
//                 <p className="text-gray-600">
//                   The Grievance Officer shall be available between{" "}
//                   <span className="font-semibold text-red-400">
//                     10:00 AM to 6:00 PM IST
//                   </span>{" "}
//                   from{" "}
//                   <span className="font-semibold">Monday to Saturday</span>,
//                   excluding Sundays and Public Holidays in India.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Summary Box - RED-400 */}
//       <section className="py-12 md:py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="bg-white p-8 rounded-2xl shadow-md">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//               Key Points Summary
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
//                 <span className="text-green-500 text-xl">✅</span>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">
//                     We Collect Information
//                   </h4>
//                   <p className="text-sm text-gray-600">
//                     Name, photo, contact details, educational qualifications
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
//                 <span className="text-blue-500 text-xl">🔒</span>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">
//                     Secure Transactions
//                   </h4>
//                   <p className="text-sm text-gray-600">
//                     SSL encryption for all credit card transactions
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
//                 <span className="text-purple-500 text-xl">📱</span>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">
//                     App Permissions
//                   </h4>
//                   <p className="text-sm text-gray-600">
//                     Camera, location, storage for better experience
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
//                 <span className="text-red-400 text-xl">🇪🇺</span>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">EU Compliance</h4>
//                   <p className="text-sm text-gray-600">
//                     GDPR rights for EU members
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA - RED-400 */}
//       <section className="py-12 md:py-16 bg-red-400">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//             Have Questions About Your Privacy?
//           </h2>
//           <p className="text-white/90 mb-6">
//             We're here to help. Contact our privacy team for any concerns.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="inline-block bg-white text-red-400 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
//             >
//               Contact Us
//             </a>
//             <a
//               href="/terms-and-conditions"
//               className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-red-400 transition-colors"
//             >
//               View Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default PrivacyPolicy;





import React, { useEffect } from 'react';  // ⬅️ useEffect add kiya
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";



function PrivacyPolicy() {

  // ⭐ YE ADD KARO - Page top se open hoga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: [
        {
          text: "BodhiBridal.com is an online matrimonial portal endeavouring constantly to provide you with matrimonial services. This privacy statement is common to all the matrimonial Website/apps operated under BodhiBridal.com. Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you.",
          points: [],
        },
        {
          text: "You acknowledge that you are disclosing information voluntarily. By accessing/using the website/apps and/or by providing your information, you consent to the collection and use of the info you disclose on the website/apps in accordance with this Privacy Policy.",
          points: [],
        },
        {
          subtitle: "Important Notice",
          text: "If you do not agree for use of your information, please do not use or access this website/apps.",
          points: [],
          highlight: true,
        },
      ],
    },
    {
      id: 2,
      title: "What Information You Need to Give to Use This Website/Apps?",
      content: [
        {
          subtitle: "Personal Information We Collect",
          text: "The information we gather from members and visitors who apply for the various services our Website/Apps offers includes, but may not be limited to:",
          points: [
            "Photo of the user",
            "Email address",
            "Name",
            "Date of birth",
            "Educational qualifications",
            "A user-specified password",
            "Mailing address",
            "Zip/Pin code",
            "Telephone/Mobile number or Fax number",
          ],
        },
        {
          subtitle: "Payment Information",
          text: "We use a secure server for credit card transactions to protect the credit card information of our users. If you establish a credit account with us to pay the fees we charge, some additional information is collected:",
          points: [
            "Billing address",
            "Credit/Debit card number",
            "Credit/Debit card expiration date",
            "Tracking information from cheques or demand drafts",
          ],
        },
        {
          subtitle: "Cookies",
          text: "Cookies are used to store the login information. Cookies are small files placed on your hard drive that will assist us in providing our services. You may also encounter Cookies or identical/related devices on certain pages of the website/apps that are placed by third parties. We do not control the use of cookies by third parties.",
          points: [],
        },
        {
          subtitle: "Automatic Data Collection",
          text: "The user information we collect depends on the context of your interactions with us and the website or Apps, the choices you make and the products and features you use. When you access our websites or apps, the following data is collected automatically:",
          points: [
            "Device ID",
            "Log files",
            "Geographic Location",
            "Device Information/specification",
          ],
        },
        {
          subtitle: "Social Media Login",
          text: "If a user registers using social networking platforms such as Facebook, Google, LinkedIn and others, we may collect personal data you choose to allow us to access through their APIs.",
          points: [],
        },
      ],
    },
    {
      id: 3,
      title: "Why Does Our Mobile Application Require Permissions From You?",
      content: [
        {
          text: "Our services help connect users to their matches based on several parameters and preferences. To fix bugs within the application and improve the user experience, we require users to grant us access to the following:",
          points: [],
        },
        {
          subtitle: "📷 Camera",
          text: "Access to the device's camera allows users to take their picture, and upload it as their profile picture on our portal.",
          points: [],
        },
        {
          subtitle: "👥 Contacts",
          text: "The mobile application will obtain the user accounts that are associated with Facebook or Google+ for a quick signup process.",
          points: [],
        },
        {
          subtitle: "📍 Location",
          text: "Based on their GPS coordinates, users are served with profiles of members located in the same vicinity. Also, users are provided with the information of our physical stores that are located nearest to the user's GPS coordinates.",
          points: [],
        },
        {
          subtitle: "📱 Phone",
          text: "Our mobile application is optimized to work on multiple devices and networks. The device information and network details help analyze and fix issues that are isolated to a particular device or a particular network.",
          points: [],
        },
        {
          subtitle: "💬 SMS",
          text: "The mobile application detects SMS(s) and auto-fills the OTP/PIN details for a faster and better user experience.",
          points: [],
        },
        {
          subtitle: "💾 Storage",
          text: "The users can upload pictures from their device memory and use it as their profile picture. Furthermore, users can download horoscope details, profile details and astro-match results on to their device memory.",
          points: [],
        },
      ],
    },
    {
      id: 4,
      title: "How The Website/Apps Uses The Information It Collects/Tracks?",
      content: [
        {
          text: "BodhiBridal.com collects information for the following purposes:",
          points: [
            "Data analysis",
            "Identifying usage trends",
            "Determining the effectiveness of our promotional campaigns",
            "Evaluating and improving our websites or apps, products, and services",
            "Marketing research",
            "Ensuring that we are able to fulfil your requirements",
            "Delivering personalized experience",
          ],
        },
        {
          subtitle: "IP Address Usage",
          text: "We identify and use your IP address to help diagnose problems with our server, and to administer our website/apps. Your IP address is also used to help identify you and to gather broad demographic information.",
          points: [],
        },
        {
          subtitle: "Additional Uses",
          text: "We may also use your personal information for:",
          points: [
            "Analysis of data and usage trends",
            "Evaluation and improvement of our site/App",
            "Marketing research",
            "Prevention of frauds",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "For European Union Members (EU)",
      content: [
        {
          text: "If you are located in the EU, you will be asked to provide consent to the collection, processing, and sharing of your personal information. Personal information means any information related to an identified or identifiable natural person.",
          points: [],
        },
        {
          subtitle: "Your Rights",
          text: "You have the following rights:",
          points: [
            "Right to share and access your personal information",
            "Right to withdraw consent for sharing your personal information at any point of time",
            "Right to erase your personal information subject to applicable laws",
          ],
        },
        {
          subtitle: "Data Storage",
          text: "Your personal information may be stored in databases located outside of the EU including in India. Where we transfer personal data outside of EU, we either transfer personal information to countries that provide an adequate level of protection or we have appropriate safeguards in place.",
          points: [],
        },
        {
          subtitle: "Identity Verification",
          text: "We may require proof of or need to verify your identity before we can give effect to these rights. To request to review, update, or delete your personal information, please submit a request form by sending an email to privacy@bodhibridal.com.",
          points: [],
        },
        {
          subtitle: "Third Party Sharing (UK)",
          text: "We may share your information with third parties who are an anti-fraud solution provider(s) located in UK. They help us to ensure we keep you safe from scammers and fraudsters.",
          points: [],
        },
      ],
    },
    {
      id: 6,
      title: "With Whom The Website/Apps Shares The Information It Collects/Tracks?",
      content: [
        {
          subtitle: "Associates and Affiliates",
          text: "We may share such identifiable information with our associates/affiliates/subsidiaries and such associates/affiliates/subsidiaries may market to you as a result of such sharing. Any information you give us is held with the utmost care and security.",
          points: [],
        },
        {
          subtitle: "Legal Requirements",
          text: "We are bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer/visitor. Where required or permitted by law, information may be provided to others, such as:",
          points: [
            "Regulators and law enforcement agencies",
            "To protect the rights, property or personal safety of other members or the general public",
          ],
        },
        {
          subtitle: "Fraud Prevention",
          text: "We may voluntarily share your information with the following if we feel that the transaction is of suspicious nature:",
          points: [
            "Law enforcement agencies",
            "Gateway service providers",
            "Anti-fraud solution provider(s)",
          ],
        },
        {
          subtitle: "Corporate Transactions",
          text: "From time to time, we may consider corporate transactions such as a merger, acquisition, reorganization, asset sale, or similar. In these instances, we may transfer or allow access to information to enable the assessment and undertaking of that transaction. If we buy or sell any business or assets, personal information may be transferred to third parties involved in the transaction.",
          points: [],
        },
        {
          subtitle: "Third Party Websites",
          text: "Our website/apps link to other website/apps and may collect personally identifiable information about you. We are not responsible for the privacy policy or the contents of those linked website/apps.",
          points: [],
        },
      ],
    },
    {
      id: 7,
      title: "How Long Do We Keep Your Information?",
      content: [
        {
          text: "As stipulated in the Privacy Policy, we will retain the information we collect from users under the following circumstances:",
          points: [
            "For as long as the users subscribe to our services to meet their suitable purpose(s) for which it was collected",
            "For the sake of enforcing agreements",
            "For performing audits",
            "For resolving any form of disputes",
            "For establishing legal defences",
            "For pursuing legitimate businesses",
            "To comply with the relevant applicable laws",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "What Are The Security Precautions In Respect Of Your Personal Information?",
      content: [
        {
          text: "We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal control measures designed to protect the security of any personal information we process.",
          points: [],
        },
        {
          subtitle: "Security Measures",
          text: "Our security measures include:",
          points: [
            "Secure server for credit card transactions",
            "Organizational security measures",
            "Technical security measures",
            "Internal control measures",
            "Security guidelines protecting against unauthorized access",
          ],
        },
        {
          subtitle: "Disclaimer",
          text: "Please remember that we cannot guarantee that the internet itself is 100% secure. Once your information is in our possession, we adhere to security guidelines protecting it against unauthorized access.",
          points: [],
        },
      ],
    },
    {
      id: 9,
      title: "Change Of Privacy Policy",
      content: [
        {
          text: "We may change this Privacy Policy without notice from time to time without any notice to you. However, changes will be updated in the Privacy Policy page.",
          points: [],
        },
        {
          text: "We recommend that you review this Privacy Policy periodically to stay informed about how we are protecting your information.",
          points: [],
        },
      ],
    },
    {
      id: 10,
      title: "How To Address Your Grievance",
      content: [
        {
          subtitle: "Grievance Officer Details",
          text: "If you have any grievances or concerns regarding your privacy, please contact our Grievance Officer:",
          points: [],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section - RED-400 COLOR */}
      <section className="bg-red-400 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-white/70">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Introduction Box - RED-400 */}
      <section className="py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-red-400">BodhiBridal.com</span>
              . We are an online matrimonial portal endeavouring constantly to
              provide you with matrimonial services. Since we are strongly
              committed to your right to privacy, we have drawn out a privacy
              statement with regard to the information we collect from you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation - RED-400 */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
            Quick Navigation
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="bg-white px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-red-400 hover:text-white transition-colors shadow-sm border border-gray-200"
              >
                {section.id}. {section.title.substring(0, 25)}
                {section.title.length > 25 ? "..." : ""}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections - RED-400 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="scroll-mt-20"
                id={`section-${section.id}`}
              >
                {/* Section Number & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-10 h-10 bg-red-400 text-white rounded-lg flex items-center justify-center font-bold">
                    {section.id}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="pl-14 space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.subtitle}
                        </h3>
                      )}

                      {item.highlight ? (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                          <p className="text-red-700 font-medium">{item.text}</p>
                        </div>
                      ) : (
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {item.text}
                        </p>
                      )}

                      {item.points && item.points.length > 0 && (
                        <ul className="space-y-2 ml-4">
                          {item.points.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {index < sections.length - 1 && (
                  <div className="border-b border-gray-200 mt-10"></div>
                )}
              </div>
            ))}

            {/* Grievance Officer Contact Card - RED-400 */}
            <div
              className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-200"
              id="grievance"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">📋</span> Grievance Officer Contact
                Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Officer Info */}
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Grievance Officer
                  </h4>
                  <p className="text-red-400 font-semibold text-lg mb-2">
                    Mr. [Officer Name]
                  </p>
                  <p className="text-gray-600 text-sm">
                    Appointed as per Section 5 (9) of the Information Technology
                    (Reasonable Security & Procedures and Sensitive Personal
                    Data or Information) Rule, 2011.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Contact Details
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">📍</span>
                      <span className="text-gray-600">
                        BodhiBridal.com Limited,
                        <br />
                        [Your Address],
                        <br />
                        [City, State - PIN Code]
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-400">✉️</span>
                      <a
                        href="mailto:grievanceofficer@bodhibridal.com"
                        className="text-red-400 hover:underline"
                      >
                        grievanceofficer@bodhibridal.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🕐</span> Availability
                </h4>
                <p className="text-gray-600">
                  The Grievance Officer shall be available between{" "}
                  <span className="font-semibold text-red-400">
                    10:00 AM to 6:00 PM IST
                  </span>{" "}
                  from{" "}
                  <span className="font-semibold">Monday to Saturday</span>,
                  excluding Sundays and Public Holidays in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Box - RED-400 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Key Points Summary
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    We Collect Information
                  </h4>
                  <p className="text-sm text-gray-600">
                    Name, photo, contact details, educational qualifications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-blue-500 text-xl">🔒</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Secure Transactions
                  </h4>
                  <p className="text-sm text-gray-600">
                    SSL encryption for all credit card transactions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <span className="text-purple-500 text-xl">📱</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    App Permissions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Camera, location, storage for better experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <span className="text-red-400 text-xl">🇪🇺</span>
                <div>
                  <h4 className="font-semibold text-gray-800">EU Compliance</h4>
                  <p className="text-sm text-gray-600">
                    GDPR rights for EU members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - RED-400 */}
      <section className="py-12 md:py-16 bg-red-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="text-white/90 mb-6">
            We're here to help. Contact our privacy team for any concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-red-400 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/terms-and-conditions"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-red-400 transition-colors"
            >
              View Terms & Conditions
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}

export default PrivacyPolicy;