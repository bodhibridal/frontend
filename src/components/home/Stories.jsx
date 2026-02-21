import { CalendarDays } from "lucide-react";

import img from "../../assets/one.png";

const Stories = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

          {/* LEFT SECTION */}
          <div>
            <p className="text-red-400 mb-2">
              Some Successful Stories
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Happy Couple&apos;s Stories
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
              Read the stories of those who came here alone and left with a happy
              ending. They will tell you how they did it, what happened when
              things got tough or if there was anything in particular that made
              their experience so much better than expected!
              {"\n\n"}
              This is the place for happy memories. Relive your favourite moment
              by reading about others’ experiences here!
              {"\n\n"}
              We all know that finding the perfect match might be difficult, but
              with these tips, you’ll have a better chance of success on your
              next online matrimonial site visit.
            </p>

            <button className="border border-red-400 text-red-400 px-6 py-3 rounded-md hover:bg-red-400 hover:text-white transition">
              View All Stories
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="max-w-md">
            {/* Image */}
             <img
              src={img}
              alt="Happy Couple"
              className="rounded-xl mb-5 w-full h-60 object-cover"
            /> 

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              Our love feels like a business...
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 mb-4">
              When I'm with my partner, it's not just about us. It really does
              feel like a business relationship at times…
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <CalendarDays size={16} />
              <span>Jan 24, 2022</span>
            </div>

            {/* Full Description */}
            <p className="text-gray-600 mb-3">
              When I'm with my partner, it's not just about us. It really does
              feel like a business relationship at times because we have so much
              in common and are both very busy people! The idea of dating is
              often seen as an
            </p>

            {/* Read More */}
            <button className="text-red-400 font-medium hover:underline">
              Read more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stories;
