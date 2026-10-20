import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import { ArrowRight, CheckCircle2, Sparkles, HelpCircle, Activity, ChevronDown } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between Diversified and Thompson Drop Table?",
      a: "Diversified involves manual joint adjustments that may produce a harmless cavitation ('pop' of nitrogen gas). Thompson Drop Table uses specialized pneumatic cushions that drop slightly to assist the adjustment without any twisting or cracking, making it ideal for pregnant mothers or sensitive spines."
    },
    {
      q: "Do I need a doctor's referral to see a Chiropractor at Highfields?",
      a: "No referral is needed for private patients. You can book directly and claim on-the-spot with HICAPS using your private health fund. However, if you are utilizing a Medicare Chronic Disease Management (CDM / EPC) plan or DVA benefits, please have your GP referral documentation with you."
    },
    {
      q: "Does a chiropractic adjustment hurt?",
      a: "Chiropractic adjustments are generally pain-free and often provide immediate relief from tension. If a joint is already acutely inflamed, you might feel brief tenderness, but our clinicians always adjust force levels and techniques to suit your comfort."
    },
    {
      q: "Can children and seniors receive chiropractic treatment safely?",
      a: "Absolutely. We routinely care for multi-generational families. For infants and toddlers, we use feather-light touch and Retained Neonatal Reflex therapy. For seniors, we utilize low-force drop tables, SOT blocks, and gentle Activator instruments suited to delicate bones."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Top Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          World Federation of Chiropractic Standard
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          Chiropractic Techniques
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-3xl mx-auto leading-relaxed">
          The World Federation of Chiropractic defines Chiropractic as the diagnosis, treatment, and prevention of mechanical disorders of the musculoskeletal system, and the effects of these disorders on the nervous system.
        </p>
      </section>

      {/* Grid of all 8 Techniques */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate(`service-${service.slug}`)}
              className="bg-white rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-extrabold text-[#0A1128]/20 group-hover:text-[#0A1128] transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EFF4FB] text-[#204CB8] group-hover:bg-[#E6286B] group-hover:text-white px-3 py-1 rounded-full transition-colors">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6 rounded-2xl overflow-hidden h-52 bg-zinc-100">
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

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-[#0A1128] block">
                    Ideal for symptoms such as:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.indications.slice(0, 3).map((ind, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#EFF4FB] text-[#0A1128]/80 px-2.5 py-1 rounded-full font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                <span>Lead: {service.doctorInCharge}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Full Technique Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technique FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-2">
            Clear Answers
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#0A1128]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-display font-bold text-base text-[#0A1128] flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[#0A1128]/80 leading-relaxed border-t border-black/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1128] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Unsure which technique fits your condition?
            </h3>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Our chiropractors assess your symptoms in person and explain every step before starting any adjustment.
            </p>
          </div>
          <FramerButton variant="accent" onClick={onOpenBooking}>
            Book Your Assessment
          </FramerButton>
        </div>
      </section>
    </div>
  );
};
