// import React, { useState } from "react";
// //import Navbar from "../comman/Navbar";
// //import Footer from "../home/NewFoooter";
// import buddha from "../../assets/buddha.jpg";
// import img1 from "../../assets/img1.jpeg";
// import girl from "../../assets/girl.jpg";
// import img2 from "../../assets/img2.jpeg";
// import { Navigate } from "react-router-dom";

// function About() {
//   // State for Modal
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Open Modal
//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setSelectedMember(null);
//     setIsModalOpen(false);
//   };

//   // Mission Pillars Data
//   const missionPillars = [
//     {
//       id: 1,
//       icon: (
//         <svg
//           className="w-10 h-10 text-orange-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//           />
//         </svg>
//       ),
//       title: "Promote Buddhist Teachings",
//       description:
//         "Make Buddhist values accessible through digital platforms, learning initiatives, and community programs.",
//       points: [
//         "Digital learning platforms",
//         "Compassion & mindfulness training",
//         "Dhamma principles for modern world",
//       ],
//     },
//     {
//       id: 2,
//       icon: (
//         <svg
//           className="w-10 h-10 text-orange-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//           />
//         </svg>
//       ),
//       title: "Connect Buddha Vihars",
//       description:
//         "Create a unified global network of Buddha Vihars for collaboration and knowledge-sharing.",
//       points: [
//         "Global Vihar network",
//         "Digital tools for Vihar committees",
//         "Community engagement systems",
//       ],
//     },
//     {
//       id: 3,
//       icon: (
//         <svg
//           className="w-10 h-10 text-orange-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//           />
//         </svg>
//       ),
//       title: "Buddhist Matrimonial",
//       description:
//         "Provide a trusted, secure, and community-focused matrimonial platform exclusively for Buddhists.",
//       points: [
//         "Verified Buddhist profiles",
//         "Background verification services",
//         "Dedicated match support",
//       ],
//     },
//     {
//       id: 4,
//       icon: (
//         <svg
//           className="w-10 h-10 text-orange-500"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//       title: "Education & Employment",
//       description:
//         "Support Buddhist youth with access to skill development, career guidance, and entrepreneurship.",
//       points: [
//         "Skill development programs",
//         "Job placement support",
//         "Business mentoring & networking",
//       ],
//     },
//   ];

//   // Services Data
//   const services = [
//     {
//       id: 1,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//           />
//         </svg>
//       ),
//       title: "Buddhist Matrimonial",
//       description:
//         "Trusted platform with background verification and dedicated match support for Buddhist families.",
//       color: "bg-orange-500",
//     },
//     {
//       id: 2,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//           />
//         </svg>
//       ),
//       title: "Global Vihar Network",
//       description:
//         "Connect with Buddha Vihars worldwide for events, collaboration, and spiritual guidance.",
//       color: "bg-red-500",
//     },
//     {
//       id: 3,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//           />
//         </svg>
//       ),
//       title: "Education Support",
//       description:
//         "Scholarships, skill training, career guidance, and quality education opportunities.",
//       color: "bg-orange-500",
//     },
//     {
//       id: 4,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//       title: "Job Portal",
//       description:
//         "Internships, job placements, and professional networking for Buddhist youth.",
//       color: "bg-red-500",
//     },
//     {
//       id: 5,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//       ),
//       title: "Entrepreneurship",
//       description:
//         "Business mentoring, training, and Buddhist business network for economic empowerment.",
//       color: "bg-orange-500",
//     },
//     {
//       id: 6,
//       icon: (
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//           />
//         </svg>
//       ),
//       title: "Buddhist Teachings",
//       description:
//         "Online courses, meditation programs, and Dhamma talks for spiritual growth.",
//       color: "bg-red-500",
//     },
//   ];

