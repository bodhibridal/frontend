import { Search } from "lucide-react";
// import heroimg from "../../assets/images/photo-1529634806980-85c3dd6d34ac.jpg"

import heroimg from "../../assets/six.jpg";
 const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:`url(${heroimg})`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        
        {/* Content Wrapper */}
        <div className="flex justify-start">
          <div className="w-7xl text-white">
            
            {/* Heading */}
            <h2 className="text-2xl md:text-2xl font-bold mb-1">
              Find Your
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Life Partner
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg mb-8 max-w-lg text-gray-100">
              If you are looking for the perfect life partner, then this is your
              chance. Find out who’s been waiting just as long and deserve to be
              happy too!
            </p>

            {/* Filter Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                
                {/* I am */}
                <select className="border rounded-md px-5 py-2 text-gray-700 focus:outline-none">
                  <option>I am</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Couple</option>
                </select>

                {/* Seeking */}
                <select className="border rounded-md px-5 py-2 text-gray-700 focus:outline-none">
                  <option>Seeking a</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Couple</option>
                </select>

                {/* Age From */}
                <select className="border rounded-md px-5 py-2 text-gray-700 focus:outline-none">
                  <option>Age From</option>
                  {[...Array(73)].map((_, i) => (
                    <option key={i}>{i + 18}</option>
                  ))}
                </select>

                {/* Age To */}
                <select className="border rounded-md px-5 py-2 text-gray-700 focus:outline-none">
                  <option>Age To</option>
                  {[...Array(73)].map((_, i) => (
                    <option key={i}>{i + 18}</option>
                  ))}
                </select>

                {/* Search Button */}
                <button className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition">
                  <Search />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    // </section>
  );
};

export default Hero;
