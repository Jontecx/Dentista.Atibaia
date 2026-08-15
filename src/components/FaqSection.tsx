import React, { useState } from 'react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#C6A664]" />
            Tire Suas Dúvidas
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Perguntas Frequentes sobre a <span className="text-[#C6A664]">Lubru Odontologia</span>
          </h2>
          <p className="text-base text-[#334155] font-arimo">
            Respostas claras e transparentes para você tomar sua decisão de tratamento com total segurança.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0E2954] shadow-md shadow-[#0E2954]/10'
                    : 'bg-white/90 border-slate-200 hover:border-[#0E2954]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#0E2954] bg-[#EEF3FA] px-3 py-1 rounded-full border border-[#0E2954]/20 shrink-0 uppercase tracking-wider font-poppins">
                      {faq.category}
                    </span>
                    <h3 className="font-poppins font-semibold text-base sm:text-lg text-[#0E2954]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0E2954] text-[#C6A664]' : 'bg-[#EEF3FA] text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-slate-200 mt-1 animate-in fade-in font-arimo">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
