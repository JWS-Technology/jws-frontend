
import { NavLink } from "react-router-dom";
import { ArrowRight, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">
              JWS<span className="text-white">.</span>
            </h3>
            <p className="opacity-80 max-w-xs">
              Building modern, fast, and scalable web applications with clean code
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/joe-webServices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a 
                href="mailto:info@joewebservices.com"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="inline-flex items-center opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="inline-flex items-center opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="inline-flex items-center opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className="inline-flex items-center opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="inline-flex items-center opacity-80 hover:opacity-100 hover:translate-x-1 transition-all"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-300">Services</h4>
            <ul className="space-y-2">
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                Custom Web App Development
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                Frontend & Backend Architecture
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                API Development & Integration
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                Maintenance & Performance Optimization
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-300">Get in Touch</h4>
            <p className="opacity-80 mb-4">
              Have a project in mind? Let's build something amazing together.
            </p>
            <NavLink
              to="/contact"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-md inline-flex items-center transition-all hover:shadow-glow-blue"
            >
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </NavLink>
          </div>
        </div>

        <hr className="border-blue-800 my-8" />

        <div className="text-center opacity-70 text-sm">
          <p>&copy; {currentYear} Joe WebServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
