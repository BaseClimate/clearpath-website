import { OnboardingFlowData } from '../types';

export const exportToCSV = (data: OnboardingFlowData[]): string => {
  const headers = [
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Monthly Payment',
    'Finance Company',
    'Time in Contract',
    'Finance Company Buyout',
    'ClearPath Total Cost',
    'New Monthly Payment',
    'Total Savings',
    'Is Other Company',
    'Appointment Time',
    'Files Uploaded'
  ];

  const csvContent = [
    headers.join(','),
    ...data.map(row => [
      row.timestamp.toISOString(),
      `"${row.leadData.fullName}"`,
      row.leadData.email,
      row.leadData.phone,
      row.calculatorInputs.monthlyPayment,
      row.calculatorInputs.financeCompany,
      row.calculatorInputs.timeInContract,
      row.calculatorResults.financeCompanyBuyout,
      row.calculatorResults.clearPathTotalCost,
      row.calculatorResults.newMonthlyPayment,
      row.calculatorResults.totalSavings,
      row.calculatorResults.isOtherCompany,
      row.appointmentTime || '',
      row.uploadedFiles?.length || 0
    ].join(','))
  ].join('\n');

  return csvContent;
};

export const downloadCSV = (data: OnboardingFlowData[], filename: string = 'clearpath-leads.csv') => {
  const csvContent = exportToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// HubSpot integration structure (for future implementation)
export const formatForHubSpot = (data: OnboardingFlowData) => {
  return {
    properties: {
      firstname: data.leadData.fullName.split(' ')[0],
      lastname: data.leadData.fullName.split(' ').slice(1).join(' '),
      email: data.leadData.email,
      phone: data.leadData.phone,
      monthly_payment: data.calculatorInputs.monthlyPayment,
      finance_company: data.calculatorInputs.financeCompany,
      time_in_contract: data.calculatorInputs.timeInContract,
      estimated_total_savings: data.calculatorResults.totalSavings,
      estimated_buyout_cost: data.calculatorResults.financeCompanyBuyout,
      estimated_new_payment: data.calculatorResults.newMonthlyPayment,
      lead_source: 'Website Calculator',
      lifecycle_stage: 'lead'
    }
  };
};