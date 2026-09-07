import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import ExploreCourses from './pages/ExploreCourses';
import Practice from './pages/Practice.jsx';
import Events from './pages/Events.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans flex flex-col">
        {/* Navbar stays fixed at the top across all routes */}
        <Navbar />
        
        {/* Main content changes based on the URL */}
        <main className="grow">
         <Routes>
            <Route path="/codingninjas-clone" element={<Home />} />
            <Route path="/courses" element={<ExploreCourses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/practice" element={<Practice/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>  
        </main>
        
        {/* Footer sits at the bottom across all routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;