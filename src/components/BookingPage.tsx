import React, { useState } from 'react';
import { Upload, CheckCircle, Shield, FileText, ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

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
  leadData: LeadData;
  results: CalculatorResults;
  onBack: () => void;
}

const BookingPage: React.FC<Props> = ({ leadData, results, onBack }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('uploading');
      
      // Simulate upload
      setTimeout(() => {
        setUploadStatus('success');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-teal-600 mr-3" />
            <h1 className="text-3xl font-bold text-slate-900">ClearPath</h1>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Thank You, {leadData.fullName.split(' ')[0]}!
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Your final step is to get a free case review.
          </p>
          
          {!results.isOtherCompany && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-2xl mx-auto">
              <p className="text-lg text-slate-700">
                We have received your information and saved your details. Please click the button below to select a
                time that works for you.
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Section - Replaced iframe with button */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">
                30-Minute Free Case Review
              </h3>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                What to Expect:
              </h4>
              <ul className="space-y-3 text-slate-700 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Review your contract for legal violations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Explain your rights and options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Explain the cancellation process step-by-step</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Answer all your questions</span>
                </li>
              </ul>
            </div>

            {/* New Booking Button Section */}
            <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">You're almost there!</h3>
              <p className="text-gray-600 mb-6">
                Click the button below to open our secure calendar in a new window and choose the time that works best for you.
              </p>
              <a 
                href="https://meetings-na3.hubspot.com/jon-peters" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-teal-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg flex items-center justify-center"
              >
                <Calendar className="h-6 w-6 mr-3" />
                Get a Free Case Review
                <ExternalLink className="h-5 w-5 ml-3" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Opens in a new window • Secure HubSpot calendar
              </p>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-slate-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">
                Want to Speed Things Up? (Optional)
              </h3>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Have your contract handy? You can upload it to expedite your analysis. If not, don't worry. 
              Based on the thousands of contracts we've analyzed, we are already deeply familiar with the 
              standard predatory clauses used by these companies. We can review those with you on our call 
              and will help you retrieve your specific contract afterward.
            </p>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center">
              {uploadStatus === 'idle' && (
                <>
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-4">
                    Drag and drop your contract here, or click to browse
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="hidden"
                    id="contract-upload"
                  />
                  <label
                    htmlFor="contract-upload"
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors inline-block"
                  >
                    Upload Contract
                  </label>
                </>
              )}

              {uploadStatus === 'uploading' && (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
                  <p className="text-slate-600">Uploading your contract...</p>
                </div>
              )}

              {uploadStatus === 'success' && selectedFile && (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <p className="text-slate-900 font-semibold mb-2">Upload Successful!</p>
                  <p className="text-slate-600 text-sm">{selectedFile.name}</p>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>Accepted formats:</strong> PDF, Word, or clear photos of your contract pages (JPG, PNG). 
                All uploads are encrypted and confidential.
              </p>
            </div>

            {/* Additional Benefits */}
            <div className="mt-8 bg-teal-50 p-6 rounded-xl border border-teal-200">
              <h4 className="font-semibold text-slate-900 mb-3">Why Choose ClearPath:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  Coordinated with licensed legal professionals
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  Confidential and no obligation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  Transparent process and clear communication
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  We explain your options under Canadian law
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={onBack}
            className="text-slate-600 hover:text-slate-800 font-medium flex items-center mx-auto transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;