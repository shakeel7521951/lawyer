import React from 'react';

const Firm = () => {
  const timelineData = [
    {
      year: "2005",
      yearColor: "blue-800",
      yearBorder: "border-[#001f3f]",
      yearBullet: "bg-blue-600",
      yearContent: "Founded in Doha with a specialized focus on corporate and commercial law, establishing our reputation for excellence.",
      eventTitle: "Landmark Victory",
      eventBorder: "border-yellow-500",
      eventBullet: "bg-yellow-500",
      eventContent: "Successfully represented a Fortune 500 company in a precedent-setting commercial dispute, establishing our litigation expertise."
    },
    {
      year: "2012",
      yearColor: "blue-800",
      yearBorder: "border-[#001f3f]",
      yearBullet: "bg-blue-600",
      yearContent: "Strategic expansion to full-service practice with dedicated government relations and international arbitration divisions.",
      eventTitle: "Global Recognition",
      eventBorder: "border-yellow-500",
      eventBullet: "bg-yellow-500",
      eventContent: "Honored as 'Law Firm of the Year' at the Middle East Legal Awards, cementing our regional leadership position."
    },
    {
      year: "Present",
      yearColor: "blue-800",
      yearBorder: "border-[#001f3f]",
      yearBullet: "bg-blue-600",
      yearContent: "Now serving clients across 3 continents with a team of 50+ legal professionals and 12 practice areas.",
      eventTitle: "Innovating Tomorrow",
      eventBorder: "border-yellow-500",
      eventBullet: "bg-yellow-500",
      eventContent: "Pioneering legal tech solutions through our Nerou AI integration, redefining client service standards in the region."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-blue-100 text-[#001f3f] rounded-full text-sm font-semibold tracking-wider mb-4">OUR LEGACY</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            The <span className="text-[#001f3f]"> Al Khaldi</span> Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] to-blue-800 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#001f3f] to-blue-800 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                <div className="md:flex justify-between items-stretch">
                  {/* Year Card */}
                  <div className="md:w-5/12 md:pr-10 md:text-right mb-8 md:mb-0">
                    <div className={`relative bg-white p-8 rounded-xl shadow-lg border-l-4 ${item.yearBorder} md:border-l-0 md:border-r-4 md:mr-6 transform transition-all duration-300 group-hover:scale-105`}>
                      <div className={`absolute -top-3 -left-3 w-6 h-6 ${item.yearBullet} rounded-full md:hidden`}></div>
                      <h3 className={`text-2xl font-bold text-${item.yearColor} mb-2`}>{item.year}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.yearContent}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 -ml-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#001f3f] to-blue-800 border-4 border-white shadow-xl transform transition-all duration-300 group-hover:scale-125"></div>
                  </div>

                  {/* Event Card */}
                  <div className="md:w-5/12 md:pl-10">
                    <div className={`relative bg-white p-8 rounded-xl shadow-lg border-l-4 ${item.eventBorder} md:border-l-0 md:ml-6 transform transition-all duration-300 group-hover:scale-105`}>
                      <div className={`absolute -top-3 -left-3 w-6 h-6 ${item.eventBullet} rounded-full md:hidden`}></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.eventTitle}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.eventContent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#001f3f] to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-[#001f3f] transform hover:-translate-y-1">
            Explore Our Full History
          </button>
        </div>
      </div>
    </section>
  );
};

export default Firm;