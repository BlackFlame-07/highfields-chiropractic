import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1128]/70 hover:text-[#0A1128] bg-white px-4 py-2 rounded-full border border-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider">
            Australian Privacy Principles (APPs)
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#0A1128]/60">
            Highfields Chiropractic • Last Reviewed: 2026 Annual Audit
          </p>
        </div>

        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-black/5 shadow-md space-y-8 text-xs sm:text-sm text-[#0A1128]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              1. Introduction
            </h2>
            <p>
              This privacy policy is to provide information to you, the client, on how your personal information is collected and used within our practice, and the circumstances in which we may share it with third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              2. Why and When Your Consent is Necessary
            </h2>
            <p>
              When you register as a patient/client of our practice, you provide consent for our Therapists and practice staff to access and use your personal information so they can provide you with the best possible healthcare. Only staff who need to see your personal information will have access to it. If we need to use your information for anything else, we will seek additional consent from you to do this.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              3. Why Do We Collect, Use, Hold and Share Your Information?
            </h2>
            <p>
              Our practice needs to collect your personal information to provide healthcare services to you. Our main purpose for collecting, using, holding and sharing your personal information is to manage your health. We also use it for directly related business activities, such as financial claims and payments, practice audits and accreditation, and business processes (e.g. staff training).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              4. What Personal Information Do We Collect?
            </h2>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Names, date of birth, addresses, contact details</li>
              <li>Health information including health history, medications, allergies, adverse events, immunisations, social history, family history and risk factors</li>
              <li>Healthcare identifiers and Medicare/DVA registration</li>
              <li>Health fund details for identification and electronic HICAPS claiming purposes</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              5. How Do We Collect Your Personal Information?
            </h2>
            <p>
              Our practice will collect your personal information when you make your first appointment via registration, during the course of providing clinical health services, or when you visit our website, send an email, or telephone us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              6. Who Do We Share Your Personal Information With?
            </h2>
            <p>
              We sometimes share your personal information with other involved healthcare providers (e.g. your referring GP or imaging clinic), with third parties for business accreditation, or when required/authorised by Australian law (e.g. court subpoenas or statutory notifications).
            </p>
            <p className="font-medium text-[#0A1128]">
              Our practice does NOT share personal information with any third party for commercial marketing without your express consent. We do NOT share data outside Australia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              7. How Do We Store and Protect Your Personal Information?
            </h2>
            <p>
              Your personal information may be stored at our practice in paper and electronic records. All computers are password protected, encrypted, and secure cabinets are utilized for physical documentation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#0A1128]">
              8. Complaints and Corrections
            </h2>
            <p>
              You have the right to request access to and correction of your personal information by contacting us in writing at <a href="mailto:info@highfieldschiropractic.com.au" className="underline font-bold text-[#0A1128]">info@highfieldschiropractic.com.au</a>.
            </p>
            <p>
              You may also contact the Office of the Australian Information Commissioner (OAIC) by visiting <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer" className="underline font-bold text-[#0A1128]">www.oaic.gov.au</a> or calling 1300 336 002.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};
