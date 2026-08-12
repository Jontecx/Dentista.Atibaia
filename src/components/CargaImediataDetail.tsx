import React, { useState } from 'react';
import { CARGA_IMEDIATA_STEPS, CLINIC_INFO } from '../data/clinicData';
import { CheckCircle, MessageCircle, Clock, ShieldCheck, Sparkles, Activity, Smile, HeartHandshake } from 'lucide-react';

export const CargaImediataDetail: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const whatsappStepUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá! Li sobre o Protocolo de Carga Imediata (4 Pinos) e gostaria de agendar uma consulta para avaliar meu caso.'
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
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Como Funciona o <span className="text-[#C6A664]">Protocolo de Carga Imediata</span>?
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-barlow">
            Uma abordagem cirúrgica moderna e eficiente que substitui a dentadura móvel por uma ponte fixa definitiva apoiada em apenas 4 implantes de titânio de alta precisão.
          </p>
        </div>

        {/* 4 Steps Interactive Navigation */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
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
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F7FA] text-[#64748B] border border-slate-200">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed font-barlow">
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
              <span className="text-xs font-bold text-[#0E2954] bg-[#EEF3FA] px-3 py-1 rounded-full border border-[#0E2954]/20 uppercase tracking-wider">
                ETAPA 0{CARGA_IMEDIATA_STEPS[activeStep].step} DE 04
              </span>
              <span className="text-xs font-medium text-[#64748B] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
                {CARGA_IMEDIATA_STEPS[activeStep].duration}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-poppins font-bold text-2xl text-[#0E2954]">
                {CARGA_IMEDIATA_STEPS[activeStep].title}
              </h3>
              <p className="text-base text-[#334155] leading-relaxed font-barlow">
                {CARGA_IMEDIATA_STEPS[activeStep].description}
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#F4F7FA] p-4 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0E2954] text-[#C6A664] flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#C6A664]" />
              </div>
              <div>
                <span className="text-xs text-[#64748B] uppercase font-semibold block">Diferencial do Passo</span>
                <span className="font-poppins font-bold text-sm text-[#0E2954]">
                  {CARGA_IMEDIATA_STEPS[activeStep].highlight}
                </span>
              </div>
            </div>

            {/* Quick Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
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
              <div className="text-xs text-[#64748B]">
                Deseja entender se seu caso se enquadra?
              </div>
              <a
                href={whatsappStepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0E2954] hover:bg-[#143264] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2 border border-[#C6A664]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                <span>Consultar meu Caso no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Comparison Key Benefits Box - Deep Navy background with Gold accents */}
        <div className="bg-[#0E2954] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-[#C6A664]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A664]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#C6A664] tracking-wider uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                Por que escolher o Protocolo de 4 Pinos?
              </span>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
                Liberdade para sorrir, falar e comer o que você quiser.
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-barlow">
                As próteses convencionais (dentaduras) causam lesões gengivais, perdem a retenção com o passar dos anos e afetam severamente a autoestima. O Protocolo de Carga Imediata recupera a força mastigatória de um dente natural com estabilidade absoluta.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#C6A664] font-bold text-xl block">98%+</span>
                  <span className="text-xs text-slate-200">Taxa de Sucesso Clínico</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#C6A664] font-bold text-xl block">1 Única</span>
                  <span className="text-xs text-slate-200">Cirurgia de Fixação</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <span className="text-[#C6A664] font-bold text-xl block">Sem Enxerto</span>
                  <span className="text-xs text-slate-200">Na maioria dos casos</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <a
                href={whatsappStepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#C6A664] hover:bg-[#B59553] text-[#0A1C38] font-poppins font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-lg hover:scale-105 transition-all items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-[#0A1C38]" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
