import React from 'react';
import { Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { SITE } from '../config';

interface Props {
  onOpenModal: () => void;
}

const TermsOfServicePage: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Effective Date: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                By accessing the website of ClearPath Direct, the operating brand of Clearpath Contract Cancellation Inc. ("ClearPath"), you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our site or services.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">2. Nature of Services (Not a Law Firm)</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                ClearPath is an administrative and advocacy service. We are not a law firm and we do not provide legal advice. We provide case preparation, document review, and administrative support. To execute legal cancellations or demand letters, we partner with independent, fully licensed legal professionals. Your use of our website or administrative services does not create an attorney-client relationship with ClearPath.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">3. User Responsibilities</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                To assist you effectively, you agree to provide accurate, complete, and current information regarding your home service contracts. You understand that our ability to prepare your case depends on the accuracy of the documents and information you supply.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">4. Limitation of Liability</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                To the fullest extent permitted by law, Clearpath Contract Cancellation Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website or administrative services. Outcomes of contract cancellations depend on the specific facts of each case, and we do not guarantee specific legal or financial results.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">5. Governing Law</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                These Terms of Service shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">6. Contact Information</h2>
              <ul className="text-lg text-slate-700 leading-relaxed font-medium list-disc pl-6 space-y-2">
                <li>Email: <a href={`mailto:${SITE.EMAIL}`} className="text-teal-600 hover:underline">{SITE.EMAIL}</a></li>
                <li>Phone: <a href={`tel:${SITE.PHONE_TEL}`} className="text-teal-600 hover:underline">{SITE.PHONE_DISPLAY}</a></li>
                <li>Headquarters: 1600 595 Burrard Street, Vancouver, BC V7X 1L3</li>
                <li>Operations & Mailing: 333 Bay Street, Suite 1400, Toronto, ON M5H 2R2</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
