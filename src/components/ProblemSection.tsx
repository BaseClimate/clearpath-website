import React from 'react';
import { AlertTriangle, Search, Clock, Wrench } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            If You Were Pressured at Your Door, You're One of
            <div className="text-red-600">Over 1 Million Canadian Homeowners</div>
            Trapped in a Predatory Contract
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Do you feel stuck paying exorbitant monthly fees for a furnace or water heater, 
              with the total cost being <strong className="text-slate-800">5-7 times the actual value?</strong>
            </p>
          </div>
          
          <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Were you shocked to discover a <strong className="text-slate-800">lien was placed against your home</strong>{' '}
              for an amount you never truly agreed to?
            </p>
          </div>
          
          <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Was the equipment installed the next day, <strong className="text-slate-800">violating the legally required 
              10-day cooling-off period?</strong>
            </p>
          </div>
          
          <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">
              Are you getting the run-around when you call for the <strong className="text-slate-800">maintenance 
              that was promised</strong>{' '}in your contract?
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16 p-10 bg-slate-50 rounded-2xl max-w-5xl mx-auto border border-slate-200">
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            <strong className="text-slate-800">You are not at fault.</strong> These contracts are designed to be confusing and deceptive. 
            More importantly, the way they were sold often violates Canadian consumer protection laws, 
            making them <span className="text-teal-600 font-bold">legally cancellable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;