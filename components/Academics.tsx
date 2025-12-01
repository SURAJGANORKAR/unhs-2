import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <section id="academics" className="py-16 sm:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">Our Academic Sections</h2>
        {/* Changed grid columns to 3 since we merged sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Merged Primary and Middle Section */}
          <div className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border-b-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Primary / Upper Primary</h3>
            <p className="text-sm font-semibold text-gray-700 mb-3">(Grades 5 - 8)</p>
            <p className="text-gray-600 text-sm">
              Combines foundational learning with early specialization. Focus on critical thinking, activity-based education, and preparation for rigorous high school academics.
            </p>
            <a href="#academics" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">View Curriculum &raquo;</a>
          </div>
          
          {/* High School Section */}
          <div className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border-b-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-700 mb-2">High School</h3>
            <p className="text-sm font-semibold text-gray-700 mb-3">(Grades 9 - 10)</p>
            <p className="text-gray-600 text-sm">
              SSC Board Exam preparation, career exposure, and enhanced focus on Science, Math, and Languages.
            </p>
            <a href="#academics" className="mt-4 inline-block text-sm font-medium text-red-600 hover:text-red-800">SSC Resources &raquo;</a>
          </div>
          
          {/* Junior College Section with updated Science and Vocational info */}
          <div className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border-b-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Junior College</h3>
            <p className="text-sm font-semibold text-gray-700 mb-3">(Grades 11 - 12)</p>
            <p className="text-gray-600 text-sm">
              Offering <strong>Science Stream</strong> and <strong>Vocational Education in Electronics</strong> alongside Arts and Commerce. Intensive preparation for university entrance exams.
            </p>
            <a href="#academics" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800">HSC Streams &raquo;</a>
          </div>
        </div>

        {/* Student Achievements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">Notable Student Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">100% SSC Results</h4>
              <p className="text-sm text-gray-600">Consistently achieving 100% pass rate in SSC Board Examinations for the last 5 years.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
               <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">State Level Sports</h4>
              <p className="text-sm text-gray-600">Our students have represented the district at State Level sports competitions in Athletics and Chess.</p>
            </div>
            
             <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
               <div className="bg-red-100 p-3 rounded-full mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Scholarship Merit</h4>
              <p className="text-sm text-gray-600">Over 50 students secured High School Scholarships and National Merit Scholarships this academic year.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;