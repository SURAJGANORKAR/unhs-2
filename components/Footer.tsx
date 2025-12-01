import React from 'react';
import { Facebook, Instagram, Youtube, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Quick Links */}
        <div className="mb-8 w-full text-center">
          <h3 className="text-lg font-bold text-yellow-300 mb-4 uppercase tracking-wider">Quick Links</h3>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link to="/" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Home</Link>
            <Link to="/" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">About Us</Link>
            <Link to="/about-mandal" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Mandal</Link>
            <Link to="/faculty" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Faculty</Link>
            <a href="/#academics" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Academics</a>
            <a href="/#admissions" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Admissions</a>
            <a href="/#alumni" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Alumni</a>
            <a href="/#contact" className="text-white hover:text-yellow-200 transition-colors text-sm sm:text-base font-medium">Contact</a>
          </nav>
        </div>

        <div className="w-full border-t border-red-700 mb-8"></div>
        
        {/* Social Media & Magazine Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a 
            href="https://www.facebook.com/umiyashankarhighschool/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/shri_umiyashankar_nhs_official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/@shri_umiyashankar_nhs_official?si=_vW_whoPvzixwBnE" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="https://maps.app.goo.gl/BtYr5ks9Lg1BjB596" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Locate Us"
          >
            <MapPin className="w-6 h-6" />
          </a>
          <a 
            href="https://online.fliphtml5.com/alwcy/bxuh/#p=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2 group"
            aria-label="School Magazine 2024-25"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-medium border-b border-transparent group-hover:border-yellow-300 hidden sm:inline-block">Magazine 2024-25</span>
          </a>
        </div>

        <div className="text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Shri Umiyashankar Narayanji High School and Junior College. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-75">Managed by Shri Nagpur Gujarati Mandal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;