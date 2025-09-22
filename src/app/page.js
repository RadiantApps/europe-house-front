"use client";
import "./globals.css";

import Img from "../assets/events/test.svg";
import Image from "next/image";
import { useState } from "react";
import CampaignsView from "@/components/first_page/campgain-item";
import PublicationsShowcase from "@/components/first_page/publications";

import EventFirstPage from "@/components/first_page/event-firstpage";
import LatestEU from "@/components/first_page/latest-eu";
import News from "@/components/first_page/news";
import Footer from "@/components/footer";

export default function Home() {
  const [expandedCampaign, setExpandedCampaign] = useState(null);

  return (
    <div className="min-h-screen bg-[#D2E6FF]">
        <LatestEU />

      <EventFirstPage />
      <News />
      <CampaignsView />
        <PublicationsShowcase />
        <Footer />
    </div>
  );
}
