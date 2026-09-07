import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, rating, level, duration, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="h-48 bg-gray-200 w-full relative">
        <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-red-500 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
          {imageSrc || "Course Image"}
        </div>
      </div>
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 mt-auto">
          <span className="flex items-center gap-1">
             ⭐ <span className="font-semibold text-gray-700">{rating}</span>
          </span>
          <span>•</span>
          <span>{level}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
        
        {/* Updated Button to Link */}
        <Link 
          to={`/course/${id}`}
          className="w-full mt-4 border border-orange-500 text-orange-500 font-semibold py-2 rounded hover:bg-orange-50 transition text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;