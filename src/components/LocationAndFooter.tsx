import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck, Navigation, Car } from 'lucide-react';
import { LogoImage } from './LogoImage';

export const LocationAndFooter: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6587428198765!2d-46.55403242381206!3d-23.118678244498305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec10b9f515e07%3A0x8e874df09d66dbec!2sAv.%20Brig.%20Jos%C3%A9%20Vicente%20Faria%20Lima%2C%2038%20-%20Centro%2C%20Atibaia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  return (
    <footer id="localizacao" className="bg-[#0A1C38] text-slate-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-slate-800">
          {/* Contact & Address Info - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <LogoImage variant="footer" className="h-11 w-auto object-contain max-w-[180px] rounded-sm" />
                </div>
                <div>
                  <h3 className="font-poppins font-normal text-2xl text-white tracking-tight">
                    LUBRU <span className="text-[#C6A664] font-bold">ODONTOLOGIA</span>
                  </h3>
                  <p className="text-xs text-[#C6A664] font-arimo tracking-wider">Atibaia / SP &bull; Odontologia Reabilitadora</p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-arimo">
              Localização privilegiada no Centro de Atibaia com completa estrutura, ambiente climatizado e biossegurança rigorosa para o seu conforto.
            </p>

            {/* NAP semântico para SEO local */}
            <address className="not-italic space-y-4 pt-2 font-arimo">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0E2954] text-[#C6A664] flex items-center justify-center shrink-0 mt-1 border border-[#C6A664]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white text-xs block uppercase font-semibold font-poppins">Endereço</strong>
                  <span className="text-xs text-slate-300">{CLINIC_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0E2954] text-[#C6A664] flex items-center justify-center shrink-0 mt-1 border border-[#C6A664]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white text-xs block uppercase font-semibold font-poppins">WhatsApp & Telefone</strong>
                  <a
                    href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Vim%20pelo%20Google%20e%20gostaria%20de%20agendar%20uma%20consulta%20na%20Lubru%20Odontologia.%20%5Bsrc%3Agoogle%7Cmid%3Acpc%7Ccmp%3Ageral-atibaia%7Ctrm%3Adentista-atibaia%5D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C6A664] hover:underline font-bold"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0E2954] text-[#C6A664] flex items-center justify-center shrink-0 mt-1 border border-[#C6A664]/30">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white text-xs block uppercase font-semibold font-poppins">Horário de Atendimento</strong>
                  <span className="text-xs text-slate-300">{CLINIC_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0E2954] text-amber-400 flex items-center justify-center shrink-0 mt-1 border border-[#C6A664]/30">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white text-xs block uppercase font-semibold font-poppins">Estacionamento & Acesso</strong>
                  <span className="text-xs text-slate-300">Fácil estacionamento no Centro e acesso com total acessibilidade.</span>
                </div>
              </div>
            </address>

            <div className="pt-2">
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Olá! Vim pelo Google e gostaria de orientações de como chegar à Lubru Odontologia em Atibaia. [src:google|mid:cpc|cmp:localizacao-atibaia|trm:dentista-no-centro]'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0E2954] hover:bg-[#143264] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2 border border-[#C6A664]/40 font-poppins"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                <span>Solicitar Localização no WhatsApp</span>
              </a>
            </div>
          </div>


          {/* Map Embed Container - 7 cols */}
          <div className="lg:col-span-7 bg-[#0E2954] rounded-3xl p-3 border border-[#C6A664]/30 shadow-xl overflow-hidden relative min-h-[340px]">
            <iframe
              title="Mapa de Localização Lubru Odontologia Atibaia"
              src={mapEmbedUrl}
              className="w-full h-[360px] sm:h-[400px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#0A1C38]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#C6A664]/30 flex items-center justify-between text-xs text-slate-200">
              <span className="flex items-center gap-2 font-arimo">
                <Navigation className="w-4 h-4 text-[#C6A664]" /> Av. Brig. José Vicente Faria Lima, 38 - Centro, Atibaia
              </span>
              <a
                href="https://maps.google.com/?q=Av.+Brigadeiro+Jos%C3%A9+Vicente+Faria+Lima,+38,+Centro,+Atibaia+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6A664] font-bold hover:underline shrink-0 font-poppins"
              >
                Abrir no Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Technical Responsibility & Ethical Compliance */}
        <div className="bg-[#0E2954] p-6 rounded-2xl border border-[#C6A664]/30 text-xs text-slate-300 space-y-3 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3 text-white font-semibold font-poppins">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A664]" /> Responsáveis Técnicos & Registro CRO
            </span>
            <span className="text-[#C6A664]">Atibaia / SP</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <strong className="text-white block font-poppins">Dr. Lucas Cavalcante Pracchia</strong>
              <span className="text-[#C6A664] font-mono text-[11px]">CROSP 141.155</span>
              <p className="text-[11px] text-slate-300 mt-0.5 font-arimo">Especialista em Implantodontia & Reabilitação Oral</p>
            </div>

            <div>
              <strong className="text-white block font-poppins">Dra. Bruna Soares Diodatti Pracchia</strong>
              <span className="text-[#C6A664] font-mono text-[11px]">CROSP 139.987</span>
              <p className="text-[11px] text-slate-300 mt-0.5 font-arimo">Especialista em Estética Dental & Ortodontia</p>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-700/80 font-arimo">
            * Aviso Ético: As informações contidas neste site possuem caráter educativo e informativo. Os resultados de tratamentos odontológicos podem variar conforme as características biológicas e anatômicas individuais de cada paciente. Não prometemos diagnósticos virtuais nem garantias absolutas. A indicação do tratamento é estabelecida após consulta clínica presencial.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-4 border-t border-slate-800 font-arimo">
          <p>© {new Date().getFullYear()} Lubru Odontologia. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4">
            <span>Atibaia - SP</span>
            <span>&bull;</span>
            <span>EPAO 12.890</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
