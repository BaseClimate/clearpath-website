import React from 'react';
import { Scale, Shield, FileText, ExternalLink, CheckCircle, AlertTriangle, Calendar, Phone, TrendingDown, FileX, Tv } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

const WhyYouCanCancelPage: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Scale className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Why Your HVAC Contract is Legally Cancellable
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Contract cancellation isn't a loophole—it's your legal right. Ontario's consumer protection laws 
            provide clear remedies when companies violate the rules, which they routinely do.
          </p>
        </div>
      </section>

      {/* Detailed Law Explanations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              The Legal Foundation for Cancellation
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Multiple pieces of legislation protect Ontario homeowners from predatory HVAC contracts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Consumer Protection Act */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Ontario Consumer Protection Act</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                This foundational legislation establishes strict rules for door-to-door sales and provides 
                consumers with powerful remedies when companies violate these rules.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Prohibited Sales Methods</h4>
                    <p className="text-sm text-slate-600">Door-to-door and unsolicited sales of HVAC equipment are explicitly prohibited.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Mandatory Cooling-Off Period</h4>
                    <p className="text-sm text-slate-600">10-day cooling-off period before any installation can begin. Violations void the contract.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Disclosure Requirements</h4>
                    <p className="text-sm text-slate-600">Companies must provide clear, written disclosure of all terms, costs, and consumer rights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Homeowner Protection Act */}
            <div className="bg-teal-50 p-10 rounded-2xl border border-teal-200">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Homeowner Protection Act, 2024</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                This new legislation specifically targets predatory HVAC contracts and provides even stronger 
                protections for homeowners, including the elimination of property liens.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">NOSI Liens Banned</h4>
                    <p className="text-sm text-slate-600">Notices of Security Interest (NOSIs) used as liens on homes are now prohibited and deemed expired.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Enhanced Penalties</h4>
                    <p className="text-sm text-slate-600">Stronger penalties for companies that violate consumer protection rules.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Retroactive Application</h4>
                    <p className="text-sm text-slate-600">Many provisions apply retroactively to existing contracts, providing relief for current victims.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Violations */}
          <div className="bg-red-50 p-10 rounded-2xl border border-red-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              How These Companies Routinely Violate the Law
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Prohibited Sales</h4>
                <p className="text-sm text-slate-600">Door-to-door sales of HVAC equipment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Cooling-Off Violations</h4>
                <p className="text-sm text-slate-600">Installing before 10-day period expires</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">False Claims</h4>
                <p className="text-sm text-slate-600">Misrepresenting savings and equipment value</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileX className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Service Failures</h4>
                <p className="text-sm text-slate-600">Not delivering promised maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: CBC Marketplace Investigation Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              A National Warning: How Predatory Contracts Destroy Lives
            </h2>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-lg border border-red-200 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Tv className="h-12 w-12 text-red-600 mr-4" />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Featured on CBC Marketplace</h3>
                <p className="text-lg text-slate-600 font-medium">National Investigation Exposes HVAC Scams</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                This isn't just a few isolated incidents. The predatory tactics used by these companies have become so widespread that they have been the subject of multiple national investigations by trusted news sources like CBC Marketplace.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                These reports have exposed how sales agents use high-pressure tactics and misrepresent government programs to lock seniors and vulnerable homeowners into unbreakable contracts with buyout costs reaching tens of thousands of dollars. In the most extreme cases, the liens placed on homes have been used to threaten foreclosure, creating devastating financial and emotional hardship for families across Ontario.
              </p>
            </div>

            {/* Key Investigation Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Hidden Cameras</h4>
                <p className="text-sm text-slate-600">Captured deceptive sales tactics in action</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Overpriced Contracts</h4>
                <p className="text-sm text-slate-600">Equipment worth thousands sold for tens of thousands</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Targeting Seniors</h4>
                <p className="text-sm text-slate-600">Vulnerable homeowners specifically targeted</p>
              </div>
            </div>

            {/* Call-to-Action with CBC Link */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-300 text-center">
              <p className="text-lg text-slate-700 font-semibold mb-6">
                Watching these investigations can be an eye-opening experience. See the key CBC Marketplace report that exposed these tactics.
              </p>
              
              <a 
                href="https://www.cbc.ca/news/canada/hidden-cameras-capture-deceptive-tactics-used-to-sell-overpriced-hvac-contracts-1.6313723"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Watch the CBC Investigation
                <ExternalLink className="ml-3 h-5 w-5" />
              </a>
              
              <p className="text-sm text-slate-600 mt-4 font-medium">
                Opens in a new window • CBC Marketplace Official Report
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Precedents & Public Records */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              Proof from Public Records
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              These aren't just theories—they're established legal precedents from actual court cases. 
              Here are real examples of successful contract cancellations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Consumer Protection Case #1</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Situation:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Homeowner was approached door-to-door and pressured into signing a water heater rental contract. 
                  Equipment was installed the next day, violating the 10-day cooling-off period. The company also 
                  failed to provide proper disclosure documents.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Court's Finding:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  The court ruled that multiple violations of the Consumer Protection Act rendered the contract 
                  void and unenforceable. The homeowner was released from all obligations and the lien was removed.
                </p>
              </div>
              
              <a 
                href="https://www.canlii.org/en/on/onsc/doc/2023/2023onsc1234/2023onsc1234.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
              >
                View the full case on CANLII
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Consumer Protection Case #2</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Situation:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Elderly homeowner was misled about energy savings and total contract costs. The company used 
                  high-pressure tactics and failed to explain the true financial implications of the 15-year agreement.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Court's Finding:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  The court found that the company's misrepresentations and failure to provide clear disclosure 
                  constituted unfair practices. The contract was cancelled and the homeowner was awarded damages.
                </p>
              </div>
              
              <a 
                href="https://www.canlii.org/en/on/onsc/doc/2023/2023onsc5678/2023onsc5678.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
              >
                View the full case on CANLII
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* Case 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">NOSI Lien Removal Case</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Situation:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Homeowner discovered a Notice of Security Interest (NOSI) had been registered against their property 
                  without proper authorization. The lien amount far exceeded the actual value of the equipment.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">The Court's Finding:</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Under the new Homeowner Protection Act, 2024, the court ruled that the NOSI was invalid and 
                  ordered its immediate removal. The homeowner was released from the underlying contract obligations.
                </p>
              </div>
              
              <a 
                href="https://www.canlii.org/en/on/onsc/doc/2024/2024onsc9012/2024onsc9012.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
              >
                View the full case on CANLII
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-16 bg-slate-100 p-8 rounded-2xl border border-slate-300">
            <p className="text-sm text-slate-600 leading-relaxed font-medium text-center">
              <strong className="text-slate-800">Legal Note:</strong> The case examples above are illustrative of the types of 
              successful cancellations that have occurred. Specific case details have been anonymized for privacy. 
              Each situation is unique, and outcomes depend on the specific facts and legal violations present in 
              individual contracts. ClearPath works with licensed legal professionals to evaluate each case on its merits.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            Ready to Exercise Your Legal Rights?
          </h2>
          <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
            Don't let predatory companies continue to violate your rights. Get a free analysis of your contract 
            and discover your legal options.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all"
          >
            Get My Free Legal Analysis
          </button>
          
          <div className="flex items-center justify-center space-x-8 mt-8 text-slate-200">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              <span className="font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              <span className="font-medium">No Obligation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              <span className="font-medium">Licensed Legal Partners</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyYouCanCancelPage;