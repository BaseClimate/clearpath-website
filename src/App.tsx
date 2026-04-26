import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProofTicker from './components/SocialProofTicker';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import AuthoritySection from './components/AuthoritySection';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FreedomCalculator from './components/FreedomCalculator';
import ContactForm from './components/ContactForm';
import WhyYouCanCancelPage from './components/WhyYouCanCancelPage';
import FAQPage from './components/FAQPage';
import AboutUsPage from './components/AboutUsPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import ResourceCenterPage from './components/ResourceCenterPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

type Page =
  | 'home'
  | 'why-you-can-cancel'
  | 'faq'
  | 'about-us'
  | 'case-studies'
  | 'resources'
  | 'privacy-policy'
  | 'terms-of-service';

const PATH_TO_PAGE: Record<string, Page> = {
  '/why-you-can-cancel': 'why-you-can-cancel',
  '/faq': 'faq',
  '/about-us': 'about-us',
  '/case-studies': 'case-studies',
  '/resources': 'resources',
  '/privacy-policy': 'privacy-policy',
  '/terms-of-service': 'terms-of-service',
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  React.useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(PATH_TO_PAGE[path] ?? 'home');

    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      setTimeout(() => {
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollToSection');
      }, 100);
    }
  }, []);

  // CTA handler used everywhere — replaces the old modal flow.
  // On home page, scroll to the contact form section.
  // On sub-pages, navigate home with a sessionStorage hint so the form scrolls into view.
  const handleCTAClick = () => {
    if (currentPage === 'home') {
      document.querySelector('#get-started')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollToSection', '#get-started');
      window.location.href = '/';
    }
  };

  if (currentPage === 'why-you-can-cancel') return <WhyYouCanCancelPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'faq') return <FAQPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'about-us') return <AboutUsPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'case-studies') return <CaseStudiesPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'resources') return <ResourceCenterPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'privacy-policy') return <PrivacyPolicyPage onOpenModal={handleCTAClick} />;
  if (currentPage === 'terms-of-service') return <TermsOfServicePage onOpenModal={handleCTAClick} />;

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={handleCTAClick} />
      <Hero onOpenModal={handleCTAClick} />
      <SocialProofTicker />
      <ProblemSection />
      <SolutionSection />
      <FreedomCalculator />
      <HowItWorks />
      <AuthoritySection />
      <Testimonials onOpenModal={handleCTAClick} />

      <section id="get-started" className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Free Contract Review
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Send us your finance company and a few contract details. We will check your contract
              against Ontario consumer protection law and explain your cancellation options.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-900 text-xl mb-3">Rather skip the form?</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Email us your contract details directly:
                </p>
                <a
                  href="mailto:info@clearpath.direct"
                  className="text-teal-600 hover:text-teal-700 font-semibold text-lg break-all"
                >
                  info@clearpath.direct
                </a>
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 md:p-8 border border-teal-200">
                <h3 className="font-bold text-slate-900 text-xl mb-4">Your Path to Cancellation</h3>
                <ol className="space-y-4">
                  {[
                    'We analyze your finance company, payment, and contract terms to flag predatory clauses and consumer-law violations.',
                    'On a 30-minute call we walk you through which violations apply to your contract and exactly how cancellation works.',
                    'If we can help, we coordinate with licensed paralegals to handle the cancellation. If we cannot, we tell you straight up.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-600 text-white text-sm flex items-center justify-center font-semibold">
                        {i + 1}
                      </span>
                      <p className="text-slate-700 text-[15px] leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onOpenModal={handleCTAClick} />
      <Footer />
    </div>
  );
}

export default App;
