import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { ServicesSection } from './components/ServicesSection';
import { CargaImediataDetail } from './components/CargaImediataDetail';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndFooter } from './components/LocationAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] font-roboto text-[#334155] selection:bg-[#0E2954] selection:text-[#C6A664]">
      {/* Header Navigation */}
      <Header />

      <main>
        {/* 1. Hero Section (Primeira Dobra) */}
        <Hero />

        {/* 2. Carga Imediata Protocol Breakdown (Segunda Dobra) */}
        <CargaImediataDetail />

        {/* 3. Apresentação dos Médicos Especialistas */}
        <TrustSignals />

        {/* 4. Tratamentos de Excelência (Serviços) */}
        <ServicesSection />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. Perguntas Frequentes */}
        <FaqSection />

        {/* 7. Depoimentos dos Pacientes & Dúvidas */}
        <TestimonialsSection />

        {/* 8. Mapa, Localização & Rodapé */}
        <LocationAndFooter />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

