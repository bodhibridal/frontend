// import registerimg from "../../assets/images/747376.png";
// import FindMatchimg from "../../assets/images/1077114.png";
// import Connecting  from "../../assets/images/733585.png";

import registerimg from "../.././assets/733585.png";
import FindMatchimg from "../.././assets/747376.png";
import Connecting from "../.././assets/1077114.png";


const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-500 uppercase tracking-wide mb-2">
            How It Works
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Find Your Partner In Just Few Steps
          </h2>

          <p className="text-gray-600">
           BodhiBridal Matrimony will help you find your perfect match with just a few
            steps. You focus on what is most important to you, we do all the work.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-6 text-center">
            <img
              src={registerimg}
              alt="Register"
              className="w-16 h-16 mx-auto mb-8"
            />

            <h3 className="text-xl font-semibold mb-3">Register</h3>

            <p className="text-gray-600 mb-6">
              Register to our website, fill up your profile completely, and put
              a beautiful image on your profile.
            </p>

            
          </div>

          {/* Card 2 (Example) */}
          <div className="p-6 text-center">
            <img
              src = {FindMatchimg}
              alt="Find Match"
              className="w-16 h-16 mx-auto mb-8"
            />

            <h3 className="text-xl font-semibold mb-3">Find Your Partner</h3>

            <p className="text-gray-600 mb-6">
              Search your interests that you like. You'll also be recommended users based on your preferences.
            </p>

            
          </div>

          {/* Card 3 (Example) */}
          <div className="p-6 text-center">
            <img
              src= {Connecting}
              alt="Connect"
              className="w-16 h-16 mx-auto mb-8"
            />

            <h3 className="text-xl font-semibold mb-3">Connect</h3>

            <p className="text-gray-600 mb-6">
              Add friends, approach them, and chat with them. Be sure to share your audio, photo, and video too.
            </p>

            
          </div>
        
        </div>
        <div className="mx-auto text-center mt-5">
            <button className="bg-red-400 text-white text-lg px-12 py-4 rounded-md hover:bg-red-700 transition">
              Let’s Start
            </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
