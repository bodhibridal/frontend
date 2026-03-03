// import { useState } from "react";
// import { Star, User, UserRound, UserCheck } from "lucide-react";

// // import img1 from "../../assets/photo-1529634806980-85c3dd6d34ac.jpg";
// // import img2 from "../../assets/photo-1508214751196-bcfd4ca60f91.jpg";
// // import img3 from "../../assets/photo-1494790108377-be9c29b29330.jpg";  

// // import img1 from "../../assets/two.jpg";
// // import img2 from "../../assets/three.jpg";
// // import img3 from "../../assets/four.jpg"; 

// import img1 from "../../assets/one.png";
// import img2 from "../../assets/two.png";
// import img3 from "../../assets/three.png";

// const membersData = [
//   {
//     id: 1,
//     name: "Pihu Malik",
//     gender: "Woman",
//     age: 30,
//     location: "Mumbai, India",
//     image:
//       img1,
//     online: true,
//   },
//   {
//     id: 2,
//     name: "Rahul Verma",
//     gender: "Man",
//     age: 32,
//     location: "Delhi, India",
//     image:
//       img2,
//     online: false,
//   },
//   {
//     id: 3,
//     name: "Anjali Singh",
//     gender: "Woman",
//     age: 28,
//     location: "Pune, India",
//     image:
//       img3,
//     online: true,
//   },
//     {
//     id: 4,
//     name: "Kashish Singh",
//     gender: "Woman",
//     age: 28,
//     location: "Pune, India",
//     image:
//       img1,
//     online: true,
//   },
//       {
//     id: 5,
//     name: "kriti Singh",
//     gender: "Woman",
//     age: 28,
//     location: "Pune, India",
//     image:
//       img2,
//     online: true,
//   },
//     {
//     id: 6,
//     name: "Rahul Verma",
//     gender: "Man",
//     age: 32,
//     location: "Delhi, India",
//     image:
//       img2,
//     online: false,
//   },
//   {
//     id: 7,
//     name: "Rahul Verma",
//     gender: "Man",
//     age: 32,
//     location: "Delhi, India",
//     image:
//       img3,
//     online: false,
//   },
// ];

// const OurMembers = () => {
//   const [filter, setFilter] = useState("ALL");

//   const filteredMembers = membersData.filter((member) => {
//     if (filter === "Man") return member.gender === "Man";
//     if (filter === "Woman") return member.gender === "Woman";
//     if (filter === "Online") return member.online;
//     return true;
//   });

//   return (
//     <section className="w-full py-16 bg-red-400 text-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Text Section */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <p className="mb-2">Our Members</p>

//           <h2 className="text-3xl font-bold mb-4">
//             Start Looking For Your Partner
//           </h2>

//           <p className="text-white/90">
//             The beginning of a beautiful relationship is here. The BodhiBridal Matrimony
//             is a great place to find potential matches.
//             <br />
//             Why not start looking for your ideal partner online right away?
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <FilterButton
//             icon={<Star size={18} />}
//             label="ALL"
//             active={filter === "ALL"}
//             onClick={() => setFilter("ALL")}
//           />
//           <FilterButton
//             icon={<UserRound size={18} />}
//             label="Man"
//             active={filter === "Man"}
//             onClick={() => setFilter("Man")}
//           />
//           <FilterButton
//             icon={<User size={18} />}
//             label="Woman"
//             active={filter === "Woman"}
//             onClick={() => setFilter("Woman")}
//           />
//           <FilterButton
//             icon={<UserCheck size={18} />}
//             label="Online Members"
//             active={filter === "Online"}
//             onClick={() => setFilter("Online")}
//           />
//         </div>

//         {/* Members Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredMembers.map((member) => (
//             <div
//               key={member.id}
//               className="relative rounded-xl overflow-hidden group h-80"
//             >
//               {/* Background Image */}
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />

//               {/* Online Status */}
//               <div className="absolute top-3 right-3">
//                 <span
//                   className={`w-4 h-4 rounded-full border-2 border-white block ${
//                     member.online ? "bg-green-500" : "bg-gray-400"
//                   }`}
//                 />
//               </div>

//               {/* Name */}
//               <div className="absolute bottom-15 left-3">
//                 <h3 className="font-semibold text-lg">
//                   {member.name}
//                 </h3>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end">
//                 <div className="p-4">
//                   <p className="font-semibold">
//                     {member.age} years old {member.gender}
//                   </p>
//                   <p className="text-sm">
//                     from {member.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// const FilterButton = ({ icon, label, active, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
//         active
//           ? "bg-white text-red-500"
//           : "border-white text-white hover:bg-white hover:text-red-500"
//       }`}
//     >
//       {icon}
//       {label}
      
//     </button>
//   );
// };

// export default OurMembers;



