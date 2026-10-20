import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { SponsoredTeamsPage } from './pages/SponsoredTeamsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = `/${page}`;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    if (currentPage.startsWith('service-')) {
      const slug = currentPage.replace('service-', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenBooking={() => setBookingModalOpen(true)}
        />
      );
    }

    if (currentPage.startsWith('doctor-')) {
      const slug = currentPage.replace('doctor-', '');
      return (
        <DoctorDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenBooking={() => setBookingModalOpen(true)}
        />
      );
    }

    if (currentPage.startsWith('blog-')) {
      const slug = currentPage.replace('blog-', '');
      return (
        <BlogDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenBooking={() => setBookingModalOpen(true)}
        />
      );
    }

    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
      case 'doctors':
        return (
          <DoctorsPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
      case 'sponsors':
        return (
          <SponsoredTeamsPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage onOpenBooking={() => setBookingModalOpen(true)} />;
      case 'book-appointment':
        return <BookingPage onNavigate={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A1128] selection:bg-[#E6286B] selection:text-white">
      {/* Floating Pill Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Main Content Area (padded on mobile to prevent sticky bar overlap) */}
      <main className="flex-1 max-md:pb-20">
        {renderCurrentPage()}
      </main>

      {/* Elevated Highfields Midnight Sapphire Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Mobile-Only Sticky Quick Action Bar (Thumb-Zone Architecture - strictly < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-4 py-2.5 shadow-2xl safe-area-pb">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* 1-Tap Call Clinic Button */}
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#EFF4FB] text-[#204CB8] font-bold text-xs active:scale-95 transition-transform"
            aria-label="Call Highfields Chiropractic Clinic Directly"
          >
            <Phone className="w-4 h-4" />
            <span>Call Clinic</span>
          </a>

          {/* 1-Tap Book Online CTA */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="flex-[1.5] flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#E6286B] text-white font-bold text-xs shadow-md shadow-[#E6286B]/25 active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online</span>
          </button>
        </div>
      </div>

      {/* Global Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
