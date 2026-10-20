import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import { ArrowLeft, CheckCircle2, Calendar, Award, BookOpen, Quote, Clock, Phone } from 'lucide-react';

interface DoctorDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const doctor = DOCTORS.find((d) => d.slug === slug || d.id === slug) || DOCTORS[0];

  return (
    <div className="pt-28 pb-20">
      {/* Back to team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('doctors')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1128]/70 hover:text-[#0A1128] bg-white px-4 py-2 rounded-full border border-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Team Members
        </button>
      </div>

      {/* Main Profile Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Doctor Portrait & Fast Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden h-[460px] bg-zinc-200 shadow-2xl border border-black/5">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="bg-white rounded-xl p-6 border border-black/5 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0A1128]" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1128]/60 block">
                    In Clinic Days:
                  </span>
                  <span className="text-sm font-bold text-[#0A1128]">{doctor.consultationDays}</span>
                </div>
              </div>

              <FramerButton
                variant="accent"
                onClick={onOpenBooking}
                className="w-full !py-3.5 text-center font-bold"
              >
                Book with {doctor.name}
              </FramerButton>
            </div>
          </div>

          {/* Doctor Info & Detailed Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-2">
                {doctor.role}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight mb-2">
                {doctor.name}
              </h1>
              <p className="text-sm font-bold text-[#0A1128]/70">{doctor.title}</p>
            </div>

            {/* Philosophy Callout Quote */}
            <div className="bg-[#121F42] text-white p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden">
              <Quote className="w-10 h-10 text-[#E6286B]/20 absolute top-4 right-4" />
              <p className="font-display text-base sm:text-lg font-bold text-[#E6286B] italic leading-relaxed relative z-10">
                "{doctor.philosophy}"
              </p>
            </div>

            {/* Full Bio Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#0A1128]/80 leading-relaxed">
              {doctor.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Qualifications & Degrees */}
            {doctor.degrees.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-black/5">
                <h3 className="font-display text-lg font-bold text-[#0A1128]">
                  Degrees & Professional Credentials
                </h3>
                <ul className="space-y-2 text-xs text-[#0A1128]/80">
                  {doctor.degrees.map((deg, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#0A1128] flex-shrink-0" />
                      <span>{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specialties */}
            <div className="space-y-3 pt-4 border-t border-black/5">
              <h3 className="font-display text-lg font-bold text-[#0A1128]">
                Special Interest & Clinical Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-white px-3.5 py-1.5 rounded-full border border-black/10 text-[#0A1128]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
