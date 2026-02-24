import React from "react";
import Navbar from "../comman/Navbar";
import Footer from "../home/NewFoooter";
function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Cultural Documentation Specialist",
      type: "Full-time",
      location: "Remote / On-site",
      description: "Join our team to document and research Buddhist monasteries across Asia. Requires travel and cultural sensitivity.",
    },
    {
      id: 2,
      title: "Senior Photographer",
      type: "Full-time",
      location: "Remote / Travel",
      description: "Capture the beauty and essence of sacred spaces. Experience in architectural and cultural photography required.",
    },
    {
      id: 3,
      title: "Content Writer & Researcher",
      type: "Full-time / Part-time",
      location: "Remote",
      description: "Create compelling narratives about monasteries, their history, and cultural significance. Buddhist studies background preferred.",
    },
    {
      id: 4,
      title: "Travel Coordinator",
      type: "Full-time",
      location: "Hybrid",
      description: "Organize and coordinate monastery documentation trips. Experience in travel logistics and cultural tourism required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-orange-400 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Be part of our mission to preserve and share the beauty of Buddhist monasteries with the world
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Join Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Work on meaningful projects that preserve cultural heritage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Contribute to preserving world heritage for future generations
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Travel Opportunities</h3>
              <p className="text-gray-600">
                Visit and document monasteries across Asia and beyond
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Passionate Team</h3>
              <p className="text-gray-600">
                Work with dedicated professionals who share your values
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learning & Growth</h3>
              <p className="text-gray-600">
                Continuous learning about Buddhist culture and heritage
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Work</h3>
              <p className="text-gray-600">
                Remote work options and flexible scheduling available
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Meaningful Work</h3>
              <p className="text-gray-600">
                Every day contributes to cultural preservation
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our mission
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.id} 
                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                      <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.location}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {position.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto">
                      Apply Now
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always interested in hearing from talented individuals. Send us your resume and tell us how you can contribute.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-red-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Careers;