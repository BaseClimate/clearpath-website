import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Calendar, ExternalLink } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdayvnla';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 text-center">
        <CheckCircle className="h-16 w-16 text-teal-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-slate-900 mb-3">Got It</h3>
        <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto">
          We will review your contract details and reach out by end of next business day.
          If you would rather not wait, book a 30-minute call directly with our team below.
        </p>
        <a
          href="https://meetings-na3.hubspot.com/jon-peters"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Book a 30-Minute Call
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="fullName" className="block text-slate-900 font-semibold mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          autoComplete="name"
          className="w-full min-h-[48px] px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-slate-900 font-semibold mb-2">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full min-h-[48px] px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-slate-900 font-semibold mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full min-h-[48px] px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="financeCompany" className="block text-slate-900 font-semibold mb-2">
          Finance or Rental Company on Your Bill
        </label>
        <select
          id="financeCompany"
          name="financeCompany"
          className="w-full min-h-[48px] px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        >
          <option value="">Select your company...</option>
          <option value="CHICC">Canadian Home Improvement Credit Corporation (CHICC)</option>
          <option value="VaultPay">VaultPay</option>
          <option value="Financeit">Financeit</option>
          <option value="SNAP">SNAP Financial</option>
          <option value="Other">Other / Not sure</option>
        </select>
        <p className="text-sm text-slate-500 mt-1.5">
          You can usually find this on your bank statement or in online banking.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="monthlyPayment" className="block text-slate-900 font-semibold mb-2">
            Current Monthly Payment
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">$</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="monthlyPayment"
              name="monthlyPayment"
              placeholder="0"
              className="w-full min-h-[48px] pl-8 pr-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contractDuration" className="block text-slate-900 font-semibold mb-2">
            How Long in Contract
          </label>
          <select
            id="contractDuration"
            name="contractDuration"
            className="w-full min-h-[48px] px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          >
            <option value="">Select duration...</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-4 years">3-4 years</option>
            <option value="5-7 years">5-7 years</option>
            <option value="8+ years">8+ years</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="situation" className="block text-slate-900 font-semibold mb-2">
          Anything Else We Should Know?{' '}
          <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="situation"
          name="situation"
          rows={4}
          placeholder="For example: which company sold you the contract, whether there is a NOSI lien on your home, and what is concerning you most about it."
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg text-slate-900 bg-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-y"
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center shadow-lg"
      >
        {isSubmitting ? 'Sending...' : 'Start My Contract Review'}
        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
      </button>

      <div className="flex items-center justify-center gap-6 text-sm text-slate-600 pt-2 flex-wrap">
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-teal-600 mr-1.5" />
          Reviewed by licensed paralegals
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-teal-600 mr-1.5" />
          Ontario consumer law
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-teal-600 mr-1.5" />
          Strictly confidential
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
