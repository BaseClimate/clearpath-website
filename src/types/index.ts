export interface CalculatorResults {
  financeCompanyBuyout: number;
  clearPathTotalCost: number;
  newMonthlyPayment: number;
  totalSavings: number;
  isOtherCompany: boolean;
}

export interface LeadData {
  fullName: string;
  email: string;
  phone: string;
}

export interface CalculatorData {
  monthlyPayment: string;
  financeCompany: string;
  timeInContract: string;
}

export interface OnboardingFlowData {
  calculatorInputs: CalculatorData;
  calculatorResults: CalculatorResults;
  leadData: LeadData;
  appointmentTime?: string;
  uploadedFiles?: File[];
  timestamp: Date;
}