
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `
    fixed top-0 w-full z-50 transition-all duration-300
    ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"}
  `;

  const activeLinkClass = "text-blue-600 font-semibold";
  const linkClass = "px-4 py-2 font-medium hover:text-blue-600 transition-colors";

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="font-montserrat font-bold text-2xl text-blue-800">
            JWS
            <span className="text-blue-500">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
            Contact
          </NavLink>
          <a 
            href="https://github.com/joe-webServices" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 ml-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover:shadow-glow-blue"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-blue-800 hover:text-blue-600 transition-colors p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <a 
              href="https://github.com/joe-webServices" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
