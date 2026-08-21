import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ShieldCheck, Sparkles, Building2, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { LogoImage } from './LogoImage';
import { useNavigation } from '../context/NavigationContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaMessage =
    currentPage === 'protocolo'
      ? 'Olá! Vim pelo Google e gostaria de agendar uma avaliação para o Protocolo de Carga Imediata (All-on-4) na Lubru Odontologia em Atibaia. [src:google|mid:cpc|cmp:carga-imediata-atibaia|trm:carga-imediata]'
      : 'Olá! Vim pelo Google e gostaria de agendar uma consulta na Lubru Odontologia em Atibaia. [src:google|mid:cpc|cmp:clinica-atibaia|trm:dentista-atibaia]';

  const handleLocationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector('#localizacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(currentPage, '#localizacao');
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar - Brand Dark Navy (#0A1C38) */}
      <div className="bg-[#0A1C38] text-slate-200 text-xs py-2 px-4 border-b border-[#C6A664]/30 font-arimo">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#C6A664]" />
              <span>{CLINIC_INFO.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
              <span>{CLINIC_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-slate-200 border border-[#C6A664]/40 font-arimo">
              <ShieldCheck className="w-3 h-3 text-[#C6A664]" />
              ANVISA & CRO {CLINIC_INFO.croClinic}
            </span>
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Olá! Vim pelo site da Lubru Odontologia e gostaria de agendar uma consulta. [src:google|mid:cpc|cmp:geral-atibaia|trm:dentista-atibaia]'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A664] hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Conversion Navbar - 4 Centralized Conversion Buttons */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#0E2954]/10'
            : 'bg-white py-3.5 border-b border-[#0E2954]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => navigateTo(currentPage)}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <LogoImage variant="header" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-normal text-xl text-[#0E2954] tracking-[0.2em] uppercase leading-tight group-hover:text-[#C6A664] transition-colors">
                L U B R U
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#C6A664] font-semibold uppercase font-arimo">
                {currentPage === 'protocolo' ? 'Carga Imediata' : 'Odontologia Integrada'}
              </span>
            </div>
          </button>

          {/* Centralized 3 Navigation Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#EEF3FA] p-1 rounded-full border border-[#0E2954]/15 shadow-inner">
            {/* 1. Protocolo Carga Imediata */}
            <button
              onClick={() => navigateTo('protocolo')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer font-poppins ${
                currentPage === 'protocolo'
                  ? 'bg-[#0E2954] text-white shadow-md border border-[#C6A664]/50 scale-[1.02]'
                  : 'text-[#334155] hover:text-[#0E2954] hover:bg-white/60'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${currentPage === 'protocolo' ? 'text-[#C6A664]' : 'text-slate-400'}`} />
              <span>Protocolo Carga Imediata</span>
            </button>

            {/* 2. Clínica e Especialidades */}
            <button
              onClick={() => navigateTo('clinica')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer font-poppins ${
                currentPage === 'clinica'
                  ? 'bg-[#0E2954] text-white shadow-md border border-[#C6A664]/50 scale-[1.02]'
                  : 'text-[#334155] hover:text-[#0E2954] hover:bg-white/60'
              }`}
            >
              <Building2 className={`w-4 h-4 ${currentPage === 'clinica' ? 'text-[#C6A664]' : 'text-slate-400'}`} />
              <span>Clínica e Especialidades</span>
            </button>

            {/* 3. Localização */}
            <button
              onClick={handleLocationClick}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#334155] hover:text-[#0E2954] hover:bg-white/60 transition-all cursor-pointer font-poppins"
            >
              <MapPin className="w-4 h-4 text-[#C6A664]" />
              <span>Localização</span>
            </button>
          </div>

          {/* 4. Main Conversion CTA Button (Agende sua Avaliação) */}
          <div className="hidden sm:flex items-center">
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(ctaMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0E2954] hover:bg-[#143264] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-[#0E2954]/20 hover:scale-[1.03] active:scale-[0.98] transition-all text-center justify-center inline-flex items-center gap-2 border border-[#C6A664]/40 font-poppins group"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664] group-hover:rotate-12 transition-transform" />
              <span>Agende sua Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E2954] hover:text-[#C6A664] focus:outline-none cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Centralized Menu Options */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#0E2954]/10 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2">
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider font-poppins">
              Navegação Rápida:
            </p>

            {/* 1. Protocolo Carga Imediata */}
            <button
              onClick={() => {
                navigateTo('protocolo');
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-2xl text-xs font-bold transition-all text-left font-poppins flex items-center justify-between ${
                currentPage === 'protocolo'
                  ? 'bg-[#0E2954] text-white shadow-sm border border-[#C6A664]/40'
                  : 'bg-[#F4F7FA] text-[#0E2954] border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C6A664]" />
                <span>Protocolo Carga Imediata</span>
              </div>
              {currentPage === 'protocolo' && (
                <span className="text-[10px] text-[#C6A664] font-normal uppercase">Ativo</span>
              )}
            </button>

            {/* 2. Clínica e Especialidades */}
            <button
              onClick={() => {
                navigateTo('clinica');
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-2xl text-xs font-bold transition-all text-left font-poppins flex items-center justify-between ${
                currentPage === 'clinica'
                  ? 'bg-[#0E2954] text-white shadow-sm border border-[#C6A664]/40'
                  : 'bg-[#F4F7FA] text-[#0E2954] border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#C6A664]" />
                <span>Clínica e Especialidades</span>
              </div>
              {currentPage === 'clinica' && (
                <span className="text-[10px] text-[#C6A664] font-normal uppercase">Ativo</span>
              )}
            </button>

            {/* 3. Localização */}
            <button
              onClick={handleLocationClick}
              className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-[#0E2954] bg-[#F4F7FA] border border-slate-200 transition-all text-left font-poppins flex items-center gap-2.5"
            >
              <MapPin className="w-4 h-4 text-[#C6A664]" />
              <span>Localização em Atibaia</span>
            </button>

            {/* 4. Agende sua Avaliação (CTA Mobile) */}
            <div className="pt-2">
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(ctaMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#0E2954] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-full shadow-lg border border-[#C6A664]/40 flex items-center justify-center gap-2 font-poppins"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                <span>Agende sua Avaliação</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
