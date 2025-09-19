"use client";
import React from "react";
import {
  MapPin,
  Users,
  BookOpen,
  Mic,
  Calendar,
  Building,
  Globe,
  Award,
  Briefcase,
  MessageCircle,
  Video,
  Phone,
} from "lucide-react";
import Map from "../../assets/about-us/map.svg";
import Image from "next/image";
import Footer from "@/components/footer";

const WhoWeAre = () => {
  const services = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title:
        "A competence center where you can ask about various information related to the EU and the Centre",
      bgColor: "bg-blue-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "A conference room which can accommodate up to 50 people",
      bgColor: "bg-purple-600",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event areas can accommodate up to 100 people standing",
      bgColor: "bg-indigo-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "EU related publications and are free of charge",
      bgColor: "bg-blue-500",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title:
        "Interactive corner where citizens can enjoy reading various European monthly magazines",
      bgColor: "bg-purple-500",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title:
        "A mini-library where you can find books, articles and publications on EU-related matters",
      bgColor: "bg-indigo-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "An internet corner that has online access",
      bgColor: "bg-blue-400",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title:
        "Cultural activities such as art exhibitions, film screenings and other EU-related cultural activities",
      bgColor: "bg-purple-400",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title:
        "Direct transmission/broadcasting of training via satellite (EBS) and Eurovisions",
      bgColor: "bg-indigo-400",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Lectures, public debates and presentations on EU-related topics",
      bgColor: "bg-blue-300",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title:
        "These activities aim to increase public awareness and knowledge, especially targeting youth so they can take informed decisions on the past and benefits of EU integration process",
      bgColor: "bg-purple-300",
    },
  ];

  const teamMembers = [
    {
      name: "Arbenít Doci",
      position: "Executive Director",
      email: "arbenit@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Dorentina Berisha",
      position: "Program Manager",
      email: "dorentina@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", linkedin: "#" },
    },
    {
      name: "Luan Isufi",
      position: "Communications Manager",
      email: "luan@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Samir Kashaoda",
      position: "Project Coordinator",
      email: "samir@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { linkedin: "#" },
    },
    {
      name: "Arbër Gjani",
      position: "Communications Officer",
      email: "arber@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Aurela Kadriu",
      position: "Administrative and Financial Manager",
      email: "aurela@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Vedat Shehu",
      position: "Admin and General Services Manager",
      email: "vedat@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Jovana Timotijević",
      position: "General Administrative Officer",
      email: "jovana@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", linkedin: "#" },
    },
    {
      name: "Bresa Hoxha",
      position: "Europe Direct Centre Administrative Assistant",
      email: "bresa@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", linkedin: "#" },
    },
    {
      name: "Genta Shubani",
      position: "Europe Direct Centre Administrative Assistant",
      email: "genta@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Vida Vuković",
      position: "Europe Direct Centre Administrative Assistant",
      email: "vida@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", linkedin: "#" },
    },
    {
      name: "Elbasan Jashari",
      position: "Europe Direct Centre Administrative Assistant",
      email: "elbasan@europehouse-kosova.com",
      image: "/api/placeholder/300/350",
      social: { facebook: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 md:px-[74px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
          <div className="w-full md:max-w-2xl 2xl:max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              WHO WE ARE
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located at the center of Pristina and North Mitrovica, Europe
              House Kosovo is a place where citizens can come to meet and
              discuss as well as seek information on the European Union. Europe
              House Kosovo provides information on European Union, its
              institutions and policies, various EU events and projects for
              Kosovo, and Kosovo's road towards EU integration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through communication with Kosovo citizens on EU-related matters,
              we can easily say that Europe House Kosovo acts as the "eye and
              ears" for the EU presence in Kosovo, and it is the hub of
              EU-related activities.
            </p>
          </div>

          <div className="w-full md:flex md:justify-center">
            <div className="w-full h-[400px] md:h-[580px] md:max-w-md flex items-center justify-center">
              <Image src={Map} alt="map" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-[#F4F8FF]">
  <div className="w-full px-6 md:px-[74px]">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
      BOTH CENTRES OFFER:
    </h2>
    {/* Boxat tani janë të rreshtuar nga e majta */}
    <div className="flex flex-wrap gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full md:w-auto flex items-start bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-5"
        >
          <div
            className={`${service.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0`}
          >
            {service.icon}
          </div>
          <p className="text-gray-700 leading-relaxed">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            OUR TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-5 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.position}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
                  >
                    {member.email}
                  </a>

                  {/* Social Links */}
                  <div className="flex space-x-3 mt-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                      >
                        <span className="text-xs font-bold">f</span>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
                      >
                        <span className="text-xs font-bold">X</span>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                      >
                        <span className="text-xs font-bold">in</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
