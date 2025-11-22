"use client";

import React from "react";

//Components
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import WorkSection from "@/components/worksection";
import ServiceSection from "@/components/servicesection";
import ContactSection from "@/components/contactsection";
import Footer from "@/components/footer"
import AboutSection from "@/components/aboutsection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
