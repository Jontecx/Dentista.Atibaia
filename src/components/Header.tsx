import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Carga Imediata', href: '#carga-imediata' },
    { label: 'Especialistas', href: '#especialistas' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar - Brand Dark Navy (#0A1C38) */}
      <div className="bg-[#0A1C38] text-slate-200 text-xs py-2 px-4 border-b border-[#C6A664]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#C6A664]" />
              <span>{CLINIC_INFO.address}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
              <span>{CLINIC_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-slate-200 border border-[#C6A664]/40">
              <ShieldCheck className="w-3 h-3 text-[#C6A664]" />
              ANVISA & CRO {CLINIC_INFO.croClinic}
            </span>
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Lubru%20Odontologia%20e%20gostaria%20de%20agendar%20uma%20consulta.`}
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

      {/* Main Navbar - Clean Navy / White Glass Header */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#0E2954]/10'
            : 'bg-white py-4 border-b border-[#0E2954]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with LB Monogram and Odontologia Reabilitadora */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#0E2954] border border-[#C6A664]/40 flex items-center justify-center text-[#C6A664] shadow-md group-hover:bg-[#143264] transition-all">
              <span className="font-poppins font-bold text-lg tracking-tighter">LB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-light text-xl text-[#0E2954] tracking-[0.2em] uppercase leading-tight group-hover:text-[#C6A664] transition-colors">
                L U B R U
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#C6A664] font-semibold uppercase">
                Odontologia Reabilitadora
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest font-semibold text-[#334155] hover:text-[#0E2954] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6A664] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20especialista%20na%20Lubru%20Odontologia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0E2954] hover:bg-[#143264] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#C6A664]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664] fill-[#C6A664]/20" />
              <span>Agende sua Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E2954] hover:text-[#C6A664] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#0E2954]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium uppercase tracking-wider text-[#0E2954] hover:text-[#C6A664] py-2 border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20especialista%20na%20Lubru%20Odontologia.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#0E2954] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow-md flex items-center justify-center gap-2 border border-[#C6A664]/30 block"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                <span>Agendar Avaliação pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
