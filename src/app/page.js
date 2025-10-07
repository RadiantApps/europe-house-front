"use client";
import "./globals.css";

import CampaignsView from "@/components/first_page/campgain-item";
import PublicationsShowcase from "@/components/first_page/publications";

import EventFirstPage from "@/components/first_page/event-firstpage";
import LatestEU from "@/components/first_page/latest-eu";
import News from "@/components/first_page/news";
import Footer from "@/components/footer";
import UpcomingEvents from "@/components/first_page/upcoming-events";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D2E6FF]">
      <LatestEU />
      <UpcomingEvents />
      <EventFirstPage />
      <News />
      <CampaignsView />
      <PublicationsShowcase />
      <Footer />
    </div>
  );
}
