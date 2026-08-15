import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, MessageCircle, Maximize2, X, ChevronRight } from 'lucide-react';

interface CaseItem {
  id: string;
  number: number;
  label: string;
  procedure: string;
  // Local files prioritized
  localPaths: string[];
  // Online realistic dental split demo fallback
  beforeFallbackUrl: string;
  afterFallbackUrl: string;
}

const CASES_DATA: CaseItem[] = [
  {
    id: 'caso-1',
    number: 1,
    label: 'Caso 01',
    procedure: 'Carga Imediata Superior (All-on-4)',
    localPaths: [
      '/cases/caso1.avif',
      '/cases/caso1.AVIF',
      '/cases/caso1.webp',
      '/cases/caso1.png',
      '/cases/caso1.jpg',
      '/cases/caso-1.avif',
      '/cases/caso-1.webp',
      '/cases/caso-1.png',
      '/caso1.avif',
      '/caso1.webp',
      '/caso1.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caso-2',
    number: 2,
    label: 'Caso 02',
    procedure: 'Reabilitação Total Bimaxilar',
    localPaths: [
      '/cases/caso2.avif',
      '/cases/caso2.AVIF',
      '/cases/caso2.webp',
      '/cases/caso2.png',
      '/cases/caso2.jpg',
      '/cases/caso-2.avif',
      '/cases/caso-2.webp',
      '/cases/caso-2.png',
      '/caso2.avif',
      '/caso2.webp',
      '/caso2.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caso-3',
    number: 3,
    label: 'Caso 03',
    procedure: 'Lentes Cerâmicas e-Max',
    localPaths: [
      '/cases/caso3.avif',
      '/cases/caso3.AVIF',
      '/cases/caso3.webp',
      '/cases/caso3.png',
      '/cases/caso3.jpg',
      '/cases/caso-3.avif',
      '/cases/caso-3.webp',
      '/cases/caso-3.png',
      '/caso3.avif',
      '/caso3.webp',
      '/caso3.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caso-4',
    number: 4,
    label: 'Caso 04',
    procedure: 'Protocolo Fixo Inferior em 4 Pinos',
    localPaths: [
      '/cases/caso4.avif',
      '/cases/caso4.AVIF',
      '/cases/caso4.webp',
      '/cases/caso4.png',
      '/cases/caso4.jpg',
      '/cases/caso-4.avif',
      '/cases/caso-4.webp',
      '/cases/caso-4.png',
      '/caso4.avif',
      '/caso4.webp',
      '/caso4.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caso-5',
    number: 5,
    label: 'Caso 05',
    procedure: 'Harmonização do Sorriso & Facetas',
    localPaths: [
      '/cases/caso5.avif',
      '/cases/caso5.AVIF',
      '/cases/caso5.webp',
      '/cases/caso5.png',
      '/cases/caso5.jpg',
      '/cases/caso-5.avif',
      '/cases/caso-5.webp',
      '/cases/caso-5.png',
      '/caso5.avif',
      '/caso5.webp',
      '/caso5.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caso-6',
    number: 6,
    label: 'Caso 06',
    procedure: 'Implante Unitário Anterior & Carga Imediata',
    localPaths: [
      '/cases/caso6.avif',
      '/cases/caso6.AVIF',
      '/cases/caso6.webp',
      '/cases/caso6.png',
      '/cases/caso6.jpg',
      '/cases/caso-6.avif',
      '/cases/caso-6.webp',
      '/cases/caso-6.png',
      '/caso6.avif',
      '/caso6.webp',
      '/caso6.png',
    ],
    beforeFallbackUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    afterFallbackUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
];

// Single Case Image Display with seamless fallback
const SingleCaseImage: React.FC<{ item: CaseItem; onClick?: () => void }> = ({ item, onClick }) => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [useSplitFallback, setUseSplitFallback] = useState(false);

  const handleSingleImageError = () => {
    if (currentPathIndex < item.localPaths.length - 1) {
      setCurrentPathIndex((prev) => prev + 1);
    } else {
      setUseSplitFallback(true);
    }
  };

  return (
    <div
      onClick={onClick}
      className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-200 hover:border-[#C6A664]/60 bg-[#0A1C38]"
    >
      {!useSplitFallback ? (
        <img
          src={item.localPaths[currentPathIndex]}
          alt={`Caso Clínico Lubru ${item.number}`}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
          onError={handleSingleImageError}
          loading="lazy"
        />
      ) : (
        /* Split fallback image matching composite structure */
        <div className="w-full h-full flex flex-col relative select-none">
          {/* Top Half */}
          <div className="relative h-1/2 w-full overflow-hidden bg-slate-900 border-b border-white/10">
            <img
              src={item.beforeFallbackUrl}
              alt=""
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Half */}
          <div className="relative h-1/2 w-full overflow-hidden bg-slate-900">
            <img
              src={item.afterFallbackUrl}
              alt=""
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      )}

      {/* Subtle Hover Action Button */}
      <div className="absolute inset-0 bg-[#0A1C38]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <div className="w-11 h-11 rounded-full bg-white/90 text-[#0E2954] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
          <Maximize2 className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export const CasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  return (
    <section id="casos" className="py-12 lg:py-18 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Visual focused */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider font-arimo">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Resultados Reais &bull; Lubru Odontologia
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Nossos Cases
          </h2>
          <p className="text-sm sm:text-base text-[#334155] font-arimo">
            Transformações reais realizadas pela equipe Lubru Odontologia em Atibaia.
          </p>
        </div>

        {/* 6 Visual Square Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {CASES_DATA.map((item) => (
            <SingleCaseImage
              key={item.id}
              item={item}
              onClick={() => setSelectedCase(item)}
            />
          ))}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-12 text-center">
          <a
            href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Vi%20os%20cases%20de%20transforma%C3%A7%C3%A3o%20da%20Lubru%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20sorriso.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#0E2954]/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider border border-[#C6A664]/40"
          >
            <MessageCircle className="w-5 h-5 text-[#C6A664]" />
            <span>Quero Transformar Meu Sorriso no WhatsApp</span>
            <ChevronRight className="w-4 h-4 text-[#C6A664]" />
          </a>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative max-w-xl w-full bg-[#0A1C38] rounded-2xl p-4 sm:p-5 border border-[#C6A664]/30 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expanded Image Card */}
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <SingleCaseImage item={selectedCase} />
            </div>

            {/* CTA inside Modal */}
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20sorriso%20na%20Lubru%20Odontologia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0E2954] hover:bg-[#143264] text-white border border-[#C6A664]/40 font-poppins font-bold text-xs uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664]" />
              <span>Agendar Avaliação no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
