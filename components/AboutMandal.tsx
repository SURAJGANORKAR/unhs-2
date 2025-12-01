import React from 'react';

const AboutMandal: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Shri Nagpur Gujarati Mandal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A century of dedication to education, community service, and cultural values.
          </p>
        </div>

        {/* President's Message */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                    <img 
                        src="https://jr.vmvjmtjjpc.edu.in/wp-content/uploads/2025/09/YHp.webp" 
                        alt="Shri Y. H. Patel" 
                        className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-yellow-100 mb-4"
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/200x200/eab308/ffffff?text=President';
                        }}
                    />
                    <h3 className="text-xl font-bold text-gray-900">Shri Y. H. Patel</h3>
                    <p className="text-blue-600 font-medium">President</p>
                    <p className="text-sm text-gray-500">Shri Nagpur Gujarati Mandal</p>
                </div>
                <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">President's Message</h3>
                    <blockquote className="text-gray-700 italic leading-relaxed text-lg border-l-4 border-blue-200 pl-4">
                        "I welcome on my behalf and on behalf of the institution to all the visitors of the website. 
                        It is an opportunity for us to showcase the educational road map that our institute has drawn for bettering the society by imparting value-based education. 
                        It is also heartening to inform each one of you that the sacred objectives laid out by our founding fathers long years ago have now been realised to the optimum extent. 
                        We believe in incremental growth. By that, we mean to heighten the educational standard of the students and their status as the citizens of our country."
                    </blockquote>
                </div>
             </div>
        </div>

        {/* Detailed History & Info */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-8 sm:p-10 shadow-sm border border-blue-100">
          <div className="lg:flex lg:gap-12 items-start">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our History & Legacy</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Since 1905, Shri Nagpur Gujarati Mandal has been a crucial part of the region’s educational development. Pioneered by Shri Rajaram Dixit, Shri Soubhagyachand Kothari, Shri Deojibhai Thawar, and other dedicated philanthropists, the Mandal began with the founding of ‘Itwari Gujarati Shikshan Sanstha’.
                </p>
                <p>
                  Initially with just 28 pupils, the school was a remarkable success, inspiring the Mandal to establish more schools over the next 100 years. Today, the Mandal is a source of knowledge to over 5,000 students across a variety of educational systems, including Hindi, Marathi, and English.
                </p>
                <p>
                  The Mandal has not only strived to provide the best possible education to its students but has also seen its fair share of challenge and difficulty over the years. Nevertheless, Shri Nagpur Gujarati Mandal continues to be a shining beacon of knowledge and achievement.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h4 className="text-lg font-bold text-red-700 mb-4 border-b pb-2">Institutions Run By Mandal</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri Malak Itwari Gujarati Primary School</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri Mahavir Chhabalbhai Gujarati Primary Kanya Shala</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri Pakwasa Gujarati Girls’ High School & Jr. College</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri Umiyashankar Narayanji High School & Jr. College</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>VMV Commerce, JMT Arts & JJP Science College</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Smt. Chanchalben Narayanbhai Patel Shishu Vihar</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri. M.I.G. English Medium Primary School</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Shri Raojibhai Jhaverbhai English Medium Primary School</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Sudha Sureshbhai Maniyar College of Computer & Management</li>
                  <li className="flex items-start"><span className="mr-2 text-blue-500 flex-shrink-0">•</span>Smt. Ushaben Chandrakant Thakar Womens’ College</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMandal;