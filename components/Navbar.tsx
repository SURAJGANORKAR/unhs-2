import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      children: [
        { name: 'School Profile', path: '/' }, // Goes to home where profile is
        { name: 'About Mandal', path: '/about-mandal' },
        { name: 'Our Faculty', path: '/faculty' }
      ]
    },
    { name: 'Academics', path: '/#academics' },
    { name: 'Admissions', path: '/#admissions' },
    { name: 'Alumni', path: '/#alumni' },
    { name: 'Contact', path: '/#contact' },
  ];

  // Helper to handle hash scrolling if on same page, or navigation if different
  // Simplified for this context to just use Link
  
  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-white shadow-lg border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/School Name */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img 
              id="school-logo" 
              src="https://ik.imagekit.io/shriumiyashankar/Logo.jpg" 
              alt="Shri UNHS Logo" 
              className="h-10 w-auto rounded-md shadow-md mr-2 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x40/cc0000/ffffff?text=LOGO';
              }}
            />
            <span className="font-extrabold text-xl text-red-700 tracking-tight hidden sm:inline-block">
              Shri UNHS & Jr. College
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <button 
                      className="flex items-center text-gray-600 hover:text-blue-700 transition duration-300 font-medium focus:outline-none"
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 border border-gray-100">
                      {link.children.map((child) => (
                        <Link 
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-700"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-blue-700 transition duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div>
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-100 hover:text-blue-800 focus:outline-none"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-md">
                        {link.children.map((child) => (
                          <Link 
                            key={child.name}
                            to={child.path} 
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-yellow-50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                   <a 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-yellow-100 hover:text-blue-800"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;