import React from 'react';

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Start Your Journey with Us</h2>
            <p className="text-gray-600 mb-6">
              Admissions for the upcoming academic year are currently open for select grades (5th, 6th, 9th, and 11th). We invite prospective students and parents to review our procedure and schedule a visit.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><span className="font-semibold text-red-600">Step 1:</span> Submit an online inquiry form.</li>
              <li><span className="font-semibold text-red-600">Step 2:</span> Schedule an interactive session with the Head Mistress.</li>
              <li><span className="font-semibold text-red-600">Step 3:</span> Document verification and final enrollment confirmation.</li>
            </ul>
            <a href="#" className="mt-8 inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              Download Prospectus
            </a>
          </div>
          
          <div className="mt-10 lg:mt-0 bg-gray-50 p-4 rounded-xl shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 px-1">Quick Inquiry</h3>
            <div className="w-full">
              <iframe 
                aria-label='Admission Enquiry Form' 
                frameBorder="0" 
                style={{ height: '500px', width: '100%', border: 'none' }} 
                src='https://forms.zohopublic.in/unhsssggm1/form/AdmissionEnquiryForm/formperma/IqSnmSemUq8hTjelFz099GKTRL0E9Jr8qI1K3ECy8_8'
                title="Admission Enquiry Form"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;