//   // Team Data
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Yeshwant Maheshram",
//       role: "Founder & Managing Partner",
//       shortBio:
//         "Seasoned technology leader with 20+ years of global experience in enterprise technology and digital transformation.",
//       education: [
//         "M.E. Computer Science - IISc Bangalore",
//         "B.E. Electronics - SGSITS Indore",
//         "Neural Networks Research - IIT Delhi",
//         "Executive Diploma - USA",
//       ],
//       experience: [
//         "Deloitte Consulting (Chicago)",
//         "EDS UK",
//         "SAP India",
//         "TCS (India/USA)",
//         "CyberTech (Chicago)",
//       ],
//       focusAreas: [
//         "Trusted matrimonial solutions",
//         "Youth education & employment",
//         "Digital empowerment of Vihars",
//         "Community economic opportunities",
//       ],
//       vision:
//         "Build a connected, dignified, and digitally empowered Buddhist ecosystem",
//       image: img1,
//     },
//     {
//       id: 2,
//       name: "Priya Gautam",
//       role: "Co-Founder & Head of Operations",
//       shortBio:
//         "Expert in social welfare programs and Buddhist community engagement initiatives.",
//       focusAreas: [
//         "Social welfare programs",
//         "Community engagement",
//         "Operations management",
//         "Partnership development",
//       ],
//       image: girl,
//     },
//     {
//       id: 3,
//       name: "Sandeep Bhourjar",
//       role: "Founder & Partner",
//       shortBio:
//         "Committed community contributor dedicated to strengthening social initiatives within the Buddhist ecosystem.",
//       focusAreas: [
//         "Community engagement & awareness",
//         "Vihar connectivity initiatives",
//         "Regional network development",
//         "Supporting families through platform",
//       ],
//       commitment:
//         "Promoting equality, dignity, and social harmony within the Buddhist community",
//       image: img2,
//     },
//   ];

//   // Stats Data
//   const stats = [
//     { id: 1, number: "10,000+", label: "Community Members" },
//     { id: 2, number: "500+", label: "Connected Vihars" },
//     { id: 3, number: "1,000+", label: "Successful Matches" },
//     { id: 4, number: "2,000+", label: "Jobs Facilitated" },
//   ];

//   // Check if member has extra details
//   const hasExtraDetails = (member) => {
//     return (
//       member.education ||
//       member.experience ||
//       member.focusAreas ||
//       member.vision ||
//       member.commitment
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 sm:py-20 md:py-28">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//             Empowering the Buddhist Community
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
//             Merging traditional values with modern technology for holistic
//             growth and dignity
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/register"
//               className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
//             >
//               Join Our Community
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Text Content */}
//             <div>
//               <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 OUR MISSION
//               </span>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//                 Uplifting the Buddhist Community
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 Our mission is to uplift the{" "}
//                 <span className="font-bold text-orange-500">
//                   Buddhist community socially, culturally, economically, and
//                   digitally
//                 </span>{" "}
//                 by merging traditional values with modern technology. Through
//                 BodhiBridal, his vision is to build a connected, dignified, and
//                 digitally empowered Buddhist ecosystem that blends the timeless
//                 wisdom of Dhamma with the power of modern technology.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 We are ensuring that every{" "}
//                 <span className="font-bold">
//                   Buddhist family, Vihar, youth, and professional
//                 </span>{" "}
//                 is connected, empowered, and supported to achieve holistic
//                 growth and dignity.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
//                   🙏 Social Upliftment
//                 </span>
//                 <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
//                   🎭 Cultural Preservation
//                 </span>
//                 <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
//                   💰 Economic Growth
//                 </span>
//                 <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
//                   💻 Digital Empowerment
//                 </span>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src={buddha}
//                   alt="Buddhist Community"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-orange-400 rounded-2xl -z-10"></div>
//               <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-red-400 rounded-2xl -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Pillars Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               MISSION PILLARS
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Our Four Pillars of Change
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Focused areas where we make the greatest impact for the Buddhist
//               community
//             </p>
//           </div>

