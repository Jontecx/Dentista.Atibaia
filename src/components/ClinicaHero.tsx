import React, { useState } from 'react';
import { MessageCircle, Star, ShieldCheck, ArrowRight, Sparkles, Clock, Award, Smile, Zap, Gem } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const CLINIC_IMAGE_PATHS = [
  '/clinica.avif',
  '/clinica.AVIF',
  '/clinica.webp',
  '/clinica.png',
  '/clinica.jpg',
  '/hero.avif',
  '/hero.webp',
  '/hero.png',
  '/hero.jpg',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
];

export const ClinicaHero: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleImgError = () => {
    if (imgIndex < CLINIC_IMAGE_PATHS.length - 1) {
      setImgIndex((prev) => prev + 1);
    }
  };

  const whatsappClinicUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Vim pelo Google e gostaria de agendar uma consulta de avaliação na Lubru Odontologia em Atibaia. [src:google|mid:cpc|cmp:clinica-atibaia|trm:dentista-atibaia]'
  )}`;

  return (
    <section id="clinica" aria-label="Clínica Odontológica em Atibaia — Lubru Odontologia, Especialidades e Tratamentos" className="relative bg-[#F4F7FA] pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0E2954]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C6A664]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 shadow-xs font-arimo">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Atibaia / SP &bull; Odontologia Integrada & Alta Performance
          </span>

          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#EEF3FA] text-[#0E2954] border border-[#0E2954]/30 shadow-xs font-arimo">
            <Award className="w-3.5 h-3.5 text-[#C6A664]" />
            Corpo Clínico Especializado &bull; Tecnologia Digital 3D
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0E2954] tracking-tight leading-[1.18]">
              Dentista em Atibaia.{' '}
              <span className="text-[#C6A664]">Cuidado Completo para o seu Sorriso</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-normal text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-arimo">
              Clínica odontológica no centro de Atibaia com especialistas em implante dentário, tratamento de canal, clareamento dental, aparelho invisível, facetas e tratamento para bruxismo (ranger dentes). Atendimento humanizado, sem fila de espera.
            </p>

            {/* Specialties Grid Box */}
            <div className="grid sm:grid-cols-2 gap-3 text-left font-arimo">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 border border-[#0E2954]/20">
                  <Smile className="w-5 h-5 text-[#C6A664]" />
                </div>
                <div>
                  <strong className="block font-poppins font-semibold text-sm text-[#0E2954]">
                    Aparelho Invisível
                  </strong>
                  <span className="text-xs text-[#64748B]">
                    Alinhamento discreto sem fios metálicos aparecendo.
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 border border-[#0E2954]/20">
                  <Zap className="w-5 h-5 text-[#C6A664]" />
                </div>
                <div>
                  <strong className="block font-poppins font-semibold text-sm text-[#0E2954]">
                    Tratamento de Canal em 1 Sessão
                  </strong>
                  <span className="text-xs text-[#64748B]">
                    Resolve a dor de dente rápido, sem curativos intermináveis.
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 border border-[#0E2954]/20">
                  <Gem className="w-5 h-5 text-[#C6A664]" />
                </div>
                <div>
                  <strong className="block font-poppins font-semibold text-sm text-[#0E2954]">
                    Clareamento, Facetas & Lentes
                  </strong>
                  <span className="text-xs text-[#64748B]">
                    Clareamento dental, faceta dente e sorriso perfeito.
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 border border-[#0E2954]/20">
                  <Sparkles className="w-5 h-5 text-[#C6A664]" />
                </div>
                <div>
                  <strong className="block font-poppins font-semibold text-sm text-[#0E2954]">
                    Implante & Dentes Fixos
                  </strong>
                  <span className="text-xs text-[#64748B]">
                    Cirurgia guiada 3D e dentes fixos com alta durabilidade.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#0E2954]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group text-center uppercase tracking-wider border border-[#C6A664]/40"
              >
                <MessageCircle className="w-6 h-6 text-[#C6A664] shrink-0 group-hover:rotate-12 transition-transform" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#64748B] font-medium font-arimo">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C6A664]" /> Pontualidade Rígida (Sem Espera)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A664]" /> Ambiente Seguro & Climatizado
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C6A664]" /> Documentação para Reembolso
              </span>
            </div>
          </div>

          {/* Right Column - Clinic Showcase Card - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0E2954] via-[#1D437F] to-[#C6A664] rounded-3xl blur-md opacity-30" />

              {/* Card Body */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="relative h-72 sm:h-80 overflow-hidden group">
                  <img
                    src={CLINIC_IMAGE_PATHS[imgIndex]}
                    alt="Clínica Odontológica em Atibaia — Lubru Odontologia, Dr. Lucas e Dra. Bruna Pracchia"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={handleImgError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/90 via-transparent to-transparent" />

                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0E2954] shadow-md border border-[#C6A664]/40 flex items-center gap-1.5 font-arimo">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
                    Atendimento Odontológico de Excelência
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#C6A664] font-semibold font-arimo">
                      Centro &bull; Atibaia / SP
                    </p>
                    <h3 className="font-poppins font-bold text-lg leading-snug">
                      Lubru Odontologia
                    </h3>
                    <p className="text-xs text-slate-200 font-arimo">
                      Dr. Lucas Cavalcante Pracchia e Dra. Bruna Soares Diodatti Pracchia
                    </p>
                  </div>
                </div>

                {/* Card Features */}
                <div className="p-5 bg-[#F4F7FA] space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="block font-poppins font-bold text-xl text-[#0E2954]">
                        {CLINIC_INFO.transformedSmiles}
                      </span>
                      <span className="text-[11px] text-[#64748B] font-medium leading-tight block mt-0.5 font-arimo">
                        Sorrisos Atendidos
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="block font-poppins font-bold text-xl text-[#0E2954] flex items-center justify-center gap-1">
                        5.0 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </span>
                      <span className="text-[11px] text-[#64748B] font-medium leading-tight block mt-0.5 font-arimo">
                        Nota Máxima Google
                      </span>
                    </div>
                  </div>

                  {/* Review Quote */}
                  <div className="bg-[#EEF3FA] p-3 rounded-xl border border-[#0E2954]/10 text-xs text-[#1E293B] italic flex items-start gap-2 font-arimo">
                    <span className="text-[#C6A664] font-bold text-base leading-none">“</span>
                    <span>
                      "Ambiente limpo, organizado e bem tecnológico. Por um momento até esqueci que estava no dentista de tão confortável! Dra. Bruna e Dr. Lucas são excepcionais."
                    </span>
                  </div>

                  <a
                    href={whatsappClinicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0E2954] hover:bg-[#143264] text-white font-semibold text-xs py-3 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md uppercase tracking-wider border border-[#C6A664]/30 font-poppins"
                  >
                    <span>Falar com a Equipe no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-[#C6A664]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
