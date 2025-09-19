'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Footer from '@/components/footer';

const ContactUs = () => {
  const [email, setEmail] = useState('');

  const handleJoinUs = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EDF5FF]">
      <div className="flex-1 flex flex-col py-8 lg:py-[92px] px-6 lg:px-[74px] overflow-hidden">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
         <div className="mb-6">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">CONTACT US</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in touch today</h1>
            <p className="text-gray-600 max-w-lg mb-8">
              Our highly experienced team at Europe House welcomes your questions and suggestions of any kind. 
              Please write below your question or concern and someone from our team will take time and effort 
              to answer you at the earliest convenience.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Book now
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-indigo-600 text-white p-4">
                <h3 className="text-xl font-semibold">Pristina</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">info@europehouse-kosovo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">+383 (0) 38 25 99 99</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-indigo-600 w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="text-gray-700">
                    <div>Str. UÇK nr.90,</div>
                    <div>Pristina 10000, Kosovo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-indigo-600 text-white p-4">
                <h3 className="text-xl font-semibold">North Mitrovica</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">info@europehouse-kosovo.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                  <div className="text-gray-700">
                    <div>+381 65 6599754</div>
                    <div>+383 47 125 275</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-indigo-600 w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="text-gray-700">
                    <div>Str. "Kralj Petar I" n.n.,</div>
                    <div>North Mitrovica 40000, Kosovo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
