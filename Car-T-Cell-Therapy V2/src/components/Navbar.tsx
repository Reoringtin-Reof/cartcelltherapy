import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50">
      <div className={`backdrop-blur-md transition-colors duration-300 ${
        hasScrolled ? 'bg-theme-navy/30' : 'bg-white/5'
      } border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Activity className="h-8 w-8 mr-2 text-theme-teal" />
                <span className="font-display font-bold text-xl text-white">CAR-T Cell Immunotherapy</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-theme-teal hover:text-theme-navy transition-all"
              >
                <Menu className="h-5 w-5 mr-2" />
                <span>Menu</span>
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-theme-teal hover:text-theme-navy transition-all"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-screen menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-theme-navy/95 backdrop-blur-sm z-40">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-8">
              <Link 
                to="/" 
                className="block text-3xl font-display text-white hover:text-theme-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-3xl font-display text-white hover:text-theme-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About CAR-T
              </Link>
              <Link 
                to="/molecular-processes" 
                className="block text-3xl font-display text-white hover:text-theme-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Molecular Processes
              </Link>
              <Link 
                to="/future" 
                className="block text-3xl font-display text-white hover:text-theme-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Future of CAR-T
              </Link>
              <Link 
                to="/about-project" 
                className="block text-3xl font-display text-white hover:text-theme-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;