
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { Toaster } from "./components/ui/sonner";

// Page imports
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ScrollToTop component to reset scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // Handle smooth scrolling on in-page navigation
  useEffect(() => {
    // For desktop: ensure smooth scrolling behavior is set in the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element is an anchor tag with a hash link
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
