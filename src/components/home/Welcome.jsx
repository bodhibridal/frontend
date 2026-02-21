
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

//  Import Local Images
// import img1 from "../../assets/images/pexels-mv-photography-8565495.png";
// import img2 from "../../assets/images/sean-williams-d-jyMeP6uNQ-unsplash (1).png";
// import img3 from "../../assets/images/pexels-jin-wedding-5729026.png";
// import img4 from "../../assets/images/pexels-lifeart-8289220.png";

import img1 from "../../assets/one.png";
import img2 from "../../assets/two.png";
import img3 from "../../assets/three.png";
import img4 from "../../assets/four.jpg";

const Welcome = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Section - Image Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="couple"
                className="rounded-xl object-cover w-full h-60 shadow-lg 
                           transition duration-500 hover:scale-110"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              />
            ))}
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 mb-4">
              Welcome To <br />
              <span className="text-3xl text-black md:text-4xl font-bold">
                BodhiBridal Matrimony
              </span>
            </h2>

            <p className="text-gray-600 mb-6 max-w-lg">
              BodhiBridal Matrimony is a one-stop spot for all your matrimonial needs.
              With millions of happy couples already found their perfect match
              on our site, we’re confident that you’ll be able to find yours as well!
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-4 mb-8 max-w-lg"
            >
              {[
                "You can trust us to find your dream partner. We are one of the best and most trusted matrimonial services providers.",
                "Every user on our platform has been verified by an expert team to make sure they are real and active.",
                "The design of this app is sleek and user-friendly. It will make it easy for anyone to find what they need in just a few clicks.",
                "With the help of this new search tool, you can find your perfect match in no time! It has been designed to be quick and efficient.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-green-600 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-12 py-4 rounded-md shadow-lg"
              >
                Let’s Start
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-red-600 text-red-600 px-12 py-4 rounded-md hover:bg-red-50"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
