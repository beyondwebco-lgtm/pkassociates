export type ServiceContent = {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  bestFor?: string;
};

export type CategoryContent = {
  title: string;
  description?: string;
  services: ServiceContent[];
};

export const indiaServices: CategoryContent = {
  title: "Our Services (India)",
  services: [
    {
      id: "accounting-bookkeeping",
      title: "Accounting & Bookkeeping",
      description: "Helping businesses maintain accurate financial records and make informed decisions.",
      bulletPoints: [
        "Bookkeeping",
        "Accounting",
        "Bank Reconciliation",
        "Financial Statement Preparation",
        "MIS Reporting",
        "Accounts Finalization"
      ]
    },
    {
      id: "taxation",
      title: "Taxation",
      description: "End-to-end tax compliance and advisory services for individuals and businesses.",
      bulletPoints: [
        "Income Tax Return (ITR) Filing",
        "Corporate Tax Compliance",
        "Tax Planning & Advisory",
        "Advance Tax & Self-Assessment Tax",
        "Income Tax Notice Support"
      ]
    },
    {
      id: "gst",
      title: "GST Services",
      description: "Comprehensive GST solutions to keep your business fully compliant.",
      bulletPoints: [
        "GST Registration",
        "GST Return Filing",
        "GST Advisory & Compliance",
        "GST Refund Assistance",
        "LUT Filing",
        "GST Amendments",
        "GST Notice Reply"
      ]
    },
    {
      id: "business-registration",
      title: "Business Registration",
      description: "Start your business with the right legal structure and registrations.",
      bulletPoints: [
        "Private Limited Company Registration",
        "LLP Registration",
        "Partnership Firm Registration",
        "Proprietorship Registration",
        "PAN & TAN Registration",
        "MSME (Udyam) Registration",
        "Professional Tax Registration"
      ]
    },
    {
      id: "roc-corporate-compliance",
      title: "ROC & Corporate Compliance",
      description: "Ensuring your company meets all statutory and regulatory obligations.",
      bulletPoints: [
        "ROC Annual Filing",
        "MCA Compliance",
        "Director KYC",
        "Annual Returns",
        "Statutory Compliance Management"
      ]
    },
    {
      id: "payroll-hr-compliance",
      title: "Payroll & HR Compliance",
      description: "Reliable payroll management and employee compliance services.",
      bulletPoints: [
        "Payroll Processing",
        "Salary Processing",
        "Payslip Generation",
        "PF Compliance",
        "ESI Compliance",
        "Professional Tax Compliance",
        "Labour Law Compliance"
      ]
    },
    {
      id: "licences-registrations",
      title: "Licences & Registrations",
      description: "Complete assistance with business licences and statutory registrations.",
      bulletPoints: [
        "Import Export Code (IEC)",
        "Digital Signature Certificate (DSC)",
        "Trademark Registration Support",
        "Trade Licence",
        "FSSAI Registration",
        "Labour Licence",
        "Drug Licence Assistance"
      ]
    },
    {
      id: "business-advisory",
      title: "Business Advisory",
      description: "Strategic financial and compliance guidance to support business growth.",
      bulletPoints: [
        "Business Advisory",
        "Tax Advisory",
        "Compliance Advisory",
        "Financial Planning",
        "Business Performance Reporting",
        "Strategic Business Support"
      ]
    },
    {
      id: "loan-financial-support",
      title: "Loan & Financial Support",
      description: "Professional financial documentation to help secure business funding.",
      bulletPoints: [
        "CMA Data Preparation",
        "Loan Projections",
        "Financial Statements for Bank Finance",
        "Business Financial Documentation",
        "Bank Loan Assistance"
      ]
    }
  ]
};

export const serviceHighlights = [
  "Comprehensive Tax & Compliance Solutions",
  "Dedicated Business Support",
  "Technology-Driven Accounting",
  "Timely Filing & Regulatory Compliance",
  "Personalized Advisory Services",
  "Trusted Partner for Business Growth"
];

