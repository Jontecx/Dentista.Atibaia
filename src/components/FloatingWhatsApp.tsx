import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWhatsAppProps {}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Protocolo de Carga Imediata',
      subtitle: 'Dentes fixos em até 24h em Atibaia',
      msg: 'Olá! Gostaria de agendar uma consulta para o Protocolo de Carga Imediata.',
    },
    {
      title: 'Lentes & Estética Dental',
      subtitle: 'Transformação natural do sorriso',
      msg: 'Olá! Tenho interesse em Lentes de Contato e Estética Dental.',
    },
    {
      title: 'Alinhadores Invisíveis',
      subtitle: 'Ortodontia discreta e moderna',
      msg: 'Olá! Gostaria de informações sobre Alinhadores Invisíveis.',
    },
    {
      title: 'Documentação para Reembolso',
      subtitle: 'Apoio completo para seu plano',
      msg: 'Olá! Gostaria de orientações sobre a documentação para solicitação de reembolso no meu convênio.',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Expandable Popover Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 transition-all">
          {/* Card Header */}
          <div className="bg-[#0E2954] text-white p-4 relative border-b border-[#C6A664]/30">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
              aria-label="Fechar popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#0A1C38] border border-[#C6A664] text-[#C6A664] flex items-center justify-center font-bold shrink-0 shadow-md">
                <MessageCircle className="w-5 h-5 fill-[#C6A664] text-[#0A1C38]" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0E2954] rounded-full" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-white">Lubru Odontologia</h4>
                <p className="text-[11px] text-[#C6A664] font-medium font-barlow flex items-center gap-1">
                  Atendimento Online no WhatsApp &bull; Atibaia
                </p>
              </div>
            </div>
          </div>

          {/* Quick Options List */}
          <div className="p-4 bg-[#F4F7FA] space-y-2 max-h-80 overflow-y-auto">
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2 font-poppins">
              Selecione o assunto do seu atendimento:
            </p>

            {quickOptions.map((opt) => (
              <a
                key={opt.title}
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(opt.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#0E2954] hover:bg-[#EEF3FA] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-xs font-poppins font-bold text-[#0E2954] group-hover:text-[#C6A664] block">
                      {opt.title}
                    </strong>
                    <span className="text-[11px] text-[#64748B] block font-barlow">{opt.subtitle}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0E2954] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-2.5 bg-white border-t border-slate-200 text-center text-[10px] text-[#64748B] flex items-center justify-center gap-1 font-barlow">
            <ShieldCheck className="w-3 h-3 text-[#C6A664]" />
            <span>Resposta rápida &bull; Atibaia / SP</span>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-[#25D366] hover:bg-[#20BA59] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
        aria-label="Atendimento WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="hidden sm:inline-block font-poppins font-bold text-xs pr-1">
          WhatsApp Lubru
        </span>
      </button>
    </div>
  );
};
