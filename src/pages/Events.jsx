import React, { useState } from 'react';

// Simulated Event Data
const EVENT_DATA = [
  { 
    id: 1, 
    type: 'Webinar', 
    title: 'AI Virtual Assistant Masterclass', 
    date: 'Aug 28, 2026', 
    time: '7:00 PM - 9:00 PM', 
    status: 'Upcoming',
    speaker: 'Dr. Aditi Sharma',
    imageBg: 'from-blue-500 to-indigo-600',
    description: 'Learn the architecture behind building domain-specific conversational AI and voice-enabled virtual assistants.' 
  },
  { 
    id: 2, 
    type: 'Hackathon', 
    title: 'Full-Stack Web Dev Challenge', 
    date: 'Sep 05, 2026', 
    time: '10:00 AM - 10:00 PM', 
    status: 'Upcoming',
    speaker: 'Coding Ninjas Team',
    imageBg: 'from-orange-500 to-red-500',
    description: 'A 12-hour hackathon to build responsive, full-stack applications using React, Node.js, and MongoDB.' 
  },
  { 
    id: 3, 
    type: 'Workshop', 
    title: 'Computer Vision & Face Recognition', 
    date: 'Sep 12, 2026', 
    time: '5:00 PM - 8:00 PM', 
    status: 'Upcoming',
    speaker: 'Rahul Verma',
    imageBg: 'from-teal-500 to-green-600',
    description: 'Deep dive into computer vision APIs. Build real-time face verification systems for modern web applications.' 
  },
  { 
    id: 4, 
    type: 'Contest', 
    title: 'Weekly Coding Contest 95', 
    date: 'Aug 20, 2026', 
    time: '8:00 PM - 10:00 PM', 
    status: 'Past',
    speaker: 'Platform Auto-Grader',
    imageBg: 'from-gray-700 to-gray-900',
    description: 'Compete with peers across 4 algorithmic challenges to improve your global rating and problem-solving speed.' 
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const filteredEvents = EVENT_DATA.filter(event => event.status === activeTab);

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & Contests</h1>
          <p className="text-gray-600">Join webinars, compete in contests, and accelerate your learning.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b border-gray-200 mb-8 overflow-x-auto">
          {['Upcoming', 'Past'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              
              {/* Event Image / Graphic */}
              <div className={`h-40 w-full bg-linear-to-r ${event.imageBg} relative p-4 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight line-clamp-2">
                  {event.title}
                </h3>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{event.date}</span>
                  <span className="px-2">•</span>
                  <span>{event.time}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 grow">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                      {event.speaker.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{event.speaker}</span>
                  </div>
                  
                  <button 
                    disabled={activeTab === 'Past'}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                      activeTab === 'Past' 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white border border-orange-200'
                    }`}
                  >
                    {activeTab === 'Past' ? 'Ended' : 'Register'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100 mt-4">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">No {activeTab.toLowerCase()} events found</h3>
            <p className="text-gray-500 mt-1">Check back later for new updates.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Events;