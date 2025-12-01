import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">About Shri Umiyashankar Narayanji</h2>
        
        {/* School Overview & Achievement */}
        <div className="mb-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
                Shri Umiyashankar Narayanji High School & Junior College is a premier educational institution in Nagpur. 
                Recognized for its academic excellence, <strong>the Department of Education has granted it the status of a Central School.</strong>
            </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300 flex flex-col items-center">
            <p className="text-xs text-gray-500 mb-1">Institution Managed By</p>
            <h3 className="text-xl font-semibold text-gray-900">Shri Nagpur Gujarati Mandal</h3>
            <p className="mt-2 text-sm text-gray-600 mb-4">A commitment to community service and educational excellence.</p>
            <Link to="/about-mandal" className="mt-auto inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium">
                Read About Mandal <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <p className="text-xs text-gray-500 mb-1">Head Mistress's Desk</p>
            <h3 className="text-xl font-semibold text-gray-900">Ku. S.K. Gupta</h3>
            <p className="mt-2 text-sm text-gray-600">Leading our dedicated staff and nurturing 1100 bright students.</p>
             <Link to="/faculty" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                <Users className="w-4 h-4 mr-1" /> Meet Our Faculty
             </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <p className="text-xs text-gray-500 mb-1">Student Strength</p>
            <h3 className="text-xl font-semibold text-gray-900">1100+</h3>
            <p className="mt-2 text-sm text-gray-600">Diverse student body across Primary, Middle, High School, and Jr. College.</p>
          </div>
        </div>

        {/* Affiliation Details */}
        <div className="p-6 bg-yellow-50 rounded-xl shadow-inner border border-yellow-100">
          <h3 className="text-xl font-bold text-red-700 mb-4">Official Affiliation Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="font-medium text-gray-800">SSC Index No.:</div>
            <div className="text-gray-600">06.01.028</div>
            <div className="font-medium text-gray-800">HSC No.:</div>
            <div className="text-gray-600">06.01.020</div>
            <div className="font-medium text-gray-800">UDISE No.:</div>
            <div className="text-gray-600">27091506102</div>
            <div className="font-medium text-gray-800">Governing Body:</div>
            <div className="text-gray-600">Shri Nagpur Gujarati Mandal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;