import React from 'react';
import { User, BookOpen, Briefcase } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  qualification?: string;
}

const Faculty: React.FC = () => {
  const adminStaff: StaffMember[] = [
    { name: 'Ku. Santoshi Kanhaiyalal Gupta', role: 'Head Mistress', qualification: 'M.A, M.Ed' },
    { name: 'Mr. Amrutlal Jivrajbhai Khetani', role: 'Head Teacher', qualification: 'B.A, B.Ed' },
  ];

  const teachingStaff: StaffMember[] = [
    { name: 'Rina Satyam Kariya', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Anshul Suresh Jichkur', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Leena Prasad Pande', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Suraj Shreekant Ganorkar', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Seema Amol Lanjewar', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Ranjana Vijay Nimje', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Neeta Dilip Parwarkar', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Suhasini Yashwant Bhute', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Saroj Umesh Akare', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Vibha Girish Suba', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Smita Sanjay Meharkure', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Mona Vijay Jani', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Anuradha Girish Sule', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Shubhangi Rajeshkumar Dave', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Rajni Pratap Chauhan', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Kavita Keyur Vyas', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Anjali Alpeshkumar Joshi', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Kalpana Subhash Belekar', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Shraddha Shekhar Shirpurkar', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Rashmi Ramakant Pantawane', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Bharati Pankaj Asatkar', role: 'Assistant Teacher', qualification: 'Graduate' },
    { name: 'Rinakumari Indradeo Yasav', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Shital Hemantrao Khedikar', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Pallavi Umakant Ganatra', role: 'Assistant Teacher', qualification: 'Post Graduate' },
    { name: 'Darshan Vilasrao Dudhe', role: 'Assistant Teacher', qualification: 'Graduate' },
  ];

  const nonTeachingStaff: StaffMember[] = [
    { name: 'Mehul Rajnikant Patel', role: 'Clerk', qualification: 'Non-Teacher Staff' },
    { name: 'Biraj Virendra Patel', role: 'Clerk', qualification: 'Non-Teacher Staff' },
    { name: 'Mukesh Bhaiyyalal Sahu', role: 'Staff', qualification: 'Non-Teacher Staff' },
    { name: 'Ramprasad Buddhiram Thapa', role: 'Staff', qualification: 'Non-Teacher Staff' },
    { name: 'Dhaleshwar Jaysingh Bawangarh', role: 'Laboratory Assistant', qualification: 'Non-Teacher Staff' },
    { name: 'Seema Prashant Mahale', role: 'Peon/MTS', qualification: 'Non-Teacher Staff' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Our Dedicated Faculty</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced and committed educators who guide our students towards academic excellence and character development.
          </p>
        </div>

        {/* Administration Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">School Administration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {adminStaff.map((staff, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 flex items-center">
                <div className="bg-red-50 p-3 rounded-full mr-4">
                   <User className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{staff.name}</h3>
                  <p className="text-blue-600 font-medium">{staff.role}</p>
                  <p className="text-xs text-gray-500">{staff.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Staff Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Teaching Staff</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingStaff.map((staff, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-200">
                <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                <p className="text-sm text-blue-600">{staff.role}</p>
                {staff.qualification && <p className="text-xs text-gray-400 mt-1">{staff.qualification}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Non-Teaching Staff Section */}
        <div>
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Support Staff</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTeachingStaff.map((staff, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-200">
                <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                <p className="text-sm text-green-600">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Icon component helper
function Users(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
}

export default Faculty;
