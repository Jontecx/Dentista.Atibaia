import React, { useState } from 'react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Sparkles, Smile, Zap, Gem, ShieldCheck, HeartPulse, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceImage: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const localPaths = [
    `/servicos/${service.id}.avif`,
    `/servicos/${service.id}.AVIF`,
    `/servicos/${service.id}.webp`,
    `/servicos/${service.id}.png`,
    `/servicos/${service.id}.jpg`,
    `/${service.id}.avif`,
    `/${service.id}.webp`,
    `/${service.id}.png`,
    service.image,
  ];

  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < localPaths.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      src={localPaths[index]}
      alt={`${service.title} em Atibaia — Lubru Odontologia`}
      width={400}
      height={300}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={handleError}
    />
  );
};

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C6A664]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#C6A664]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#C6A664]" />;
      case 'Gem':
        return <Gem className="w-6 h-6 text-[#C6A664]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C6A664]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#C6A664]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C6A664]" />;
    }
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider font-arimo">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Nossos Tratamentos de Excelência
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Conheça os tratamentos que vão <span className="text-[#C6A664]">Transformar seu sorriso</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-arimo">
            Soluções completas para reabilitação oral, alinhamento discreto, estética e preservação da saúde bucal com tecnologia de ponta.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const whatsappServiceUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#0E2954] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <ServiceImage service={service} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0E2954] border border-[#C6A664]/30 font-arimo">
                      {service.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="w-10 h-10 rounded-xl bg-[#0E2954] border border-[#C6A664]/40 flex items-center justify-center shadow-md">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-poppins font-bold text-xl text-[#0E2954] group-hover:text-[#C6A664] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-arimo">
                      {service.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <span className="text-[11px] font-bold text-[#C6A664] uppercase tracking-wider block font-poppins">
                        Principais Benefícios:
                      </span>
                      <ul className="space-y-1.5 font-arimo">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#1E293B]">
                            <span className="w-4 h-4 rounded-full bg-[#EEF3FA] text-[#0E2954] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold border border-[#0E2954]/20">
                              ✓
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0E2954] hover:bg-[#143264] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center border border-[#C6A664]/30 font-poppins"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                    <span>Consultar via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#EEF3FA] p-6 sm:p-8 rounded-3xl border border-[#0E2954]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-poppins font-bold text-xl text-[#0E2954]">
              Dúvidas sobre qual tratamento é o mais indicado para você?
            </h3>
            <p className="text-sm text-[#334155] font-arimo">
              Realizamos um diagnóstico inicial minucioso e personalizado no consultório ou via pré-avaliação no WhatsApp.
            </p>
          </div>

          <a
            href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Olá! Vim pelo Google e gostaria de uma orientação personalizada para entender qual tratamento é o mais adequado para o meu sorriso. [src:google|mid:cpc|cmp:geral-atibaia|trm:dentista-atibaia]'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md shrink-0 flex items-center gap-2 border border-[#C6A664]/30"
          >
            <span>Orientação Personalizada</span>
            <ArrowUpRight className="w-4 h-4 text-[#C6A664]" />
          </a>
        </div>
      </div>
    </section>
  );
};
