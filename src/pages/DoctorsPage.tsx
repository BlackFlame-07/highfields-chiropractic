import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import { ArrowRight, Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface DoctorsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          University-Trained Allied Health
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          Our Team
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-3xl mx-auto leading-relaxed">
          Stephen Lean and his highly trained team of clinicians and assistants are dedicated to helping you enjoy the best of health with genuine care tailored to your requirements.
        </p>
      </section>

      {/* Clinicians Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onNavigate(`doctor-${doc.slug}`)}
              className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-84 overflow-hidden bg-zinc-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#0A1128]/85 backdrop-blur-md text-[#E6286B] text-[10px] font-bold px-3 py-1 rounded-full">
                    {doc.experience}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-1">
                    {doc.role}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#0A1128] mb-2 group-hover:text-black">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#0A1128]/75 line-clamp-3 mb-4 leading-relaxed">
                    {doc.bio[0]}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]/60 block">
                      Key Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {doc.specialties.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-[10px] bg-[#EFF4FB] text-[#0A1128]/80 px-2.5 py-0.5 rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                <span>Days: {doc.consultationDays}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Profile <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#204CB8] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-1">
              Ready to meet with our clinicians?
            </h3>
            <p className="text-xs sm:text-sm font-normal text-white/85">
              Online booking available 24/7 or speak directly with Melian & Melitta at our front desk.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <FramerButton variant="accent" onClick={onOpenBooking}>
              Book With a Practitioner
            </FramerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
