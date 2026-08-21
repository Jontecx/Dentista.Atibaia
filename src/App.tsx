import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClinicaHero } from './components/ClinicaHero';
import { CargaImediataDetail } from './components/CargaImediataDetail';
import { CasesSection } from './components/CasesSection';
import { TrustSignals } from './components/TrustSignals';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { ClinicaFaqSection } from './components/ClinicaFaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndFooter } from './components/LocationAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainContent() {
  const { currentPage } = useNavigation();

  return (
    <main>
      {currentPage === 'protocolo' ? (
        /* Página 1: Focada no Protocolo de Carga Imediata */
        <div key="page-protocolo" className="animate-in fade-in duration-300">
          {/* 1. Hero Carga Imediata */}
          <Hero />

          {/* 2. Nossos Cases de Sucesso */}
          <CasesSection />

          {/* 3. Detalhes & Passo a Passo do Protocolo All-on-4 */}
          <CargaImediataDetail />

          {/* 4. Especialistas (Dr. Lucas e Dra. Bruna) */}
          <TrustSignals />

          {/* 5. Diferenciais Clínicos */}
          <DifferentialsSection />

          {/* 6. Perguntas Frequentes sobre Carga Imediata */}
          <FaqSection />

          {/* 7. Depoimentos dos Pacientes */}
          <TestimonialsSection />

          {/* 8. Localização & Rodapé */}
          <LocationAndFooter />
        </div>
      ) : (
        /* Página 2: Focada na Clínica Odontológica & Especialidades */
        <div key="page-clinica" className="animate-in fade-in duration-300">
          {/* 1. Hero Institucional Clínica & Especialidades */}
          <ClinicaHero />

          {/* 2. Grade Completa de Tratamentos & Serviços */}
          <ServicesSection />

          {/* 3. Especialistas & Corpo Clínico */}
          <TrustSignals />

          {/* 4. Diferenciais (Pontualidade, Tecnologia, Reembolso) */}
          <DifferentialsSection />

          {/* 5. Nossos Cases Reais */}
          <CasesSection />

          {/* 6. Perguntas Frequentes da Clínica & Convênios */}
          <ClinicaFaqSection />

          {/* 7. Depoimentos dos Pacientes */}
          <TestimonialsSection />

          {/* 8. Localização & Rodapé */}
          <LocationAndFooter />
        </div>
      )}
    </main>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-[#F4F7FA] font-arimo text-[#334155] selection:bg-[#0E2954] selection:text-[#C6A664]">
        {/* Header Navigation with Page Switcher */}
        <Header />

        {/* Dynamic Page Views */}
        <MainContent />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
    </NavigationProvider>
  );
}
