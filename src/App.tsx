import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProofTicker from './components/SocialProofTicker';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FreedomCalculator from './components/FreedomCalculator';
import HowItWorks from './components/HowItWorks';
import AuthoritySection from './components/AuthoritySection';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import UniversalConversionModal from './components/UniversalConversionModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import BookingPage from './components/BookingPage';
import WhyYouCanCancelPage from './components/WhyYouCanCancelPage';
import FAQPage from './components/FAQPage';
import AboutUsPage from './components/AboutUsPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import ResourceCenterPage from './components/ResourceCenterPage';
import { useExitIntent } from './hooks/useExitIntent';

interface CalculatorResults {
  financeCompanyBuyout: number;
  clearPathTotalCost: number;
  newMonthlyPayment: number;
  totalSavings: number;
  isOtherCompany: boolean;
}

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'why-you-can-cancel' | 'faq' | 'about-us' | 'case-studies' | 'resources'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [initialPayment, setInitialPayment] = useState('');
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  // Exit intent hook - only enabled on certain pages and if not shown before
  const { showExitIntent, resetExitIntent } = useExitIntent({
    enabled: !hasShownExitIntent && !showBookingPage && currentPage === 'home',
    threshold: 50,
    delay: 500
  });

  // Handle scroll to section after navigation
  const scrollToSection = () => {
    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        // Small timeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the stored section
          sessionStorage.removeItem('scrollToSection');
        }, 100);
      }
    }
  };

  // Check URL path to determine current page
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/why-you-can-cancel') {
      setCurrentPage('why-you-can-cancel');
    } else if (path === '/faq') {
      setCurrentPage('faq');
    } else if (path === '/about-us') {
      setCurrentPage('about-us');
    } else if (path === '/case-studies') {
      setCurrentPage('case-studies');
    } else if (path === '/resources') {
      setCurrentPage('resources');
    } else {
      setCurrentPage('home');
      // If we just navigated to home with a section to scroll to
      if (sessionStorage.getItem('scrollToSection')) {
        scrollToSection();
      }
    }
  }, []);

  // Listen for custom event to open main modal from exit intent popup
  React.useEffect(() => {
    const handleOpenMainModal = () => {
      handleOpenModal();
    };

    window.addEventListener('openMainModal', handleOpenMainModal);
    return () => window.removeEventListener('openMainModal', handleOpenMainModal);
  }, []);

  const handleOpenModal = (payment?: string) => {
    // Safely handle the payment parameter - ensure it's always a string
    const safePayment = typeof payment === 'string' ? payment : '';
    setInitialPayment(safePayment);
    setIsModalOpen(true);
  };

  const handleModalComplete = (leadData: LeadData, results: CalculatorResults) => {
    setLeadData(leadData);
    setCalculatorResults(results);
    setIsModalOpen(false);
    setShowBookingPage(true);
  };

  const handleBackToModal = () => {
    setShowBookingPage(false);
    setIsModalOpen(true);
  };

  const handleCloseExitIntent = () => {
    resetExitIntent();
    setHasShownExitIntent(true);
  };

  if (showBookingPage && leadData && calculatorResults) {
    return (
      <BookingPage 
        leadData={leadData}
        results={calculatorResults}
        onBack={handleBackToModal}
      />
    );
  }

  if (currentPage === 'why-you-can-cancel') {
    return (
      <>
        <WhyYouCanCancelPage onOpenModal={handleOpenModal} />
        <UniversalConversionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPayment={initialPayment}
          onComplete={handleModalComplete}
        />
      </>
    );
  }

  if (currentPage === 'faq') {
    return (
      <>
        <FAQPage onOpenModal={handleOpenModal} />
        <UniversalConversionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPayment={initialPayment}
          onComplete={handleModalComplete}
        />
      </>
    );
  }

  if (currentPage === 'about-us') {
    return (
      <>
        <AboutUsPage onOpenModal={handleOpenModal} />
        <UniversalConversionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPayment={initialPayment}
          onComplete={handleModalComplete}
        />
      </>
    );
  }

  if (currentPage === 'case-studies') {
    return (
      <>
        <CaseStudiesPage onOpenModal={handleOpenModal} />
        <UniversalConversionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPayment={initialPayment}
          onComplete={handleModalComplete}
        />
      </>
    );
  }

  if (currentPage === 'resources') {
    return (
      <>
        <ResourceCenterPage onOpenModal={handleOpenModal} />
        <UniversalConversionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPayment={initialPayment}
          onComplete={handleModalComplete}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <SocialProofTicker />
      <ProblemSection />
      <SolutionSection />
      <FreedomCalculator onOpenModal={handleOpenModal} />
      <HowItWorks />
      <AuthoritySection />
      <Testimonials onOpenModal={handleOpenModal} />
      <FinalCTA onOpenModal={handleOpenModal} />
      <Footer />
      
      <UniversalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPayment={initialPayment}
        onComplete={handleModalComplete}
      />

      <ExitIntentPopup
        isOpen={showExitIntent}
        onClose={handleCloseExitIntent}
      />
    </div>
  );
}

export default App;