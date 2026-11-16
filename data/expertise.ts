export interface ExpertiseCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  points: string[];
  tags: string[];
}

export const expertiseData: ExpertiseCategory[] = [
  {
    id: 'it-project-management',
    number: '01',
    title: 'IT Project Management',
    description: 'End-to-end project lifecycle, planning, budgeting, resource management, risk mitigation, and governance.',
    iconName: 'Briefcase',
    points: [
      'Comprehensive project charter & scope definition',
      'WBS, critical path timeline, and milestone planning',
      'Budget management & resource optimization',
      'Systematic risk identification & mitigation matrices',
      'Strict corporate governance and audit readiness'
    ],
    tags: ['E2E SDLC', 'WBS Planning', 'Budget Control', 'Risk Mitigation']
  },
  {
    id: 'sap-successfactors',
    number: '02',
    title: 'SAP SuccessFactors',
    description: 'Employee Central ecosystem, blueprint, Report Center, enhancement, data migration, and SAP integration.',
    iconName: 'Server',
    points: [
      'Performance & Goals Management (PMGM) configuration',
      'Succession & Career Development Planning (SCDP)',
      'Custom Report Center & executive dashboard analytics',
      'Large-scale employee master data migration',
      'Single Sign-On (SSO) & enterprise security mapping'
    ],
    tags: ['PMGM', 'SCDP', 'Report Center', 'Data Migration', 'SSO']
  },
  {
    id: 'enterprise-systems',
    number: '03',
    title: 'Enterprise Systems',
    description: 'SAP S/4HANA, SAP ERP Integration, Facility Management System, E-SHE, and Legal Compliance.',
    iconName: 'Layers',
    points: [
      'SAP S/4HANA & ERP core integration architecture',
      'Facility Management System (PIGEON) governance',
      'E-SHE & national legal compliance systems',
      'Custom inventory & logistics software suites',
      'Cross-system data synchronization workflows'
    ],
    tags: ['SAP S/4HANA', 'ERP Integration', 'Facility GA', 'E-SHE Compliance']
  },
  {
    id: 'project-delivery',
    number: '04',
    title: 'Project Delivery & QA',
    description: 'UAT, QA, deployment, Go-Live support, and post-implementation support.',
    iconName: 'CheckCircle2',
    points: [
      'Rigorous User Acceptance Testing (UAT) execution',
      'Quality Assurance (QA) audit & compliance standards',
      'Go-Live cutover planning & technical deployment',
      'Data integrity validation & cleansing processes',
      'Hypercare support & operational SLA assurance'
    ],
    tags: ['UAT Orchestration', 'QA Compliance', 'Cutover Strategy', 'Hypercare']
  },
  {
    id: 'digital-transformation',
    number: '05',
    title: 'Digital Transformation',
    description: 'Enterprise application implementation and business process improvement.',
    iconName: 'Sparkles',
    points: [
      'Legacy process modernizing & digital maturity uplift',
      'Harmonizing cross-subsidiary operational workflows',
      'Change management advocacy & organizational adoption',
      'Business value realization & efficiency KPI metrics',
      'Technology strategy roadmap formulation'
    ],
    tags: ['Process Re-engineering', 'Change Management', 'KPI Uplift', 'Adoption']
  },
  {
    id: 'stakeholder-management',
    number: '06',
    title: 'Stakeholder Management',
    description: 'Executive communication, vendor coordination, negotiation, and client relationship management.',
    iconName: 'Users2',
    points: [
      'Executive C-suite and VP-level diplomatic engagement',
      'Multi-vendor management, contract, and SLA coordination',
      'Change Request (CR) negotiation & scope boundary control',
      'Cross-functional team alignment between tech & business',
      'Institutional trust & partnership development'
    ],
    tags: ['Executive Reporting', 'Vendor Negotiation', 'CR Management', 'Diplomacy']
  }
];
