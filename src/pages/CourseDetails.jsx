import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Simulated database
const COURSE_DATABASE = {
  1: {
    title: 'Data Structures & Algorithms in C++',
    description: 'Master core data structures and algorithms in C++. This course is designed to take you from a beginner to an advanced problem solver, covering arrays, linked lists, trees, graphs, and dynamic programming.',
    rating: '4.8',
    level: 'Beginner to Advanced',
    duration: '4-8 months',
    instructor: 'Ankush Singla',
    syllabus: [
      'Conditionals and Loops',
      'Arrays & Strings',
      'Recursion & Backtracking',
      'Object Oriented Programming',
      'Stacks & Queues',
      'Binary Trees & BST',
      'Dynamic Programming',
      'Graphs'
    ]
  },
  2: {
    title: 'Full Stack Web Development (MERN)',
    description: 'Build complete, production-ready web applications from scratch. Learn React for the frontend and Node.js, Express, and MongoDB for the backend.',
    rating: '4.9',
    level: 'Intermediate',
    duration: '6-9 months',
    instructor: 'Manisha Khattar',
    syllabus: [
      'HTML, CSS, and Bootstrap',
      'JavaScript Fundamentals to Advanced',
      'React Hooks and State Management',
      'Node.js & Express Basics',
      'MongoDB & Mongoose API',
      'Authentication & Authorization',
      'Capstone Project'
    ]
  },
  3: {
    title: 'Data Science & Machine Learning',
    description: 'Dive deep into data manipulation, visualization, and predictive modeling using Python, Pandas, and Scikit-Learn.',
    rating: '4.7',
    level: 'Advanced',
    duration: '6 months',
    instructor: 'Parikh Jain',
    syllabus: [
      'Python for Data Science',
      'Data Manipulation with Pandas',
      'Data Visualization (Matplotlib/Seaborn)',
      'Statistics & Probability',
      'Supervised Learning Algorithms',
      'Unsupervised Learning Algorithms',
      'Deep Learning Basics'
    ]
  }
};

const CourseDetails = () => {
  const { id } = useParams();
  
  // State for data, loading status, and errors
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when the ID changes
    setIsLoading(true);
    setError(null);

    // Simulate an API call with a 1-second delay
    const fetchCourse = () => {
      setTimeout(() => {
        const foundCourse = COURSE_DATABASE[id];
        
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError('Course not found. Please check the URL.');
        }
        
        setIsLoading(false);
      }, 1000); // 1000ms = 1 second delay
    };

    fetchCourse();
    
    // Optional cleanup function if needed (e.g., aborting fetch)
    return () => clearTimeout();
  }, [id]); // The effect re-runs if the 'id' in the URL changes

  // 1. Render Loading State
  if (isLoading) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-orange-200 rounded-full mb-4"></div>
          <p className="text-gray-500 font-medium">Loading course details...</p>
        </div>
      </div>
    );
  }

  // 2. Render Error State
  if (error) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
        <Link to="/" className="text-orange-500 hover:underline mt-4 inline-block">
          &larr; Return to Home
        </Link>
      </div>
    );
  }

  // 3. Render Data State
  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <Link to="/" className="text-orange-500 hover:underline mb-6 inline-block">
        &larr; Back to all courses
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-6">{course.description}</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              ⭐ <span className="font-semibold text-white">{course.rating}</span>
            </span>
            <span>•</span>
            <span>{course.level}</span>
            <span>•</span>
            <span>⏱️ {course.duration}</span>
            <span>•</span>
            <span>👨‍🏫 {course.instructor}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {course.syllabus.map((topic, index) => (
                <li key={index} className="pl-2 border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium">{topic}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 shadow-md transition w-full md:w-auto">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;