import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CargaImediataDetail } from './components/CargaImediataDetail';
import { CasesSection } from './components/CasesSection';
import { TrustSignals } from './components/TrustSignals';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndFooter } from './components/LocationAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] font-arimo text-[#334155] selection:bg-[#0E2954] selection:text-[#C6A664]">
      {/* Header Navigation */}
      <Header />

      <main>
        {/* 1. Hero Section (Primeira Dobra) */}
        <Hero />

        {/* 2. Nossos Cases (Dobra Visual de Casos Clínicos) */}
        <CasesSection />

        {/* 3. Carga Imediata Protocol Breakdown */}
        <CargaImediataDetail />

        {/* 4. Apresentação dos Médicos Especialistas */}
        <TrustSignals />

        {/* 5. Tratamentos de Excelência (Serviços) */}
        <ServicesSection />

        {/* 6. Diferenciais */}
        <DifferentialsSection />

        {/* 7. Perguntas Frequentes */}
        <FaqSection />

        {/* 8. Depoimentos dos Pacientes & Dúvidas */}
        <TestimonialsSection />

        {/* 9. Mapa, Localização & Rodapé */}
        <LocationAndFooter />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

