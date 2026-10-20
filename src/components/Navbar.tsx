import React, { useState, useEffect } from 'react';
import { FramerButton } from './FramerButton';
import { CLINIC_INFO } from '../data/clinicData';
import { Menu, X, Phone, Clock, MapPin, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Clinicians', id: 'doctors' },
    { label: 'Sponsored Teams', id: 'sponsors' },
    { label: 'Spine Journal', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 pb-2">
      {/* Clinic Hours & Direct Phone Quick Micro-Ticker */}
      <div className={`hidden md:flex justify-between items-center max-w-7xl mx-auto px-6 py-1.5 mb-2 text-xs text-[#0A1128]/70 transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden mb-0 py-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#204CB8]" />
            43 Kratzke Rd, Highfields QLD 4352
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#204CB8]" />
            Clinic Hours: Mon–Wed & Fri 8am–6pm • Thu 8am–7pm (Late Night)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#0A1128]/40">|</span>
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center gap-1.5 font-semibold text-[#204CB8] hover:text-[#0A1128] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#204CB8]" />
            Call: {CLINIC_INFO.phone}
          </a>
        </div>
      </div>

      {/* Floating Pill Container */}
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border border-[#204CB8]/10'
            : 'bg-white/85 backdrop-blur-sm border border-[#204CB8]/8 shadow-sm'
        }`}
      >
        {/* Brand Mark with Official Highfields Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <img
            src="/assets/highfields-logo.png"
            alt="Highfields Chiropractic Official Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="block font-display font-extrabold text-base tracking-tight text-[#204CB8] leading-none">
              HIGHFIELDS
            </span>
            <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#E6286B] mt-0.5">
              Chiropractic
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 bg-[#EFF4FB] px-3 py-1.5 rounded-full border border-[#204CB8]/8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id || (currentPage.startsWith(item.id));
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#204CB8] text-white shadow-sm'
                    : 'text-[#0A1128]/80 hover:text-[#204CB8] hover:bg-[#204CB8]/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#204CB8] bg-[#EFF4FB] hover:bg-[#E2EAF4] px-4 py-2.5 rounded-full transition-colors border border-[#204CB8]/8 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5 text-[#204CB8]" />
            {CLINIC_INFO.phone}
          </a>

          <FramerButton
            variant="accent"
            onClick={onOpenBooking}
            className="!py-2.5 !px-5 text-xs font-bold shadow-sm min-h-[44px]"
            icon={<Calendar className="w-3.5 h-3.5 ml-1" />}
          >
            Book Appointment
          </FramerButton>
        </div>

        {/* Mobile & Tablet Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#E6286B] text-white p-2.5 rounded-full text-xs font-bold shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Book Appointment"
            aria-label="Book Appointment"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full text-[#204CB8] hover:bg-[#204CB8]/5 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-[#204CB8]/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#204CB8] text-white'
                    : 'text-[#0A1128] hover:bg-[#EFF4FB]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#204CB8]/10 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-[#204CB8] bg-[#EFF4FB] rounded-full"
              >
                <Phone className="w-4 h-4" />
                Call {CLINIC_INFO.phone}
              </a>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 bg-[#E6286B] text-white font-bold rounded-full text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Online Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
