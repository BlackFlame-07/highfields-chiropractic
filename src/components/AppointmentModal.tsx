import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { DOCTORS, SERVICES, CLINIC_INFO } from '../data/clinicData';
import { FramerButton } from './FramerButton';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor,
  preselectedService,
}) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedService || SERVICES[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor || DOCTORS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-10-22');
  const [selectedTime, setSelectedTime] = useState('09:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [healthFund, setHealthFund] = useState('private');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const times = [
    '08:30 AM', '09:00 AM', '09:30 AM', '10:30 AM', '11:15 AM',
    '01:30 PM', '02:15 PM', '03:00 PM', '04:30 PM', '05:15 PM', '06:15 PM (Thu Only)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-xl rounded-b-none sm:rounded-b-xl shadow-2xl border border-black/10 overflow-hidden my-0 sm:my-8 max-h-[92vh] sm:max-h-none flex flex-col">
        {/* Mobile Drag Indicator Handle */}
        <div className="md:hidden bg-[#204CB8] pt-2 pb-1 flex justify-center">
          <div className="w-12 h-1.5 bg-white/40 rounded-full" />
        </div>

        {/* Header */}
        <div className="bg-[#204CB8] text-white px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E6286B] text-white flex items-center justify-center shadow-sm shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold">Book Your Appointment</h3>
              <p className="text-white/80 text-xs">Highfields Chiropractic Clinic • 43 Kratzke Rd</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-white/70 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close booking modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 sm:p-12 text-center space-y-4 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
            <div className="w-16 h-16 rounded-full bg-[#E6286B]/15 text-[#E6286B] mx-auto flex items-center justify-center border-2 border-[#E6286B]">
              <CheckCircle2 className="w-8 h-8 text-[#E6286B]" />
            </div>
            <h4 className="font-display text-2xl font-bold text-[#0A1128]">
              Appointment Request Confirmed!
            </h4>
            <p className="text-sm text-[#0A1128]/75 max-w-md mx-auto">
              Thank you, <strong>{patientName || 'valued patient'}</strong>. Melian or Melitta from our reception desk will contact you at <strong>{patientPhone || 'your phone'}</strong> to finalize your booking details.
            </p>

            <div className="bg-[#EFF4FB] p-5 rounded-2xl text-left text-xs space-y-2 border border-[#204CB8]/10 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#0A1128]/60">Technique / Service:</span>
                <span className="font-bold text-[#204CB8]">
                  {SERVICES.find(s => s.id === selectedService)?.title || selectedService}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A1128]/60">Practitioner:</span>
                <span className="font-bold text-[#204CB8]">
                  {DOCTORS.find(d => d.id === selectedDoctor)?.name || selectedDoctor}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A1128]/60">Requested Time:</span>
                <span className="font-bold text-[#0A1128]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A1128]/60">Clinic Address:</span>
                <span className="font-medium text-[#0A1128]">43 Kratzke Rd, Highfields QLD</span>
              </div>
            </div>

            <div className="pt-4">
              <FramerButton variant="primary" onClick={resetForm} className="!py-3.5 !px-8 w-full sm:w-auto min-h-[48px]">
                Done & Return to Site
              </FramerButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 overflow-y-auto flex-1 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:pb-8">
            {/* Step 1: Select Service & Doctor */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#204CB8]">
                1. Select Preferred Chiropractic Technique
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.slice(0, 4).map((srv) => (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`text-left p-3.5 rounded-2xl text-xs font-semibold border transition-all min-h-[48px] ${
                      selectedService === srv.id
                        ? 'border-[#204CB8] bg-[#204CB8] text-white shadow-sm'
                        : 'border-[#204CB8]/15 bg-[#EFF4FB] text-[#0A1128] hover:border-[#204CB8]/30'
                    }`}
                  >
                    <span className="block font-bold">{srv.title}</span>
                    <span className={`block text-[11px] font-normal mt-0.5 ${selectedService === srv.id ? 'text-[#E6286B]' : 'opacity-75'}`}>{srv.category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Picker */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#204CB8]">
                2. Select Preferred Clinician
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {DOCTORS.slice(0, 3).map((doc) => (
                  <button
                    type="button"
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`text-left p-3 rounded-2xl border transition-all flex items-center gap-3 min-h-[48px] ${
                      selectedDoctor === doc.id
                        ? 'border-[#204CB8] bg-[#204CB8] text-white shadow-sm'
                        : 'border-[#204CB8]/15 bg-[#EFF4FB] text-[#0A1128] hover:border-[#204CB8]/30'
                    }`}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20 shrink-0"
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

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#204CB8] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8] min-h-[44px]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#204CB8] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8] min-h-[44px]"
                >
                  {times.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Contact Info */}
            <div className="space-y-3 pt-2 border-t border-[#204CB8]/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#204CB8]">
                3. Patient Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8] min-h-[44px]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (e.g., 0412 345 678) *"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8] min-h-[44px]"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                className="w-full bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8] min-h-[44px]"
              />
              <textarea
                rows={2}
                placeholder="Describe your current symptoms or goal (e.g., lower back stiffness, neck tension, postpartum pelvic check)..."
                value={patientNotes}
                onChange={(e) => setPatientNotes(e.target.value)}
                className="w-full bg-[#EFF4FB] border border-[#204CB8]/15 rounded-xl px-4 py-3 text-xs sm:text-xs text-[#0A1128] focus:outline-none focus:border-[#204CB8]"
              />
            </div>

            {/* Health Fund Option */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 text-xs text-[#0A1128]/80">
              <span className="font-semibold text-xs text-[#204CB8]">Payment / Referral:</span>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 cursor-pointer py-1 min-h-[36px]">
                  <input
                    type="radio"
                    name="fund"
                    value="private"
                    checked={healthFund === 'private'}
                    onChange={() => setHealthFund('private')}
                    className="w-4 h-4 text-[#204CB8]"
                  />
                  <span>Private Health (HICAPS)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer py-1 min-h-[36px]">
                  <input
                    type="radio"
                    name="fund"
                    value="medicare"
                    checked={healthFund === 'medicare'}
                    onChange={() => setHealthFund('medicare')}
                    className="w-4 h-4 text-[#204CB8]"
                  />
                  <span>Medicare CDM</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer py-1 min-h-[36px]">
                  <input
                    type="radio"
                    name="fund"
                    value="dva"
                    checked={healthFund === 'dva'}
                    onChange={() => setHealthFund('dva')}
                    className="w-4 h-4 text-[#204CB8]"
                  />
                  <span>DVA Card</span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-3 border-t border-[#204CB8]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-[11px] text-[#0A1128]/60 flex items-center gap-1.5 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#204CB8] shrink-0" />
                <span>No cancellation fees. Confirmation via SMS.</span>
              </div>
              <FramerButton variant="accent" className="!py-3.5 !px-7 font-bold w-full sm:w-auto min-h-[48px] justify-center">
                Confirm & Request Booking
              </FramerButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
