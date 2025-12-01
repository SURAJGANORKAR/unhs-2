import React from 'react';
import { Users, GraduationCap, Calendar, Heart } from 'lucide-react';

const Alumni: React.FC = () => {
  return (
    <section id="alumni" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Our Alumni Network</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We take immense pride in the achievements of our former students who are making a difference across the globe. Our alumni network is a vibrant community that fosters lifelong connections.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex items-start transition duration-300 hover:shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Connect with Batchmates</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Revisit old memories and stay in touch with your friends and teachers. We are building a comprehensive directory to help you find and connect with your peers.
                    </p>
                    <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Coming Soon</span>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex items-start transition duration-300 hover:shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Success Stories</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        From entrepreneurs to artists, scientists to social workers – read inspiring stories of how our alumni are shaping the world.
                    </p>
                    <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Featured Profiles</span>
                </div>
            </div>
            
             <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex items-start transition duration-300 hover:shadow-lg">
                <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Events & Reunions</h3>
                    <p className="text-gray-600 text-sm mb-4">
                       Stay updated on upcoming alumni meets, annual gatherings, and networking events organized by the school.
                    </p>
                     <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Check Calendar</span>
                </div>
            </div>
            
             <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex items-start transition duration-300 hover:shadow-lg">
                <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Give Back</h3>
                    <p className="text-gray-600 text-sm mb-4">
                       Support current students through mentorship programs, guest lectures, or scholarship contributions.
                    </p>
                     <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Get Involved</span>
                </div>
            </div>
        </div>

        <div className="text-center bg-blue-800 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Are you an Alumnus?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Join our official alumni community to stay updated with the latest news, events, and networking opportunities.
            </p>
            <a 
                href="https://forms.zohopublic.in/unhsssggm1/form/AlumniRegistrationForm/formperma/5xjoLm8LBtPDdtsztcfXum8JhlosB8fhisSxemw6ums"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-lg"
            >
                Register as Alumni
            </a>
        </div>
      </div>
    </section>
  );
};

export default Alumni;