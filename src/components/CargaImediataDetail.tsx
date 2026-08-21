import React, { useState } from 'react';
import { CARGA_IMEDIATA_STEPS, CLINIC_INFO } from '../data/clinicData';
import { CheckCircle, MessageCircle, Clock, ShieldCheck, Sparkles, Activity, Smile, HeartHandshake } from 'lucide-react';

export const CargaImediataDetail: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const whatsappStepUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Vim pelo Google e li sobre o Protocolo de Carga Imediata (4 Pinos). Gostaria de agendar uma avaliação para o meu caso. [src:google|mid:cpc|cmp:carga-imediata-atibaia|trm:all-on-4]'
  )}`;

  return (
    <section id="carga-imediata" className="py-16 lg:py-24 bg-[#F4F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
            Especialidade Principal &bull; Lubru Odontologia
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight leading-tight">
            Como Funciona o <br className="hidden sm:inline" />
            <span className="text-[#C6A664] block sm:inline">Protocolo de Carga Imediata?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-arimo">
            Uma abordagem cirúrgica moderna e eficiente que substitui a dentadura móvel por uma ponte fixa apoiada em apenas 4 implantes de titânio de alta precisão.
          </p>
        </div>

        {/* 4 Steps Interactive Navigation */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Steps List Column */}
          <div className="lg:col-span-5 space-y-3">
            {CARGA_IMEDIATA_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#EEF3FA] border-[#0E2954] shadow-md'
                      : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-[#0E2954]/30'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-poppins font-bold text-base shrink-0 transition-colors ${
                      isSelected ? 'bg-[#0E2954] text-[#C6A664] shadow-sm' : 'bg-[#F4F7FA] text-[#64748B] border border-slate-200'
                    }`}
                  >
                    0{step.step}
                  </div>

                  <div className="space-y-1 pr-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-poppins font-semibold text-base ${
                          isSelected ? 'text-[#0E2954]' : 'text-[#1E293B]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F7FA] text-[#64748B] border border-slate-200 font-arimo">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed font-arimo">
                      {step.description}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-2.5 h-full bg-[#0E2954]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Step Detail Active Card Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-[#0E2954] bg-[#EEF3FA] px-3 py-1 rounded-full border border-[#0E2954]/20 uppercase tracking-wider font-arimo">
                ETAPA 0{CARGA_IMEDIATA_STEPS[activeStep].step} DE 04
              </span>
              <span className="text-xs font-medium text-[#64748B] flex items-center gap-1 font-arimo">
                <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
                {CARGA_IMEDIATA_STEPS[activeStep].duration}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-poppins font-bold text-2xl text-[#0E2954]">
                {CARGA_IMEDIATA_STEPS[activeStep].title}
              </h3>
              <p className="text-base text-[#334155] leading-relaxed font-arimo">
                {CARGA_IMEDIATA_STEPS[activeStep].description}
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#F4F7FA] p-4 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0E2954] text-[#C6A664] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#C6A664]" />
              </div>
              <div>
                <span className="text-xs text-[#64748B] uppercase font-semibold block font-arimo">Diferencial do Passo</span>
                <span className="font-poppins font-bold text-sm text-[#0E2954]">
                  {CARGA_IMEDIATA_STEPS[activeStep].highlight}
                </span>
              </div>
            </div>

            {/* Quick Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 font-arimo">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E293B]">
                <ShieldCheck className="w-4 h-4 text-[#C6A664]" /> Planejamento cirúrgico virtual 3D
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E293B]">
                <Activity className="w-4 h-4 text-[#C6A664]" /> Pós-operatório rápido e previsível
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E293B]">
                <Smile className="w-4 h-4 text-[#C6A664]" /> Sem dentadura caindo ou machucando
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E293B]">
                <HeartHandshake className="w-4 h-4 text-[#C6A664]" /> Atendimento acolhedor e humanizado
              </div>
            </div>

            {/* CTA inside active card */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#64748B] font-arimo">
                Deseja entender se seu caso se enquadra?
              </div>
              <a
                href={whatsappStepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E2954] hover:bg-[#143264] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2 border border-[#C6A664]/30 font-poppins"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                <span>Consultar meu Caso no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
