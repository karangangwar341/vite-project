import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const buttons = [
  { Name: "About", Address: "/home" },
  { Name: "Works", Address: "/work" },
  { Name: "Contact", Address: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-screen top-0 backdrop-blur-2xl shadow-sm shadow-white/10 transition-transform ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div
        className={`${
          isMenuOpen ? "h-64" : ""
        } w-screen p-2 pb-3`}
      >
        <h1 className="absolute pl-8 py-2 text-5xl font-semi-bold font-mono">
          k.
        </h1>

        <div className="flex justify-end items-center pr-2 pt-4">
          <button
            className="lg:hidden z-40 bg-white/0 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <ul className="hidden text-xl lg:flex justify-end space-x-8">
            {buttons.map((element, index) => (
              <li key={index}>
                <Link
                  to={element.Address}
                  className="text-white hover:text-gray-300"
                >
                  <button className="rounded-full px-3 py-1 bg-white/0 hover:scale-110 transition-transform">
                    {element.Name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden z-40 text-xl absolute right-0 mt-2 w-48 bg-white/0 backdrop-blur-2xl text-white rounded-lg shadow-lg py-2">
            <ul className="flex flex-col items-center space-y-4 text-white">
              {buttons.map((element, index) => (
                <li key={index}>
                  <Link to={element.Address} className="text-white">
                    <button className="bg-white/10 z-60 backdrop-blur-2xl px-3 py-2 hover:border-2 hover:border-white border-2 w-32 text-center transition">
                      {element.Name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