export const ukOutsourcing: CategoryContent = {
  title: "UK Accounting Outsourcing Services",
  services: [
    {
      id: "bookkeeping",
      title: "Bookkeeping",
      description: "Accurate and reliable bookkeeping support tailored for UK accountancy practices.",
      bestFor: "UK Accountancy Practices, Sole Traders, Limited Companies & SMEs",
      bulletPoints: [
        "Sales Ledger",
        "Purchase Ledger",
        "Bank Reconciliations",
        "Credit Card Reconciliations",
        "Supplier Statement Reconciliations",
        "Customer Account Reconciliations",
        "Journal Posting",
        "Nominal Ledger Posting",
        "Bookkeeping Review"
      ]
    },
    {
      id: "management-accounts",
      title: "Management Accounts",
      description: "Deliver timely financial reports that support informed business decisions.",
      bestFor: "Businesses requiring regular financial reporting and performance analysis.",
      bulletPoints: [
        "Monthly Management Accounts",
        "Month-End Close",
        "Month-End Journals",
        "Accruals & Prepayments",
        "Depreciation Journals",
        "Balance Sheet Reconciliations",
        "Profit & Loss Account",
        "Balance Sheet",
        "Cash Flow Statement",
        "Management Reporting",
        "KPI Reporting",
        "Working Papers"
      ]
    },
    {
      id: "statutory-accounts",
      title: "Statutory Accounts",
      description: "Preparation of statutory accounts in accordance with UK accounting standards.",
      bestFor: "UK Limited Companies and Accountancy Practices.",
      bulletPoints: [
        "Statutory Accounts Preparation",
        "FRS 102 & FRS 105 Accounts",
        "Year-End Adjustments",
        "Lead Schedules",
        "Working Papers",
        "Accountant Query Resolution"
      ]
    },
    {
      id: "vat-services",
      title: "VAT Services",
      description: "Comprehensive VAT compliance under Making Tax Digital (MTD).",
      bestFor: "VAT-Registered Businesses and UK Accountancy Practices.",
      bulletPoints: [
        "VAT Return Preparation",
        "VAT Submission (MTD)",
        "VAT Reconciliations",
        "VAT Working Papers",
        "EC Sales List Support",
        "Reverse Charge Adjustments"
      ]
    },
    {
      id: "corporation-tax",
      title: "Corporation Tax",
      description: "Professional corporation tax compliance and computation support.",
      bestFor: "UK Limited Companies and Accountancy Practices.",
      bulletPoints: [
        "Corporation Tax Computations",
        "CT600 Preparation",
        "CT600 Submission",
        "Profit to Taxable Profit Reconciliation",
        "Capital Allowances",
        "Loss Relief Claims",
        "Corporation Tax Working Papers",
        "HMRC Corporation Tax Compliance"
      ]
    },
    {
      id: "personal-tax",
      title: "Personal Tax",
      description: "Professional preparation and submission of Self Assessment tax returns.",
      bestFor: "Individuals, Sole Traders and Partnerships.",
      bulletPoints: [
        "Self Assessment Tax Return Preparation",
        "Self Assessment Submission",
        "Tax Computations",
        "HMRC Correspondence Support"
      ]
    },
    {
      id: "payroll",
      title: "Payroll",
      description: "End-to-end payroll services with full HMRC compliance.",
      bestFor: "UK Employers and Accountancy Practices.",
      bulletPoints: [
        "Payroll Processing",
        "PAYE Calculations",
        "RTI Submissions",
        "Pension Auto Enrolment",
        "Payslip Generation",
        "P45, P60 & P11D Support",
        "Payroll Reconciliations"
      ]
    },
    {
      id: "cis",
      title: "Construction Industry Scheme (CIS)",
      description: "Complete CIS compliance for contractors and subcontractors.",
      bestFor: "Contractors, Subcontractors and UK Accountancy Practices.",
      bulletPoints: [
        "CIS Registration",
        "Subcontractor Verification",
        "CIS Deduction Calculations",
        "Monthly CIS Returns",
        "Subcontractor Payment & Deduction Statements",
        "CIS Compliance Support"
      ]
    },
    {
      id: "accounts-payable",
      title: "Accounts Payable",
      description: "Efficient supplier invoice processing and payment management.",
      bestFor: "Businesses seeking efficient supplier payment management.",
      bulletPoints: [
        "Purchase Invoice Processing",
        "Supplier Ledger Maintenance",
        "Supplier Statement Reconciliations",
        "Payment Run Preparation",
        "Supplier Query Resolution"
      ]
    },
    {
      id: "accounts-receivable",
      title: "Accounts Receivable",
      description: "Effective management of customer invoicing and collections.",
      bestFor: "Businesses looking to improve cash flow and debtor management.",
      bulletPoints: [
        "Sales Invoice Processing",
        "Customer Ledger Maintenance",
        "Customer Account Reconciliations",
        "Credit Control",
        "Customer Query Resolution"
      ]
    },
    {
      id: "company-secretarial",
      title: "Company Secretarial",
      description: "Reliable support for Companies House compliance and statutory filings.",
      bestFor: "UK Limited Companies and Accountancy Practices.",
      bulletPoints: [
        "Confirmation Statement Preparation & Submission",
        "Companies House Accounts Submission",
        "Director Appointments & Resignations",
        "PSC Register Updates",
        "Company Secretarial Support"
      ]
    }
  ]
};

