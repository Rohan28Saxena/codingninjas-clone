import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[#121212] pt-32 pb-0 flex flex-col items-center text-center px-4 min-h-[85vh] relative overflow-hidden">
      
      {/* Text Content */}
      <div className="z-10 flex flex-col items-center max-w-3xl w-full">
        <p className="text-blue-500 font-medium text-lg mb-4">
          Restricted by opportunities?
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight">
          Get the tech career <br className="hidden md:block" /> you deserve. Faster.
        </h1>
        
        <p className="text-gray-400 mb-10 max-w-2xl text-sm md:text-base">
          Structured coding courses that get you there faster with confidence.
        </p>
        
        <Link 
          to="/courses"
          className="bg-[#f36b25] text-white px-6 py-3 rounded shadow-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
        >
          Explore offerings
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      <div className="mt-16 w-full max-w-5xl bg-[#151515] border border-gray-800 rounded-t-2xl overflow-hidden relative shadow-[0_-15px_60px_rgba(243,107,37,0.12)] z-10 translate-y-8 flex flex-col md:flex-row text-left">
        
        {/* Left Side: Code Editor Mockup */}
        <div className="md:w-3/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-800 bg-[#0a0a0a]">
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="text-gray-600 text-xs ml-2 font-mono">build_career.js</span>
          </div>
          
          {/* Code Snippet */}
          <div className="font-mono text-sm md:text-base leading-loose text-gray-300 overflow-x-auto">
            <p><span className="text-pink-500">import</span> {'{'} <span className="text-blue-400">Dedication</span> {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'student'</span>;</p>
            <p><span className="text-pink-500">import</span> {'{'} <span className="text-blue-400">Curriculum</span>, <span className="text-blue-400">Mentorship</span> {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'coding-ninjas'</span>;</p>
            <br />
            <p><span className="text-purple-400">const</span> <span className="text-yellow-300">achieveGoal</span> <span className="text-purple-400">=</span> <span className="text-blue-400">async</span> () <span className="text-purple-400">{'=>'}</span> {'{'}</p>
            <p className="pl-4"><span className="text-purple-400">const</span> skills <span className="text-purple-400">=</span> <span className="text-blue-400">await</span> <span className="text-yellow-300">Curriculum</span>.learn();</p>
            <p className="pl-4"><span className="text-purple-400">const</span> project <span className="text-purple-400">=</span> <span className="text-blue-400">await</span> <span className="text-yellow-300">Mentorship</span>.build(skills);</p>
            <br />
            <p className="pl-4"><span className="text-pink-500">return</span> {'{'}</p>
            <p className="pl-8">career: <span className="text-green-400">'Software Engineer'</span>,</p>
            <p className="pl-8">status: <span className="text-green-400">'Hired'</span></p>
            <p className="pl-4">{'};'}</p>
            <p>{'};'}</p>
          </div>
        </div>

        {/* Right Side: Dashboard Stats */}
        <div className="md:w-2/5 p-6 md:p-8 bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] flex flex-col justify-center gap-6">
          
          {/* Stat Card 1 */}
          <div className="bg-[#222] border border-gray-700 p-5 rounded-xl flex items-center gap-5 shadow-lg transform transition hover:-translate-y-1">
            <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
               </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Top Companies</p>
              <p className="text-white font-bold text-lg md:text-xl">Google, Amazon, MS</p>
            </div>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-[#222] border border-gray-700 p-5 rounded-xl flex items-center gap-5 shadow-lg transform transition hover:-translate-y-1">
            <div className="bg-green-500/20 p-3 rounded-lg text-green-400">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Average CTC</p>
              <p className="text-white font-bold text-lg md:text-xl">₹ 8.5 LPA+</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background ambient glow (optional, to match dark modern UIs) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-orange-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
};

export default Hero;