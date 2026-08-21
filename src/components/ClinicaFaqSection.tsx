import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { FaqItem } from '../types';

const CLINICA_FAQS: FaqItem[] = [
  {
    category: 'Bruxismo',
    question: 'Ranger os dentes dormindo tem tratamento? O que é bruxismo?',
    answer: 'Sim! Ranger os dentes durante o sono é chamado de bruxismo — e tem solução simples na Lubru Odontologia em Atibaia. Fazemos uma placa miorelaxante personalizada que protege seus dentes do desgaste, elimina as dores de cabeça ao acordar e relaxa a musculatura da mandíbula. O tratamento é confortável e o resultado é percebido rapidamente.',
  },
  {
    category: 'Clareamento Dental',
    question: 'Clareamento dental funciona mesmo? Quanto tempo dura o resultado?',
    answer: 'Sim, funciona! O clareamento dental realizado por dentista profissional em Atibaia é seguro, eficaz e pode clarear os dentes em até 8 tons. O resultado dura de 1 a 3 anos dependendo dos seus hábitos (café, vinho, cigarro). Na Lubru Odontologia usamos géis de alta concentração com protocolo supervisionado para o máximo resultado sem sensibilidade excessiva.',
  },
  {
    category: 'Aparelho Invisível',
    question: 'Como funciona o aparelho invisível e quanto tempo leva o tratamento?',
    answer: 'Os alinhadores invisíveis são placas transparentes e removíveis, feitas sob medida a partir do escaneamento digital 3D dos seus dentes. Você troca as placas a cada 7 a 15 dias conforme a evolução. O tratamento costuma ser até 50% mais rápido e muito mais confortável que o aparelho fixo metálico — sem cortes na bochecha e sem restrição alimentar.',
  },
  {
    category: 'Tratamento de Canal',
    question: 'O tratamento de canal no dente é doloroso? Pode resolver em 1 sessão?',
    answer: 'Não precisa ter medo! Com a tecnologia mecanizada da Lubru Odontologia em Atibaia, o tratamento de canal é feito sob anestesia eficiente e resolvido em uma única sessão na maioria dos casos. Você entra com dor de dente e sai com o problema resolvido, sem precisar voltar várias vezes para curativos.',
  },
  {
    category: 'Facetas & Estética',
    question: 'A faceta de dente machuca ou estraga o dente natural?',
    answer: 'Trabalhamos com odontologia minimamente invasiva. A faceta dental (ou lente de contato dental) é ultra-fina e preserva ao máximo a estrutura original do dente. Com o planejamento digital (DSD), o desgaste é milimétrico ou nulo na maioria dos casos. O resultado é um sorriso natural, luminoso e duradouro em porcelana e-Max.',
  },
  {
    category: 'Convênios & Reembolso',
    question: 'A clínica odontológica aceita convênio ou plano de saúde?',
    answer: 'Não atendemos convênios odontológicos de forma direta, mas emitimos toda a documentação, laudos e recibos para que você solicite reembolso à sua operadora. Oferecemos também parcelamento em cartão de crédito e PIX com condições facilitadas.',
  },
  {
    category: 'Localização',
    question: 'Onde fica a clínica odontológica em Atibaia? Tem estacionamento?',
    answer: 'A Lubru Odontologia fica no coração de Atibaia — Av. Brigadeiro José Vicente Faria Lima, 38, Centro. Fácil acesso, estacionamento nas proximidades e estrutura com total acessibilidade. Atendemos de segunda a sexta das 08h às 18h30, com sábados mediante agendamento prévio.',
  },
];


export const ClinicaFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider font-arimo">
            <HelpCircle className="w-3.5 h-3.5 text-[#C6A664]" />
            Tire Suas Dúvidas
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Perguntas Frequentes sobre a <span className="text-[#C6A664]">Clínica & Tratamentos</span>
          </h2>
          <p className="text-base text-[#334155] font-arimo">
            Informações claras sobre nossos procedimentos, agendamento e formas de pagamento.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {CLINICA_FAQS.map((faq, idx) => {
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

        {/* CTA Box */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-poppins font-bold text-base text-[#0E2954]">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] font-arimo">
              Nossa equipe está pronta para te atender no WhatsApp de forma personalizada.
            </p>
          </div>

          <a
            href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Olá! Vim pelo Google e estava lendo as dúvidas frequentes no site da Lubru Odontologia. Gostaria de mais informações. [src:google|mid:cpc|cmp:faq-atibaia|trm:dentista-atibaia]'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all border border-[#C6A664]/30 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