export const softwareExpertise = [
  { name: "Xero", description: "Cloud-based accounting software tailored for small and growing businesses." },
  { name: "QuickBooks Online", description: "Comprehensive financial management platform for seamless bookkeeping." },
  { name: "Sage", description: "Advanced enterprise resource planning and robust payroll solutions." },
  { name: "FreeAgent", description: "User-friendly accounting software designed for freelancers and small businesses." },
  { name: "Dext", description: "Automated data extraction to streamline receipt and invoice processing." },
  { name: "Hubdoc", description: "Automated document fetching and seamless Xero integration." },
  { name: "BrightPay", description: "Award-winning payroll software ensuring 100% HMRC compliance." },
  { name: "TaxCalc", description: "Powerful tax and accounts production software for professionals." },
  { name: "IRIS", description: "Industry-leading integrated software suite for UK accountancy practices." },
  { name: "Capium", description: "Innovative cloud accounting suite designed specifically for accountants." }
];

export const whyChooseUs = [
  "Backed by 6+ Years of UK Accounting Experience",
  "Dedicated Offshore Accounting Professionals",
  "Expertise in UK Accounting, Tax & Compliance",
  "Experience with Leading UK Accounting Software",
  "Secure & Confidential Working Practices",
  "Flexible Resource & Engagement Models",
  "Cost-Effective Offshore Accounting Solutions",
  "Consistent Quality & Quick Turnaround Times",
  "Responsive Communication",
  "Long-Term Partnership Approach"
];

export const pubAndBarContent = {
  id: "pubs-bars",
  title: "Pub & Bar Accounting Specialisation",
  description: "Our friendly team of pub and restaurant accountants provide specialist accountancy and tax services to pubs & restaurants. Our experts provide a unique client focused service to ensure all your accountancy and taxation requirements are dealt with as smoothly and efficiently as possible.",
  services: [
    "Preparation of annual accounts",
    "Preparation of monthly management accounts",
    "Preparation of tax returns",
    "Financial forecasting and budgeting",
    "Property issues for pubs & restaurants",
    "Capital allowances claims",
    "Incorporation",
    "Company structures",
    "Capital gains tax planning",
    "Buying a pub",
    "Buying a restaurant",
    "Selling a pub",
    "Selling a restaurant",
    "Exit strategies",
    "IT consultancy",
    "VAT advice",
    "Financing of new developments",
    "Payroll services",
    "Inheritance tax planning"
  ],
  issues: [
    {
      title: "Auto Enrolment",
      description: "There are hundreds of thousands of smaller companies approaching their staging date and the ability of pension providers to provide solutions is becoming a real issue of capacity. It is not usually about just having a pension scheme, but having the process and systems in place to collate the data required to present and report to the Pensions Regulator."
    },
    {
      title: "Growing your restaurant",
      description: "Under the current economic climate and with thousands of new restaurants opening every year, it is crucial your restaurant stands out from the crowd. Our expert pub and restaurant accountants can help you."
    },
    {
      title: "Cost pressures",
      description: "The industry has seen rising costs in terms of minimum wage, VAT rises, business rates and prices on the back of increasing global and local competition. As many of the staff who are employed in pubs & restaurants are working at the National Minimum Wage level the increases to staffing costs have been significant. With National Minimum Wage set to rise again this year, competition at an all-time high and the sector facing unrelenting pressures to maintain margins, it is more important than ever to seek sound and proactive advice."
    }
  ]
};

