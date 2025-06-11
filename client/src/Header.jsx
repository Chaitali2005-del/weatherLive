import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use Heroicons or other icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 p-4 flex flex-col md:flex-row justify-between items-center shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 px-6 md:px-28">
        <img
          src="src/assets/Groupp.png"
          alt="Weathercoach Logo"
          className="w-48 h-auto"
        />
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`flex-col md:flex-row items-center md:mr-60 space-y-4 md:space-y-0 md:space-x-12 font-medium 
        ${menuOpen ? "flex" : "hidden"} md:flex`}
      >
        <Link to="/Who" className="text-black hover:text-blue-500">
          Home
        </Link>
        <Link to="/Climate" className="text-black hover:text-blue-500">
          Climate Change
        </Link>
        <Link to="/News" className="text-black hover:text-blue-500">
          News
        </Link>
        <Link to="/Map" className="text-black hover:text-blue-500">
          Map
        </Link>
        <Link to="/Gallery" className="text-black hover:text-blue-500">
          Gallery
        </Link>
        <Link to="/Contact" className="text-black hover:text-blue-500">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