//           {/* Pillars Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {missionPillars.map((pillar) => (
//               <div
//                 key={pillar.id}
//                 className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-500"
//               >
//                 {/* Icon */}
//                 <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                   {pillar.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {pillar.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {pillar.description}
//                 </p>

//                 {/* Points */}
//                 <ul className="space-y-2">
//                   {pillar.points.map((point, index) => (
//                     <li
//                       key={index}
//                       className="flex items-start gap-2 text-sm text-gray-600"
//                     >
//                       <svg
//                         className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How We Do It Section */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               OUR APPROACH
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               How We Make It Happen
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Blending the wisdom of tradition with the power of technology
//             </p>
//           </div>

//           {/* Two Columns */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//             {/* Traditional Values */}
//             <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-10 rounded-2xl border border-orange-100">
//               <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
//                 <svg
//                   className="w-8 h-8 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 🙏 Traditional Values
//               </h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Rooted in the timeless teachings of Buddha, we preserve and
//                 promote the core values that have guided our community for
//                 centuries.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Buddhist teachings (Dhamma)
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Compassion & mindfulness
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Community support & unity
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   <span className="text-gray-700">Cultural preservation</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Equality & social harmony
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Modern Technology */}
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-2xl border border-gray-200">
//               <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
//                 <svg
//                   className="w-8 h-8 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 💻 Modern Technology
//               </h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Leveraging cutting-edge digital solutions to connect, empower,
//                 and support our community in the modern world.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Digital platforms & apps
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                   <span className="text-gray-700">Online learning systems</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Community networking tools
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                   <span className="text-gray-700">
//                     Secure data & verification
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//                   <span className="text-gray-700">Global connectivity</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Offer Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               OUR SERVICES
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               What We Offer
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive solutions designed for the Buddhist community's
//               needs
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
//               >
//                 {/* Icon */}
//                 <div
//                   className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
//                 >
//                   {service.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Section (Stats) */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-red-500">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//               Our Impact
//             </h2>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Numbers that reflect our commitment to the community
//             </p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {stats.map((stat) => (
//               <div
//                 key={stat.id}
//                 className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-white/20 transition-colors"
//               >
//                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-white/80 text-sm sm:text-base">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Section - With Read More Button */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               LEADERSHIP
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Meet Our Founders
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Dedicated leaders working towards community empowerment
//             </p>
//           </div>

//           {/* Team Grid - Simple Cards with Read More */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//               >
//                 {/* Photo */}
//                 <div className="aspect-square overflow-hidden bg-gray-200">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

               
//                 <div className="p-6">
//                   {/* Name */}
//                   <h3 className="text-2xl font-bold text-gray-800 mb-1">
//                     {member.name}
//                   </h3>

//                   {/* Role */}
//                   <p className="text-orange-500 font-semibold mb-3">
//                     {member.role}
//                   </p>

//                   {/* Short Bio */}
//                   <p className="text-gray-600 leading-relaxed mb-4">
//                     {member.shortBio}
//                   </p>

//                   {/* Read More Button - Only if extra details exist */}
//                   {hasExtraDetails(member) && (
//                     <button
//                       onClick={() => openModal(member)}
//                       className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
//                     >
//                       <span>Read More</span>
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Combined Vision Box */}
//           <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
//               Our Shared Vision
//             </h3>
//             <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
//               Together, our founders are committed to building BodhiBridal as
//               more than a matrimonial platform — a{" "}
//               <span className="font-bold">
//                 holistic Buddhist community ecosystem
//               </span>{" "}
//               that supports:
//             </p>
//             <div className="flex flex-wrap justify-center gap-3 mb-8">
//               <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
//                 💑 Meaningful Relationships
//               </span>
//               <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
//                 🎓 Youth Empowerment
//               </span>
//               <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
//                 💰 Economic Growth
//               </span>
//               <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
//                 🌐 Digital Unity
//               </span>
//               <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
//                 🙏 Buddhist Values
//               </span>
//             </div>
//           </div>

