import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Img from "../../assets/campaigns/campaign.svg"
import Image from "next/image";
const CampaignsView = () => {
  const campaigns = [
    {
      id: "europe-day",
      title: "CELEBRATING EUROPE DAY 2024",
      shortDescription:
        'The EU in Kosovo organized a series of activities in Pristina, Mitrovica North, and Prizren to mark Europe Day under the motto "Experience Europe". This motto continues the "Explore Europe" campaign on visa liberalization, which stands as one of the brightest moments in EU-Kosovo relations in the past year.',
      dates: "9-12 MAY 2024",
      isMain: true,
    },
    {
      id: "visa-liberalisation",
      title: "EXPLORE EUROPE – VISA LIBERALISATION CAMPAIGN",
      shortDescription:
        "The long-awaited visa liberalisation for Kosovo is finally becoming a reality...",
      fullDescription:
        "The long-awaited visa liberalisation for Kosovo is finally becoming a reality. This campaign celebrates the historic achievement and provides information about travel opportunities within the European Union for Kosovo citizens.",
      dates: "ONGOING",
      isMain: false,
    },
    {
      id: "good-energy",
      title: "FOR GOOD ENERGY",
      shortDescription:
        "Staring September 2022 an awareness campaign was organised to promote and ...",
      fullDescription:
        "Starting September 2022, an awareness campaign was organised to promote renewable energy sources and sustainable practices across Kosovo. The campaign focuses on educating citizens about energy efficiency and environmental protection.",
      dates: "SEPTEMBER 2022 - ONGOING",
      isMain: false,
    },
  ];
  const firstOtherCampaign = campaigns.find((c) => !c.isMain);
  const [expandedCampaign, setExpandedCampaign] = useState(
    firstOtherCampaign?.id || null
  );

  const toggleCampaign = (campaignId) => {
    setExpandedCampaign(expandedCampaign === campaignId ? null : campaignId);
  };
  const MainCampaignCard = ({ campaign }) => (
    <div className="flex flex-col lg:flex-row overflow-hidden ">
      {/* Image Section */}
      {/* <div className="w-full lg:w-96 lg:h-64 relative bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
        <div className="text-center p-6">
          <div className="text-xs uppercase tracking-wide mb-3 opacity-90">
            {campaign.dates}
          </div>
          {/* <h1 className="text-2xl lg:text-3xl font-bold">
            <span className="text-yellow-300">EXPERIENCE</span>
            <br />
            <span className="text-yellow-300">🌼 EUROPE 🌟</span>
          </h1> */}
        {/* </div>
      </div>  */}
            <div className="w-full lg:w-96 lg:h-64 relative bg-blue-600 flex items-center justify-center text-white flex-shrink-0">

      <Image src={Img} alt="" />
</div>
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row flex-1 px-6 lg:px-8 lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-0">
            {campaign.title}
          </h2>
        </div>

        {/* 👇 lock description width same as collapsed */}
        <div className="w-[400px] flex flex-col gap-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {campaign.shortDescription}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium  transition-colors self-start">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );

  const CampaignItem = ({ campaign }) => {
    const isExpanded = expandedCampaign === campaign.id;

    return (
      <div className="border-b border-gray-300 last:border-b-0">
        {/* Collapsed state */}
        {!isExpanded && (
          <div className="flex py-6">
            {/* Left side */}
            <div className="flex items-center space-x-4 flex-1">
              <div
                className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors"
                onClick={() => toggleCampaign(campaign.id)}
              >
                <Plus size={18} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 truncate">
                {campaign.title}
              </h3>
            </div>

            {/* Right side (locked width for descriptions) */}
            <div className="w-[430px]">
              <p className="text-gray-600 text-sm line-clamp-3">
                {campaign.shortDescription}
              </p>
            </div>
            <br />
          </div>
        )}

        {/* Expanded state */}
        {isExpanded && (
          <div className="py-6 flex">
            {/* Left side (button stays aligned) */}
            <div
              className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 cursor-pointer  transition-colors mt-1 mr-4"
              onClick={() => toggleCampaign(campaign.id)}
            >
              <X size={18} className="text-blue-600" />
            </div>

            {/* Right side (expanded content) */}
            <div className="flex-1">
              <MainCampaignCard campaign={campaign} />
            </div>
          </div>
        )}
      </div>
    );
  };

  const otherCampaigns = campaigns.filter((c) => !c.isMain);

  return (
    <div className="bg-white px-6 lg:px-[74px] py-8 lg:py-[66px]">
      <div className="lg:p-10 px-4 py-8 bg-[#EDF5FF]">

     
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">CAMPAIGNS</h1>
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="space-y-4 mb-8">
          {campaigns.map((campaign) => {
            const isExpanded = expandedCampaign === campaign.id;
            return (
              <div
                key={campaign.id}
                className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                {!isExpanded ? (
                  // collapsed
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center 
                flex-shrink-0 cursor-pointer"
                      onClick={() => toggleCampaign(campaign.id)}
                    >
                      <Plus size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-600 mb-1">
                        {campaign.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {campaign.shortDescription}
                      </p>
                    </div>
                  </div>
                ) : (
                  // expanded
                  <div>
                    {/* 👇 Image at the beginning */}
                    <div className="relative mb-4">
                      <img
                        src={`/assets/campaigns/${campaign.id}.jpg`}
                        alt={campaign.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div
                        className="absolute top-2 right-2 w-10 h-10 rounded-full border-2 border-blue-600 
                 flex items-center justify-center cursor-pointer bg-white/80 "
                        onClick={() => toggleCampaign(campaign.id)}
                      >
                        <X size={18} className="text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-blue-600 mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {campaign.fullDescription || campaign.shortDescription}
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium  transition-colors">
                      Learn more
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="mb-9">
          {otherCampaigns.map((campaign) => (
           <div key={campaign.id}>
           <CampaignItem campaign={campaign} />
           <br />
         </div>
          ))}
        </div>
      </div>

      {/* See All Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium  transition-colors shadow-sm">
          See all Campaigns
        </button>
      </div>
      </div>
    </div>
  );
};

export default CampaignsView;
