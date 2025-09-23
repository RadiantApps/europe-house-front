"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import { contactTranslations, officeTranslations } from "@/data/contact";
import { useSelector } from "react-redux";
import { Location, Message, Phone } from "@/assets/contact";
const ContactUs = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = officeTranslations[selectedLanguage];
  const [email, setEmail] = useState("");

  const handleJoinUs = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EDF5FF] xl:max-w-[1500px] xl:mx-auto ">
      <div className="flex-1 flex flex-col py-8 lg:py-[92px] px-6 lg:px-[74px] overflow-hidden  ">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 xl:justify-between w-full">
          <div className="mb-6">
            <p className="md:text-[18px] leading-[20px] text-[#8E8D8D] kanit-semibold ">
              {contactTranslations[selectedLanguage].subtitle}
            </p>
            <h1 className="text-[#1C1A1A]  text-[36px] md:text-[44px] kanit-semibold ">
              {contactTranslations[selectedLanguage].title}
            </h1>
            <p className="text-[#555353] text-[16px] md:text-[18px] leading-[21px] max-w-lg kanit-light mt-[16px]">
              {contactTranslations[selectedLanguage].description}
            </p>
            <button className="bg-[#4433EE] w-[155px] h-[46px] mt-[24px] md:mt-[41px] text-[16px] text-[#F7F0F0] kanit-medium rounded-[56px] ">
              {contactTranslations[selectedLanguage].button}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Pristina */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#4433EE] text-white p-4">
                <h3 className="text-[26px] text-[#F7F0F0] kanit-medium">
                  {t.pristina.city}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Message />
                  <span className="text-gray-700 kanit-light">
                    {t.pristina.email}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone />
                  <span className="text-gray-700 kanit-light">
                    {t.pristina.phone}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Location />
                  <div className="text-gray-700 kanit-light">
                    <div>{t.pristina.street}</div>
                    <div>{t.pristina.full}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* North Mitrovica */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#4433EE]  p-4">
                <h3 className="text-[26px] text-[#F7F0F0] kanit-medium">
                  {t.mitrovica.city}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Message />
                  <span className="text-gray-700 kanit-light">
                    {t.mitrovica.email}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone />
                  <div className="text-gray-700 kanit-light">
                    {Array.isArray(t.mitrovica.phone) ? (
                      t.mitrovica.phone.map((p, i) => <div key={i}>{p}</div>)
                    ) : (
                      <div>{t.mitrovica.phone}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Location />
                  <div className="text-gray-700 kanit-light">
                    <div>{t.mitrovica.street}</div>
                    <div>{t.mitrovica.full}</div>
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