//           {/* Join Our Team CTA */}
//           <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 md:p-12 text-center border border-orange-200">
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//               Want to Join Our Mission?
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
//               We're always looking for passionate individuals who share our
//               commitment to uplifting the Buddhist community.
//             </p>
//             <a
//               href="#/careers"
//               className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
//             >
//               View Open Positions
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Modal/Popup for Full Details */}
//       {isModalOpen && selectedMember && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             onClick={closeModal}
//           ></div>

//           {/* Modal Content */}
//           <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
//             >
//               <svg
//                 className="w-6 h-6 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Modal Header */}
//             <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 border-b border-gray-100">
//               {/* Photo */}
//               <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-xl overflow-hidden mx-auto md:mx-0">
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Basic Info */}
//               <div className="text-center md:text-left">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
//                   {selectedMember.name}
//                 </h2>
//                 <p className="text-orange-500 font-semibold text-lg mb-3">
//                   {selectedMember.role}
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   {selectedMember.shortBio}
//                 </p>
//               </div>
//             </div>

//             {/* Modal Body - Full Details */}
//             <div className="p-6 md:p-8 space-y-6">
//               {/* Vision */}
//               {selectedMember.vision && (
//                 <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-500">
//                   <h4 className="text-sm font-bold text-orange-600 mb-2">
//                     🎯 VISION
//                   </h4>
//                   <p className="text-gray-700 italic">
//                     "{selectedMember.vision}"
//                   </p>
//                 </div>
//               )}

//               {/* Commitment */}
//               {selectedMember.commitment && (
//                 <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-500">
//                   <h4 className="text-sm font-bold text-orange-600 mb-2">
//                     🤝 COMMITMENT
//                   </h4>
//                   <p className="text-gray-700 italic">
//                     "{selectedMember.commitment}"
//                   </p>
//                 </div>
//               )}

//               {/* Grid for Education, Experience, Focus Areas */}
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Education */}
//                 {selectedMember.education &&
//                   selectedMember.education.length > 0 && (
//                     <div className="bg-gray-50 p-4 rounded-xl">
//                       <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
//                         <span className="text-lg">🎓</span> Education
//                       </h4>
//                       <ul className="space-y-2">
//                         {selectedMember.education.map((edu, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2 text-sm text-gray-600"
//                           >
//                             <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
//                             <span>{edu}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                 {/* Experience */}
//                 {selectedMember.experience &&
//                   selectedMember.experience.length > 0 && (
//                     <div className="bg-gray-50 p-4 rounded-xl">
//                       <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
//                         <span className="text-lg">💼</span> Experience
//                       </h4>
//                       <ul className="space-y-2">
//                         {selectedMember.experience.map((exp, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2 text-sm text-gray-600"
//                           >
//                             <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
//                             <span>{exp}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                 {/* Focus Areas */}
//                 {selectedMember.focusAreas &&
//                   selectedMember.focusAreas.length > 0 && (
//                     <div className="bg-gray-50 p-4 rounded-xl">
//                       <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
//                         <span className="text-lg">🎯</span> Focus Areas
//                       </h4>
//                       <ul className="space-y-2">
//                         {selectedMember.focusAreas.map((focus, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start gap-2 text-sm text-gray-600"
//                           >
//                             <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
//                             <span>{focus}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//               </div>

//               {/* Social Links */}
//               <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                   <span className="text-sm font-medium">LinkedIn</span>
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                   <span className="text-sm font-medium">Twitter</span>
//                 </a>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
//               <button
//                 onClick={closeModal}
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Core Values Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               OUR VALUES
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               What We Stand For
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Guided by Buddhist principles and commitment to community
//             </p>
//           </div>

//           {/* Values Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {/* Value 1 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">🙏</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Compassion
//               </h3>
//               <p className="text-gray-600">
//                 Acting with kindness and understanding towards all members of
//                 our community.
//               </p>
//             </div>

