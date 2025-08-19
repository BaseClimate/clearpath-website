import { FileText, StopCircle, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Your 3 Steps to Contract Freedom
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="h-12 w-12 text-slate-700" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Step 1: Free Case Review</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Tell us about your situation. We review your contract and identify legal violations under Canadian consumer
                protection laws. This is always free and confidential.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <StopCircle className="h-12 w-12 text-red-600" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Step 2: Notice of Cancellation</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                A formal demand letter is sent to the finance company. Some cases end here with settlement.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-teal-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-12 w-12 text-teal-600" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">Step 3: Contract Terminated</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                If the company refuses, your assigned lawyer takes it to court. ClearPath manages the process until your
                contract is legally cancelled and the lien is removed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;