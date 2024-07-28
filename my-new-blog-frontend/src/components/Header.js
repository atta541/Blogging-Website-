import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 ; ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-35 items-center">
          <div className="flex mt-3 p-3">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold tracking-widest text-black uppercase italic focus:outline-none focus:shadow-outline">
                AI<br />
                <span className="ml-8 mr-9">&</span><br />
                <span>Crypto</span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8 mt-6 gap-9">
              <Link to="/" className="px-3 py-2 rounded-md text-3xl font-bold text-black hover:underline">
                Home
              </Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-3xl font-bold text-black hover:underline">
                Blog
              </Link>
              <Link to="/gen-ai" className="px-3 py-2 rounded-md text-3xl font-bold text-black hover:underline">
                Generative AI
              </Link>
              <Link to="/crypto" className="px-3 py-2 rounded-md text-3xl font-bold text-black hover:underline">
                Crypto
              </Link>
            </div>
          </div>
          <div className="flex items-center -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isOpen ? 'bg-black text-white' : 'bg-black text-gray-400'} hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white`}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="text-black text-lg font-semibold">
            {currentTime}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-bold text-black hover:underline">
              Home
            </Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-bold text-black hover:underline">
              Blogs
            </Link>
            <Link to="/gen-ai" className="block px-3 py-2 rounded-md text-base font-bold text-black hover:underline">
              Generative AI
            </Link>
            <Link to="/crypto" className="block px-3 py-2 rounded-md text-base font-bold text-black hover:underline">
              Crypto
            </Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-base font-bold text-black hover:underline">
              News
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
