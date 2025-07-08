import React from 'react';
import { Scale, AlertCircle, Phone, Calendar, TrendingDown, FileX } from 'lucide-react';

const AuthoritySection = () => {
  return (
    <section id="why-cancel" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Scale className="h-10 w-10 text-slate-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            The Law is On Your Side
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto font-medium leading-relaxed">
            Contract cancellation isn't a loophole; it's an established legal remedy based on powerful legislation 
            like Canadian consumer protection laws and provincial regulations. These companies 
            routinely violate these laws.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-2xl text-center border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-4 text-lg tracking-tight">Prohibited Sales</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Door-to-door or cold-call sales are prohibited for HVAC equipment</p>
          </div>
          
          <div className="bg-red-50 p-8 rounded-2xl text-center border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-4 text-lg tracking-tight">Cooling-Off Violations</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Installing before the mandatory 10-day cooling-off period</p>
          </div>
          
          <div className="bg-red-50 p-8 rounded-2xl text-center border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileX className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-4 text-lg tracking-tight">Maintenance Failure</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Failure to deliver on promised maintenance and service</p>
          </div>
          
          <div className="bg-red-50 p-8 rounded-2xl text-center border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-bold text-slate-800 mb-4 text-lg tracking-tight">False Savings Claims</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Misrepresenting energy savings and equipment value</p>
          </div>
        </div>
        
        <div className="bg-slate-50 p-10 rounded-2xl text-center max-w-5xl mx-auto border border-slate-200">
          <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-slate-700" />
          </div>
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
            <strong className="text-slate-800">Successful cancellations are a matter of public record.</strong> We base our process on 
            established legal precedent and work with licensed legal experts who specialize in consumer protection law.
          </p>
          <a 
            href="/why-you-can-cancel" 
            className="text-teal-600 hover:text-teal-700 font-semibold text-lg underline transition-colors"
          >
            Learn more on our 'Why You Can Cancel' page →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;