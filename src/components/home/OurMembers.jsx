import { useState } from "react";
import { Star, User, UserRound, UserCheck } from "lucide-react";

// import img1 from "../../assets/photo-1529634806980-85c3dd6d34ac.jpg";
// import img2 from "../../assets/photo-1508214751196-bcfd4ca60f91.jpg";
// import img3 from "../../assets/photo-1494790108377-be9c29b29330.jpg";  

// import img1 from "../../assets/two.jpg";
// import img2 from "../../assets/three.jpg";
// import img3 from "../../assets/four.jpg"; 

import img1 from "../../assets/one.png";
import img2 from "../../assets/two.png";
import img3 from "../../assets/three.png";

const membersData = [
  {
    id: 1,
    name: "Pihu Malik",
    gender: "Woman",
    age: 30,
    location: "Mumbai, India",
    image:
      img1,
    online: true,
  },
  {
    id: 2,
    name: "Rahul Verma",
    gender: "Man",
    age: 32,
    location: "Delhi, India",
    image:
      img2,
    online: false,
  },
  {
    id: 3,
    name: "Anjali Singh",
    gender: "Woman",
    age: 28,
    location: "Pune, India",
    image:
      img3,
    online: true,
  },
    {
    id: 4,
    name: "Kashish Singh",
    gender: "Woman",
    age: 28,
    location: "Pune, India",
    image:
      img1,
    online: true,
  },
      {
    id: 5,
    name: "kriti Singh",
    gender: "Woman",
    age: 28,
    location: "Pune, India",
    image:
      img2,
    online: true,
  },
    {
    id: 6,
    name: "Rahul Verma",
    gender: "Man",
    age: 32,
    location: "Delhi, India",
    image:
      img2,
    online: false,
  },
  {
    id: 7,
    name: "Rahul Verma",
    gender: "Man",
    age: 32,
    location: "Delhi, India",
    image:
      img3,
    online: false,
  },
];

const OurMembers = () => {
  const [filter, setFilter] = useState("ALL");

  const filteredMembers = membersData.filter((member) => {
    if (filter === "Man") return member.gender === "Man";
    if (filter === "Woman") return member.gender === "Woman";
    if (filter === "Online") return member.online;
    return true;
  });

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

        {/* Members Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-xl overflow-hidden group h-80"
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />

              {/* Online Status */}
              <div className="absolute top-3 right-3">
                <span
                  className={`w-4 h-4 rounded-full border-2 border-white block ${
                    member.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>

              {/* Name */}
              <div className="absolute bottom-15 left-3">
                <h3 className="font-semibold text-lg">
                  {member.name}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4">
                  <p className="font-semibold">
                    {member.age} years old {member.gender}
                  </p>
                  <p className="text-sm">
                    from {member.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
