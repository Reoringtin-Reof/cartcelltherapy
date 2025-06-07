import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, School } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-navy text-theme-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">CAR-T Cell Immunotherapy</span>
            </div>
            <p className="text-theme-gray-light text-sm">
              An educational resource about CAR-T cell therapy and its role in cancer treatment.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-theme-gray-light hover:text-theme-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-theme-gray-light hover:text-theme-teal transition-colors">About CAR-T</Link></li>
              <li><Link to="/molecular-processes" className="text-theme-gray-light hover:text-theme-teal transition-colors">Molecular Processes</Link></li>
              <li><Link to="/future" className="text-theme-gray-light hover:text-theme-teal transition-colors">Future of CAR-T</Link></li>
              <li><Link to="/about-project" className="text-theme-gray-light hover:text-theme-teal transition-colors">About Project</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:rshroff28@shschools.org" className="text-theme-gray-light hover:text-theme-teal transition-colors">
                  rshroff28@shschools.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-theme-gray-light/20 mt-8 pt-8 text-center text-theme-gray-light text-sm">
          <p>Bio Expo Project, Sacred Heart Preparatory - CAR-T Cell Immunotherapy - Ridham Shroff</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;