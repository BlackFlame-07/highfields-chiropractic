import React from 'react';
import { SERVICES, ServiceTechnique } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Activity,
  UserCheck
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  return (
    <div className="pt-28 pb-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1128]/70 hover:text-[#0A1128] bg-white px-4 py-2 rounded-full border border-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Techniques
        </button>
      </div>

      {/* Main Hero of the Service */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-extrabold text-[#0A1128]/30">
                {service.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-[#E6286B] text-white px-3.5 py-1 rounded-full">
                {service.category}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#0A1128]/80 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <FramerButton variant="primary" onClick={onOpenBooking}>
                Book Consultation for {service.title}
              </FramerButton>
              <div className="text-xs font-bold text-[#0A1128]/70 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#0A1128]" />
                Lead Practitioner: <strong>{service.doctorInCharge}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-96 sm:h-[460px] bg-zinc-200 shadow-2xl border border-black/5">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Pillars: What to expect & Evidence */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What to expect */}
          <div className="bg-white rounded-xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#0A1128] text-[#E6286B] flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0A1128]">
              What to Expect During Care
            </h3>
            <p className="text-xs text-[#0A1128]/80 leading-relaxed">
              {service.whatToExpect}
            </p>
          </div>

          {/* Scientific Evidence */}
          <div className="bg-white rounded-xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#0A1128] text-[#E6286B] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0A1128]">
              Clinical Evidence & Mechanism
            </h3>
            <p className="text-xs text-[#0A1128]/80 leading-relaxed">
              {service.evidence}
            </p>
          </div>
        </div>
      </section>

      {/* Indications & Key Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-[#121F42] text-white rounded-2xl p-8 sm:p-12 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-[#E6286B]">
                Conditions Typically Treated
              </h3>
              <ul className="space-y-3 text-xs text-white/80">
                {service.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-[#E6286B]">
                Technique Highlights
              </h3>
              <ul className="space-y-3 text-xs text-white/80">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
