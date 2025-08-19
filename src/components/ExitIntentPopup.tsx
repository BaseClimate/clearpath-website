import React, { useState, useEffect } from 'react';
import { X, FileText, CheckCircle, Mail } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call to email service
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const isValidEmail = email.includes('@') && email.includes('.');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-teal-600 mr-2" />
            <span className="text-lg font-bold text-slate-900">Free Resource</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Main Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Wait! Before You Go...
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Don't get trapped. Protect yourself with our free guide.
                </p>

                {/* PDF Preview */}
                <div className="bg-gradient-to-br from-teal-50 to-slate-50 p-8 rounded-xl border border-teal-200 mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                      <FileText className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        Free Download: The HVAC Red Flag Checklist
                      </h3>
                      <p className="text-sm text-slate-600">PDF • 1 page • Instant download</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    Get a simple, one-page PDF that reveals the <strong>9 most common predatory clauses</strong> hidden in HVAC contracts. We'll send it directly to your inbox.
                  </p>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-slate-900 mb-3">
                    Enter your email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isValidEmail || isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Me the Checklist'
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  100% private. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Check Your Inbox!
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Your free checklist is on its way. It should arrive in the next 2-3 minutes. 
                (If you don't see it, please check your spam or promotions folder).
              </p>

              <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                <p className="text-slate-700 font-medium mb-4">
                  While you wait, did you know you can get a free case review of your specific contract?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    // Trigger the main modal - you'll need to pass this function from parent
                    window.dispatchEvent(new CustomEvent('openMainModal'));
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Free Case Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;