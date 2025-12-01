import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          <div className="flex flex-col items-center text-center p-6 bg-blue-800 rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-300">
            <MapPin className="w-8 h-8 mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="font-light">Rampeth, Quetta Colony,</p>
            <p className="font-light font-bold text-yellow-100">Lakadganj,</p>
            <p className="font-light mb-4">Nagpur - 440008</p>
            <a 
              href="https://maps.app.goo.gl/BtYr5ks9Lg1BjB596" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Locate Us
            </a>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-blue-800 rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-300">
            <Phone className="w-8 h-8 mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg font-bold">0712-2764537</p>
            <p className="text-sm opacity-75">General Inquiry Hours</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-blue-800 rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-300">
            <Mail className="w-8 h-8 mb-3 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-lg font-bold break-all">unhs.jrc@gmail.com</p>
            <p className="text-sm opacity-75">For official communication</p>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="w-full bg-blue-800 p-2 rounded-xl shadow-2xl">
            <iframe 
                src="https://maps.google.com/maps?q=Shri%20Umiyashankar%20Narayanji%20High%20School%2C%20Rampeth%2C%20Quetta%20Colony%2C%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-[300px] md:h-[450px]"
                title="Shri Umiyashankar Narayanji High School Location Map"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;