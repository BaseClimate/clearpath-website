import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, AlertTriangle, HelpCircle } from 'lucide-react';

interface CalculatorResults {
  financeCompanyBuyout: number;
  clearPathTotalCost: number;
  newMonthlyPayment: number;
  totalSavings: number;
  isOtherCompany: boolean;
}

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

const calculateResults = (
  monthlyPayment: number,
  financeCompany: string,
  timeInContract: string,
): CalculatorResults => {
  if (financeCompany === 'other') {
    return {
      financeCompanyBuyout: 0,
      clearPathTotalCost: 0,
      newMonthlyPayment: 0,
      totalSavings: 0,
      isOtherCompany: true,
    };
  }

  const totalTermMonths = financeCompany === 'chicc' ? 120 : 180;
  const monthsAlreadyPaid = getTimeInContractYears(timeInContract) * 12;
  const remainingMonths = Math.max(0, totalTermMonths - monthsAlreadyPaid);

  let financeCompanyBuyout = 0;
  let currentPayment = monthlyPayment;
  let monthsProcessed = 0;
  while (monthsProcessed < remainingMonths) {
    const monthsInThisYear = Math.min(12, remainingMonths - monthsProcessed);
    financeCompanyBuyout += currentPayment * monthsInThisYear;
    currentPayment *= 1.035;
    monthsProcessed += monthsInThisYear;
  }

  const clearPathTotalCost = financeCompanyBuyout * 0.5;
  const newMonthlyPayment = Math.round(monthlyPayment * 0.9);
  const totalSavings = financeCompanyBuyout - clearPathTotalCost;

  return {
    financeCompanyBuyout: Math.round(financeCompanyBuyout),
    clearPathTotalCost: Math.round(clearPathTotalCost),
    newMonthlyPayment,
    totalSavings: Math.round(totalSavings),
    isOtherCompany: false,
  };
};

const scrollToForm = () => {
  const el = document.querySelector('#get-started');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const FreedomCalculator: React.FC = () => {
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [financeCompany, setFinanceCompany] = useState('');
  const [timeInContract, setTimeInContract] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const isValid =
    monthlyPayment &&
    parseFloat(monthlyPayment) > 0 &&
    financeCompany &&
    timeInContract;

  const handleCalculate = () => {
    if (!isValid) return;
    setResults(calculateResults(parseFloat(monthlyPayment), financeCompany, timeInContract));
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-10 w-10 text-slate-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight tracking-tight">
            See How Much You Could Save
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estimate your true buyout cost and compare it to a ClearPath-assisted resolution.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-slate-900 mb-2">
                Your Current Monthly HVAC Payment
              </label>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-slate-700 mr-2">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="0"
                  className="text-center text-2xl font-bold border-2 border-slate-300 rounded-lg px-4 py-3 w-32 focus:border-teal-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-lg text-slate-700 ml-2">/ month</span>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-slate-900 mb-2">
                Finance or rental company on your bill
              </label>
              <select
                value={financeCompany}
                onChange={(e) => setFinanceCompany(e.target.value)}
                className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg bg-white"
              >
                <option value="">Select your company...</option>
                <option value="chicc">Canadian Home Improvement Credit Corporation (CHICC)</option>
                <option value="vaultpay">VaultPay</option>
                <option value="financeit">Financeit</option>
                <option value="other">Other / I'm not sure</option>
              </select>
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="mt-2 flex items-center text-sm text-slate-600 hover:text-slate-800 transition-colors relative"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                Where do I find this?
                {showTooltip && (
                  <div className="absolute bottom-full left-0 mb-2 w-72 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg z-10 text-left">
                    Look for automatic payments or direct debits in your bank statement or online banking. The company name will appear there.
                  </div>
                )}
              </button>
            </div>

            <div>
              <label className="block text-lg font-semibold text-slate-900 mb-2">
                Approximately how long have you been in this contract?
              </label>
              <select
                value={timeInContract}
                onChange={(e) => setTimeInContract(e.target.value)}
                className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg bg-white"
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
              disabled={!isValid}
              className="bg-slate-700 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center mx-auto shadow-lg"
            >
              Reveal My True Costs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {results && (
          <div className="mt-12">
            {results.isOtherCompany ? (
              <div className="text-center p-8 bg-teal-50 rounded-xl border border-teal-200">
                <AlertTriangle className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <p className="text-lg text-slate-800 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Contracts from other providers vary. We will review your situation and discuss your options
                  during a <strong>free case review</strong>.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
                >
                  Get a Free Case Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="px-4 md:px-6 py-4 text-left text-base md:text-lg font-bold text-slate-900">Feature</th>
                        <th className="px-4 md:px-6 py-4 text-center text-base md:text-lg font-bold text-red-600">Your Finance Company</th>
                        <th className="px-4 md:px-6 py-4 text-center text-base md:text-lg font-bold text-teal-600">With ClearPath</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 md:px-6 py-6 font-semibold text-slate-900">Total Buyout Cost</td>
                        <td className="px-4 md:px-6 py-6 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-red-600">
                            ${results.financeCompanyBuyout.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-6 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-teal-600">
                            ${results.clearPathTotalCost.toLocaleString()}
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 md:px-6 py-6 font-semibold text-slate-900">Monthly Payment</td>
                        <td className="px-4 md:px-6 py-6 text-center">
                          <div className="text-xl md:text-2xl font-bold text-slate-700">
                            ${monthlyPayment}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-6 text-center">
                          <div className="text-xl md:text-2xl font-bold text-teal-600">
                            ~${results.newMonthlyPayment}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl border border-teal-200">
                  <DollarSign className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <div className="text-sm text-slate-600 mb-1">Estimated savings</div>
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
                    ${results.totalSavings.toLocaleString()}
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto mb-6">
                    During your free case review, we discuss your situation, outline potential options under
                    Canadian consumer protection laws, and coordinate next steps with a licensed legal professional as appropriate.
                  </p>
                  <button
                    onClick={scrollToForm}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center shadow-lg"
                  >
                    Get a Free Case Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <p className="text-sm text-slate-600 mt-3">
                    Free • No obligation • Confidential
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FreedomCalculator;
