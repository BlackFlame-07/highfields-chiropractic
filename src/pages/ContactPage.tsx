import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Chiropractic Care');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          Direct Clinic Reception
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          Contact Us
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-2xl mx-auto leading-relaxed">
          Have a question about our chiropractic techniques, Medicare CDM plans, or booking availability? Reach out to our Highfields reception team.
        </p>
      </section>

      {/* Main Grid: Form + Clinic Details */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1128] text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-8">
              <div>
                <span className="text-[#E6286B] text-xs font-bold uppercase tracking-wider block mb-2">
                  Highfields Clinic Location
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Visit Our Practice
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  Conveniently located on Kratzke Road in Highfields with easy on-site patient parking and step-free clinic access.
                </p>
              </div>

              <div className="space-y-4 text-xs text-white/80">
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#E6286B] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-white font-bold text-sm">{CLINIC_INFO.phone}</strong>
                    <span>Direct Telephone Enquiries</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E6286B] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-white font-bold text-sm">43 Kratzke Rd</strong>
                    <span>Highfields QLD 4352, Australia</span>
                  </div>
                </div>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#E6286B] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-white font-bold text-sm">{CLINIC_INFO.email}</strong>
                    <span>Email Inquiries & Referrals</span>
                  </div>
                </a>
              </div>

              {/* 2026 Clinic Hours */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Clock className="w-4 h-4 text-[#E6286B]" /> 2026 Clinic Hours
                </div>
                <div className="space-y-1.5 text-xs text-white/70">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1 border-b border-white/5 ${
                        h.day.includes('Thursday') ? 'text-[#E6286B] font-bold' : ''
                      }`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <FramerButton
                  variant="accent"
                  onClick={onOpenBooking}
                  className="w-full !py-3.5 text-center font-bold"
                >
                  Book Online Appointment
                </FramerButton>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-12 border border-black/5 shadow-md flex flex-col justify-between">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6286B]/15 text-[#E6286B] mx-auto flex items-center justify-center border-2 border-[#E6286B]">
                  <CheckCircle2 className="w-8 h-8 text-[#E6286B]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                  Message Successfully Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#0A1128]/70 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our reception team will review your inquiry and get back to you shortly during clinic hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-[#204CB8] underline mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]/60 block mb-1">
                    Send an Inquiry
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                    For General Inquiries & Patient Support
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A1128] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lachlan Davies"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A1128] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A1128] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A1128] mb-1.5">
                      Service Enquiring About *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                    >
                      <option value="General Chiropractic">General Chiropractic Assessment</option>
                      <option value="Diversified Technique">Diversified Technique</option>
                      <option value="Thompson Drop Table">Thompson Drop Table</option>
                      <option value="Sports Rehab & Dry Needling">Sports Rehab & Dry Needling</option>
                      <option value="Pediatric Care">Pediatric & Reflex Care</option>
                      <option value="Medicare CDM or DVA">Medicare CDM / DVA Referral</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-1.5">
                    Your Message or Health Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the symptoms you are experiencing or what you would like to know..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#0A1128]/60 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0A1128]" />
                    Your information is private and secure.
                  </span>
                  <FramerButton variant="primary" className="!py-3.5 !px-8 font-bold">
                    Send Inquiry
                  </FramerButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Live Map Frame */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">
                How to Find Us on Kratzke Road
              </h3>
              <p className="text-xs text-[#0A1128]/70">
                43 Kratzke Rd, Highfields QLD 4352 — Just off Highfields Rd & New England Hwy.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=43+Kratzke+Rd,+Highfields+QLD+4352"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#204CB8] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#173C99] transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#E6286B]" /> Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full border border-black/10 bg-zinc-100">
            <iframe
              title="Highfields Chiropractic Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=43+Kratzke+Rd,+Highfields+QLD+4352,+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
