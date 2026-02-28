import React from 'react';
import { Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { SITE } from '../config';

interface Props {
  onOpenModal: () => void;
}

const PrivacyPolicyPage: React.FC<Props> = ({ onOpenModal }) => {
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
            Privacy Policy
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

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">1. Introduction</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                Clearpath Contract Cancellation Inc., operating as ClearPath Direct ("we," "us," or "our"), is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information when you visit our website or use our administrative and advocacy services.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">2. Information We Collect</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                To evaluate and process your contract cancellation, we collect personal information that you voluntarily provide, including:
              </p>
              <ul className="text-lg text-slate-700 leading-relaxed font-medium mb-10 list-disc pl-6 space-y-2">
                <li>Contact information (Name, phone number, email address, physical address).</li>
                <li>Documents related to your home service or HVAC contracts.</li>
                <li>Information regarding your financial obligations under the contested contracts.</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">3. How We Use Your Information</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                We use your information strictly to provide our administrative services, which includes:
              </p>
              <ul className="text-lg text-slate-700 leading-relaxed font-medium mb-10 list-disc pl-6 space-y-2">
                <li>Evaluating your contract for violations of Canadian consumer protection laws.</li>
                <li>Preparing case files and administrative documentation.</li>
                <li>Coordinating with independent, licensed legal professionals who evaluate or execute your case.</li>
                <li>Communicating with you regarding your case status.</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">4. Information Sharing and Disclosure</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                We do not sell or rent your personal information to third parties. We only share your information with:
              </p>
              <ul className="text-lg text-slate-700 leading-relaxed font-medium mb-10 list-disc pl-6 space-y-2">
                <li><strong>Licensed Legal Professionals:</strong> We securely share your case details with independent lawyers and legal experts who partner with us to represent you.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law, court order, or government regulation.</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">5. Data Security</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10">
                We implement standard administrative and technical safeguards to protect your personal information and sensitive contract documents from unauthorized access or disclosure.
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">6. Contact Us</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
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

export default PrivacyPolicyPage;
