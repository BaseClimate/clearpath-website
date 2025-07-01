import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const Hero: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Feeling Trapped by an<br />
            <span className="text-slate-700">HVAC Contract?</span><br />
            <span className="text-red-600">You're Right. It's a Scam.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            There is a clear, legal path to cancel your furnace, tankless water heater, or air filter contract, 
            save up to 50% on your buyout, and lower your monthly payments. ClearPath makes it simple and risk-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={onOpenModal}
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg text-xl font-semibold shadow-lg transform hover:scale-105 transition-all"
            >
              Get My Free Analysis
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
              <span className="font-medium">No obligation</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-teal-600 mr-2" />
              <span className="font-medium">100% confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
              <span className="font-medium">Find out your options in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;