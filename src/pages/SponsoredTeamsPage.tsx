import React from 'react';
import { SPONSORED_TEAMS, CLINIC_INFO } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import { Trophy, ShieldCheck, Heart, ArrowLeft, Calendar, CheckCircle2, Award, Phone } from 'lucide-react';

interface SponsoredTeamsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const SponsoredTeamsPage: React.FC<SponsoredTeamsPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="pt-28 pb-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1128]/70 hover:text-[#0A1128] bg-white px-4 py-2 rounded-full border border-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
      </div>

      {/* Top Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6286B]/15 text-[#E6286B] text-xs font-bold uppercase tracking-wider mb-4">
          Grassroots Community Partnerships
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          Our Sponsored Sports Teams & Clubs
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-3xl mx-auto leading-relaxed">
          At Highfields Chiropractic, we take pride in supporting the youth in our community. Currently our clinic sponsors the following sporting clubs and organisations across Highfields and the Darling Downs.
        </p>
      </section>

      {/* Grid of all 7 Official Clubs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPONSORED_TEAMS.map((team, idx) => (
            <div
              key={team.id}
              className="bg-white rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-32 w-full bg-[#EFF4FB] rounded-2xl p-4 flex items-center justify-center mb-6 border border-[#204CB8]/10 group-hover:scale-102 transition-transform">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#204CB8] text-white px-3 py-1 rounded-full shadow-sm">
                    {team.sport}
                  </span>
                  <span className="text-[11px] font-bold text-[#0A1128]/50">
                    Partner #{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0A1128] mb-1">
                  {team.name}
                </h3>
                <p className="text-xs font-bold text-[#204CB8] mb-4">
                  {team.role}
                </p>
                <p className="text-xs text-[#0A1128]/75 leading-relaxed">
                  {team.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                <span className="flex items-center gap-1.5 text-[11px] text-[#0A1128]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#204CB8] mr-1.5 inline-block" /> Verified Club Partner
                </span>
                <span className="text-[11px] font-semibold text-[#204CB8]">
                  Highfields QLD
                </span>
              </div>
            </div>
          ))}

          {/* Special Rural Youth Camp Feature Card */}
          <div className="bg-[#121F42] text-white rounded-xl p-8 flex flex-col justify-between shadow-xl border border-white/10">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6286B] text-white flex items-center justify-center font-bold shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Rural Heritage & Agricultural Youth
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Dr. Stephen Lean is a cattle producer on his property outside Highfields. In addition to local football, swimming, netball, rugby, and cricket, our practice is deeply committed to supporting regional rural youth development through Simmental Australia's Youth Camp.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <FramerButton
                variant="accent"
                onClick={onOpenBooking}
                className="w-full !py-3.5 text-xs font-bold text-center"
              >
                Book Athletic & Family Checkup
              </FramerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Community Message Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#204CB8] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-1">
              Are you part of a local Highfields sports club?
            </h3>
            <p className="text-xs sm:text-sm font-normal text-white/85">
              We offer pre-season musculoskeletal assessments, rapid concussion protocol checks, and injury rehab for local club athletes.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <FramerButton variant="accent" onClick={onOpenBooking}>
              Book Club Assessment
            </FramerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
