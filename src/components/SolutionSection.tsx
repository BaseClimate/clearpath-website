import React from 'react';
import { Shield, DollarSign, Settings, Home } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Your Clear Path to <span className="text-teal-600">Freedom</span> and <span className="text-slate-700">Savings</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            ClearPath manages the entire cancellation process for you. You make one single, 
            lower monthly payment to us that covers everything.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Guaranteed Cancellation</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              We work with expert legal partners to terminate your contract. 
              <strong className="text-slate-800"> If we can't cancel it, you get a full refund</strong> of all payments made to us. No risk.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <DollarSign className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Save Up to 50%</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our financing model covers all legal costs and allows you to pay off the true value 
              of your equipment for <strong className="text-slate-800">up to half the cost</strong> of your current contract's buyout price.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Settings className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">All-Inclusive Maintenance</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Your new, lower monthly payment includes <strong className="text-slate-800">comprehensive parts and labour maintenance.</strong> 
              No more chasing contractors.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Home className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Keep Your Equipment, Guaranteed</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Under Ontario's Consumer Protection Act, when a contract is cancelled due to unfair practices, you have the right to keep the equipment. 
              <strong className="text-slate-800"> You will not be left without a furnace or water heater. It's yours.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;