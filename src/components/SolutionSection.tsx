import React from 'react';
import { Shield, DollarSign, Settings, Home } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Your Clear Path: Support, Process, Resolution
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            ClearPath manages your case and coordinates with licensed legal professionals where required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Case Management</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              We prepare your case, send notices, and coordinate with licensed legal professionals where required.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <DollarSign className="h-10 w-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Fair Outcomes Under the Law</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              We focus on lawful rights and remedies available to Canadian consumers when contracts are cancelled due to unfair practices.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Settings className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Guidance & Communication</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Clear, consistent updates and support throughout your case.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border border-slate-100">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Home className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Keep Your Equipment</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              You keep your equipment if your contract is cancelled under Canadian law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;