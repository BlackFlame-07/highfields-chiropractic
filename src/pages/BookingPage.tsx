import React, { useState } from 'react';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { FramerButton } from '../components/FramerButton';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  User,
  Phone,
  Mail,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: string) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-10-23');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [fundType, setFundType] = useState('private');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const times = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:00 AM',
    '01:30 PM', '02:30 PM', '03:15 PM', '04:00 PM', '05:00 PM', '06:00 PM (Thursday Only)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          Online Patient Intake & Triage
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-4">
          Book Your Appointment
        </h1>
        <p className="text-base sm:text-lg text-[#0A1128]/75 max-w-2xl mx-auto leading-relaxed">
          You can book your Highfields Chiropractic appointment online below in under 2 minutes. Open 5 days a week on Kratzke Road.
        </p>
      </section>

      {/* Main Booking Container */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-black/5 shadow-xl overflow-hidden p-6 sm:p-12">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#E6286B]/15 text-[#E6286B] mx-auto flex items-center justify-center border-2 border-[#E6286B]">
                <CheckCircle2 className="w-10 h-10 text-[#E6286B]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl font-extrabold text-[#0A1128]">
                  Your Appointment Request Has Been Received!
                </h3>
                <p className="text-sm text-[#0A1128]/75 max-w-md mx-auto">
                  Thank you, <strong>{patientName}</strong>. Our front desk coordinator Melian or Melitta will confirm your time via SMS or phone call at <strong>{patientPhone}</strong>.
                </p>
              </div>

              <div className="bg-[#EFF4FB] rounded-xl p-6 text-left max-w-md mx-auto space-y-3 text-xs border border-black/5">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#0A1128]/60">Technique:</span>
                  <span className="font-bold text-[#0A1128]">
                    {SERVICES.find(s => s.id === selectedService)?.title}
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#0A1128]/60">Clinician:</span>
                  <span className="font-bold text-[#0A1128]">
                    {DOCTORS.find(d => d.id === selectedDoctor)?.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#0A1128]/60">Date & Time:</span>
                  <span className="font-bold text-[#0A1128]">{selectedDate} @ {selectedTime}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-[#0A1128]/60">Payment / Claim:</span>
                  <span className="font-semibold text-[#0A1128] uppercase">{fundType}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#0A1128]/60">Location:</span>
                  <span className="font-medium text-[#0A1128]">43 Kratzke Rd, Highfields QLD</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <FramerButton variant="primary" onClick={() => onNavigate('home')}>
                  Return to Home
                </FramerButton>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-full border border-black/15 text-xs font-bold text-[#0A1128]"
                >
                  Book Another Patient
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128]/70 mb-3">
                  Step 1: Choose Your Preferred Technique
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        selectedService === s.id
                          ? 'border-[#204CB8] bg-[#204CB8] text-white shadow-md'
                          : 'border-black/10 bg-[#EFF4FB] text-[#0A1128] hover:border-black/20'
                      }`}
                    >
                      <span className="block font-bold text-sm">{s.title}</span>
                      <span className={`block text-[11px] mt-0.5 ${selectedService === s.id ? 'text-[#E6286B]' : 'opacity-75'}`}>{s.shortDesc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Practitioner */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128]/70 mb-3">
                  Step 2: Choose Your Chiropractor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DOCTORS.slice(0, 3).map((doc) => (
                    <button
                      type="button"
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                        selectedDoctor === doc.id
                          ? 'border-[#204CB8] bg-[#204CB8] text-white shadow-md'
                          : 'border-black/10 bg-[#EFF4FB] text-[#0A1128] hover:border-black/20'
                      }`}
                    >
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/20"
                      />
                      <div className="min-w-0">
                        <span className="block text-xs font-bold truncate">{doc.name}</span>
                        <span className={`block text-[10px] truncate ${selectedDoctor === doc.id ? 'text-[#E6286B]' : 'text-slate-500'}`}>
                          {doc.role}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128]/70 mb-2">
                    Step 3: Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128]/70 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Patient Info */}
              <div className="space-y-4 pt-4 border-t border-black/5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128]/70">
                  Step 4: Patient Registration Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Patient Full Name *"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Mobile Phone (for SMS confirmation) *"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                />

                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your current symptoms (e.g. lower back pain, neck stiffness, sports injury, migraine, routine check)..."
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full bg-[#EFF4FB] border border-black/10 rounded-2xl px-4 py-3 text-xs text-[#0A1128] focus:outline-none focus:border-[#0A1128]"
                />

                {/* Health Fund Radios */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#0A1128]/80 pt-2">
                  <span className="font-bold">Insurance / Claim:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="bookingFund"
                      value="private"
                      checked={fundType === 'private'}
                      onChange={() => setFundType('private')}
                    />
                    Private Health (HICAPS)
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="bookingFund"
                      value="medicare"
                      checked={fundType === 'medicare'}
                      onChange={() => setFundType('medicare')}
                    />
                    Medicare CDM / EPC Plan
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="bookingFund"
                      value="dva"
                      checked={fundType === 'dva'}
                      onChange={() => setFundType('dva')}
                    />
                    DVA Card
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#0A1128]/60 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0A1128]" />
                  Zero booking fees. Reschedule anytime with friendly notice.
                </span>

                <FramerButton variant="accent" className="!py-4 !px-10 text-sm font-bold w-full sm:w-auto">
                  Confirm & Book Appointment
                </FramerButton>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
