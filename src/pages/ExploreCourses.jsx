import React, { useState } from 'react';
import CourseCard from '../components/home/CourseCard';

const CATALOG_DATA = [
  { id: 1, title: 'Data Structures & Algorithms in C++', category: 'Programming', rating: '4.8', level: 'Beginner to Advanced', duration: '4-8 months' },
  { id: 2, title: 'Full Stack Web Development (MERN)', category: 'Web Dev', rating: '4.9', level: 'Intermediate', duration: '6-9 months' },
  { id: 3, title: 'Data Science & Machine Learning', category: 'Data Science', rating: '4.7', level: 'Advanced', duration: '6 months' },
  { id: 4, title: 'Competitive Programming', category: 'Programming', rating: '4.9', level: 'Advanced', duration: '3 months' },
  { id: 5, title: 'React.js & Redux Frontend Bootcamp', category: 'Web Dev', rating: '4.8', level: 'Intermediate', duration: '2 months' },
  { id: 6, title: 'Python Foundation', category: 'Programming', rating: '4.6', level: 'Beginner', duration: '2 months' },
];

const categories = ['All', 'Programming', 'Web Dev', 'Data Science'];

const ExploreCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search input

  // Filter logic: Check category AND search text (case-insensitive)
  const filteredCourses = CATALOG_DATA.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect program to accelerate your tech career.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* Search Icon (SVG) */}
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for a course (e.g., React, Data Science)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition shadow-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id}
              id={course.id}
              title={course.title}
              rating={course.rating}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </div>
        
        {/* Empty State / No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center text-gray-500 mt-16 bg-white py-12 rounded-xl shadow-sm border border-gray-100">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium text-gray-900">No courses found</p>
            <p className="mt-1">Try adjusting your search or selecting a different category.</p>
            
            {/* Quick reset button */}
            {(searchQuery !== '' || activeCategory !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-orange-500 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCourses;