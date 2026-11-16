export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  period: string;
  category: 'SAP & SuccessFactors' | 'Enterprise Systems' | 'Custom Solutions';
  description: string;
  scope: string[];
  technologies: string[];
  impact: string;
}

export const projectsData: Project[] = [
  {
    id: 'insurance-mgmt-system',
    number: 'PROJECT 01',
    title: 'Insurance Management System',
    client: 'PT ABM',
    period: '2026',
    category: 'Enterprise Systems',
    description: 'Directed the development and implementation of an enterprise insurance management system.',
    scope: [
      'Comprehensive digital policy and asset coverage management',
      'Integration with corporate enterprise financial systems',
      'End-to-end claim processing and risk assessment workflow',
      'Executive dashboard for risk mitigation and asset monitoring'
    ],
    technologies: ['Enterprise Web Architecture', 'Financial API Integration', 'Workflow Automation', 'Executive Analytics'],
    impact: 'Established standardized corporate risk tracking and accelerated claim cycle efficiency across business subsidiaries.'
  },
  {
    id: 'pigeon-ga-facility',
    number: 'PROJECT 02',
    title: 'PIGEON – GA & Facility Management System',
    client: 'PT ABM',
    period: '2024–2026',
    category: 'Enterprise Systems',
    description: 'Managed Change Requests, feature enhancements, and operational support for the facility management system.',
    scope: [
      'Change Request (CR) management & priority backlog refinement',
      'Facility resource booking, maintenance scheduling, and vendor ticketing',
      'Multi-site asset maintenance tracking and budget governance',
      'Post-implementation operational stability and user adoption'
    ],
    technologies: ['Facility Management Platform', 'Change Request Governance', 'SLA Tracking', 'Vendor Portals'],
    impact: 'Streamlined facility operations and operational SLA adherence across national corporate offices.'
  },
  {
    id: 'elevate-lms-pmgm',
    number: 'PROJECT 03',
    title: 'Elevate – Learning Management System & PMGM',
    client: 'PT SIG',
    period: '2025–2026',
    category: 'SAP & SuccessFactors',
    description: 'Led the development of an integrated learning platform and employee performance management system.',
    scope: [
      'End-to-end delivery of corporate digital training management',
      'Integration with SAP PMGM (Performance & Goals Management)',
      'Competency gap analysis linked to employee KPI evaluations',
      'Group-wide employee training tracking and automated certifications'
    ],
    technologies: ['SAP SuccessFactors PMGM', 'LMS Architecture', 'Single Sign-On (SSO)', 'Competency Framework'],
    impact: 'Unified competency assessment and performance tracking for thousands of employees across the holding group.'
  },
  {
    id: 'sap-successfactors-pp',
    number: 'PROJECT 04',
    title: 'SAP SuccessFactors Portfolio',
    client: 'PT Pembangunan Perumahan (PT PP)',
    period: '2023–2025',
    category: 'SAP & SuccessFactors',
    description: 'Optimized PMGM modules, implemented SCDP, and integrated Single Sign-On (SSO).',
    scope: [
      'Performance & Goals Management (PMGM) process optimization',
      'Succession & Career Development Planning (SCDP) rollout',
      'Single Sign-On (SSO) configuration and enterprise authorization setup',
      'Report Center customization for HR executive intelligence'
    ],
    technologies: ['SAP SuccessFactors (PMGM & SCDP)', 'Report Center', 'SAML 2.0 SSO', 'HR Master Data'],
    impact: 'Enhanced talent succession readiness and simplified executive reporting across all operational divisions.'
  },
  {
    id: 'eshe-legal-compliance',
    number: 'PROJECT 05',
    title: 'E-SHE Legal Compliance',
    client: 'PT Trakindo',
    period: '2025',
    category: 'Enterprise Systems',
    description: 'Managed the implementation of a legal compliance system for occupational health, safety, and environmental management.',
    scope: [
      'Regulatory compliance audit trail and dynamic risk assessment',
      'Hazard identification and statutory compliance checklist automation',
      'Environmental safety metrics dashboard for operational audit readiness',
      'Multi-tier incident reporting and corrective action tracking'
    ],
    technologies: ['E-SHE Platform', 'Audit Matrix', 'Legal Compliance Engine', 'Regulatory Standards'],
    impact: 'Ensured 100% statutory compliance alignment with national occupational safety and environmental standards.'
  },
  {
    id: 'sip-sap-integration',
    number: 'PROJECT 06',
    title: 'SIP & SAP Integration',
    client: 'PT Dahana',
    period: '2024–2025',
    category: 'SAP & SuccessFactors',
    description: 'Led the implementation of an inventory information system integrated with SAP ERP.',
    scope: [
      'Sistem Informasi Persediaan (SIP) business process blueprint',
      'Real-time data synchronization between inventory and SAP ERP modules',
      'Automated stock reconciliation, valuation checks, and movement tracking',
      'User Acceptance Testing (UAT) and cutover data migration'
    ],
    technologies: ['SAP ERP Integration', 'Inventory Management (SIP)', 'RFC / BAPI Middleware', 'Data Cleansing'],
    impact: 'Eliminated inventory discrepancies and enabled live stock visibility between warehouse and core ERP.'
  },
  {
    id: 'she-app-sig',
    number: 'PROJECT 07',
    title: 'SHE Application Development',
    client: 'PT SIG',
    period: '2023–2024',
    category: 'Enterprise Systems',
    description: 'Enterprise occupational safety application implementation.',
    scope: [
      'Standardized safety violation reporting across heavy industry plants',
      'Safety inspection workflow and permit-to-work digital validation',
      'Cross-subsidiary safety KPIs and audit reporting consolidation'
    ],
    technologies: ['Enterprise Safety Suite', 'Workflow Automation', 'Mobile Field App', 'Audit Reporting'],
    impact: 'Enhanced workplace safety monitoring and reduced reporting turnaround across manufacturing plants.'
  },
  {
    id: 'transformation-project-sig',
    number: 'PROJECT 08',
    title: 'Transformation Project',
    client: 'PT SIG',
    period: '2020',
    category: 'Enterprise Systems',
    description: 'Supported corporate operational transformation initiatives.',
    scope: [
      'Operational process assessment and digital gap analysis',
      'Cross-departmental collaboration toolchain harmonization',
      'Change management roadmap alignment for executive leaders'
    ],
    technologies: ['Digital Transformation Roadmap', 'Process Re-engineering', 'Change Management'],
    impact: 'Accelerated cross-functional collaboration and operational synergy across holding subsidiaries.'
  },
  {
    id: 'stakeholder-database-pii',
    number: 'PROJECT 09',
    title: 'Application Stakeholder & Database',
    client: 'PT Penjamin Infrastruktur Indonesia',
    period: '2020',
    category: 'Custom Solutions',
    description: 'Stakeholder database development and management.',
    scope: [
      'Centralized stakeholder relationship directory and interaction history',
      'Infrastructure guarantee portfolio association and document repository',
      'Granular role-based access control and executive reporting'
    ],
    technologies: ['Relational Database Architecture', 'Stakeholder CRM', 'Role-Based Access Control', 'SQL'],
    impact: 'Streamlined stakeholder communication and institutional knowledge governance for sovereign infrastructure guarantees.'
  }
];
