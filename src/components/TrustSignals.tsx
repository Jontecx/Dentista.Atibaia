import React, { useState } from 'react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { Star, Award } from 'lucide-react';
import { Doctor } from '../types';

const DOCTOR_LOCAL_PATHS: Record<string, string[]> = {
  'CROSP 141.155': [
    '/doutor-lucas.avif',
    '/doutor-lucas.AVIF',
    '/dr-lucas.avif',
    '/dr-lucas.AVIF',
    '/doutor-lucas.webp',
    '/dr-lucas.webp',
    '/doutor-lucas.png',
    '/dr-lucas.png',
    '/doutor-lucas.jpg',
    '/dr-lucas.jpg',
  ],
  'CROSP 139.987': [
    '/doutora-bruna.avif',
    '/doutora-bruna.AVIF',
    '/dra-bruna.avif',
    '/dra-bruna.AVIF',
    '/doutora-bruna.webp',
    '/dra-bruna.webp',
    '/doutora-bruna.png',
    '/dra-bruna.png',
    '/doutora-bruna.jpg',
    '/dra-bruna.jpg',
  ],
};

const DoctorAvatar: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const customPaths = DOCTOR_LOCAL_PATHS[doctor.cro] || [];
  const allPaths = [...customPaths, doctor.image];
  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < allPaths.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      src={allPaths[index]}
      alt={doctor.name}
      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      onError={handleError}
    />
  );
};

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
          <p className="text-base sm:text-lg text-[#334155] font-arimo">
            Atendimento ético, altamente qualificado e alinhado com as normas do Conselho Regional de Odontologia e ANVISA.
          </p>
        </div>

        {/* Doctors Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.cro}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-center md:items-start group"
            >
              {/* Doctor Avatar Image */}
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100">
                <DoctorAvatar doctor={doctor} />
                <div className="absolute bottom-2 left-2 right-2 bg-[#0A1C38]/90 text-[#C6A664] text-[10px] font-bold py-1 text-center rounded-lg backdrop-blur-xs border border-[#C6A664]/30 font-arimo">
                  {doctor.cro}
                </div>
              </div>

              {/* Doctor Bio Details */}
              <div className="space-y-3 text-center md:text-left flex-1 font-arimo">
                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#0E2954] group-hover:text-[#C6A664] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C6A664] uppercase tracking-wider mt-0.5">
                    {doctor.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
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
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
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
      </div>
    </section>
  );
};
