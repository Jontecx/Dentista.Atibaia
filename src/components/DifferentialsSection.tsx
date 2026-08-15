import React from 'react';
import { DIFFERENTIALS, CLINIC_INFO } from '../data/clinicData';
import { Clock, Cpu, Receipt, Heart, Shield, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const getDifferentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#C6A664]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#C6A664]" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-[#C6A664]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C6A664]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#C6A664]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C6A664]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Por Que Escolher a Lubru Odontologia?
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Diferenciais de um <span className="text-[#C6A664]">Atendimento Exclusivo e Humano</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-arimo">
            Proporcionamos uma experiência odontológica sem estresse, pautada em respeito ao seu tempo, alta tecnologia e suporte completo.
          </p>
        </div>

        {/* Differentials Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0E2954] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0E2954] flex items-center justify-center group-hover:scale-110 transition-transform border border-[#C6A664]/30">
                    {getDifferentialIcon(diff.iconName)}
                  </div>

                  {diff.badge && (
                    <span className="text-[11px] font-bold text-[#0E2954] bg-[#EEF3FA] px-3 py-1 rounded-full border border-[#0E2954]/20 uppercase tracking-wider font-poppins">
                      {diff.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-xl text-[#0E2954] group-hover:text-[#C6A664] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C6A664] uppercase tracking-wider mt-0.5 font-arimo">
                    {diff.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-arimo">
                  {diff.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-[#1E293B] font-arimo">
                <CheckCircle2 className="w-4 h-4 text-[#C6A664]" />
                <span>Padrão Lubru em Atibaia</span>
              </div>
            </div>
          ))}

          {/* Highlight Card for Convênios & Documentação para Reembolso */}
          <div className="bg-[#0E2954] text-white p-7 rounded-3xl shadow-lg border border-[#C6A664]/40 flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#C6A664]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <span className="text-[11px] font-bold text-[#C6A664] bg-white/10 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block border border-white/10 font-poppins">
                Convênios & Reembolso
              </span>

              <h3 className="font-poppins font-bold text-xl text-white">
                Vocês atendem convênios?
              </h3>

              <p className="text-xs text-slate-200 leading-relaxed font-arimo">
                Não aceitamos convênios odontológicos, porém disponibilizamos toda a documentação necessária para que você possa solicitar o reembolso à sua operadora. Confira as condições contratuais do seu plano de saúde e agende sua consulta conosco.
              </p>
            </div>

            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Gostaria de agendar uma consulta na Lubru Odontologia.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C6A664] hover:bg-[#B59553] text-[#0A1C38] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2 relative z-10 font-poppins"
            >
              <MessageCircle className="w-4 h-4 text-[#0A1C38]" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
