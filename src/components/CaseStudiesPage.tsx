import React from 'react';
import { FileText, DollarSign, CheckCircle, Shield, Users } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

const CaseStudiesPage: React.FC<Props> = ({ onOpenModal }) => {
  const caseStudies = [
    {
      id: 1,
      title: "The $22,000 Water Heater: How Sarah J. Reclaimed Her Finances",
      clientName: "Sarah J.",
      location: "Richmond Hill, ON",
      profession: "Teacher and mother of two",
      initialDebt: 22000,
      totalSavings: 11000,
      timeToStopPayments: "",
      problem: "Sarah J., a teacher and mother of two from Richmond Hill, was sold a new tankless water heater by a door-to-door salesperson who promised significant energy savings. The monthly payment seemed manageable, so she signed. It wasn't until she tried to make changes to her budget a year later that she discovered the truth: she was locked into a 15-year contract with a total buyout cost of over $22,000. She felt sick and powerless.",
      process: "Sarah contacted ClearPath feeling defeated. Our team initiated our process. In her free case review, we identified multiple violations of the Consumer Protection Act in how the contract was sold and worded. We connected Sarah with a specialized legal partner who filed an official Notice of Cancellation with the finance company.",
      result: "While our legal partner managed the resolution process, the original contract was ultimately terminated. The lien on her home was removed. Today, she has peace of mind and is free from the predatory contract.",
      quote: "ClearPath was a lifeline. They turned a situation that felt hopeless into a clear, manageable process and saved my family over $11,000.",
      category: "Mid-Range Scenario"
    },
    {
      id: 2,
      title: "The $45,000 Combo: Protecting a Vulnerable Parent",
      clientName: "Mark T.",
      location: "Hamilton, ON",
      profession: "Son protecting elderly father",
      initialDebt: 45000,
      totalSavings: 22500,
      timeToStopPayments: "",
      problem: "Mark T. from Hamilton was horrified to learn that his elderly father, who lived alone, had been pressured into signing contracts for a new furnace and tankless water heater. The combined buyout cost was a staggering $45,000, and a lien had been placed on the family home. His father was confused and scared, and Mark knew he had to act.",
      process: "Mark uploaded his father's contracts to the ClearPath portal. Our review confirmed what Mark suspected: the sales tactics were aggressive, the promises of government rebates were misleading, and the contracts violated multiple consumer protection laws. A legal partner was assigned and a Notice of Cancellation was sent.",
      result: "The finance company initially pushed back, but the legal grounds were strong. The contracts were terminated and the lien was dissolved. He kept the equipment and, most importantly, his dignity and security.",
      quote: "I can't thank ClearPath enough for what they did for my father. They saved him over $22,500 and gave our family our peace of mind back. They are true advocates for the vulnerable.",
      category: "High-End Scenario"
    },
    {
      id: 3,
      title: "The $9,000 Air Filter: A Business Owner Fights Back",
      clientName: "David L.",
      location: "Mississauga, ON",
      profession: "Business owner",
      initialDebt: 9000,
      totalSavings: 4500,
      timeToStopPayments: "",
      problem: "David L., a successful business owner from Mississauga, was approached by a salesperson claiming to represent a government energy efficiency program. They convinced him to sign up for a 'high-tech HEPA air filtration system' that would supposedly save him hundreds on his energy bills. When David realized he'd been tricked into a $9,000 contract for a simple air filter, his business instincts kicked in—this was fraud, plain and simple.",
      process: "David's case moved through our system. He had kept detailed records of the sales interaction, which made identifying the violations straightforward. Our legal partner found multiple breaches: misrepresentation of government affiliation, false energy savings claims, and failure to provide proper cooling-off period documentation. A Notice of Cancellation was filed.",
      result: "The finance company attempted to dispute the cancellation, but the evidence was strong. David's contract was terminated. More importantly for David, the principle of the matter was addressed—he had successfully fought back against predatory tactics.",
      quote: "As a business owner, I was furious when I realized I'd been tricked. The frustration was immense. ClearPath's model is brilliant—they saved me over $4,500, handled the entire legal process, and made fighting back on principle not only possible, but simple.",
      category: "Small-Scale Victory"
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Case Studies: Real Stories, Real Results
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-5xl mx-auto mb-12">
            Every homeowner's situation is unique, but the feeling of being trapped is universal. 
            Here are a few in-depth stories of how our proven process has provided a clear path to freedom for families just like yours.
          </p>
          
          {/* Quick Highlights (neutral) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Advocacy</div>
              <div className="text-slate-600 font-medium">Case management and guidance</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Legal</div>
              <div className="text-slate-600 font-medium">Coordinated with licensed professionals</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Rights</div>
              <div className="text-slate-600 font-medium">Equipment may be kept if cancelled under law</div>
            </div>
          </div>
        </div>
      </section>

      {/* From Debt & Despair to Freedom & Fairness */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            From Debt & Despair to Freedom & Fairness
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Every homeowner's situation is unique, but the feeling of being trapped is universal. 
            Here are a few in-depth stories of how our proven process has provided a clear path to freedom for families just like yours.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Header with Key Metrics */}
                <div className="bg-gradient-to-r from-teal-600 to-slate-700 p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold">{study.category}</span>
                    </div>
                    <FileText className="h-8 w-8 text-white opacity-80" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {study.title}
                  </h3>
                  
                  {/* Key Highlights (neutral) */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                      <DollarSign className="h-8 w-8 mx-auto mb-3 text-teal-300" />
                      <div className="text-sm text-teal-200 mb-1">Initial Contract Amount</div>
                      <div className="text-2xl font-bold">~${study.initialDebt.toLocaleString()}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                      <Shield className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                      <div className="text-sm text-blue-200 mb-1">Legal Notice</div>
                      <div className="text-2xl font-bold">Notice of Cancellation Filed</div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                      <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-300" />
                      <div className="text-sm text-green-200 mb-1">Outcome</div>
                      <div className="text-2xl font-bold">Contract Terminated</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  {/* Client Info */}
                  <div className="bg-slate-50 p-6 rounded-xl mb-8 border border-slate-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">{study.clientName}</h4>
                        <p className="text-slate-600 font-medium">{study.profession} • {study.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* The Problem */}
                  <div className="mb-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">The Problem</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium pl-16">
                      {study.problem}
                    </p>
                  </div>

                  {/* The Process */}
                  <div className="mb-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">The Process: A Clear Path to Cancellation</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium pl-16">
                      {study.process}
                    </p>
                  </div>

                  {/* The Result */}
                  <div className="mb-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">The Result: Debt Cancelled & Peace of Mind Restored</h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium pl-16">
                      {study.result}
                    </p>
                  </div>

                  {/* Client Quote */}
                  <div className="bg-gradient-to-r from-teal-50 to-slate-50 p-8 rounded-xl border border-teal-200">
                    <blockquote className="text-xl text-slate-700 leading-relaxed font-medium italic mb-4">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-lg font-semibold text-slate-800">
                      - {study.clientName}, {study.location}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary & CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            Your Story Could Be Next
          </h2>
          <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
            Every successful cancellation starts with a conversation. Let us review your contract 
            and explain your options under Canadian law.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
          >
            Get a Free Case Review
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-200">
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Coordinated with licensed legal professionals
            </span>
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Free, no-obligation review
            </span>
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Confidential and transparent process
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;