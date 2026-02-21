import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import img1 from "../../assets/44.jpg";
// import img2 from "../../assets/55.jpg";
import img2 from "../../assets/54.jpg";
import img3 from "../../assets/65.jpg";
import img4 from "../../assets/54.jpg";

const testimonials = [
  {
    title: "Fantastic dating website",
    description:
      "BodhiBridal Matrimony is by far my favourite of all the sites I've tried and it's where I've had the most success. It provides possibilities that other sites do not, such as Near me, Meet me, Date Tracker etc.",
    name: "Amit Sharma",
    image: img1,
  },
  {
    title: "Amazing Experience",
    description:
      "I found my perfect match here. The platform is simple, effective and filled with genuine profiles. Highly recommended!",
    name: "Anjali Verma",
    image: img2,
  },
  {
    title: "Best Matrimony Platform",
    description:
      "The features and filters helped me narrow down my search easily. Great experience overall!",
    name: "Rahul Mehta",
    image: img3,
  },
  {
    title: "Trustworthy & Reliable",
    description:
      "Security and privacy are top-notch. I felt confident using WP Matrimony throughout my journey.",
    name: "Sneha Kapoor",
    image: img4,
  },
  {
    title: "Highly Successful",
    description:
      "This platform helped me connect with the right people quickly. Very happy with the results!",
    name: "Vikram Singh",
    image: img3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-red-400 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl font-semibold mb-4">
            Love Shown By Our Members
          </h2>
          <p className="text-gray-600">
            We’re always excited to hear what our valued customers think about
            the services that we provide. Here are a few reviews from happy users
            who left us review fingerprints all over their feedback!
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 bg-white p-8 rounded-xl shadow-lg text-center ${
                    isActive
                      ? "scale-100 blur-0 opacity-100"
                      : "scale-90 blur-sm opacity-20"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover mb-2"
                    />
                    <p className="font-medium">{item.name}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
