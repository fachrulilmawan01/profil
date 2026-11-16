export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badge?: string;
  location: string;
  description: string;
  responsibilities: string[];
  subEngagements?: {
    company: string;
    period: string;
    highlights: string[];
  }[];
  tags: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'project-manager',
    role: 'Project Manager',
    company: 'Enterprise IT Consulting & Implementation',
    period: '2020 – Present',
    badge: 'Current Leadership',
    location: 'Jakarta, Indonesia',
    description: 'Leading end-to-end enterprise IT project lifecycles across leading state-owned enterprises (BUMN) and private corporations.',
    responsibilities: [
      'Managing end-to-end enterprise IT project lifecycles to ensure deliverables meet timeline, scope, and budget targets.',
      'Project timeline, budget, and resource management across multidisciplinary technical and functional teams.',
      'Coordinating internal teams, clients, vendors, and C-level executive stakeholders with proactive communication.',
      'Managing User Acceptance Testing (UAT), Go-Live cutover, risk mitigation, and Quality Assurance (QA).',
      'Preparing structured project progress reports, milestone reviews, and executive documentation.'
    ],
    tags: ['E2E Governance', 'Executive Stakeholders', 'Risk Management', 'Resource Allocation', 'UAT / Go-Live']
  },
  {
    id: 'sap-successfactors-specialist',
    role: 'Functional Consultant / Specialist SAP SuccessFactors',
    company: 'PT Pembangunan Perumahan (Persero) & PT Semen Indonesia (Persero) Tbk',
    period: '2019 – 2026',
    location: 'Jakarta & Indonesia',
    description: 'Designing and optimizing human capital enterprise solutions and seamless integration with core SAP ERP systems.',
    responsibilities: [
      'Spearheading system blueprinting, custom Report Center design, and continuous enhancement workflows.',
      'Managing comprehensive Change Requests (CR) and delivering dedicated post-Go-Live hypercare support.',
      'Overseeing massive employee data migration and automated synchronization between SuccessFactors and SAP ERP.'
    ],
    subEngagements: [
      {
        company: 'PT Pembangunan Perumahan (PT PP)',
        period: '2022 – 2026',
        highlights: [
          'System blueprint preparation and requirement analysis',
          'Executive Report Center customization',
          'System enhancement and Change Request management',
          'Post-Go-Live operational and hypercare support'
        ]
      },
      {
        company: 'PT Semen Indonesia (PT SIG)',
        period: '2019 – 2021',
        highlights: [
          'Employee data migration and master data cleansing',
          'Seamless SAP ERP integration',
          'System rollout across SIG group subsidiaries'
        ]
      }
    ],
    tags: ['SAP SuccessFactors', 'PMGM', 'SCDP', 'Report Center', 'ERP Integration', 'Data Migration']
  },
  {
    id: 'sap-sd-qa',
    role: 'Functional SAP SD & QA Implementation',
    company: 'PT Waskita Karya (Persero) Tbk & PT Semen Padang',
    period: '2015 – 2019',
    location: 'Indonesia',
    description: 'Delivering quality assurance for core ERP implementations and specialized functional consulting for Sales & Distribution.',
    responsibilities: [
      '2019 (PT Waskita Karya Persero Tbk): Quality Assurance for SAP S/4HANA Implementation, verifying delivery quality and operational compliance.',
      '2015 – 2018 (PT Semen Padang): Functional SAP Sales & Distribution (SD), supporting enterprise cement distribution, order fulfillment, and billing.'
    ],
    tags: ['SAP S/4HANA QA', 'SAP SD Module', 'Audit Compliance', 'Sales & Distribution', 'Process Blueprint']
  },
  {
    id: 'software-developer',
    role: 'Software Developer (ABAP & PHP) / System Analyst',
    company: 'PT Semen Padang',
    period: '2015 – 2018',
    location: 'Padang, Indonesia',
    description: 'Architecting and developing internal enterprise software applications to streamline logistics, supply chain, and employee operations.',
    responsibilities: [
      'Shipment Management Application: Streamlining nationwide logistics and dispatch tracking.',
      'Sales & Distribution Online Application: Digital portal for cement ordering and account status.',
      'Warehouse Management Application: Inventory stock levels and real-time movement audits.',
      'Audit Findings Monitoring: Corporate compliance tracking and corrective action logging.',
      'PKB (Collective Labor Agreement): Industrial relations management portal for employee rights and covenants.',
      'Online Transportation Application: Internal dispatch management and vehicular fleet allocation.'
    ],
    tags: ['ABAP Programming', 'PHP Core', 'System Analysis', 'Relational Databases', 'Supply Chain Logistics']
  }
];
