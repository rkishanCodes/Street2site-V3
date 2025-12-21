import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Street2Site
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`hover:text-[#667eea] transition-colors ${
              location.pathname === "/" ? "text-[#667eea]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/work"
            className={`hover:text-[#667eea] transition-colors ${
              location.pathname === "/work" ? "text-[#667eea]" : ""
            }`}
          >
            Work
          </Link>
          <Link
            to="/services"
            className={`hover:text-[#667eea] transition-colors ${
              location.pathname === "/services" ? "text-[#667eea]" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#667eea] transition-colors ${
              location.pathname === "/about" ? "text-[#667eea]" : ""
            }`}
          >
            About
          </Link>
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex px-6 py-2 rounded-full bg-[#667eea] text-white text-sm font-medium hover:bg-[#5a67d8]"
        >
          Start project
        </Link>
      </div>
    </header>
  );
};

export default Header;
