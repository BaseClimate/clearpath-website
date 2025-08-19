import React from 'react';
import { HelpCircle, CheckCircle, Clock, Home } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

const FAQPage: React.FC<Props> = ({ onOpenModal }) => {
  const faqs = [
    {
      question: 'Can I cancel my HVAC contract and keep my equipment?',
      answer: 'Yes. When a contract is cancelled due to unfair practices, Canadian law allows you to keep your furnace, water heater, air filter, or other equipment.',
      icon: Home,
    },
    {
      question: 'Do I need to hire my own lawyer?',
      answer: 'No. ClearPath manages your case end-to-end and coordinates with a licensed lawyer if court action is required. We act as your agent and handle everything on your behalf.',
      icon: HelpCircle,
    },
    {
      question: 'How long does the process take?',
      answer: 'Case reviews and demand letters are typically prepared within weeks. If court is required, resolution can take several months. Timelines depend on how the finance company responds.',
      icon: Clock,
    },
  ];

  // Structured Data (FAQPage)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I cancel my HVAC contract and keep my equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. When a contract is cancelled due to unfair practices, Canadian law allows you to keep your furnace, water heater, air filter, or other equipment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to hire my own lawyer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ClearPath manages your case end-to-end and coordinates with a licensed lawyer if court action is required. We act as your agent and handle everything on your behalf.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Case reviews and demand letters are typically prepared within weeks. If court is required, resolution can take several months. Timelines depend on how the finance company responds.',
        },
      },
    ],
  } as const;

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Have questions? We have answers. Here are some of the most common questions we receive 
            from homeowners just like you. Our goal is to be 100% transparent about our process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <faq.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight tracking-tight">
                    {faq.question}
                  </h3>
                </div>
                
                <div className="ml-18">
                  {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-600 leading-relaxed font-medium text-lg mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Building Section */}
          <div className="mt-20 bg-gradient-to-r from-teal-50 to-slate-50 p-12 rounded-2xl border border-teal-200 text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
              Still Have Questions?
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Get personalized answers during your free case review. 
              Our experts are here to help you understand your options.
            </p>
            
            <button 
              onClick={onOpenModal}
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
            >
              Get a Free Case Review
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-600">
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                We work with licensed legal professionals
              </span>
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                Free, no-obligation review
              </span>
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                You keep your equipment if your contract is cancelled
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;