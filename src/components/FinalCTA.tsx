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
          Stop Feeling Trapped. Start Saving Today.
        </h2>
        
        <p className="text-xl text-slate-100 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          Take the first step with a free, no-obligation analysis of your contract. 
          Discover your rights and see exactly how much you can save.
        </p>
        
        <button 
          onClick={onOpenModal}
          className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center mx-auto mb-10"
        >
          Get My Free Analysis
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-100">
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            100% Risk-Free Guarantee
          </span>
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            No Credit Check Required
          </span>
          <span className="flex items-center font-medium">
            <span className="text-teal-300 mr-2">✓</span>
            Approval Based on Your Contract
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;