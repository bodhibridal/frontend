import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/New-Logo-2.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //<header className="w-full bg-white shadow-md  top-0 left-0 z-50">
      <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Section - Logo */}
        <div className="text-2xl font-bold text-red-600">
<Link to="/" className="flex items-center gap-2">
  <img 
    src={logo} 
    alt="BodhiBridal Logo"
    className="h-14 w-auto object-contain hover:scale-105 transition duration-300"
  />
</Link>

        </div>

        {/* Center Section - Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
         {/* <li><Link to="/member" className="hover:text-red-600">Member</Link></li>
          <li><Link to="/profile" className="hover:text-red-600">Profile</Link></li> */}
          {/* <li><Link to="/user-story" className="hover:text-red-600">User Story</Link></li> */}
          {/* <li><Link to="/testimonial" className="hover:text-red-600">Testimonial</Link></li> */}
          <li><Link to="/buddhvihar" className="hover:text-red-600">BuddhVihar</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact Us</Link></li>
        </ul>

        {/* Right Section - Button */}
        <div className="hidden lg:block">
            
          <Link
            to="/login"
            className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
          >
         Login / Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            {/* <li><Link to="/member" onClick={() => setIsOpen(false)}>Member</Link></li> */}
            {/* <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li> */}
            {/* <li><Link to="/user-story" onClick={() => setIsOpen(false)}>User Story</Link></li> */}
            {/* <li><Link to="/testimonial" onClick={() => setIsOpen(false)}>Testimonial</Link></li> */}
            <li><Link to="/buddhvihar" onClick={() => setIsOpen(false)}>BuddhVihar</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white text-center py-2 rounded-md"
            >
              Login / Register
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
