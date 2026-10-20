import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES, DOCTORS, SPONSORED_TEAMS } from '../data/clinicData';
import { FramerButton } from './FramerButton';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0A1128] text-white pt-20 pb-12 max-md:pb-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto">
        {/* Top Newsletter & Fast-Track Consultation Banner */}
        <div className="bg-[#121F42] rounded-xl p-8 sm:p-12 mb-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6286B]/15 text-[#E6286B] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Highfields Spine & Wellness Journal
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Stay proactive about your posture & spinal longevity.
            </h3>
            <p className="text-white/70 text-sm">
              Receive monthly clinical ergonomics guides, stretching routines, and practice updates from Dr. Stephen Lean and the clinical team. Zero spam.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-[#E6286B]/20 text-[#E6286B] px-6 py-4 rounded-full border border-[#E6286B]/30">
                <span className="w-2 h-2 rounded-full bg-[#E6286B] flex-shrink-0" />
                <span className="text-sm font-semibold text-white">Thank you! You're subscribed to the Highfields Spine Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/10 text-white placeholder-white/40 px-5 py-3.5 rounded-full text-sm border border-white/15 focus:outline-none focus:border-[#E6286B] focus:ring-1 focus:ring-[#E6286B] w-full sm:w-72"
                />
                <FramerButton variant="accent" className="!py-3.5 !px-6 whitespace-nowrap">
                  Subscribe Now
                </FramerButton>
              </form>
            )}
          </div>
        </div>

        {/* 4 Columns of Navigation & Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: About & Motto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/highfields-logo.png"
                alt="Highfields Chiropractic"
                className="h-9 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
              <span className="font-display text-lg font-extrabold tracking-tight">
                HIGHFIELDS <span className="text-[#E6286B]">CHIROPRACTIC</span>
              </span>
            </div>
            <p className="text-[#E6286B] text-xs italic font-medium mb-4">
              {CLINIC_INFO.motto}
            </p>
            <p className="text-white/70 text-xs leading-relaxed mb-6">
              Dedicated family and athletic musculoskeletal wellness for over a decade in Highfields. Providing evidence-based, collaborative care individually tailored to every stage of life.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#E6286B] uppercase tracking-wider bg-[#E6286B]/15 px-3 py-1 rounded-full border border-[#E6286B]/25">
                HICAPS On-The-Spot Claiming
              </span>
            </div>
          </div>

          {/* Col 2: Services & Techniques */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#E6286B] mb-5">
              Techniques & Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate(`service-${service.slug}`)}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B]/60 group-hover:bg-[#E6286B] transition-colors" />
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#E6286B] font-semibold hover:underline flex items-center gap-1 mt-2 text-xs"
                >
                  View All 8 Techniques <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Essentials */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#E6286B] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our Practice & Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors">
                  Our Chiropractors & Clinicians
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sponsors')} className="hover:text-white text-[#E6286B] font-semibold transition-colors">
                  Sponsored Sports Teams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Spinal Health Articles & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact & Location Map
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy (APPs Compliance)
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#E6286B] text-white px-4 py-2 rounded-full font-bold hover:bg-[#CF1757] transition-colors shadow-sm"
                >
                  Book Appointment Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & 2026 Clinic Hours */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#E6286B] mb-5">
              Clinic Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-white/70 mb-5">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E6286B] mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="block text-white font-semibold">{CLINIC_INFO.phone}</strong>
                  Direct Reception Desk
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6286B] mt-0.5 flex-shrink-0" />
                <span>
                  {CLINIC_INFO.address}
                </span>
              </div>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E6286B] mt-0.5 flex-shrink-0" />
                <span className="break-all">{CLINIC_INFO.email}</span>
              </a>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-2">
                <Clock className="w-3.5 h-3.5 text-[#E6286B]" /> 2026 Clinic Hours
              </div>
              <div className="space-y-1 text-[11px] text-white/60">
                <div className="flex justify-between">
                  <span>Mon, Tue, Wed, Fri:</span>
                  <span className="font-medium text-white/90">8am – 6pm</span>
                </div>
                <div className="flex justify-between text-[#E6286B]">
                  <span>Thursday (Late Night):</span>
                  <span className="font-bold">8am – 7pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Sponsored Sporting Teams & Youth Organisations Strip */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E6286B] block mb-1">
                Community Involvement
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                Proudly Sponsoring Highfields Youth & Local Sporting Organisations
              </h4>
            </div>
            <button
              onClick={() => onNavigate('sponsors')}
              className="text-xs font-bold text-[#E6286B] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              Learn More About Our Sponsorships <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {SPONSORED_TEAMS.map((team) => (
              <div
                key={team.id}
                className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-all flex flex-col items-center text-center group h-32 justify-between"
              >
                <div className="h-14 w-full flex items-center justify-center p-1">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="max-h-12 max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition-all"
                  />
                </div>
                <span className="text-[10px] font-bold text-white/90 leading-tight line-clamp-2 mt-1">
                  {team.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Association Badges Row */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="w-4 h-4 text-[#E6286B]" />
            <span>Recognised & Accredited by Leading Australian Healthcare Bodies:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 opacity-85">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <img src="/assets/aca-logo.png" alt="ACA Member" className="h-5 w-auto object-contain" />
              <span className="text-xs font-bold text-white">Australian Chiropractors Association (ACA)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <img src="/assets/chiro-australia-badge.jpg" alt="Chiropractic Australia" className="h-5 w-auto object-contain" />
              <span className="text-xs font-bold text-white">Chiropractic Australia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <img src="/assets/massage-myotherapy-logo.png" alt="Massage & Myotherapy Australia" className="h-5 w-auto object-contain" />
              <span className="text-xs font-bold text-white">Massage & Myotherapy Australia</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Highfields Chiropractic. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-center sm:text-right">
            <span>Website designed by Little Pig Consulting</span>
            <span>•</span>
            <span className="text-white/70">43 Kratzke Rd, Highfields QLD 4352</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
