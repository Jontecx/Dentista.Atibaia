import React from 'react';
import { DOCTORS, TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, Award, MessageCircle, CheckCircle } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  return (
    <section id="especialistas" className="py-16 lg:py-24 bg-[#F4F7FA] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0E2954] text-[#C6A664] border border-[#C6A664]/40 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#C6A664]" />
            Corpo Clínico & Autoridade
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0E2954] tracking-tight">
            Especialistas Dedicados à <span className="text-[#C6A664]">Sua Transformação</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-barlow">
            Atendimento ético, altamente qualificado e alinhado com as normas do Conselho Regional de Odontologia e ANVISA.
          </p>
        </div>

        {/* Doctors Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.cro}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-center md:items-start group"
            >
              {/* Doctor Avatar Image */}
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#0A1C38]/90 text-[#C6A664] text-[10px] font-bold py-1 text-center rounded-lg backdrop-blur-xs border border-[#C6A664]/30">
                  {doctor.cro}
                </div>
              </div>

              {/* Doctor Bio Details */}
              <div className="space-y-3 text-center md:text-left flex-1">
                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#0E2954] group-hover:text-[#C6A664] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C6A664] uppercase tracking-wider mt-0.5 font-barlow">
                    {doctor.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-barlow">
                  {doctor.bio}
                </p>

                {/* Specialties Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {doctor.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-medium bg-[#EEF3FA] text-[#0E2954] px-3 py-1 rounded-full border border-[#0E2954]/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authority Badges Row */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-200">
            <div className="p-2 space-y-1">
              <span className="font-poppins font-bold text-2xl text-[#0E2954] block">
                {CLINIC_INFO.transformedSmiles}
              </span>
              <span className="text-xs text-[#64748B] font-medium">Sorrisos Reabilitados em Atibaia</span>
            </div>

            <div className="p-2 space-y-1">
              <span className="font-poppins font-bold text-2xl text-[#0E2954] block flex items-center justify-center gap-1">
                5.0 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </span>
              <span className="text-xs text-[#64748B] font-medium">Classificação Máxima no Google</span>
            </div>

            <div className="p-2 space-y-1">
              <span className="font-poppins font-bold text-2xl text-[#C6A664] block">
                ANVISA & CRO
              </span>
              <span className="text-xs text-[#64748B] font-medium">Instalações em Conformidade</span>
            </div>

            <div className="p-2 space-y-1">
              <span className="font-poppins font-bold text-2xl text-[#0E2954] block">
                100%
              </span>
              <span className="text-xs text-[#64748B] font-medium">Pontualidade & Agendamento VIP</span>
            </div>
          </div>
        </div>

        {/* Social Proof & Google Reviews Header */}
        <div id="depoimentos" className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold text-[#C6A664] uppercase tracking-wider block mb-1">
                Depoimentos Reais &bull; Avaliações Verificadas
              </span>
              <h3 className="font-poppins font-bold text-2xl text-[#0E2954]">
                O que dizem os nossos pacientes em Atibaia
              </h3>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs">
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

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic relative pl-4 border-l-2 border-[#C6A664] font-barlow">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <strong className="font-poppins font-semibold text-[#0E2954] block">
                      {t.author}
                    </strong>
                    <span className="text-[#64748B] text-[11px]">{t.location} &bull; Tratamento: <span className="text-[#C6A664] font-medium">{t.treatment}</span></span>
                  </div>
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Gostaria de agendar uma consulta na Lubru Odontologia com os especialistas.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#0E2954] hover:bg-[#143264] text-white font-poppins font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all items-center gap-2 border border-[#C6A664]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664]" />
              <span>Agendar Avaliação com o Corpo Clínico</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