//             {/* Value 2 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">⚖️</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Equality</h3>
//               <p className="text-gray-600">
//                 Treating every individual with equal respect, dignity, and
//                 opportunity.
//               </p>
//             </div>

//             {/* Value 3 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">🤝</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Unity</h3>
//               <p className="text-gray-600">
//                 Building bridges within our community for collective strength
//                 and growth.
//               </p>
//             </div>

//             {/* Value 4 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">🎯</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Integrity
//               </h3>
//               <p className="text-gray-600">
//                 Upholding honesty and transparency in all our actions and
//                 services.
//               </p>
//             </div>

//             {/* Value 5 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">🚀</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Empowerment
//               </h3>
//               <p className="text-gray-600">
//                 Enabling individuals and families to achieve their full
//                 potential.
//               </p>
//             </div>

//             {/* Value 6 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl">🧘</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Mindfulness
//               </h3>
//               <p className="text-gray-600">
//                 Approaching every task with awareness, intention, and purpose.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-red-500">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Join Our Community?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Be part of a movement that's transforming the Buddhist community
//             through unity, education, and digital empowerment.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/register"
//               className="bg-white text-orange-500 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg"
//             >
//               Get Started Today
//             </a>
//             <a
//               href="/monasteries"
//               className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white hover:text-orange-500 transition-colors text-lg"
//             >
//               Explore Vihars
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default About;





import React, { useState } from "react";

import buddha from "../../assets/buddha.jpg";
import img1 from "../../assets/img1.jpeg";
import girl from "../../assets/girl.jpg";
import img2 from "../../assets/img2.jpeg";
import { Navigate } from "react-router-dom";

