import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES, DOCTORS, TESTIMONIALS, CLINIC_PROCESS, SPONSORED_TEAMS } from '../data/clinicData';
import { BLOG_POSTS } from '../data/blogData';
import { FramerButton } from '../components/FramerButton';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Activity,
  Heart,
  Award,
  ChevronRight,
  Stethoscope,
  Trophy,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* ========================================================
          HERO SECTION (Highfields Authentic Imagery)
      ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24 max-w-7xl mx-auto">
        {/* Ambient vibrant aura */}
        

        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Micro-Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#204CB8]/15 shadow-sm text-xs font-bold text-[#0A1128]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6286B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6286B]"></span>
            </span>
            <span>Highfields & Toowoomba's Dedicated Family Spinal Clinic</span>
            <span className="text-zinc-300">|</span>
            <span className="text-[#0A1128]/70">Established Over 10 Years</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1128] leading-[1.08]">
            Elevate Your Wellness <br className="hidden sm:inline" />
            <span className="relative inline-block">
              in Highfields.
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#E6286B]/25 -z-10 rounded-full transform -rotate-1" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#0A1128]/75 font-normal max-w-2xl mx-auto leading-relaxed">Evidence-based chiropractic adjustments, Thompson drop-table care, and sports rehabilitation individually tailored for your family in Highfields.</p>

          {/* Dual CTAs & Quick Direct Dial */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <FramerButton
              variant="primary"
              onClick={onOpenBooking}
              className="!py-4 !px-8 text-base shadow-xl font-bold w-full sm:w-auto justify-center"
              icon={<Calendar className="w-4 h-4 ml-1" />}
            >
              Make an Appointment
            </FramerButton>

            <FramerButton
              variant="outline"
              onClick={() => onNavigate('services')}
              className="!py-4 !px-8 text-base font-semibold w-full sm:w-auto justify-center"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Explore 8 Techniques
            </FramerButton>
          </div>

          {/* Trust Ratings & Social Proof Micro-Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#0A1128]/70">
            <div className="flex items-center gap-1.5 bg-white/80 px-4 py-2 rounded-full border border-black/5 shadow-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#0A1128]">4.9 / 5.0</span>
              <span>from 350+ Darling Downs patients</span>
            </div>

            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-black/5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#204CB8]" />
              <span>Medicare (CDM) & DVA Referrals Accepted</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Presentation (Highfields Genuine In-Clinic Consultation Photo) */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-[#0A1128]">
            <img
              src="/assets/consultation-home.jpg"
              alt="Dr. Stephen Lean performing in-clinic chiropractic consultation at Highfields"
              className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center transition-transform duration-700 hover:scale-102"
            />
            {/* Dark glass floating badge on hero */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-auto max-w-md bg-[#0A1128]/95 backdrop-blur-xl border border-white/15 p-4 sm:p-6 rounded-xl text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#E6286B] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  17y
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">Dr. Stephen Lean</h4>
                  <p className="text-white/60 text-xs">Practice Owner • Master of Chiropractic (Macquarie)</p>
                </div>
              </div>
              <p className="text-white/80 text-xs italic leading-relaxed">
                "Our practice has been established in Highfields for over 10 years. We are committed to helping our community one person at a time with evidence-based, compassionate care."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ACCREDITATION & FUND LOGO TICKER
      ======================================================== */}
      <section className="border-y border-black/5 bg-white/60 py-8 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60 flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0A1128]" /> Official Practice Accreditations
          </span>
          <div className="flex overflow-x-auto md:flex-wrap items-center gap-6 sm:gap-10 opacity-90 w-full md:w-auto scrollbar-none pb-2 md:pb-0 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
              <img src="/assets/aca-logo.png" alt="ACA Member" className="h-7 w-auto object-contain" />
              <span className="text-xs font-bold text-[#0A1128]">Australian Chiropractors Association</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <img src="/assets/chiro-australia-badge.jpg" alt="Chiropractic Australia" className="h-7 w-auto object-contain" />
              <span className="text-xs font-bold text-[#0A1128]">Chiropractic Australia</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <img src="/assets/massage-myotherapy-logo.png" alt="Massage & Myotherapy" className="h-7 w-auto object-contain" />
              <span className="text-xs font-bold text-[#0A1128]">Massage & Myotherapy Australia</span>
            </div>
            <span className="text-xs font-bold bg-[#204CB8] text-white px-3.5 py-1.5 rounded-full shadow-xs shrink-0">
              HICAPS Instant Claims
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHO ARE WE? / ABOUT SECTION
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1128] leading-tight">
              “Our Family Caring <br />
              <span className="text-[#0A1128]/60">For Your Family.”</span>
            </h2>
            <p className="text-[#0A1128]/80 text-sm leading-relaxed">
              At Highfields Chiropractic, our aim is to provide you with ongoing therapy and wellness care. Our practice has been established on Kratzke Road in Highfields for over 10 years, and we are committed to helping our community one person at a time.
            </p>
            <p className="text-[#0A1128]/80 text-sm leading-relaxed">
              Stephen Lean and his highly trained team of clinicians are dedicated to helping you enjoy the best of health. Whether managing acute disc bulges, chronic tension headaches, sports injuries, or prenatal pelvic changes, we provide quality care individually tailored to your body.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <FramerButton variant="primary" onClick={() => onNavigate('about')}>
                About Highfields Chiropractic
              </FramerButton>
              <button
                onClick={() => onNavigate('doctors')}
                className="text-xs font-bold text-[#0A1128] hover:underline flex items-center gap-1"
              >
                Meet Our 5 Clinicians <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Stat Cards Bento */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CLINIC_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#E6286B]/10 text-[#E6286B] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#E6286B] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#0A1128] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR SERVICES / TECHNIQUES
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
              Tailored Chiropractic Care
            </h2>
            <p className="text-[#0A1128]/70 text-sm mt-2 max-w-xl">
              Our Highfields Chiropractors are experienced with a broad suite of popular techniques. We select the gentle, targeted method that fits your comfort level.
            </p>
          </div>

          <FramerButton variant="outline" onClick={() => onNavigate('services')}>
            See All 8 Techniques
          </FramerButton>
        </div>

        {/* 4 Highlighted Bento Service Cards (using genuine Highfields images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.slice(0, 4).map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate(`service-${service.slug}`)}
              className="bg-white rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-extrabold text-[#0A1128]/20 group-hover:text-[#0A1128] transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EFF4FB] text-[#204CB8] group-hover:bg-[#E6286B] group-hover:text-white px-3 py-1 rounded-full transition-colors">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6 rounded-2xl overflow-hidden h-52 bg-zinc-100 border border-black/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0A1128] mb-2 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-xs text-[#0A1128]/70 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <span key={i} className="text-[10px] bg-[#EFF4FB] text-[#0A1128]/80 px-2.5 py-1 rounded-full font-medium">
                      {feat}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0A1128] text-white flex items-center justify-center group-hover:bg-[#E6286B] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          DEDICATED SECTION: SPONSORED TEAMS & COMMUNITY INVOLVEMENT
          (Official Highfields Clubs & Youth Organisations)
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-y border-black/5 my-12" id="sponsors-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6286B]/10 text-[#E6286B] text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-[#E6286B]" /> Community Involvement
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
              Proudly Supporting Highfields Youth & Local Sports Teams
            </h2>
            <p className="text-sm sm:text-base text-[#0A1128]/75 leading-relaxed">
              At Highfields Chiropractic, we take immense pride in supporting the youth and active athletes in our local community. Currently our clinic actively sponsors the following sporting clubs and organisations across the Darling Downs district.
            </p>
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SPONSORED_TEAMS.map((team) => (
              <div
                key={team.id}
                className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#EFF4FB] hover:bg-white rounded-xl p-6 sm:p-8 border border-black/5 hover:border-black/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-28 w-full bg-white rounded-2xl p-4 flex items-center justify-center mb-6 border border-black/5 shadow-sm group-hover:scale-102 transition-transform">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#204CB8] text-white px-3 py-1 rounded-full inline-block mb-3 shadow-xs">
                    {team.sport}
                  </span>

                  <h3 className="font-display text-lg font-bold text-[#0A1128] mb-1 group-hover:text-black">
                    {team.name}
                  </h3>
                  <p className="text-xs font-bold text-[#204CB8] mb-3">
                    {team.role}
                  </p>
                  <p className="text-xs text-[#0A1128]/75 leading-relaxed">
                    {team.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                  <span className="flex items-center gap-1.5 text-[11px] text-[#0A1128]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#204CB8]" /> Official Sponsor
                  </span>
                  <span className="text-[11px] text-[#0A1128] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Club Partner <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}

            {/* Additional Community Card: 10 Years Local Commitment */}
            <div className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#121F42] border border-white/10 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6286B] text-white flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Our Community Commitment
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  Stephen Lean and the team live, work, and raise their families right here on the Downs. We provide pitch-side spinal checks, coach injury prevention workshops, and invest back into grassroots junior sports.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <FramerButton
                  variant="accent"
                  onClick={onOpenBooking}
                  className="w-full !py-3 text-xs font-bold text-center"
                >
                  Book Athlete Screen
                </FramerButton>
              </div>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 text-xs font-semibold text-[#0A1128]/60 mt-4">
            <ChevronRight className="w-4 h-4 text-[#E6286B] animate-pulse" />
            <span>Swipe horizontally to view all 7 sponsored clubs</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          WORKING PROCESS
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0A1128] text-white my-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Clinical Process
            </h2>
            <p className="text-white/70 text-sm">
              From your initial consultation to active maintenance, we make spinal care transparent, gentle, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLINIC_PROCESS.map((proc, index) => {
              const isSelected = activeProcessTab === index;
              return (
                <div
                  key={proc.number}
                  onClick={() => setActiveProcessTab(index)}
                  className={`rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-[#0A1128] border-white shadow-2xl scale-102'
                      : 'bg-[#121F42] text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <span className={`block font-display text-4xl font-extrabold mb-4 ${
                      isSelected ? 'text-[#0A1128]' : 'text-[#E6286B]'
                    }`}>
                      {proc.number}
                    </span>
                    <h3 className={`font-display text-lg font-bold mb-2 ${
                      isSelected ? 'text-[#0A1128]' : 'text-white'
                    }`}>
                      {proc.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      isSelected ? 'text-[#0A1128]/75 font-normal' : 'text-white/65'
                    }`}>
                      {proc.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-bold">
                    <span>{isSelected ? 'Active Step' : 'Click to View'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          BEFORE & AFTER INTERACTIVE GALLERY
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <BeforeAfterSlider />
      </section>

      {/* ========================================================
          CLINICIANS & TEAM PREVIEW
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
              Meet Our Clinical Team
            </h2>
            <p className="text-[#0A1128]/70 text-sm mt-2 max-w-xl">
              Experienced, university-trained practitioners dedicated to empowering people to make positive health choices.
            </p>
          </div>

          <FramerButton variant="outline" onClick={() => onNavigate('doctors')}>
            See All Clinicians & Staff
          </FramerButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => onNavigate(`doctor-${doctor.slug}`)}
              className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-84 overflow-hidden bg-zinc-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0A1128]/85 backdrop-blur-md text-[#E6286B] text-[10px] font-bold px-3 py-1 rounded-full">
                  {doctor.experience}
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-1">
                  {doctor.role}
                </span>
                <h3 className="font-display text-xl font-bold text-[#0A1128] mb-2 group-hover:text-black">
                  {doctor.name}
                </h3>
                <p className="text-xs text-[#0A1128]/75 line-clamp-2 mb-4 leading-relaxed">
                  {doctor.bio[0]}
                </p>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                  <span>Consults: {doctor.consultationDays}</span>
                  <span className="text-xs text-[#0A1128] group-hover:text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Profile <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PATIENT TESTIMONIALS
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0A1128] text-white my-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                See What Our Patients Say
              </h2>
              <p className="text-white/70 text-sm mt-2 max-w-xl">
                Real stories from local Highfields families, athletes, and retirees who found lasting relief through evidence-based care.
              </p>
            </div>

            <FramerButton variant="accent" onClick={onOpenBooking}>
              Book Your First Visit
            </FramerButton>
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-white text-[#0A1128] rounded-xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    {test.condition}
                  </p>
                  <p className="text-xs text-[#0A1128]/80 leading-relaxed italic mb-6">
                    "{test.fullReview}"
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <h4 className="font-display font-bold text-sm text-[#0A1128]">{test.name}</h4>
                  <p className="text-[11px] text-[#0A1128]/60">{test.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 text-xs font-semibold text-white/60 mt-4">
            <ChevronRight className="w-4 h-4 text-[#E6286B] animate-pulse" />
            <span>Swipe horizontally to read more patient stories</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          WELLNESS & SPINE JOURNAL
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
              Wellness & Spine Journal
            </h2>
            <p className="text-[#0A1128]/70 text-sm mt-2 max-w-xl">
              Practical clinical ergonomics, injury recovery tips, and spinal insights written directly by our chiropractors.
            </p>
          </div>

          <FramerButton variant="outline" onClick={() => onNavigate('blog')}>
            Read All Articles
          </FramerButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate(`blog-${post.slug}`)}
              className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-zinc-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0A1128] text-[10px] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#0A1128]/60 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0A1128] mb-2 group-hover:text-black line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#0A1128]/75 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-black/5 text-xs font-bold text-[#0A1128]">
                <span>By {post.author}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          FAST-TRACK APPOINTMENT BANNER
      ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="bg-[#204CB8] text-white rounded-2xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          

          <div className="max-w-2xl space-y-4 relative z-10">
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get the Care Your Spine Deserves Today!
            </h2>
            <p className="text-sm font-normal text-white/85 leading-relaxed">
              Serving Highfields, Toowoomba, Meringandan, and Crows Nest. Open 5 days a week including late night Thursday until 7:00 PM. No GP referral required for private appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto relative z-10">
            <FramerButton
              variant="accent"
              onClick={onOpenBooking}
              className="!py-4 !px-8 text-sm font-bold shadow-xl whitespace-nowrap w-full sm:w-auto"
            >
              Make an Appointment
            </FramerButton>

            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-full text-sm font-bold transition-colors border border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#E6286B]" /> Call {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
