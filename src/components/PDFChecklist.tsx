import React from 'react';
import { Shield, FileText, CheckSquare, ExternalLink } from 'lucide-react';

// This component represents the PDF content structure
// In a real implementation, you'd generate an actual PDF
const PDFChecklist: React.FC = () => {
  const checklistItems = [
    {
      title: "The Hidden Term",
      description: "Is the payment schedule (amortization) much longer than the 'term' you were told (e.g., 15-20 years)?"
    },
    {
      title: "The Lien Clause (NOSI)",
      description: "Does the fine print mention a 'Notice of Security Interest' or give the company 'Power of Attorney' to register things against your property?"
    },
    {
      title: "Vague Maintenance",
      description: "Are the promises of service and maintenance unclear about what's included and how to get it?"
    },
    {
      title: "Extreme Buyout Penalty",
      description: "Is the cancellation fee based on all your future payments rather than the actual value of the equipment?"
    },
    {
      title: "Annual Price Escalator",
      description: "Does your monthly payment increase automatically every year?"
    },
    {
      title: "The 'Rental' Trap",
      description: "Is your agreement a long-term rental where you never own the equipment and the buyout price doesn't go down?"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl" style={{ aspectRatio: '8.5/11' }}>
      {/* Header */}
      <div className="text-center mb-8 border-b border-slate-200 pb-6">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-teal-600 mr-3" />
          <span className="text-2xl font-bold text-slate-800">ClearPath</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          The HVAC Red Flag Checklist
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          6 Signs Your Contract is a Trap
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-slate-700 leading-relaxed font-medium">
          These are common tactics used by predatory HVAC companies to trap homeowners in 
          unfair contracts. Check your agreement against this list:
        </p>
      </div>

      {/* Checklist */}
      <div className="space-y-6 mb-10">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-slate-100 w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <CheckSquare className="h-5 w-5 text-slate-400" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Think you have a predatory contract?
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The good news is, there's a clear path out. Get a free, confidential analysis 
          of your contract from the experts at ClearPath.
        </p>
        <div className="flex items-center justify-center text-teal-600 font-semibold">
          <ExternalLink className="h-4 w-4 mr-2" />
          www.clearpathcancel.ca
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          © 2024 ClearPath Contract Cancellation. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PDFChecklist;