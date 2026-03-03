import React, { useState, useEffect } from "react";
import thikse from "../../assets/thikse.jpg";
import phugtal from "../../assets/phugtal.jpg";
import bugan from "../../assets/bugan.jpg";
import kopan from "../../assets/kopan.jpg";
import ki from "../../assets/ki.jpg";
import taksang from '../../assets/taksang.jpg';
import xuan from "../../assets/xuan.jpg";
import taung from "../../assets/taung.jpg";
import punakha from "../../assets/punakha.jpg";
import wat from "../../assets/wat.jpg";
import {fetchAllMonks} from "../services/monasteriesApi";
//import Navbar from "../comman/Navbar";
//import Footer from "../home/NewFoooter";

// import phugtal from "../assets/phugtal.jpg";
// import bugan from "../assets/bugan.jpg";
// import kopan from "../asset/kopan.jpg";
// import ki from "../assets/ki.jpg";
// import taksang from "../assets/taksang.jpg";
// import xuan from "../assets/xuan.jpg";
// import taung from "../assets/taung.jpg";
// import punakha from "../assets/punakha.jpg";
// import wat from "../assets/wat.jpg";
// import { fetchAllMonks } from "../api/monasteriesApi";

function BuddhistMonasteries() {
  // Page scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [selectedMonk, setSelectedMonk] = useState(null);

  // States for API data (Monks)
  const [buddhistMonks, setBuddhistMonks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch monks from database
useEffect(() => {
    const fetchMonks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // ✅ API function call karo
        const result = await fetchAllMonks();

        // ✅ Ab result defined hai
        if (result.success) {
          setBuddhistMonks(result.data);
        } else {
          setError("Data fetch karne mein error aaya");
        }
      } catch (err) {
        console.error("Error fetching monks:", err);
        setError("Server error occurred while fetching monks");
      } finally {
        setLoading(false);
      }
    };

    fetchMonks();
  }, []);

  // Monasteries Data
  const monasteries = [
    {
      id: 1,
      name: "Taksang Monastery",
      altName: "Tiger's Nest",
      location: "Bhutan",
      image: taksang,
      altitude: "3,120 m",
      founded: "1692 CE",
      type: "Vajrayana Buddhist",
      shortDesc:
        "Perched on a cliff 900m above Paro Valley, this iconic monastery is Bhutan's most sacred site.",
      history:
        "Taksang Monastery or Tiger's Nest Monastery is situated on the edge of a 900 meter cliff. The unofficial symbol of Bhutan, the Tiger's nest creates a wonderful view. Located about 2-3 hour uphill hike from the parking lot to the monastery, the monastery is said to be founded by a legendary Guru Rinpoche who flew on this location from Tibet on the back of a tigress. Taktsang is said to be consecrated to tame the Tiger demon. The first monastery was not built until 1682. Though a tragic fire in 1998 destroyed the most of the original buildings, the monastery has been painstakingly restored to its former glory.",
      highlights: [
        "Cliffside location at 3,120m",
        "Founded by Guru Rinpoche",
        "2-3 hour trek to reach",
        "Most photographed site in Bhutan",
      ],
    },
    {
      id: 2,
      name: "Phugtal Gompa",
      altName: "Phugtal Monastery",
      location: "India",
      image: phugtal,
      altitude: "3,800 m",
      founded: "12th Century",
      type: "Gelugpa Buddhist",
      shortDesc:
        "A unique monastery built into a cliff cave in the remote Zanskar region of Ladakh.",
      history:
        "Located in the remote Southeastern Zanskar region, high in the Himalayas, Phugtal Gompa is chiseled out of a cliff face of a gorge which is more or less 3,800 meters high. Presiding over 70 monks, this unique Buddhist monastery was established in the 12th Century by Lama Gangsem Sherap Sampo. An admirable work of engineering, this extraordinary structure has survived hundreds of years despite of being constructed with the raw materials consisting of mud bricks, stones and wood.",
      highlights: [
        "Built into natural cave",
        "Houses 70 monks",
        "Only accessible by foot",
        "12th century architecture",
      ],
    },
    {
      id: 3,
      name: "Bagan Temples",
      altName: "Bagan Archaeological Zone",
      location: "Myanmar",
      image: bugan,
      altitude: "61 m",
      founded: "9th-13th Century",
      type: "Theravada Buddhist",
      shortDesc:
        "Ancient city with over 2,000 Buddhist temples, pagodas, and stupas on the Ayeyarwady River.",
      history:
        "Bagan monastery, (also spelled Pagan), is located on the banks of the Ayerwaddy River in Burma. It is home to the largest area of Buddhist temples, pagodas, stupas and ruins in the world. Once the capital of several ancient dynasties of Burmese Kings, it was built with roughly 4,400 temples during the height of the kingdom. After the kingdom fell to the Mongols in 1287 and refusing to pay tribute to Kublai Khan, Bagan declined as a political center in Burma but continue to be one of the most reputed place for Buddhist studies and scholarship.",
      highlights: [
        "Over 2,000 surviving temples",
        "UNESCO World Heritage Site",
        "Hot air balloon views",
        "Ancient Burmese architecture",
      ],
    },
    {
      id: 4,
      name: "Kopan Monastery",
      altName: "Kopan Gompa",
      location: "Nepal",
      image: kopan,
      altitude: "1,400 m",
      founded: "1969",
      type: "Gelugpa Buddhist",
      shortDesc:
        "A Tibetan Buddhist monastery near Boudhanath, famous for meditation courses for Westerners.",
      history:
        "A Tibetan Buddhist Monastery located near the massive Bouddhanath stupa on the outskirts of Kathmandu, Nepal, Kopan Monastery belongs to the Foundation for Preservation of the Mahayana Tradition (FPMT), an international network of Gelupa dharma centers and once served as its headquarters. Kopan Monastery was established by the FPMT founders, Lama Thubten Yeshe and Thubten Zopa Rinpoche after buying the property from the then Royal Astrologer of Nepal in 1969. Named after the hill on which it was built, the monastery has become popular among western foreigners for its Buddhist teachings.",
      highlights: [
        "Month-long meditation courses",
        "FPMT headquarters",
        "Views of Boudhanath Stupa",
        "Western-friendly teachings",
      ],
    },
    {
      id: 5,
      name: "Ki Monastery",
      altName: "Key Gompa",
      location: "India",
      image: ki,
      altitude: "4,166 m",
      founded: "11th Century",
      type: "Gelugpa Buddhist",
      shortDesc:
        "A thousand-year-old monastery perched on a hilltop overlooking the Spiti Valley.",
      history:
        "Key Gompa or Ki Monastery is a thousand year Tibetan Monastery located on top of a hill at the height of 4,166 meters from the sea level overlooking the Spiti Valley. The monastery has survived numerous attacks during its long history by Mongols and other armies. Similarly it has also ravaged by fire and earthquakes. It is a religious training center for Lamas and has undergone lots of destructions and restorations resulting in to have a box like construction which looks like a fort.",
      highlights: [
        "Highest monastery in Spiti",
        "Fort-like architecture",
        "Training center for Lamas",
        "Survived Mongol attacks",
      ],
    },
    {
      id: 6,
      name: "Thikse Monastery",
      altName: "Thikse Gompa",
      location: "India",
      image: thikse,
      altitude: "3,600 m",
      founded: "15th Century",
      type: "Gelugpa Buddhist",
      shortDesc:
        "A 12-storey monastery resembling the Potala Palace, home to the famous Maitreya Buddha statue.",
      history:
        "It is a Tibetan Buddhist monastery of the Yellow Hat sect. Thikse Monastery is noted for its resemblance to the Potala Palace in Lhasa. Situated at an altitude of 3,600 m in the Indus Valley, the 12-storeyed complex of the monastery houses several items of Buddhist arts and Buddhist symbols like Buddha Stupas and wall paintings. Maitreya Temple inside the monastery is one of the main points of interests which were installed to commemorate the visit of the 14th Dalai Lama to the monastery in 1970.",
      highlights: [
        "Resembles Potala Palace",
        "12-storey complex",
        "15m Maitreya Buddha statue",
        "Visited by 14th Dalai Lama",
      ],
    },
    {
      id: 7,
      name: "Xuan Kong Monastery",
      altName: "Hanging Temple",
      location: "China",
      image: xuan,
      altitude: "75 m above ground",
      founded: "491 CE",
      type: "Buddhist, Taoist, Confucian",
      shortDesc:
        "A remarkable temple built into a cliff face, defying gravity for over 1,500 years.",
      history:
        "Xuang Kong monastery or The Hanging Temple can be found in China's Shanxi province. This unique monastery is based on a cliff overlooking Mount Heng near to the cliff. This temple is seen to be supported by thin stilts, at the first glance and looks like a strong gust of wind would bring it tumbling to the ground, but a really good structural engineering is the main reason for its survival despite of several earthquakes over the years. It houses extraordinary halls and rooms which follow the craggy contours of the cliff face. This Marvelously built temple was constructed 1400 years ago and is one of the shining examples of extraordinary architectural merits.",
      highlights: [
        "Built 75m above ground",
        "Three religions combined",
        "1,500+ years old",
        "Engineering marvel",
      ],
    },
    {
      id: 8,
      name: "Taung Kalat",
      altName: "Mount Popa Monastery",
      location: "Myanmar",
      image: taung,
      altitude: "737 m",
      founded: "Ancient",
      type: "Buddhist & Nat worship",
      shortDesc:
        "A stunning monastery a top an extinct volcanic plug with 777 steps to reach the summit.",
      history:
        "One of the most unique aspects of the Buddhist monastery of Tuang Kalat is it is built at the top of an extinct volcano plug, which is also one of the most breathtaking sites in Burma. Visitors must climb 777 steps to the summit to reach the monastery. The visitors can enjoy a panoramic view from the top of Tuang Kalat. From the top, one can see the ancient city and monastery of Bagan and the massive conical peak of Mount Popa, the volcano that actually cause the creation of the volcanic plug.",
      highlights: [
        "777 steps to summit",
        "Extinct volcanic plug",
        "Panoramic Bagan views",
        "Home to 37 Nat spirits",
      ],
    },
    {
      id: 9,
      name: "Punakha Dzong",
      altName: "Palace of Great Happiness",
      location: "Bhutan",
      image: punakha,
      altitude: "1,200 m",
      founded: "1637 CE",
      type: "Drukpa Kagyu Buddhist",
      shortDesc:
        "The most beautiful dzong in Bhutan, located at the confluence of two rivers.",
      history:
        "Standing on an island between the confluence of the Pho Chhu and Mo Chhu rivers, Punakha Dzong is one of the most photogenic of all of Bhutan's ancient dzongs (Monasteries). Punaka serves several purposes, like any other dzongs in Bhutan, including the protection for the region, as the administrative seat for the government as well as the winter home of the monastic body. Connected to the mainland by an arched wooden bridge, the dzong contains many priceless relics from the days when the successive kings reined the kingdom from this valley.",
      highlights: [
        "Two rivers confluence",
        "Winter home of monks",
        "Royal wedding venue",
        "Priceless Buddhist relics",
      ],
    },
    {
      id: 10,
      name: "Wat Rong Khun",
      altName: "White Temple",
      location: "Thailand",
      image: wat,
      altitude: "424 m",
      founded: "1997 CE",
      type: "Theravada Buddhist",
      shortDesc:
        "A contemporary all-white temple with intricate mirror mosaics, still under construction.",
      history:
        "One of the most unique Buddhist monastery in the world, Wat Rong Khun in Chiang Rai, Thailand is all white and highly ornate structure gilded in mosaic mirrors which is done in a distinctly contemporary style. It is the brainchild of the renowned Thai artist Chalermchai Kostpipat. Still under construction, Wat Rong Khun is expected to be fully completed in another 4 or 5 decades.",
      highlights: [
        "All-white design",
        "Mirror mosaic decoration",
        "Contemporary Buddhist art",
        "Created by famous artist",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
       

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-red-400 via-red-400 to-red-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏛️</div>
          <div className="absolute bottom-10 right-10 text-8xl">⛩️</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[180px]">
            ☸
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
              🙏 Explore Sacred Places
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Buddhist Monasteries
              <br />
              <span className="text-white/90">of the World</span>
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the most sacred and breathtaking Buddhist monasteries
              holding centuries of spiritual wisdom and architectural marvel.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-white/80 text-xs">Monasteries</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="text-white/80 text-xs">Countries</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <p className="text-2xl font-bold text-white">2500+</p>
                <p className="text-white/80 text-xs">Years of History</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none">
            <path
              d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ==================== MONASTERIES GRID SECTION ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-3">
              🏛️ Sacred Places
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              World Famous <span className="text-red-400">Monasteries</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Explore the architectural marvels and spiritual centers that have
              stood for centuries
            </p>
          </div>

          {/* Monasteries Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {monasteries.map((monastery) => (
              <div
                key={monastery.id}
                onClick={() => setSelectedMonastery(monastery)}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Location Badge */}
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    📍 {monastery.location}
                  </span>

                  {/* Name on Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {monastery.name}
                    </h3>
                    <p className="text-white/80 text-xs">{monastery.altName}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {monastery.shortDesc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      🏔️ {monastery.altitude}
                    </span>
                    <button className="text-red-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Quote */}
          <div className="mt-14 bg-gradient-to-r from-red-400 to-red-400 rounded-2xl p-6 md:p-10 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px]">
                🏛️
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-4xl mb-4 block">⛩️</span>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-medium italic mb-4 max-w-2xl mx-auto">
                "The monastery is the place where ordinary beings become
                extraordinary through dedication and practice."
              </blockquote>
              <p className="text-white/80 font-semibold">— Buddhist Proverb</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MONASTERY DETAIL MODAL ==================== */}
      {selectedMonastery && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMonastery(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-56 md:h-64">
              <img
                src={selectedMonastery.image}
                alt={selectedMonastery.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMonastery(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Name & Location */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium mb-2 inline-block">
                  📍 {selectedMonastery.location}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {selectedMonastery.name}
                </h2>
                <p className="text-white/90 text-sm">
                  {selectedMonastery.altName}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 md:p-7">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-red-50 p-3 rounded-xl text-center">
                  <span className="text-xl mb-1 block">🏔️</span>
                  <p className="text-xs text-gray-500">Altitude</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonastery.altitude}
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-xl text-center">
                  <span className="text-xl mb-1 block">📅</span>
                  <p className="text-xs text-gray-500">Founded</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonastery.founded}
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-xl text-center">
                  <span className="text-xl mb-1 block">📍</span>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonastery.location}
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-xl text-center">
                  <span className="text-xl mb-1 block">🙏</span>
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {selectedMonastery.type}
                  </p>
                </div>
              </div>

              {/* History */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm">
                    📜
                  </span>
                  History & Background
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {selectedMonastery.history}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm">
                    ⭐
                  </span>
                  Key Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedMonastery.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
                    >
                      <span className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-xl p-5 text-white text-center">
                <span className="text-3xl mb-2 block">🏛️</span>
                <p className="text-base font-medium mb-1">
                  {selectedMonastery.name}
                </p>
                <p className="text-white/80 text-sm">
                  {selectedMonastery.location} • {selectedMonastery.altitude}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== BUDDHIST MONKS SECTION (DYNAMIC FROM DATABASE) ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🙏 Buddhist Masters
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Great <span className="text-red-400">Buddhist Monks</span> &
              Teachers
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the lives and teachings of the greatest Buddhist masters
              who have illuminated the path of Dharma for millions across
              centuries.
            </p>
          </div>

          {/* ✅ LOADING STATE */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-lg">Loading Buddhist Monks...</p>
            </div>
          )}

          {/* ✅ ERROR STATE */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <span className="text-6xl mb-4">⚠️</span>
              <p className="text-red-500 text-lg font-semibold">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg"
              >
                Retry
              </button>
            </div>
          )}

          {/* ✅ EMPTY STATE - Jab koi data na ho */}
          {!loading && !error && buddhistMonks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl">
              <span className="text-8xl mb-6">🙏</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Koi Buddhist Monk Abhi Nahi Hai
              </h3>
              <p className="text-gray-600 text-center max-w-md">
                Abhi database mein koi Buddhist monk ka data nahi hai. 
                Jaldi hi yahan mahaan Buddhist bhikshuk ki jaankari add ki jayegi.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="bg-red-100 text-red-400 px-6 py-3 rounded-xl">
                  <span className="text-2xl">☸</span>
                </div>
                <div className="bg-red-100 text-red-400 px-6 py-3 rounded-xl">
                  <span className="text-2xl">🪷</span>
                </div>
                <div className="bg-red-100 text-red-400 px-6 py-3 rounded-xl">
                  <span className="text-2xl">📿</span>
                </div>
              </div>
            </div>
          )}

          {/* ✅ MONKS GRID - Jab data ho */}
          {!loading && !error && buddhistMonks.length > 0 && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {buddhistMonks.map((monk) => (
                  <div
                    key={monk.id}
                    onClick={() => setSelectedMonk(monk)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 group"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={monk.image_url}
                        alt={monk.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x300/f87171/ffffff?text=${monk.name}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Period Badge */}
                      <span className="absolute top-4 right-4 bg-red-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {monk.period?.split(" - ")[0]}
                      </span>

                      {/* Name on Image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-1">
                          {monk.name}
                        </h3>
                        <p className="text-white/80 text-sm">{monk.title}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {monk.short_desc}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          📍 {monk.birth_place?.split(",")[0]}
                        </span>
                        <button className="text-red-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Quote */}
              <div className="mt-16 bg-red-400 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px]">
                    ☸
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="text-6xl mb-6 block">🪷</span>
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium italic mb-6 max-w-3xl mx-auto">
                    "Three things cannot be long hidden: the sun, the moon, and the
                    truth."
                  </blockquote>
                  <p className="text-white/80 font-semibold text-lg">
                    — Gautam Buddha
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ==================== MONK DETAIL MODAL ==================== */}
      {selectedMonk && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMonk(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 md:h-72">
              <img
                src={selectedMonk.image_url}
                alt={selectedMonk.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x400/f87171/ffffff?text=${selectedMonk.name}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMonk(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Name & Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full font-medium mb-3 inline-block">
                  {selectedMonk.period}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedMonk.name}
                </h2>
                <p className="text-white/90 text-lg">{selectedMonk.title}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">🙏</span>
                  <p className="text-xs text-gray-500">Original Name</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.original_name || selectedMonk.name}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">📍</span>
                  <p className="text-xs text-gray-500">Birth Place</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.birth_place}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">📅</span>
                  <p className="text-xs text-gray-500">Period</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.period}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">⭐</span>
                  <p className="text-xs text-gray-500">Title</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {selectedMonk.title}
                  </p>
                </div>
              </div>

              {/* History */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                    📜
                  </span>
                  History & Life
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMonk.history}
                </p>
              </div>

              {/* Teachings - Database se aayega */}
              {selectedMonk.teachings && selectedMonk.teachings.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                      📿
                    </span>
                    Key Teachings
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedMonk.teachings.map((item, index) => (
                      <div
                        key={item.id || index}
                        className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="w-6 h-6 bg-red-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-sm">
                          {item.teaching}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contributions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                    🏆
                  </span>
                  Major Contributions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMonk.contributions}
                </p>
              </div>

              {/* Famous Quote */}
              <div className="bg-red-400 rounded-2xl p-6 text-white">
                <span className="text-4xl mb-4 block">💬</span>
                <blockquote className="text-lg md:text-xl font-medium italic mb-4">
                  "{selectedMonk.famous_quote}"
                </blockquote>
                <p className="text-white/80 font-semibold text-right">
                  — {selectedMonk.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-8 bg-red-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white text-lg font-medium mb-4">
             Explore the sacred places of Buddhism
          </p>
          <div className="flex gap-3 justify-center mb-6">
            <button className="bg-white text-red-400 font-semibold py-2 px-5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
              Visit Gallery
            </button>
            <button className="border-2 border-white text-white font-semibold py-2 px-5 rounded-lg text-sm hover:bg-white hover:text-red-400 transition-colors">
              Contact
            </button>
          </div>
          <p className="text-white/70 text-xs">
           
          </p>
        </div>
      </section>

    </div>
  );
}

export default BuddhistMonasteries;