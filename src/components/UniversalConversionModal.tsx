import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle, DollarSign, AlertTriangle, HelpCircle } from 'lucide-react';

interface CalculatorData {
  monthlyPayment: string;
  financeCompany: string;
  timeInContract: string;
}

interface CalculatorResults {
  financeCompanyBuyout: number;
  clearPathTotalCost: number;
  newMonthlyPayment: number;
  totalSavings: number;
  isOtherCompany: boolean;
}

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialPayment?: string;
  onComplete: (leadData: LeadData, results: CalculatorResults) => void;
}

const UniversalConversionModal: React.FC<Props> = ({ isOpen, onClose, initialPayment = '', onComplete }) => {
  const [step, setStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    monthlyPayment: '',
    financeCompany: '',
    timeInContract: ''
  });
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [leadData, setLeadData] = useState<LeadData>({
    fullName: '',
    email: '',
    phone: ''
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset modal state when it opens
  React.useEffect(() => {
    if (isOpen) {
      setStep(1);
      // Safely handle initialPayment - ensure it's always a string
      const safeInitialPayment = typeof initialPayment === 'string' ? initialPayment : '';
      setCalculatorData({
        monthlyPayment: safeInitialPayment,
        financeCompany: '',
        timeInContract: ''
      });
      setResults(null);
      setLeadData({
        fullName: '',
        email: '',
        phone: ''
      });
      setIsSubmitting(false);
    }
  }, [isOpen, initialPayment]);

  const getTimeInContractYears = (timeRange: string): number => {
    switch (timeRange) {
      case 'less-than-1': return 0.5;
      case '1-2': return 1.5;
      case '3-4': return 3.5;
      case '5-7': return 6;
      case '8-plus': return 8;
      default: return 2;
    }
  };

  const calculateResults = (): CalculatorResults => {
    const monthlyPayment = parseFloat(calculatorData.monthlyPayment);
    const timeYears = getTimeInContractYears(calculatorData.timeInContract);
    
    if (calculatorData.financeCompany === 'other') {
      return {
        financeCompanyBuyout: 0,
        clearPathTotalCost: 0,
        newMonthlyPayment: 0,
        totalSavings: 0,
        isOtherCompany: true
      };
    }

    let totalTermMonths: number;
    let monthsAlreadyPaid: number;

    // Determine contract structure based on company
    if (calculatorData.financeCompany === 'chicc') {
      totalTermMonths = 120; // 10-year rental
      monthsAlreadyPaid = timeYears * 12;
    } else {
      totalTermMonths = 180; // 15-year amortization for VaultPay/Financeit
      monthsAlreadyPaid = timeYears * 12;
    }

    const remainingMonths = Math.max(0, totalTermMonths - monthsAlreadyPaid);
    
    // Calculate total buyout with 3.5% annual increases
    let financeCompanyBuyout = 0;
    let currentPayment = monthlyPayment;
    let monthsProcessed = 0;

    while (monthsProcessed < remainingMonths) {
      const monthsInThisYear = Math.min(12, remainingMonths - monthsProcessed);
      financeCompanyBuyout += currentPayment * monthsInThisYear;
      currentPayment *= 1.035; // 3.5% annual increase
      monthsProcessed += monthsInThisYear;
    }

    const clearPathTotalCost = financeCompanyBuyout * 0.50;
    const newMonthlyPayment = Math.round(monthlyPayment * 0.90);
    const totalSavings = financeCompanyBuyout - clearPathTotalCost;

    return {
      financeCompanyBuyout: Math.round(financeCompanyBuyout),
      clearPathTotalCost: Math.round(clearPathTotalCost),
      newMonthlyPayment,
      totalSavings: Math.round(totalSavings),
      isOtherCompany: false
    };
  };

  const handleCalculate = () => {
    const calculatedResults = calculateResults();
    setResults(calculatedResults);
    setStep(2);
  };

  const handleProceedToLead = () => {
    setStep(3);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!results) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onComplete(leadData, results);
    onClose();
    setIsSubmitting(false);
  };

  const isCalculatorValid = calculatorData.monthlyPayment && 
                           parseFloat(calculatorData.monthlyPayment) > 0 && 
                           calculatorData.financeCompany && 
                           calculatorData.timeInContract;

  const isLeadFormValid = leadData.fullName.trim() && 
                         leadData.email.trim() && 
                         leadData.phone.trim();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center">
            <Calculator className="h-6 w-6 text-teal-600 mr-2" />
            <h2 className="text-xl font-bold text-slate-900">
              {step === 1 && "Step 1: Calculate Your True Financial Picture"}
              {step === 2 && "Your Financial Comparison"}
              {step === 3 && "Step 2: Save Your Details & Get a Free Case Review"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Calculator */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Calculate Your True Financial Picture
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-3">
                    Your Current Monthly HVAC Payment
                  </label>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-slate-700 mr-2">$</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={calculatorData.monthlyPayment}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setCalculatorData({...calculatorData, monthlyPayment: value});
                      }}
                      placeholder="0"
                      className="text-center text-2xl font-bold border-2 border-slate-300 rounded-lg px-4 py-3 w-32 focus:border-teal-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="text-lg text-slate-700 ml-2">/ month</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-3">
                    Who is the finance or rental company on your bill?
                  </label>
                  <select
                    value={calculatorData.financeCompany}
                    onChange={(e) => setCalculatorData({...calculatorData, financeCompany: e.target.value})}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                  >
                    <option value="">Select your company...</option>
                    <option value="chicc">Canadian Home Improvement Credit Corporation (CHICC)</option>
                    <option value="vaultpay">VaultPay</option>
                    <option value="financeit">Financeit</option>
                    <option value="other">Other / I'm not sure</option>
                  </select>
                  
                  <div className="mt-2 flex items-center text-sm text-slate-600">
                    <button
                      type="button"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      className="flex items-center hover:text-slate-800 transition-colors relative"
                    >
                      <HelpCircle className="h-4 w-4 mr-1" />
                      You can usually find this company's name on your bank statement or by logging into your online banking.
                      
                      {showTooltip && (
                        <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg z-10">
                          Look for automatic payments or direct debits in your banking records. The company name will appear there.
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-3">
                    Approximately how long have you been in this contract?
                  </label>
                  <select
                    value={calculatorData.timeInContract}
                    onChange={(e) => setCalculatorData({...calculatorData, timeInContract: e.target.value})}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                  >
                    <option value="">Select duration...</option>
                    <option value="less-than-1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-4">3-4 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="8-plus">8+ years</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleCalculate}
                  disabled={!isCalculatorValid}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center mx-auto"
                >
                  Reveal My True Costs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Results */}
          {step === 2 && results && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Your Financial Comparison
              </h3>
              
              {results.isOtherCompany ? (
                <div className="text-center p-8 bg-teal-50 rounded-xl">
                  <AlertTriangle className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-lg text-slate-800 leading-relaxed mb-6">
                    Contracts from other providers vary. We will review your situation and discuss your options
                    during a <strong>free case review</strong>.
                  </p>
                  <button 
                    onClick={handleProceedToLead}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center mx-auto"
                  >
                    Get a Free Case Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Comparison Table */}
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="px-6 py-4 text-left text-lg font-bold text-slate-900">Feature</th>
                          <th className="px-6 py-4 text-center text-lg font-bold text-red-600">Your Current Finance Company</th>
                          <th className="px-6 py-4 text-center text-lg font-bold text-teal-600">With ClearPath (The Smart Choice)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="bg-white">
                          <td className="px-6 py-6 font-semibold text-slate-900">Total Buyout Cost</td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-3xl font-bold text-red-600">
                              ${results.financeCompanyBuyout.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-3xl font-bold text-teal-600">
                              ${results.clearPathTotalCost.toLocaleString()}
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="px-6 py-6 font-semibold text-slate-900">Your Monthly Payment</td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-2xl font-bold text-slate-700">
                              ${calculatorData.monthlyPayment}
                            </div>
                          </td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-2xl font-bold text-teal-600">
                              ~${results.newMonthlyPayment}
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-6 font-semibold text-slate-900">Service and Support</td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-lg font-medium text-slate-700">Varies by provider</div>
                          </td>
                          <td className="px-6 py-6 text-center">
                            <div className="text-lg font-medium text-slate-700">Discussed during review</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Summary */}
                  <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl border border-teal-200">
                    <div className="mb-4">
                      <DollarSign className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                      <h4 className="text-3xl font-bold text-slate-900 mb-2">
                        Your Clear Path: Personalized Options
                      </h4>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                      During your free case review, we'll discuss your situation, outline potential options under Canadian
                      consumer protection laws, and coordinate next steps with a licensed legal professional as appropriate.
                    </p>
                  </div>

                  {/* Final CTA */}
                  <div className="text-center">
                    <button 
                      onClick={handleProceedToLead}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors flex items-center mx-auto shadow-lg"
                    >
                      Get a Free Case Review
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </button>
                    <p className="text-sm text-slate-600 mt-4">
                      Free case review • No obligation • Confidential review
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Lead Capture */}
          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Save Your Details & Get a Free Case Review
                </h3>
                
                {results && !results.isOtherCompany && (
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 mb-6">
                    <div className="text-lg font-semibold text-slate-900 mb-2">
                      Your Comparison Snapshot:
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-slate-600">Comparison Difference</div>
                        <div className="text-2xl font-bold text-teal-600">
                          ${results.totalSavings.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Illustrative Monthly Payment</div>
                        <div className="text-2xl font-bold text-teal-600">
                          ~${results.newMonthlyPayment}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={leadData.fullName}
                    onChange={(e) => setLeadData({...leadData, fullName: e.target.value})}
                    placeholder="John Smith"
                    className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={leadData.phone}
                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                    placeholder="(416) 555-0123"
                    className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg"
                    required
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={!isLeadFormValid || isSubmitting}
                    className="bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors flex items-center mx-auto shadow-lg"
                  >
                    {isSubmitting ? 'Processing...' : 'Get a Free Case Review'}
                    {!isSubmitting && <ArrowRight className="ml-3 h-6 w-6" />}
                  </button>
                  
                  <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-slate-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-1" />
                      100% Confidential
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-1" />
                      No Obligation
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-1" />
                      Free Case Review
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversalConversionModal;