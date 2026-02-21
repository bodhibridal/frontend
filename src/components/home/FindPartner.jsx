// import partnerImg from "../../assets/images/pexels-mv-photography-8565495.png";

import partnerImg from "../../assets/seven.jpg";

const FindPartner = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          
          {/* Left Section - Text */}
          <div>
            <h2 className="text-red-500 text-xl">
              Find Your
            </h2>
            <h2 className="text-3xl uppercase  md:text-4xl font-bold text-black mb-4">
              Life Partner With Us.
            </h2>

            <p className="text-gray-600 mb-1 leading-relaxed">
              Start your journey today with the BodhiBridal Matrimony and find a perfect
              match. Get ready to capture all those beautiful memories for
              yourself, because these are things that will last forever!
            </p>

            <p className="text-gray-600 mb-1 leading-relaxed">
              Dating can be fun, but it’s hard to know where you’ll end up. Have
              no fear! Join the Dating Club today and find your perfect match in
              less than 24 hours who will enjoy all of these moments with you for
              years to come.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The time has never been better – get started on finding someone
              worth keeping around by joining this amazing new community at WP
              Matrimony right away!!
            </p>

            <button className="bg-red-400 text-white text-lg px-12 py-4 rounded-md hover:bg-red-700 transition">
              Let’s Start
            </button>
          </div>

          {/* Right Section - Circular Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-92 h-92 md:w-126 md:h-126 rounded-full overflow-hidden shadow-lg">
              <img
                src={partnerImg}
                alt="Couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindPartner;
