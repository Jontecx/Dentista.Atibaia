import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, MessageCircle, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold text-[#C6A664] uppercase tracking-wider block mb-1 font-poppins">
              Depoimentos Reais &bull; Avaliações Verificadas
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#0E2954]">
              O que dizem os nossos pacientes em Atibaia
            </h2>
          </div>

          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-sm text-[#0E2954]">5.0 de 5.0</span>
            <span className="text-xs text-[#64748B]">no Google</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#0E2954] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Paciente Verificado
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic relative pl-4 border-l-2 border-[#C6A664] font-arimo">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="font-poppins font-semibold text-sm sm:text-base text-[#0E2954] block">
                    {t.author}
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-poppins font-bold text-xl text-[#0E2954]">
            Não encontrou a resposta para a sua dúvida?
          </h3>
          <p className="text-xs sm:text-sm text-[#334155] max-w-lg mx-auto font-arimo">
            Nossa equipe de atendimento no WhatsApp está à disposição para esclarecer qualquer aspecto técnico ou agendar seu horário com o Dr. Lucas e Dra. Bruna.
          </p>

          <a
            href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Olá! Tenho uma dúvida específica e gostaria de falar com a equipe de atendimento da Lubru Odontologia.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#0E2954] hover:bg-[#143264] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all items-center gap-2 border border-[#C6A664]/30 font-poppins"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664]" />
            <span>Falar Diretamente com a Equipe no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
