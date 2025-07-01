import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

interface Props {
  onOpenModal: (initialPayment?: string) => void;
}

const FreedomCalculator: React.FC<Props> = ({ onOpenModal }) => {
  const [currentPayment, setCurrentPayment] = useState('');

  const handleOpenCalculator = () => {
    // Only pass the payment value if it's a valid non-empty string
    const paymentValue = currentPayment.trim();
    onOpenModal(paymentValue || '');
  };
  
  return (
    <section id="calculator-section" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Calculator className="h-10 w-10 text-slate-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            See How Much You Could Save
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-12 rounded-2xl border border-slate-200">
          <div className="mb-8">
            <label className="block text-xl font-bold text-slate-800 mb-4 tracking-tight">
              Enter Your Current Monthly HVAC Payment:
            </label>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-slate-700 mr-3">$</span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={currentPayment}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setCurrentPayment(value);
                }}
                placeholder="0"
                className="text-center text-3xl font-bold border-2 border-slate-300 rounded-xl px-6 py-4 w-40 focus:border-teal-500 focus:outline-none bg-white shadow-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <span className="text-xl text-slate-600 ml-3 font-medium">/ month</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleOpenCalculator}
              className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center shadow-lg"
            >
              See Your Total Debt & Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreedomCalculator;