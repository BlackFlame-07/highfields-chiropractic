import React from 'react';
import { CLINIC_INFO, DOCTORS, SPONSORED_TEAMS } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import {
  Calendar,
  ShieldCheck,
  Award,
  Users,
  Target,
  Sparkles,
  Heart,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Phone,
  Trophy
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          Established Over 10 Years in Highfields
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          About Our Practice
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-3xl mx-auto leading-relaxed">
          Highfields Chiropractic is a family friendly clinic currently located on Kratzke Road in Highfields. Patients of all ages are welcomed into the practice with warmth, dignity, and clinical excellence.
        </p>
      </section>

      {/* Hero Image Suite using Highfields Genuine Web Images */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-2xl overflow-hidden h-96 sm:h-[480px] bg-zinc-200 shadow-xl border border-black/5">
            <img
              src="/assets/team-photo.jpg"
              alt="Highfields Chiropractic Clinic Team Outside Clinic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden h-44 sm:h-[228px] bg-zinc-200 shadow-md border border-black/5">
              <img
                src="/assets/consultation-about.jpg"
                alt="Patient consultation room at Highfields Chiropractic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#0A1128] text-white p-8 rounded-2xl flex-1 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[#E6286B] text-xs font-bold uppercase tracking-wider block mb-2">
                  Practice Philosophy
                </span>
                <p className="font-display text-lg font-bold italic text-[#E6286B]">
                  {CLINIC_INFO.motto}
                </p>
              </div>
              <p className="text-xs text-white/70 mt-4 leading-relaxed">
                Stephen Lean and his highly trained team of clinicians are dedicated to helping you enjoy the best of health with care individually tailored to your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-y border-black/5 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-2">
              Our Ethical Foundation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
              Vision, Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-[#EFF4FB] rounded-xl p-8 border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#E6286B] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">Our Vision</h3>
              <p className="text-sm text-[#0A1128]/80 leading-relaxed">
                Providing the highest quality Chiropractic care to individuals and families across Highfields, Toowoomba, and the greater Darling Downs.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#EFF4FB] rounded-xl p-8 border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#E6286B] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">Our Mission</h3>
              <p className="text-sm text-[#0A1128]/80 leading-relaxed">
                We deliver evidence-based Chiropractic therapy as a collaborative team whose sole focus is the patient. We advance our clinical knowledge through shared experience and continuous professional development.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#EFF4FB] rounded-xl p-8 border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#E6286B] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">Our Values</h3>
              <ul className="text-xs text-[#0A1128]/80 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                  <span>We value our patients and each other.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                  <span>We believe in evidence and a patient-centred framework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                  <span>We celebrate diversity of patients, skills, and experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                  <span>We empower patients in a supportive & compassionate environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Roster */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-2">
            Clinical Excellence & Administration
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A1128]">
            Our Team
          </h2>
          <p className="text-sm text-[#0A1128]/70 mt-2">
            Meet the practitioners and friendly support staff who care for you at every visit.
          </p>
        </div>

        <div className="space-y-12">
          {DOCTORS.map((doc, idx) => (
            <div
              key={doc.id}
              className={`bg-white rounded-2xl p-6 sm:p-10 border border-black/5 shadow-md flex flex-col lg:flex-row items-center gap-8 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-72 h-80 sm:h-96 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0 shadow-md">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60">
                      {doc.role}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
                      {doc.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold bg-[#E6286B] text-white px-4 py-1.5 rounded-full">
                    {doc.experience}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#0A1128]/80">
                  {doc.bio.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {doc.degrees.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-[#0A1128] block mb-1">
                      Qualifications & Memberships:
                    </span>
                    <ul className="space-y-1 text-xs text-[#0A1128]/70">
                      {doc.degrees.map((deg, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A1128]" />
                          <span>{deg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A1128]/70">
                    Consultation Days: <strong>{doc.consultationDays}</strong>
                  </span>
                  <FramerButton
                    variant="primary"
                    onClick={() => onNavigate(`doctor-${doc.slug}`)}
                    className="!py-2.5 !px-5 text-xs font-bold"
                  >
                    View Clinician Profile
                  </FramerButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Involvement / Youth Sponsorships with Official Team Logos */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-[#121F42] text-white rounded-2xl p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6286B]/20 text-[#E6286B] text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-4 h-4 text-[#E6286B]" /> Grassroots Community Support
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Community Involvement & Sponsored Teams
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              At Highfields Chiropractic, we take pride in supporting the youth in our community. Currently our clinic proudly sponsors the following sporting clubs and local organisations across the district.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SPONSORED_TEAMS.map((club) => (
              <div
                key={club.id}
                className="bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="h-20 w-full bg-white rounded-2xl p-3 flex items-center justify-center mb-4 shadow-sm">
                    <img
                      src={club.logo}
                      alt={club.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6286B] block mb-1">
                    {club.sport}
                  </span>
                  <h4 className="font-bold text-sm text-white mb-1">{club.name}</h4>
                  <p className="text-[11px] text-white/60 mb-2">{club.role}</p>
                  <p className="text-xs text-white/75 leading-relaxed">{club.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
