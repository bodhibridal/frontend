// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   MapPin,
//   Mail,
//   Phone,
//   Send,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-orange-400 to-red-400 text-white">
//       {/* Upper Section */}
//       <div className="max-w-7xl mx-auto px-4 py-18 pb-25">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

//           {/*  About */}
//           <div>
//             <h3 className="text-3xl font-bold mb-4">BodhiBridal Matrimony</h3>
//             <p className="text-white/90 mb-6">
//               BodhiBridal Matrimony helps you find your perfect soulmate. Join today and
//               start searching for your partner right away.
//             </p>

//             <div className="flex gap-3">
//               <SocialIcon icon={<Facebook />} />
//               <SocialIcon icon={<Twitter />} />
//               <SocialIcon icon={<Youtube />} />
//             </div>
//           </div>

//           {/*  Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               <li className="hover:underline cursor-pointer">Testimonial</li>
//               <li className="hover:underline cursor-pointer">Blog</li>
//               <li className="hover:underline cursor-pointer">Contact Us</li>
//             </ul>
//           </div>

//           {/*  Contact Details */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Details</h3>
//             <ul className="space-y-4 text-white/90">
//               <li className="flex gap-3">
//                 <MapPin size={20} />
//                 <span>
//                   BODHI BRIDAL MATRIMONIAL SOLUTION 151/227 Suyash Vihar, Nanda Nagar Indore, Madhya Pradesh 452001
//                 </span>
//               </li>
//               <li className="flex gap-3">
//                 <Mail size={20} />
//                 <span>info@bodhibridal.in</span>
//               </li>
//               <li className="flex gap-3">
//                 <Phone size={20} />
//                 <span>9302123255</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">
//               Subscribe To Newsletter
//             </h3>
//             <p className="text-white/90 mb-4">
//               Be the first one to know about our new features, updates and many more.
//             </p>

//             <div className="flex items-center border border-white rounded-md overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="bg-transparent px-4 py-2 text-white placeholder-white/70 outline-none w-full"
//               />
//               <button className="border-l border-white px-4 py-2 hover:bg-white hover:text-red-500 transition">
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="max-w-7xl mx-auto border-t border-white">
//         <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <p className="text-lg">
//             Copyright © 2026 BodhiBridal Matrimony. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-lg">
//             <Link to="/faq" className="hover:underline cursor-pointer">
//               FAQ
//             </Link>
//             <Link to="/privacy-policy" className="hover:underline cursor-pointer">
//               Privacy Policy
//             </Link>
//             <Link to="/terms-and-conditions" className="hover:underline cursor-pointer">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const SocialIcon = ({ icon }) => {
//   return (
//     <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-gradient-to-r from-orange-500 to-red-500 hover:bg-white hover:text-red-500 transition cursor-pointer">
//       {icon}
//     </div>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EE6B6E] text-white">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h3 className="text-3xl font-bold mb-4">BodhiBridal Matrimony</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              BodhiBridal Matrimony helps you find your perfect soulmate. 
              Join today and start searching for your partner right away.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Youtube />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/90">
              <li className="hover:underline cursor-pointer">Testimonial</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex gap-3">
                <MapPin size={20} />
                <span>
                  BODHI BRIDAL MATRIMONIAL SOLUTION 151/227 Suyash Vihar,
                  Nanda Nagar Indore, Madhya Pradesh 452001
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} />
                <span>info@bodhibridal.in</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} />
                <span>9302123255</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Subscribe To Newsletter
            </h3>
            <p className="text-white/90 mb-4">
              Be the first one to know about our new features, updates and many more.
            </p>

            <div className="flex items-center border border-white/70 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-2 text-white placeholder-white/70 outline-none w-full"
              />
              <button className="border-l border-white/70 px-4 py-2 hover:bg-[#E35D60] transition">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Section */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-lg">
            Copyright © 2026 BodhiBridal Matrimony. All rights reserved.
          </p>

          <div className="flex gap-6 text-lg">
            <Link to="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#EE6B6E] hover:bg-white hover:text-[#EE6B6E] transition cursor-pointer">
      {icon}
    </div>
  );
};

export default Footer;