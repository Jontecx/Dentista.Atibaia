import React from 'react';
import { MessageCircle, Star, ShieldCheck, ArrowRight, Sparkles, Clock, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappHeroUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma avaliação especializada para o Protocolo de Carga Imediata na Lubru Odontologia.'
  )}`;

  return (
    <section className="relative bg-[#F4F7FA] pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0E2954]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C6A664]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Atibaia / SP &bull; Odontologia Reabilitadora
          </span>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50/90 text-amber-900 border border-amber-200/90">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold ml-0.5">5.0</span>
            <span className="text-amber-800/80">({CLINIC_INFO.googleReviewsCount} avaliações no Google)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0E2954] tracking-tight leading-[1.18]">
              Recupere seu Sorriso e sua Confiança em Tempo Recorde com o{' '}
              <span className="relative inline-block text-[#C6A664]">
                Protocolo de Carga Imediata.
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#C6A664]/20 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-normal text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-barlow">
              Diga adeus às próteses instáveis. Com apenas quatro implantes estrategicamente posicionados, você pode sair da cirurgia com seus novos dentes fixos, garantindo estabilidade total e estética natural.
            </p>

            {/* Detailed Protocol Descriptive Copy */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-sm text-[#334155] space-y-3 text-left">
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

            {/* Call to Action Buttons - Matches client manual button style */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-[#0E2954]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group text-center uppercase tracking-wider border border-[#C6A664]/40"
              >
                <MessageCircle className="w-6 h-6 text-[#C6A664] shrink-0 group-hover:rotate-12 transition-transform" />
                <span>Agende sua Avaliação via WhatsApp</span>
              </a>
            </div>

            {/* Fast Micro-Trust Info */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#64748B] font-medium">
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
          </div>

          {/* Right Column - Visual Showcase Card - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0E2954] via-[#1D437F] to-[#C6A664] rounded-3xl blur-md opacity-30" />

              {/* Card Body */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="relative h-72 sm:h-80 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Clínica Lubru Odontologia Atibaia - Odontologia Reabilitadora"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/90 via-transparent to-transparent" />

                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0E2954] shadow-md border border-[#C6A664]/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
                    Tecnologia Guiada 3D
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#C6A664] font-semibold">
                      Atibaia / SP &bull; Centro
                    </p>
                    <h3 className="font-poppins font-bold text-lg leading-snug">
                      Lubru Odontologia Reabilitadora
                    </h3>
                    <p className="text-xs text-slate-200">
                      Dr. Lucas Cavalcante Pracchia e Dra. Bruna Soares Diodatti Pracchia
                    </p>
                  </div>
                </div>

                {/* Card Features List */}
                <div className="p-5 bg-[#F4F7FA] space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="block font-poppins font-bold text-xl text-[#0E2954]">
                        {CLINIC_INFO.transformedSmiles}
                      </span>
                      <span className="text-[11px] text-[#64748B] font-medium leading-tight block mt-0.5">
                        Sorrisos Transformados
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="block font-poppins font-bold text-xl text-[#0E2954] flex items-center justify-center gap-1">
                        5.0 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </span>
                      <span className="text-[11px] text-[#64748B] font-medium leading-tight block mt-0.5">
                        Avaliação no Google
                      </span>
                    </div>
                  </div>

                  {/* Micro Quote */}
                  <div className="bg-[#EEF3FA] p-3 rounded-xl border border-[#0E2954]/10 text-xs text-[#1E293B] italic flex items-start gap-2">
                    <span className="text-[#C6A664] font-bold text-base leading-none">“</span>
                    <span>
                      "Saí da cirurgia de manhã e à tarde já estava com meus novos dentes fixos. Sem dor e com um atendimento humano impecável!"
                    </span>
                  </div>

                  <a
                    href={whatsappHeroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0E2954] hover:bg-[#143264] text-white font-semibold text-xs py-3 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md uppercase tracking-wider border border-[#C6A664]/30"
                  >
                    <span>Falar no WhatsApp da Lubru</span>
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
