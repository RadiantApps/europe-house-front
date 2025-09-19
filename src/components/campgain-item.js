import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const CampaignsView = () => {

  const campaigns = [
    {
      id: 'europe-day',
      title: 'CELEBRATING EUROPE DAY 2024',
      shortDescription: 'The EU in Kosovo organized a series of activities in Pristina, Mitrovica North, and Prizren to mark Europe Day under the motto "Experience Europe". This motto continues the "Explore Europe" campaign on visa liberalization, which stands as one of the brightest moments in EU-Kosovo relations in the past year.',
      dates: '9-12 MAY 2024',
      isMain: true
    },
    {
      id: 'visa-liberalisation',
      title: 'EXPLORE EUROPE – VISA LIBERALISATION CAMPAIGN',
      shortDescription: 'The long-awaited visa liberalisation for Kosovo is finally becoming a reality...',
      fullDescription: 'The long-awaited visa liberalisation for Kosovo is finally becoming a reality. This campaign celebrates the historic achievement and provides information about travel opportunities within the European Union for Kosovo citizens.',
      dates: 'ONGOING',
      isMain: false
    },
    {
      id: 'good-energy',
      title: 'FOR GOOD ENERGY',
      shortDescription: 'Starting September 2022 an awareness campaign was organised to promote and ...',
      fullDescription: 'Starting September 2022, an awareness campaign was organised to promote renewable energy sources and sustainable practices across Kosovo. The campaign focuses on educating citizens about energy efficiency and environmental protection.',
      dates: 'SEPTEMBER 2022 - ONGOING',
      isMain: false
    }
  ];
  const firstOtherCampaign = campaigns.find(c => !c.isMain);
  const [expandedCampaign, setExpandedCampaign] = useState(firstOtherCampaign?.id || null);

  const toggleCampaign = (campaignId) => {
    // If clicking the same campaign that's already open, close it
    // Otherwise, close any open campaign and open the new one
    setExpandedCampaign(expandedCampaign === campaignId ? null : campaignId);
  };

  const MainCampaignCard = ({ campaign }) => (
    <div className="flex flex-col md:flex-row overflow-hidden  mb-6">
      {/* Image */}
      <div className="w-full md:w-80 md:h-auto relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
        <div className="text-center p-6">
          <div className="text-xs uppercase tracking-wide mb-3 opacity-80">{campaign.dates}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-yellow-300">EXPERIENCE</span><br/>
            <span className="text-yellow-300">🌼 EUROPE 🌟</span>
          </h1>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col md:flex-row flex-1 md:px-6 py-6 md:py-4 gap-4 md:gap-8 min-w-0">
        <h2 className="text-xl font-bold text-blue-600 md:w-1/3 flex-shrink-0">
          {campaign.title}
        </h2>
        <div className="flex-1 flex flex-col min-w-0 break-words">
          <p className="text-gray-600 mb-4 text-sm leading-relaxed break-words">
            {campaign.shortDescription}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors self-start">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );

  const CampaignItem = ({ campaign }) => {
    const isExpanded = expandedCampaign === campaign.id;
  
    return (
      <div className="border-b last:border-b-0">
        {/* Top row: always visible */}
        <div 
          className="flex items-center justify-between py-4 cursor-pointer  transition-colors px-1"
          onClick={() => toggleCampaign(campaign.id)}
        >
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
              {isExpanded ? (
                <X size={16} className="text-blue-600" />
              ) : (
                <Plus size={16} className="text-blue-600" />
              )}
            </div>
            {!isExpanded ? (
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {campaign.title}
              </h3>
              <p className="text-gray-600 text-sm truncate">
                {campaign.shortDescription}
              </p>
            </div>
            ):(<></>)}
            
          </div>
          
        </div>
  
        {/* Expanded full card */}
        {isExpanded && (
          <div className="pl-12 pr-4 pb-4 animate-in slide-in-from-top-2 duration-200">
            <MainCampaignCard campaign={campaign} />
          </div>
        )}
      </div>
    );
  };
  
  

  const otherCampaigns = campaigns.filter(c => !c.isMain);

  return (
    <div className=" mt-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">CAMPAIGNS</h1>
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      {/* Main Campaign */}

      {/* Other Campaigns */}
      <div className="bg-[#EDF5FF] rounded-lg shadow-sm border border-gray-200 mb-6">
        {otherCampaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">
          See all Campaigns
        </button>
      </div>
    </div>
  );
};

export default CampaignsView;