export const industries = [
  { id: "pubs-bars", name: "Pubs & Bars", isPremium: true },
  { id: "restaurants", name: "Restaurants", isPremium: false },
  { id: "retail", name: "Retail", isPremium: false },
  { id: "construction", name: "Construction", isPremium: false },
  { id: "healthcare", name: "Healthcare", isPremium: false },
  { id: "manufacturing", name: "Manufacturing", isPremium: false },
  { id: "real-estate", name: "Real Estate", isPremium: false },
  { id: "e-commerce", name: "E-commerce", isPremium: false },
  { id: "professional-services", name: "Professional Services", isPremium: false },
];

export const globalServices: CategoryContent = {
  title: "Global Services",
  services: [
    {
      id: "uae",
      title: "United Arab Emirates (UAE)",
      description: "Comprehensive financial and tax compliance support in the UAE.",
      bulletPoints: ["Bookkeeping", "VAT Compliance", "Corporate Tax", "Financial Statements", "Payroll Support"]
    },
    {
      id: "saudi-arabia",
      title: "Saudi Arabia",
      description: "Expert assistance with financial reporting and ZATCA compliance.",
      bulletPoints: ["Bookkeeping", "VAT Compliance", "ZATCA Compliance Support", "Financial Reporting", "Payroll Support"]
    },
    {
      id: "qatar",
      title: "Qatar",
      description: "Professional accounting and VAT support in Qatar.",
      bulletPoints: ["Bookkeeping", "Accounting", "VAT Support (where applicable)", "Financial Reporting", "Payroll Support"]
    },
    {
      id: "oman",
      title: "Oman",
      description: "Reliable VAT compliance and financial reporting for Omani businesses.",
      bulletPoints: ["Bookkeeping", "VAT Compliance", "Financial Reporting", "Payroll Support"]
    },
    {
      id: "bahrain",
      title: "Bahrain",
      description: "End-to-end bookkeeping and accounting support in Bahrain.",
      bulletPoints: ["Bookkeeping", "VAT Compliance", "Accounting", "Financial Reporting"]
    },
    {
      id: "kuwait",
      title: "Kuwait",
      description: "Dedicated financial reporting and payroll support.",
      bulletPoints: ["Bookkeeping", "Accounting", "Financial Reporting", "Payroll Support"]
    },
    {
      id: "europe",
      title: "Europe",
      description: "Extensive Virtual Finance Office services across European markets.",
      bulletPoints: [
        "Accounting & Bookkeeping",
        "Financial Reporting",
        "Management Accounts",
        "Bank Reconciliations",
        "Accounts Payable",
        "Accounts Receivable",
        "Payroll Support",
        "VAT Compliance Support",
        "VAT Registration Support",
        "VAT Return Preparation",
        "Corporate Tax Compliance Support",
        "Year-End Accounts Preparation",
        "Business Compliance Support",
        "Cloud Accounting Solutions",
        "Virtual Finance Office Support"
      ]
    },
    {
      id: "australia",
      title: "Australia",
      description: "Expert BAS and payroll support for Australian entities.",
      bulletPoints: ["Bookkeeping", "BAS Support", "Payroll", "Financial Reporting"]
    },
    {
      id: "singapore",
      title: "Singapore",
      description: "GST and bookkeeping services for Singapore-based companies.",
      bulletPoints: ["Bookkeeping", "GST Support", "Financial Reporting", "Payroll"]
    },
    {
      id: "canada",
      title: "Canada",
      description: "Tailored bookkeeping and GST/HST support for Canadian businesses.",
      bulletPoints: ["Bookkeeping", "GST/HST Support", "Payroll", "Financial Reporting"]
    }
  ]
};