function About() {
  // State for Modal
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  // Mission Pillars Data
  const missionPillars = [
    {
      id: 1,
      icon: (
        <svg
          className="w-10 h-10 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Promote Buddhist Teachings",
      description:
        "Make Buddhist values accessible through digital platforms, learning initiatives, and community programs.",
      points: [
        "Digital learning platforms",
        "Compassion & mindfulness training",
        "Dhamma principles for modern world",
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-10 h-10 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Connect Buddha Vihars",
      description:
        "Create a unified global network of Buddha Vihars for collaboration and knowledge-sharing.",
      points: [
        "Global Vihar network",
        "Digital tools for Vihar committees",
        "Community engagement systems",
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-10 h-10 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Buddhist Matrimonial",
      description:
        "Provide a trusted, secure, and community-focused matrimonial platform exclusively for Buddhists.",
      points: [
        "Verified Buddhist profiles",
        "Background verification services",
        "Dedicated match support",
      ],
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-10 h-10 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Education & Employment",
      description:
        "Support Buddhist youth with access to skill development, career guidance, and entrepreneurship.",
      points: [
        "Skill development programs",
        "Job placement support",
        "Business mentoring & networking",
      ],
    },
  ];

  // Services Data
  const services = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Buddhist Matrimonial",
      description:
        "Trusted platform with background verification and dedicated match support for Buddhist families.",
      color: "bg-red-400",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Global Vihar Network",
      description:
        "Connect with Buddha Vihars worldwide for events, collaboration, and spiritual guidance.",
      color: "bg-red-400",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Education Support",
      description:
        "Scholarships, skill training, career guidance, and quality education opportunities.",
      color: "bg-red-400",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Job Portal",
      description:
        "Internships, job placements, and professional networking for Buddhist youth.",
      color: "bg-red-400",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Entrepreneurship",
      description:
        "Business mentoring, training, and Buddhist business network for economic empowerment.",
      color: "bg-red-400",
    },
    {
      id: 6,
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Buddhist Teachings",
      description:
        "Online courses, meditation programs, and Dhamma talks for spiritual growth.",
      color: "bg-red-400",
    },
  ];

  // Team Data
  const teamMembers = [
    {
      id: 1,
      name: "Yeshwant Maheshram",
      role: "Founder & Managing Partner",
      shortBio:
        "Seasoned technology leader with 20+ years of global experience in enterprise technology and digital transformation.",
      education: [
        "M.E. Computer Science - IISc Bangalore",
        "B.E. Electronics - SGSITS Indore",
        "Neural Networks Research - IIT Delhi",
        "Executive Diploma - USA",
      ],
      experience: [
        "Deloitte Consulting (Chicago)",
        "EDS UK",
        "SAP India",
        "TCS (India/USA)",
        "CyberTech (Chicago)",
      ],
      focusAreas: [
        "Trusted matrimonial solutions",
        "Youth education & employment",
        "Digital empowerment of Vihars",
        "Community economic opportunities",
      ],
      vision:
        "Build a connected, dignified, and digitally empowered Buddhist ecosystem",
      image: img1,
    },
    {
      id: 2,
      name: "Priya Gautam",
      role: "Co-Founder & Head of Operations",
      shortBio:
        "Expert in social welfare programs and Buddhist community engagement initiatives.",
      focusAreas: [
        "Social welfare programs",
        "Community engagement",
        "Operations management",
        "Partnership development",
      ],
      image: girl,
    },
    {
      id: 3,
      name: "Sandeep Bhourjar",
      role: "Founder & Partner",
      shortBio:
        "Committed community contributor dedicated to strengthening social initiatives within the Buddhist ecosystem.",
      focusAreas: [
        "Community engagement & awareness",
        "Vihar connectivity initiatives",
        "Regional network development",
        "Supporting families through platform",
      ],
      commitment:
        "Promoting equality, dignity, and social harmony within the Buddhist community",
      image: img2,
    },
  ];

  // Stats Data
  const stats = [
    { id: 1, number: "10,000+", label: "Community Members" },
    { id: 2, number: "500+", label: "Connected Vihars" },
    { id: 3, number: "1,000+", label: "Successful Matches" },
    { id: 4, number: "2,000+", label: "Jobs Facilitated" },
  ];

  // Check if member has extra details
  const hasExtraDetails = (member) => {
    return (
      member.education ||
      member.experience ||
      member.focusAreas ||
      member.vision ||
      member.commitment
    );
  };

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
     <section className="bg-red-400 py-16 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering the Buddhist Community
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            Merging traditional values with modern technology for holistic
            growth and dignity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Join Our Community
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="inline-block bg-orange-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Uplifting the Buddhist Community
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to uplift the{" "}
                <span className="font-bold text-red-400">
                  Buddhist community socially, culturally, economically, and
                  digitally
                </span>{" "}
                by merging traditional values with modern technology. Through
                BodhiBridal, his vision is to build a connected, dignified, and
                digitally empowered Buddhist ecosystem that blends the timeless
                wisdom of Dhamma with the power of modern technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are ensuring that every{" "}
                <span className="font-bold text-red-400">
                  Buddhist family, Vihar, youth, and professional
                </span>{" "}
                is connected, empowered, and supported to achieve holistic
                growth and dignity.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-100 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                  🙏 Social Upliftment
                </span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                  🎭 Cultural Preservation
                </span>
                <span className="bg-orange-100 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                  💰 Economic Growth
                </span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                  💻 Digital Empowerment
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={buddha}
                  alt="Buddhist Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-orange-400 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-red-400 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MISSION PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Four Pillars of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Focused areas where we make the greatest impact for the Buddhist
              community
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {pillar.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How We Make It Happen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Blending the wisdom of tradition with the power of technology
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Traditional Values */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-10 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-red-400 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🙏 Traditional Values
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rooted in the timeless teachings of Buddha, we preserve and
                promote the core values that have guided our community for
                centuries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Buddhist teachings (Dhamma)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Compassion & mindfulness
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Community support & unity
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">Cultural preservation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Equality & social harmony
                  </span>
                </li>
              </ul>
            </div>

            {/* Modern Technology */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-red-400 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💻 Modern Technology
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Leveraging cutting-edge digital solutions to connect, empower,
                and support our community in the modern world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Digital platforms & apps
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">Online learning systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Community networking tools
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">
                    Secure data & verification
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-gray-700">Global connectivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed for the Buddhist community's
              needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (Stats) */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-400 to-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to the community
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-white/20 transition-colors"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - With Read More Button */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated leaders working towards community empowerment
            </p>
          </div>

          {/* Team Grid - Simple Cards with Read More */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Photo */}
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>


                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-orange-500 font-semibold mb-3">
                    {member.role}
                  </p>

                  {/* Short Bio */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.shortBio}
                  </p>

                  {/* Read More Button - Only if extra details exist */}
                  {hasExtraDetails(member) && (
                    <button
                      onClick={() => openModal(member)}
                      className="inline-flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      <span>Read More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Combined Vision Box */}
          <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-2xl p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Our Shared Vision
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Together, our founders are committed to building BodhiBridal as
              more than a matrimonial platform — a{" "}
              <span className="font-bold">
                holistic Buddhist community ecosystem
              </span>{" "}
              that supports:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                💑 Meaningful Relationships
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                🎓 Youth Empowerment
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                💰 Economic Growth
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                🌐 Digital Unity
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                🙏 Buddhist Values
              </span>
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-2xl p-8 md:p-12 text-center border border-red-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our
              commitment to uplifting the Buddhist community.
            </p>
            <a
              href="#/careers"
              className="inline-block bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Modal/Popup for Full Details */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 border-b border-gray-100">
              {/* Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-xl overflow-hidden mx-auto md:mx-0">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-orange-500 font-semibold text-lg mb-3">
                  {selectedMember.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMember.shortBio}
                </p>
              </div>
            </div>

            {/* Modal Body - Full Details */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Vision */}
              {selectedMember.vision && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-500">
                  <h4 className="text-sm font-bold text-orange-600 mb-2">
                    🎯 VISION
                  </h4>
                  <p className="text-gray-700 italic">
                    "{selectedMember.vision}"
                  </p>
                </div>
              )}

              {/* Commitment */}
              {selectedMember.commitment && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-500">
                  <h4 className="text-sm font-bold text-orange-600 mb-2">
                    🤝 COMMITMENT
                  </h4>
                  <p className="text-gray-700 italic">
                    "{selectedMember.commitment}"
                  </p>
                </div>
              )}

              {/* Grid for Education, Experience, Focus Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Education */}
                {selectedMember.education &&
                  selectedMember.education.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="text-lg">🎓</span> Education
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.education.map((edu, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Experience */}
                {selectedMember.experience &&
                  selectedMember.experience.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="text-lg">💼</span> Experience
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.experience.map((exp, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Focus Areas */}
                {selectedMember.focusAreas &&
                  selectedMember.focusAreas.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="text-lg">🎯</span> Focus Areas
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.focusAreas.map((focus, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span className="text-sm font-medium">Twitter</span>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by Buddhist principles and commitment to community
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Compassion
              </h3>
              <p className="text-gray-600">
                Acting with kindness and understanding towards all members of
                our community.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Equality</h3>
              <p className="text-gray-600">
                Treating every individual with equal respect, dignity, and
                opportunity.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Unity</h3>
              <p className="text-gray-600">
                Building bridges within our community for collective strength
                and growth.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                Upholding honesty and transparency in all our actions and
                services.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Empowerment
              </h3>
              <p className="text-gray-600">
                Enabling individuals and families to achieve their full
                potential.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mindfulness
              </h3>
              <p className="text-gray-600">
                Approaching every task with awareness, intention, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-400 to-red-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a movement that's transforming the Buddhist community
            through unity, education, and digital empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-red-400 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              Get Started Today
            </a>
            <a
              href="/monasteries"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white hover:text-red-400 transition-colors text-lg"
            >
              Explore Vihars
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}

export default About;

