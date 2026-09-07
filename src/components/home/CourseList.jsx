import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  { id: 1, title: 'Data Structures & Algorithms in C++', rating: '4.8', level: 'Beginner to Advanced', duration: '4-8 months' },
  { id: 2, title: 'Full Stack Web Development (MERN)', rating: '4.9', level: 'Intermediate', duration: '6-9 months' },
  { id: 3, title: 'Data Science & Machine Learning', rating: '4.7', level: 'Advanced', duration: '6 months' },
];

const CourseList = () => {
  return (
    <div className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Learning Tracks</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Master algorithms, web development, and data science with our structured, industry-vetted curriculum.</p>
      </div>
      
      {/* CSS Grid for Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard 
            id={course.id}
            title={course.title}
            rating={course.rating}
            level={course.level}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;