import { useState, useRef, useEffect } from "react";
import { Star, User, UserRound, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";

// import img1 from "../../assets/images/photo-1529626455594-4ff0802cfb7e.jpg";
// import img2 from "../../assets/images/photo-1500648767791-00dcc994a43e.jpg";
// import img3 from "../../assets/images/photo-1517841905240-472988babdf9.jpg";

//import whitestirtboy from "../../assets/whitestirtboy.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"
import img9 from "../../assets/img9.jpg"

const membersData = [
  {
    id: 1,
    name: "Aaryan Malik",
    gender: "Man",
    age: 30,
    location: "Mumbai, India",
    image: img5,
    online: true,
  },
  {
    id: 2,
    name: "Swati Sen",
    gender: "Woman",
    age: 32,
    location: "Delhi, India",
    image: img6,
    online: false,
  },
  {
    id: 3,
    name: "Anjali Singh",
    gender: "Woman",
    age: 28,
    location: "Pune, India",
    image: img7,
    online: true,
  },
  {
    id: 4,
    name: "Yash Sharma",
    gender: "Man",
    age: 28,
    location: "Pune, India",
    image: img9,
    online: true,
  },
  // {
  //   id: 5,
  //   name: "Kriti Singh",
  //   gender: "Woman",
  //   age: 28,
  //   location: "Pune, India",
  //   image: img2,
  //   online: true,
  // },
  // {
  //   id: 6,
  //   name: "Rahul Verma",
  //   gender: "Man",
  //   age: 32,
  //   location: "Delhi, India",
  //   image: img2,
  //   online: false,
  // },
  // {
  //   id: 7,
  //   name: "Amit Kumar",
  //   gender: "Man",
  //   age: 32,
  //   location: "Delhi, India",
  //   image: img3,
  //   online: false,
  // },
  // {
  //   id: 8,
  //   name: "Sneha Patel",
  //   gender: "Woman",
  //   age: 26,
  //   location: "Ahmedabad, India",
  //   image: img1,
  //   online: true,
  // },
  // {
  //   id: 9,
  //   name: "Vikram Singh",
  //   gender: "Man",
  //   age: 35,
  //   location: "Jaipur, India",
  //   image: img2,
  //   online: false,
  // },
  // {
  //   id: 10,
  //   name: "Priya Sharma",
  //   gender: "Woman",
  //   age: 27,
  //   location: "Bangalore, India",
  //   image: img3,
  //   online: true,
  // },
];

const OurMembers = () => {
  const [filter, setFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const cardsPerView = 4;

  const filteredMembers = membersData.filter((member) => {
    if (filter === "Man") return member.gender === "Man";
    if (filter === "Woman") return member.gender === "Woman";
    if (filter === "Online") return member.online;
    return true;
  });

  const totalSlides = Math.ceil(filteredMembers.length / cardsPerView);

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth * cardsPerView,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(totalSlides - 1, activeIndex + 1);
    scrollToSlide(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 280 + 24;
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth * cardsPerView));
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardsPerView]);

  return (
    <section className="w-full py-16 bg-red-400 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-2">Our Members</p>
          <h2 className="text-3xl font-bold mb-4">
            Start Looking For Your Partner
          </h2>
          <p className="text-white/90">
            The beginning of a beautiful relationship is here. The BodhiBridal Matrimony
            is a great place to find potential matches.
            <br />
            Why not start looking for your ideal partner online right away?
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton
            icon={<Star size={18} />}
            label="ALL"
            active={filter === "ALL"}
            onClick={() => setFilter("ALL")}
          />
          <FilterButton
            icon={<UserRound size={18} />}
            label="Man"
            active={filter === "Man"}
            onClick={() => setFilter("Man")}
          />
          <FilterButton
            icon={<User size={18} />}
            label="Woman"
            active={filter === "Woman"}
            onClick={() => setFilter("Woman")}
          />
          <FilterButton
            icon={<UserCheck size={18} />}
            label="Online Members"
            active={filter === "Online"}
            onClick={() => setFilter("Online")}
          />
        </div>

        {/* ✅ Carousel Container - Added more padding for buttons */}
        <div className="relative px-16 lg:px-20">

          {/* ✅ Left Arrow - Moved further left */}
          <button
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-red-400 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              activeIndex === 0 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:bg-red-50 hover:scale-110"
            }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          {/* ✅ Right Arrow - Moved further right */}
          <button
            onClick={scrollRight}
            disabled={activeIndex === totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-red-400 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              activeIndex === totalSlides - 1 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:bg-red-50 hover:scale-110"
            }`}
            aria-label="Scroll Right"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="relative rounded-xl overflow-hidden group flex-shrink-0 w-[280px] h-80 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Online Status */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`w-4 h-4 rounded-full border-2 border-white block ${
                      member.online ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>

                {/* Name */}
                <div className="absolute bottom-16 left-4 right-4">
                  <h3 className="font-semibold text-lg text-white drop-shadow-lg">
                    {member.name}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="font-medium text-white/90">
                      {member.age} years old • {member.gender}
                    </p>
                    <p className="text-sm text-white/80">
                      📍 {member.location}
                    </p>
                    <button className="mt-3 w-full bg-white text-red-400 font-semibold py-2 rounded-lg hover:bg-red-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-white w-8" 
                    : "bg-white/50 w-3 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

const FilterButton = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
        active
          ? "bg-white text-red-500"
          : "border-white text-white hover:bg-white hover:text-red-500"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default OurMembers;