import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
    onClose(); 
  };

  const handleGoogleLogin = () => {
    alert('Simulating Google Sign-In...');
    onClose();
  };

  return (
    // Backdrop overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity">
      
      {/* Narrower width (max-w-sm) and removed all scrolling logic */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm relative animate-fade-in-up">
        
        {/* Close Button - Pulled tighter to the corner */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Ultra-compact outer padding */}
        <div className="p-5 md:p-6">
          
          {/* Header - Subtitle removed to save space */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
          </div>

          {/* Google Sign-In Button */}
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition shadow-sm mb-4"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-2 text-gray-400 text-xs uppercase tracking-wider font-medium">or email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleLogin} className="space-y-3">
            {/* Input labels removed, relying purely on placeholders */}
            <div>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                placeholder="Email Address"
              />
            </div>
            
            <div>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-between items-center text-xs pt-1">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500 mr-1.5 cursor-pointer w-3.5 h-3.5" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-orange-500 hover:underline font-medium">Forgot Password?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#f36b25] text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition shadow-md mt-1"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-orange-500 font-bold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;