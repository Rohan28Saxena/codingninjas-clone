import React from 'react';

// Simulated Data
const TOPICS = [
  { id: 1, name: 'Arrays', count: 324, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 2, name: 'Strings', count: 210, color: 'text-green-500', bg: 'bg-green-50' },
  { id: 3, name: 'Dynamic Programming', count: 185, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 4, name: 'Graphs', count: 142, color: 'text-orange-500', bg: 'bg-orange-50' },
];

const PROBLEM_LIST = [
  { id: 101, title: 'Two Sum', difficulty: 'Easy', acceptance: '54%', company: 'Google' },
  { id: 102, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: '33%', company: 'Amazon' },
  { id: 103, title: 'Merge k Sorted Lists', difficulty: 'Hard', acceptance: '49%', company: 'Microsoft' },
  { id: 104, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: '61%', company: 'Meta' },
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'text-green-600 bg-green-100';
    case 'Medium': return 'text-yellow-600 bg-yellow-100';
    case 'Hard': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const Practice = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Code Studio Practice</h1>
          <p className="text-gray-600">Master Data Structures and Algorithms to ace your tech interviews.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left side - 2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Topic Grid */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Explore by Topics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TOPICS.map((topic) => (
                  <div key={topic.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
                    <div className={`w-12 h-12 ${topic.bg} ${topic.color} rounded-full flex items-center justify-center mb-3`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">{topic.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{topic.count} Problems</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Problem List */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Top Interview Problems</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium">Title</th>
                        <th className="p-4 font-medium">Difficulty</th>
                        <th className="p-4 font-medium">Acceptance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PROBLEM_LIST.map((problem) => (
                        <tr key={problem.id} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                          <td className="p-4 text-center">
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full group-hover:border-orange-500 transition cursor-pointer"></div>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">{problem.title}</span>
                            <div className="text-xs text-gray-500 mt-1">Asked in: {problem.company}</div>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="p-4 text-gray-600 font-medium">
                            {problem.acceptance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area (Right side - 1/3 width) */}
          <div className="space-y-6">
            
            {/* Problem of the Day Card */}
            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">POTD</span>
                  <span className="text-sm font-medium">Ends in 05:42:10</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Find Minimum in Rotated Sorted Array</h3>
                <p className="text-white/80 text-sm mb-6 line-clamp-2">Suppose an array of length n sorted in ascending order is rotated between 1 and n times.</p>
                <button className="bg-white text-orange-600 w-full py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md">
                  Solve Now
                </button>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Streak & Stats Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Current Streak</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-gray-900">12</span>
                  <span className="text-gray-500 font-medium mb-1 border-b-2 border-orange-500">Days</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Practice;