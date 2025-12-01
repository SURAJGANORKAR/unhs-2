import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-blue-600 py-20 sm:py-28 lg:py-36 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-1 text-yellow-300 leading-none">
            Shri Umiyashankar Narayanji High School & Junior College
          </h2>
          <p className="text-lg sm:text-xl font-semibold opacity-90 mt-4">
            Run by Shri Nagpur Gujarati Mandal, Nagpur
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight opacity-90">
          Excellence in Education, Rooted in Values
        </h1>
        <p className="text-lg sm:text-xl font-light mb-8 max-w-3xl mx-auto opacity-90">
          Serving students from Primary (Grade 5) through Junior College (Grade 12) with a focus on holistic development.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center items-center">
          <a 
            href="/#admissions" 
            className="inline-block w-full sm:w-auto bg-yellow-400 text-blue-900 font-extrabold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Admissions Open
          </a>
          <a 
            href="/#contact" 
            className="inline-block w-full sm:w-auto border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 hover:border-red-700 transition duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;