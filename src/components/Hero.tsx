import React, { useState } from 'react';
import { MessageCircle, Star, ShieldCheck, ArrowRight, Sparkles, Clock, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const HERO_IMAGE_PATHS = [
  '/hero.avif',
  '/hero.AVIF',
  '/hero.webp',
  '/hero.png',
  '/hero.jpeg',
  '/hero.JPEG',
  '/hero.jpg',
  '/clinica.avif',
  '/clinica.webp',
  '/clinica.png',
  '/clinica.jpg',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
];

interface HeroProps { }

export const Hero: React.FC<HeroProps> = () => {
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  const handleHeroImgError = () => {
    if (heroImgIndex < HERO_IMAGE_PATHS.length - 1) {
      setHeroImgIndex((prev) => prev + 1);
    }
  };

  const whatsappHeroUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Vim pelo Google e gostaria de agendar uma avaliação especializada para o Protocolo de Carga Imediata (All-on-4) na Lubru Odontologia em Atibaia. [src:google|mid:cpc|cmp:carga-imediata-atibaia|trm:carga-imediata]'
  )}`;

  return (
    <section id="protocolo" aria-label="Protocolo de Carga Imediata — Lubru Odontologia Atibaia" className="relative bg-[#F4F7FA] pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0E2954]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C6A664]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Primary Action Callout */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 shadow-xs font-arimo">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Atibaia / SP &bull; Odontologia Reabilitadora
          </span>

          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#EEF3FA] text-[#0E2954] border border-[#0E2954]/30 shadow-xs font-arimo">
            <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
            Cirurgia Guiada 3D &bull; Implantes Sem Enxerto
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0E2954] tracking-tight leading-[1.18]">
              Dentes Fixos em 24 horas. Conheça o{' '}
              <span className="text-[#C6A664]">Protocolo de Carga Imediata</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-normal text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-arimo">
              Diga adeus às próteses instáveis. Com apenas quatro implantes estrategicamente posicionados, você pode sair da cirurgia com seus novos dentes fixos, garantindo estabilidade total e estética natural.
            </p>

            {/* Detailed Protocol Descriptive Copy */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-sm text-[#334155] space-y-3 text-left font-arimo">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-[#0E2954]/20">
                  ✓
                </div>
                <div>
                  <strong className="text-[#0E2954] font-semibold">Técnica dos 4 Pinos (All-on-4):</strong>{' '}
                  Desenvolvida para reabilitar arcadas completas sem a necessidade de enxertos ósseos trabalhosos na imensa maioria dos casos.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-[#0E2954]/20">
                  ✓
                </div>
                <div>
                  <strong className="text-[#0E2954] font-semibold">Cirurgia Computadorizada e Guiada 3D:</strong>{' '}
                  Menos dolorida, com cortes mínimos e recuperação acelerada sob o comando do Dr. Lucas Cavalcante Pracchia.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-[#0E2954]/20">
                  ✓
                </div>
                <div>
                  <strong className="text-[#0E2954] font-semibold">Conforto e Mastigação Firme:</strong>{' '}
                  Fale com naturalidade, sorria sem receios e volte a saborear seus pratos favoritos com segurança inabalável.
                </div>
              </div>
            </div>

            {/* Fast Micro-Trust Info */}
            <div className="pt-2 pb-4 flex flex-wrap items-center justify-center lg:justify-start lg:ml-6 gap-y-2 gap-x-6 text-xs text-[#64748B] font-medium font-arimo">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C6A664]" /> Resposta rápida no WhatsApp
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A664]" /> Sem compromisso inicial
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C6A664]" /> Documentação para Reembolso
              </span>
            </div>

            {/* Call to Action Buttons - Matches client manual button style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start lg:ml-6">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-[#0E2954]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group border border-[#C6A664]/40"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6A664] shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="uppercase tracking-wider text-center leading-none pt-0.5">
                  Dentes Fixos em 24 horas <span className="hidden sm:inline">&bull;</span> Conheça o Protocolo
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Showcase Card - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0E2954] via-[#1D437F] to-[#C6A664] rounded-3xl blur-md opacity-30" />

              {/* Card Body */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="relative w-full overflow-hidden group bg-white">
                  <img
                    src={HERO_IMAGE_PATHS[heroImgIndex]}
                    alt="Dr. Lucas e Dra. Bruna — Lubru Odontologia"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                    onError={handleHeroImgError}
                  />
                </div>

                {/* Banner Azul Marinho sem os stats abaixo */}
                <div className="px-5 py-4 bg-[#0E2954] text-center border-t border-[#C6A664]/20">
                  <h3 className="font-poppins font-bold text-white text-lg tracking-wide">
                    Dra. Bruna & Dr. Lucas
                  </h3>
                  <p className="text-xs text-[#C6A664] font-arimo mt-1 uppercase tracking-wider font-semibold">
                    Diretores Clínicos &bull; Lubru Odontologia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
