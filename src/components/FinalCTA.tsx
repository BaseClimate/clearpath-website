import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-700 to-teal-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Shield className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
          Take the First Step Toward Contract Relief
        </h2>
        
        <p className="text-xl text-slate-100 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          Get a free, no-obligation review of your contract. We’ll explain your rights and next steps under Canadian law.
        </p>
        
        <button 
          onClick={onOpenModal}
          className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center mx-auto mb-10"
        >
          Get a Free Case Review
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-100">
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            Coordinated with licensed legal professionals
          </span>
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            Free, no-obligation review
          </span>
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            Confidential and transparent process
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;