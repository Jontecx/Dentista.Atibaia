import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CargaImediataDetail } from './components/CargaImediataDetail';
import { TrustSignals } from './components/TrustSignals';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationAndFooter } from './components/LocationAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] font-roboto text-[#2D2D2D] selection:bg-[#9D81BA] selection:text-white">
      {/* Header Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Carga Imediata All-on-4 Protocol Breakdown */}
        <CargaImediataDetail />

        {/* Trust Signals, Doctors & Google Reviews */}
        <TrustSignals />

        {/* Services & Benefits */}
        <ServicesSection />

        {/* Differentials */}
        <DifferentialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Map, Location & Footer */}
        <LocationAndFooter />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
