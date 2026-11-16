'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    expertise: string;
    projects: string;
    education: string;
    contact: string;
    letsConnect: string;
    cv: string;
  };
  hero: {
    label: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtitle: string;
    role1: string;
    role2: string;
    location: string;
    experienceBadge: string;
    viewWork: string;
    downloadCv: string;
    statusBadge: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    trackTitle: string;
    trackSubtitle: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    strengthsTitle: string;
    strengths: {
      title: string;
      description: string;
    }[];
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    items: {
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
    }[];
  };
  expertise: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      number: string;
      title: string;
      description: string;
      iconName: string;
      points: string[];
      tags: string[];
    }[];
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterSap: string;
    filterEnterprise: string;
    filterCustom: string;
    viewDetails: string;
    modalScope: string;
    modalTech: string;
    modalImpact: string;
    closeModal: string;
    items: {
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
    }[];
  };
  education: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      degree: string;
      institution: string;
      period: string;
      description: string;
      highlights: string[];
    }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    directWa: string;
    officialEmail: string;
    copyTooltip: string;
    copied: string;
    locationLabel: string;
    locationValue: string;
    linkedInLabel: string;
    linkedInCta: string;
    declaration: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    role: string;
    sub: string;
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
      expertise: 'Keahlian',
      projects: 'Proyek',
      education: 'Pendidikan',
      contact: 'Kontak',
      letsConnect: 'Hubungi Saya',
      cv: 'Unduh CV'
    },
    hero: {
      label: 'HALO, SAYA FACHRUL ILMAWAN',
      headlinePrefix: 'Mengubah Teknologi Menjadi ',
      headlineHighlight: 'Dampak Bisnis.',
      subtitle: 'Project Manager & Konsultan SAP SuccessFactors yang berfokus pada implementasi teknologi enterprise, akselerasi transformasi digital, dan solusi bisnis berdampak nyata.',
      role1: 'Project Manager',
      role2: 'SAP SuccessFactors',
      location: 'Jakarta, Indonesia',
      experienceBadge: '11+ Tahun di IT',
      viewWork: 'Lihat Portofolio',
      downloadCv: 'Unduh CV',
      statusBadge: 'Tersedia untuk Inisiatif Enterprise',
      stat1Value: '11+ Tahun',
      stat1Label: 'Karier IT Sejak 2015',
      stat2Value: '37+',
      stat2Label: 'Projects Closed',
      stat3Value: '2020 – Kini',
      stat3Label: 'Kepemimpinan PM',
      trackTitle: 'Siklus Delivery Enterprise',
      trackSubtitle: 'Tata Kelola, UAT & QA Berjalan'
    },
    about: {
      label: 'TENTANG SAYA',
      title: 'Melampaui Teknologi, Berorientasi pada Dampak.',
      p1: 'Project Manager dan Konsultan SAP IT dengan pengalaman lebih dari 8 tahun dalam memimpin siklus proyek IT tingkat enterprise. Berpengalaman memimpin siklus proyek secara menyeluruh, mengoordinasikan tim internal, klien, vendor, dan jajaran pemangku kepentingan eksekutif.',
      p2: 'Berkomitmen menjembatani tujuan bisnis dengan eksekusi teknis melalui tata kelola proyek yang disiplin, integrasi sistem enterprise, penjaminan mutu, dan UAT demi efisiensi operasional serta akselerasi transformasi digital perusahaan.',
      strengthsTitle: 'Pilar Kekuatan Profesional',
      strengths: [
        {
          title: 'Manajemen Proyek End-to-End',
          description: 'Memimpin siklus proyek IT dari penyusunan charter, penjadwalan WBS, mitigasi risiko, hingga hypercare pasca-peluncuran.'
        },
        {
          title: 'Implementasi Sistem Enterprise',
          description: 'Integrasi sistem SAP S/4HANA, modul ERP, sistem pengelolaan fasilitas, serta aplikasi operasional korporasi.'
        },
        {
          title: 'Manajemen Pemangku Kepentingan',
          description: 'Membangun sinergi komunikasi antara pimpinan C-Level, unit bisnis lintas divisi, vendor eksternal, dan tim teknis.'
        },
        {
          title: 'SAP SuccessFactors',
          description: 'Keahlian fungsional dalam modul Performance & Goals (PMGM), Career Development (SCDP), Report Center, dan integrasi SSO.'
        },
        {
          title: 'Penjaminan Mutu & UAT',
          description: 'Memimpin pengujian User Acceptance Testing, verifikasi migrasi data, rencana cutover Go-Live, dan kepatuhan QA.'
        },
        {
          title: 'Transformasi Digital',
          description: 'Modernisasi sistem legacy dan akselerasi agilitas bisnis korporasi di berbagai holding BUMN dan sektor swasta terkemuka.'
        }
      ]
    },
    experience: {
      label: 'REKAM JEJAK KARIER',
      title: 'Perjalanan Profesional',
      subtitle: 'Dedikasi selama lebih dari satu dekade dalam memimpin proyek teknologi enterprise, modernisasi sistem, dan implementasi strategis.',
      items: [
        {
          id: 'project-manager',
          role: 'Project Manager',
          company: 'Enterprise IT Consulting & Implementation',
          period: '2020 – Sekarang',
          badge: 'Kepemimpinan Aktif',
          location: 'Jakarta, Indonesia',
          description: 'Memimpin siklus proyek IT enterprise secara menyeluruh di berbagai perusahaan holding BUMN dan sektor swasta nasional.',
          responsibilities: [
            'Mengelola siklus proyek IT enterprise menyeluruh guna memastikan deliverable tepat waktu, tepat ruang lingkup, dan sesuai anggaran.',
            'Manajemen timeline, alokasi anggaran, dan optimalisasi sumber daya di tim multidisiplin teknis dan fungsional.',
            'Mengoordinasikan tim internal, klien, vendor, dan pemangku kepentingan tingkat eksekutif dengan komunikasi proaktif.',
            'Memimpin pelaksanaan User Acceptance Testing (UAT), cutover Go-Live, mitigasi risiko, dan Quality Assurance (QA).',
            'Menyusun laporan kemajuan proyek berkala, milestone reviews, serta dokumentasi tata kelola enterprise.'
          ],
          tags: ['Tata Kelola E2E', 'Stakeholder Eksekutif', 'Manajemen Risiko', 'Alokasi Sumber Daya', 'UAT / Go-Live']
        },
        {
          id: 'sap-successfactors-specialist',
          role: 'Functional Consultant / Specialist SAP SuccessFactors',
          company: 'PT Pembangunan Perumahan (Persero) & PT Semen Indonesia (Persero) Tbk',
          period: '2019 – 2026',
          location: 'Jakarta & Indonesia',
          description: 'Merancang dan mengoptimalkan solusi human capital enterprise serta integrasi terpadu dengan core sistem SAP ERP.',
          responsibilities: [
            'Memimpin penyusunan cetak biru sistem (blueprint), perancangan Report Center kustom, dan peningkatan fitur berkelanjutan.',
            'Mengelola Change Request (CR) dan memberikan dukungan operasional pasca-Go-Live (hypercare).',
            'Mengawasi migrasi data karyawan berskala besar dan integrasi sinkronisasi otomatis antara SuccessFactors dan SAP ERP.'
          ],
          subEngagements: [
            {
              company: 'PT Pembangunan Perumahan (PT PP)',
              period: '2022 – 2026',
              highlights: [
                'Penyusunan blueprint sistem & perancangan modul Report Center.',
                'Pengembangan fitur berkelanjutan dan manajemen Change Request.',
                'Dukungan stabilisasi operasional pasca-Go-Live.'
              ]
            },
            {
              company: 'PT Semen Indonesia (PT SIG)',
              period: '2019 – 2021',
              highlights: [
                'Migrasi data karyawan skala holding dan integrasi SAP ERP.',
                'Rollout sistem ke seluruh anak perusahaan PT SIG.'
              ]
            }
          ],
          tags: ['SAP SuccessFactors', 'Report Center', 'Migrasi Data', 'Integrasi ERP', 'Change Request']
        },
        {
          id: 'sap-sd-qa',
          role: 'Functional SAP SD & QA Implementation',
          company: 'PT Waskita Karya (Persero) Tbk & PT Semen Padang',
          period: '2015 – 2019',
          location: 'Indonesia',
          description: 'Berperan dalam penjaminan mutu implementasi SAP S/4HANA serta konsultasi fungsional modul Sales & Distribution (SD).',
          responsibilities: [
            '2019: QA Implementasi SAP S/4HANA di PT Waskita Karya (Persero) Tbk – memastikan kepatuhan alur kerja dan integritas sistem.',
            '2015–2018: Fungsional SAP Sales & Distribution di PT Semen Padang – konfigurasi proses penjualan, distribusi, dan penagihan enterprise.'
          ],
          tags: ['SAP S/4HANA', 'SAP SD', 'QA Implementation', 'Enterprise Distribution']
        },
        {
          id: 'software-developer-analyst',
          role: 'Software Developer (ABAP & PHP) / System Analyst',
          company: 'PT Semen Padang',
          period: '2015 – 2018',
          location: 'Padang, Indonesia',
          description: 'Mengembangkan sistem operasional internal korporasi dan mengintegrasikan modul bisnis dengan backend SAP.',
          responsibilities: [
            'Shipment Management System – Otomasi penjadwalan dan pelacakan pengiriman semen nasional.',
            'Sales & Distribution Online – Portal pemesanan dan distribusi penjualan digital terintegrasi.',
            'Warehouse Management System – Digitalisasi inventori gudang dan pergerakan stok real-time.',
            'Audit Findings Monitoring – Pelacakan dan kepatuhan tindak lanjut temuan audit korporat.',
            'PKB (Perjanjian Kerja Bersama) & Transportasi Online – Digitalisasi hubungan industrial dan transportasi internal.'
          ],
          tags: ['ABAP', 'PHP Enterprise', 'System Analyst', 'Warehouse Mgmt', 'Shipment System']
        }
      ]
    },
    expertise: {
      label: 'KEAHLIAN UTAMA',
      title: 'Kompetensi Enterprise',
      subtitle: 'Penguasaan metodologi manajemen proyek terstruktur yang dipadukan dengan keahlian teknis fungsional sistem enterprise.',
      items: [
        {
          id: 'it-project-management',
          number: '01',
          title: 'IT Project Management',
          description: 'Siklus proyek menyeluruh, perencanaan, penganggaran, alokasi sumber daya, mitigasi risiko, dan tata kelola.',
          iconName: 'Briefcase',
          points: [
            'Penyusunan charter dan batasan ruang lingkup proyek',
            'Perencanaan jadwal WBS dan critical path milestones',
            'Pengendalian anggaran dan optimalisasi sumber daya',
            'Matriks identifikasi dan mitigasi risiko komprehensif',
            'Kepatuhan tata kelola korporasi dan kesiapan audit'
          ],
          tags: ['Tata Kelola E2E', 'Perencanaan WBS', 'Kontrol Anggaran', 'Mitigasi Risiko']
        },
        {
          id: 'sap-successfactors',
          number: '02',
          title: 'SAP SuccessFactors',
          description: 'Ekosistem Employee Central, blueprint, Report Center, enhancement, migrasi data, dan integrasi SAP.',
          iconName: 'Server',
          points: [
            'Konfigurasi Performance & Goals Management (PMGM)',
            'Perencanaan Succession & Career Development (SCDP)',
            'Kustomisasi analitik dasbor eksekutif Report Center',
            'Migrasi data master karyawan skala besar',
            'Integrasi Single Sign-On (SSO) dan pemetaan keamanan'
          ],
          tags: ['PMGM', 'SCDP', 'Report Center', 'Migrasi Data', 'SSO']
        },
        {
          id: 'enterprise-systems',
          number: '03',
          title: 'Enterprise Systems',
          description: 'SAP S/4HANA, Integrasi SAP ERP, Facility Management System, E-SHE, dan Kepatuhan Hukum.',
          iconName: 'Layers',
          points: [
            'Arsitektur integrasi core SAP S/4HANA & ERP',
            'Tata kelola sistem manajemen fasilitas (PIGEON)',
            'Digitalisasi kepatuhan regulasi lingkungan hidup & K3',
            'Manajemen aset multi-lokasi dan tracking terpusat',
            'Integrasi antarmuka API antar-sistem korporat'
          ],
          tags: ['SAP S/4HANA', 'Integrasi ERP', 'PIGEON FMS', 'E-SHE']
        },
        {
          id: 'project-delivery',
          number: '04',
          title: 'Project Delivery & QA',
          description: 'Pengujian UAT, QA implementasi, deployment, dukungan Go-Live, dan pemeliharaan pasca-implementasi.',
          iconName: 'ClipboardCheck',
          points: [
            'Perancangan skenario UAT dan kriteria penerimaan bisnis',
            'Audit penjaminan mutu dan verifikasi fungsional',
            'Manajemen cutover dan transisi Go-Live zero-downtime',
            'Struktur support hypercare pasca-peluncuran',
            'Program transfer pengetahuan dan adopsi pengguna'
          ],
          tags: ['UAT Governance', 'QA Testing', 'Go-Live Cutover', 'Hypercare']
        },
        {
          id: 'digital-transformation',
          number: '05',
          title: 'Digital Transformation',
          description: 'Implementasi aplikasi enterprise dan peningkatan proses bisnis untuk efisiensi korporat.',
          iconName: 'TrendingUp',
          points: [
            'Rekayasa ulang proses bisnis dan eliminasi redundansi',
            'Modernisasi sistem legacy ke platform cloud modern',
            'Platform pembelajaran digital terintegrasi (Elevate LMS)',
            'Otomasi alur kerja operasional antar-departemen',
            'Pengambilan keputusan berbasis data dan analitik'
          ],
          tags: ['BPR', 'Modernisasi Cloud', 'Elevate LMS', 'Efisiensi']
        },
        {
          id: 'stakeholder-management',
          number: '06',
          title: 'Stakeholder Management',
          description: 'Komunikasi eksekutif C-Level, koordinasi vendor, negosiasi, dan manajemen hubungan klien.',
          iconName: 'Users2',
          points: [
            'Penyajian status proyek ke jajaran Direksi dan C-Level',
            'Manajemen kinerja vendor pihak ketiga dan kepatuhan SLA',
            'Resolusi konflik dan penyelarasan ekspektasi klien',
            'Penyusunan pelaporan transparansi berkala',
            'Manajemen perubahan organisasi dan komunikasi tim'
          ],
          tags: ['Komunikasi C-Level', 'Manajemen Vendor', 'SLA Control', 'Negosiasi']
        }
      ]
    },
    projects: {
      label: 'PORTOFOLIO TERPILIH',
      title: 'Proyek Enterprise Pilihan',
      subtitle: 'Implementasi strategis dengan tata kelola profesional, kepatuhan arsitektur enterprise, dan nilai bisnis teruji.',
      filterAll: 'Semua Proyek',
      filterSap: 'SAP & SuccessFactors',
      filterEnterprise: 'Enterprise Systems',
      filterCustom: 'Solusi Kustom',
      viewDetails: 'Lihat Detail Proyek',
      modalScope: 'Ruang Lingkup & Eksekusi',
      modalTech: 'Teknologi & Arsitektur',
      modalImpact: 'Nilai & Dampak Bisnis',
      closeModal: 'Tutup',
      items: [
        {
          id: 'insurance-mgmt-system',
          number: 'PROYEK 01',
          title: 'Insurance Management System',
          client: 'PT ABM',
          period: '2026',
          category: 'Enterprise Systems',
          description: 'Memimpin pengembangan dan implementasi sistem manajemen asuransi enterprise secara terintegrasi.',
          scope: [
            'Pengelolaan polis digital dan proteksi aset korporasi secara menyeluruh',
            'Integrasi sistematis dengan sistem keuangan enterprise perusahaan',
            'Alur kerja pemrosesan klaim otomatis dan penilaian risiko',
            'Dasbor eksekutif mitigasi risiko dan pemantauan aset holding'
          ],
          technologies: ['Enterprise Web Architecture', 'Financial API Integration', 'Workflow Automation', 'Executive Analytics'],
          impact: 'Menstandarkan pelacakan risiko korporasi serta mempercepat efisiensi siklus pemrosesan klaim di seluruh anak perusahaan.'
        },
        {
          id: 'pigeon-ga-facility',
          number: 'PROYEK 02',
          title: 'PIGEON – GA & Facility Management System',
          client: 'PT ABM',
          period: '2024–2026',
          category: 'Enterprise Systems',
          description: 'Mengelola Change Request, peningkatan fungsionalitas fitur, dan dukungan operasional sistem manajemen fasilitas.',
          scope: [
            'Tata kelola Change Request (CR) dan penyempurnaan backlog prioritas',
            'Pemesanan fasilitas, penjadwalan pemeliharaan, dan tiket vendor',
            'Pelacakan pemeliharaan aset multi-lokasi dan pengawasan anggaran',
            'Stabilisasi operasional pasca-implementasi dan adopsi pengguna'
          ],
          technologies: ['Facility Management Platform', 'Change Request Governance', 'SLA Tracking', 'Vendor Portals'],
          impact: 'Menyederhanakan operasional fasilitas dan meningkatkan kepatuhan SLA vendor di seluruh kantor operasional nasional.'
        },
        {
          id: 'elevate-lms-pmgm',
          number: 'PROYEK 03',
          title: 'Elevate – Learning Management System & PMGM',
          client: 'PT SIG',
          period: '2025–2026',
          category: 'SAP & SuccessFactors',
          description: 'Memimpin pengembangan platform pembelajaran terpadu dan sistem manajemen kinerja karyawan holding.',
          scope: [
            'Arsitektur platform pembelajaran digital multi-anak perusahaan',
            'Penyelarasan KPI kinerja dengan sasaran strategis korporasi',
            'Integrasi profil kompetensi karyawan dan jalur pengembangan karier',
            'Sertifikasi kepatuhan dan pelaporan analitik HR terpusat'
          ],
          technologies: ['SAP SuccessFactors PMGM', 'Enterprise LMS Platform', 'Single Sign-On', 'HR Analytics Engine'],
          impact: 'Mempersatukan sistem evaluasi kinerja dan program pengembangan kompetensi bagi puluhan ribu karyawan holding.'
        },
        {
          id: 'sap-sf-portfolio-pp',
          number: 'PROYEK 04',
          title: 'SAP SuccessFactors Portfolio',
          client: 'PT Pembangunan Perumahan (PT PP)',
          period: '2023–2025',
          category: 'SAP & SuccessFactors',
          description: 'Optimalisasi modul PMGM, implementasi SCDP, dan integrasi Single Sign-On (SSO) perusahaan.',
          scope: [
            'Konfigurasi modul Performance & Goals Management (PMGM)',
            'Penerapan modul Succession & Career Development Planning (SCDP)',
            'Integrasi Single Sign-On (SSO) dengan infrastruktur IT korporasi',
            'Penyusunan Report Center kustom dan tata kelola Change Request'
          ],
          technologies: ['SAP SuccessFactors', 'PMGM', 'SCDP', 'Report Center', 'Enterprise SSO'],
          impact: 'Meningkatkan transparansi penilaian kinerja berkala dan akurasi perencanaan suksesi kepemimpinan perusahaan.'
        },
        {
          id: 'eshe-legal-compliance',
          number: 'PROYEK 05',
          title: 'E-SHE Legal Compliance',
          client: 'PT Trakindo',
          period: '2025',
          category: 'Enterprise Systems',
          description: 'Mengelola implementasi sistem kepatuhan hukum untuk keselamatan kerja, kesehatan, dan pengelolaan lingkungan.',
          scope: [
            'Digitalisasi pemantauan regulasi hukum K3 dan lingkungan hidup',
            'Audit kepatuhan operasional dan sistem peringatan dini perizinan',
            'Matriks pelaporan insiden dan protokol tindakan mitigasi',
            'Dasbor pengawasan keselamatan kerja untuk jajaran manajemen'
          ],
          technologies: ['Regulatory Compliance Engine', 'Audit Matrices', 'Automated Notifications', 'Executive Dashboard'],
          impact: 'Menjamin kepatuhan regulasi lingkungan dan K3 secara akuntabel dengan transparansi audit penuh.'
        },
        {
          id: 'sip-sap-dahana',
          number: 'PROYEK 06',
          title: 'SIP & SAP Integration',
          client: 'PT Dahana',
          period: '2024–2025',
          category: 'SAP & SuccessFactors',
          description: 'Memimpin implementasi sistem informasi persediaan terintegrasi langsung dengan core SAP ERP.',
          scope: [
            'Sinkronisasi data master inventori dengan modul SAP Materials Management',
            'Otomasi pencatatan mutasi barang dan rekonsiliasi stok',
            'Pengawasan alur pengadaan dan approval berjenjang',
            'Pengujian UAT lintas divisi dan pelatihan operasional pengguna'
          ],
          technologies: ['SAP ERP Integration', 'Inventory Information System', 'BAPI/API Connector', 'UAT Execution'],
          impact: 'Mengurangi selisih data stok fisik dan mempercepat pelaporan inventori secara real-time ke sistem ERP.'
        },
        {
          id: 'she-app-development',
          number: 'PROYEK 07',
          title: 'SHE Application Development',
          client: 'PT SIG',
          period: '2023–2024',
          category: 'Custom Solutions',
          description: 'Implementasi aplikasi keselamatan kerja operasional enterprise di lingkungan pabrik dan operasional.',
          scope: [
            'Pelaporan insiden kerja mobile dan investigasi akar masalah',
            'Inspeksi keselamatan kerja digital di fasilitas industri',
            'Pemantauan indikator keselamatan dan analitik kepatuhan',
            'Integrasi data keselamatan kerja antar-pabrik holding'
          ],
          technologies: ['Enterprise Mobile/Web', 'Safety Management System', 'Root Cause Tracking', 'Analytics Portal'],
          impact: 'Mempercepat respons penanganan insiden serta menumbuhkan budaya keselamatan kerja proaktif di seluruh unit pabrik.'
        },
        {
          id: 'transformation-project',
          number: 'PROYEK 08',
          title: 'Corporate Transformation Project',
          client: 'PT SIG',
          period: '2020',
          category: 'Custom Solutions',
          description: 'Mendukung inisiatif transformasi operasional korporasi pasca-konsolidasi holding industri.',
          scope: [
            'Penyelarasan proses operasional pasca-integrasi entitas bisnis',
            'Standardisasi alur kerja digital antar-anak perusahaan',
            'Manajemen perubahan dan koordinasi lintas fungsi pemangku kepentingan',
            'Pengawalan milestone transformasi strategis'
          ],
          technologies: ['Operational Governance', 'Business Process Harmonization', 'Executive PMO Tracking'],
          impact: 'Mendukung kelancaran transisi konsolidasi operasional holding secara terstruktur dan terukur.'
        },
        {
          id: 'stakeholder-database-pii',
          number: 'PROYEK 09',
          title: 'Application Stakeholder & Database',
          client: 'PT Penjamin Infrastruktur Indonesia (Persero)',
          period: '2020',
          category: 'Custom Solutions',
          description: 'Pengembangan dan tata kelola basis data pemangku kepentingan institusi penjaminan infrastruktur nasional.',
          scope: [
            'Perancangan basis data relasional pemangku kepentingan institusional',
            'Manajemen hubungan mitra, lembaga keuangan, dan kementerian',
            'Sistem pencatatan interaksi dan pelaporan kepatuhan governance',
            'Keamanan data tingkat tinggi dan kontrol hak akses terenkripsi'
          ],
          technologies: ['Relational Database Architecture', 'Stakeholder CRM Engine', 'Role-Based Access Control'],
          impact: 'Meningkatkan akurasi pengelolaan data pemangku kepentingan strategis dan mendukung tata kelola BUMN yang transparan.'
        }
      ]
    },
    education: {
      label: 'LATAR BELAKANG AKADEMIK',
      title: 'Pendidikan & Kredensial',
      subtitle: 'Landasan akademis dalam bidang Ilmu Komputer, Teknik Informatika, dan Sistem Informasi Enterprise.',
      items: [
        {
          degree: 'Magister Teknik Informatika (M.Kom.)',
          institution: 'Universitas Putra Indonesia YPTK Padang',
          period: '2024 – 2026',
          description: 'Fokus pada arsitektur perangkat lunak enterprise tingkat lanjut, manajemen proyek strategis, tata kelola IT, dan rekayasa data.',
          highlights: [
            'Spesialisasi: Arsitektur Perangkat Lunak Enterprise & Tata Kelola IT',
            'Penerapan metodologi agile & waterfall dalam transformasi digital korporat'
          ]
        },
        {
          degree: 'Sarjana Sistem Informasi (S.Kom.)',
          institution: 'STMIK Indonesia Padang',
          period: '2011 – 2015',
          description: 'Fondasi kuat dalam rekayasa perangkat lunak, analisis sistem bisnis, basis data relasional, dan arsitektur ERP.',
          highlights: [
            'Spesialisasi: Analisis Sistem Informasi & Rekayasa Perangkat Lunak',
            'Pengembangan awal aplikasi operasional korporat dan integrasi database'
          ]
        }
      ]
    },
    contact: {
      label: 'HUBUNGI SAYA',
      title: 'Mari Ciptakan Sesuatu yang Berdampak.',
      subtitle: 'Terbuka untuk kolaborasi profesional, konsultasi proyek enterprise, dan inisiatif transformasi digital terdepan.',
      directWa: 'WhatsApp Langsung',
      officialEmail: 'Email Resmi',
      copyTooltip: 'Salin email',
      copied: 'Tersalin!',
      locationLabel: 'Lokasi Domisili',
      locationValue: 'Jakarta, Indonesia',
      linkedInLabel: 'LinkedIn',
      linkedInCta: 'Terhubung di LinkedIn',
      declaration: 'Data dan kualifikasi yang dicantumkan dinyatakan benar, akurat, dan dapat dipertanggungjawabkan.',
      formTitle: 'Kirim Pesan Langsung',
      formSubtitle: 'Silakan isi formulir di bawah ini untuk memulai diskusi proyek.',
      formName: 'Nama Lengkap',
      formNamePlaceholder: 'contoh: Budi Pratama',
      formEmail: 'Alamat Email',
      formEmailPlaceholder: 'budi@perusahaan.com',
      formSubject: 'Subjek / Keperluan',
      formSubjectPlaceholder: 'Inisiasi Proyek / Diskusi Konsultasi',
      formMessage: 'Pesan / Rincian Kebutuhan Proyek',
      formMessagePlaceholder: 'Jelaskan ringkas mengenai inisiatif atau proyek yang ingin didiskusikan...',
      formSubmit: 'Kirim Pesan',
      formSuccess: 'Terima kasih! Aplikasi email Anda akan terbuka untuk mengirim pesan.'
    },
    footer: {
      role: 'Project Manager | Konsultan SAP SuccessFactors',
      sub: 'Jakarta, Indonesia • Profesional IT Sejak 2015',
      rights: 'Hak cipta dilindungi undang-undang.',
      backToTop: 'Kembali ke Atas'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      expertise: 'Expertise',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      letsConnect: "Let's Connect",
      cv: 'Download CV'
    },
    hero: {
      label: "HELLO, I'M FACHRUL ILMAWAN",
      headlinePrefix: 'Turning Technology into ',
      headlineHighlight: 'Business Impact.',
      subtitle: 'Project Manager & SAP SuccessFactors Consultant specializing in enterprise technology, digital transformation, and delivering impactful business solutions.',
      role1: 'Project Manager',
      role2: 'SAP SuccessFactors',
      location: 'Jakarta, Indonesia',
      experienceBadge: '11+ Years in IT',
      viewWork: 'View My Work',
      downloadCv: 'Download CV',
      statusBadge: 'Available for Enterprise Initiatives',
      stat1Value: '11+ Years',
      stat1Label: 'IT Career Since 2015',
      stat2Value: '37+',
      stat2Label: 'Projects Closed',
      stat3Value: '2020 – Present',
      stat3Label: 'PM Leadership Track',
      trackTitle: 'Enterprise Delivery Lifecycle',
      trackSubtitle: 'Active Governance, UAT & QA'
    },
    about: {
      label: 'ABOUT ME',
      title: 'Beyond Technology, Driven by Impact.',
      p1: 'Project Manager and SAP IT Consultant with more than 8 years of dedicated experience managing enterprise IT project lifecycles. Experienced in managing complete project lifecycles, coordinating internal teams, clients, vendors, and executive stakeholders.',
      p2: 'Focused on bridging business objectives and technical execution through disciplined project governance, enterprise system integration, quality assurance, and UAT to improve operational efficiency and accelerate corporate digital transformation.',
      strengthsTitle: 'Core Professional Strengths',
      strengths: [
        {
          title: 'End-to-End Project Management',
          description: 'Guiding complex enterprise IT lifecycles from charter initiation, WBS scheduling, and budget governance to post-launch hypercare.'
        },
        {
          title: 'Enterprise System Implementation',
          description: 'Seamless integration of SAP S/4HANA, ERP modules, facility management systems, and specialized business applications.'
        },
        {
          title: 'Stakeholder Management',
          description: 'Building diplomatic bridges between C-level executives, cross-functional business units, external vendors, and technical developers.'
        },
        {
          title: 'SAP SuccessFactors',
          description: 'Comprehensive functional expertise in Performance & Goals (PMGM), Succession (SCDP), Report Center, and Single Sign-On (SSO).'
        },
        {
          title: 'Quality Assurance & UAT',
          description: 'Directing stringent User Acceptance Testing, master data migration verification, cutover planning, and operational QA compliance.'
        },
        {
          title: 'Digital Transformation',
          description: 'Modernizing legacy processes and accelerating corporate business agility across leading BUMN holdings and private corporations.'
        }
      ]
    },
    experience: {
      label: 'CAREER TIMELINE',
      title: 'Professional Journey',
      subtitle: 'A track record of technological execution, enterprise system modernization, and project leadership spanning over a decade.',
      items: [
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
                'System blueprint preparation & Report Center module design.',
                'Continuous system enhancements and Change Request management.',
                'Post-Go-Live stabilization and operational support.'
              ]
            },
            {
              company: 'PT Semen Indonesia (PT SIG)',
              period: '2019 – 2021',
              highlights: [
                'Group-wide employee data migration and SAP ERP integration.',
                'System rollout across all PT SIG operating subsidiaries.'
              ]
            }
          ],
          tags: ['SAP SuccessFactors', 'Report Center', 'Data Migration', 'ERP Integration', 'Change Request']
        },
        {
          id: 'sap-sd-qa',
          role: 'Functional SAP SD & QA Implementation',
          company: 'PT Waskita Karya (Persero) Tbk & PT Semen Padang',
          period: '2015 – 2019',
          location: 'Indonesia',
          description: 'Spearheading quality assurance for SAP S/4HANA implementation and functional consultation for Sales & Distribution (SD).',
          responsibilities: [
            '2019: SAP S/4HANA Implementation QA at PT Waskita Karya (Persero) Tbk – ensuring end-to-end workflow integrity.',
            '2015–2018: Functional SAP Sales & Distribution at PT Semen Padang – enterprise sales order processing, pricing, and distribution.'
          ],
          tags: ['SAP S/4HANA', 'SAP SD', 'QA Implementation', 'Enterprise Distribution']
        },
        {
          id: 'software-developer-analyst',
          role: 'Software Developer (ABAP & PHP) / System Analyst',
          company: 'PT Semen Padang',
          period: '2015 – 2018',
          location: 'Padang, Indonesia',
          description: 'Engineering enterprise internal business applications and integrating core operational workflows with SAP backend.',
          responsibilities: [
            'Shipment Management System – Nationwide cement distribution tracking and automated logistics scheduling.',
            'Sales & Distribution Online – Integrated online ordering portal and order fulfillment workflows.',
            'Warehouse Management System – Inventory tracking, stock movement, and digital warehouse logs.',
            'Audit Findings Monitoring – Corporate compliance governance and audit recommendation tracking.',
            'PKB (Collective Labor Agreement) & Online Transport – Digitized HR employee relations and corporate transport dispatch.'
          ],
          tags: ['ABAP', 'PHP Enterprise', 'System Analyst', 'Warehouse Mgmt', 'Shipment System']
        }
      ]
    },
    expertise: {
      label: 'AREAS OF EXPERTISE',
      title: 'Core Enterprise Competencies',
      subtitle: 'Proven domain mastery combining structured project management methodologies with deep SAP enterprise functional expertise.',
      items: [
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
            'Occupational Health, Safety & Environmental compliance',
            'Multi-site asset lifecycle and centralized tracking',
            'Cross-enterprise system API and data integration'
          ],
          tags: ['SAP S/4HANA', 'ERP Integration', 'PIGEON FMS', 'E-SHE']
        },
        {
          id: 'project-delivery',
          number: '04',
          title: 'Project Delivery & QA',
          description: 'UAT, QA implementation, deployment, Go-Live support, and post-implementation hypercare.',
          iconName: 'ClipboardCheck',
          points: [
            'Comprehensive UAT test script design & sign-off',
            'Rigorous quality assurance and functional verification',
            'Zero-downtime cutover and Go-Live deployment orchestration',
            'Post-implementation stabilization and hypercare support',
            'Structured knowledge transfer and user enablement'
          ],
          tags: ['UAT Governance', 'QA Testing', 'Go-Live Cutover', 'Hypercare']
        },
        {
          id: 'digital-transformation',
          number: '05',
          title: 'Digital Transformation',
          description: 'Enterprise application implementation and business process re-engineering.',
          iconName: 'TrendingUp',
          points: [
            'Business process re-engineering and waste elimination',
            'Legacy application modernization to cloud platforms',
            'Unified corporate learning ecosystem (Elevate LMS)',
            'Cross-departmental operational workflow automation',
            'Data-driven decision making and performance tracking'
          ],
          tags: ['BPR', 'Cloud Modernization', 'Elevate LMS', 'Efficiency']
        },
        {
          id: 'stakeholder-management',
          number: '06',
          title: 'Stakeholder Management',
          description: 'Executive C-Level communication, vendor coordination, negotiation, and client relationship management.',
          iconName: 'Users2',
          points: [
            'C-Suite & Board of Directors executive steering presentations',
            'Third-party vendor procurement, monitoring, and SLA enforcement',
            'Cross-functional conflict mediation and consensus building',
            'Transparent milestone status reporting',
            'Organizational change management (OCM) alignment'
          ],
          tags: ['C-Level Comms', 'Vendor Management', 'SLA Control', 'Negotiation']
        }
      ]
    },
    projects: {
      label: 'SELECTED WORK',
      title: 'Selected Enterprise Projects',
      subtitle: 'Highlighting enterprise implementations delivered with rigorous governance and measurable business impact.',
      filterAll: 'All Projects',
      filterSap: 'SAP & SuccessFactors',
      filterEnterprise: 'Enterprise Systems',
      filterCustom: 'Custom Solutions',
      viewDetails: 'View Project Details',
      modalScope: 'Project Scope & Execution',
      modalTech: 'Technologies & Architecture',
      modalImpact: 'Key Deliverables & Impact',
      closeModal: 'Close',
      items: [
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
            'Multi-subsidiary corporate digital learning ecosystem',
            'Aligning employee KPIs with overarching enterprise strategic goals',
            'Integrated skill profiling and individualized development roadmaps',
            'Regulatory compliance certification and HR analytics reporting'
          ],
          technologies: ['SAP SuccessFactors PMGM', 'Enterprise LMS Platform', 'Single Sign-On', 'HR Analytics Engine'],
          impact: 'Unified performance management and talent development for tens of thousands of holding company employees.'
        },
        {
          id: 'sap-sf-portfolio-pp',
          number: 'PROJECT 04',
          title: 'SAP SuccessFactors Portfolio',
          client: 'PT Pembangunan Perumahan (PT PP)',
          period: '2023–2025',
          category: 'SAP & SuccessFactors',
          description: 'Optimized PMGM modules, implemented SCDP, and integrated Single Sign-On (SSO).',
          scope: [
            'Performance & Goals Management (PMGM) module configuration',
            'Succession & Career Development Planning (SCDP) rollout',
            'Single Sign-On (SSO) integration with enterprise IT infrastructure',
            'Custom Report Center analytics and Change Request governance'
          ],
          technologies: ['SAP SuccessFactors', 'PMGM', 'SCDP', 'Report Center', 'Enterprise SSO'],
          impact: 'Elevated executive visibility into talent readiness and accelerated corporate appraisal cycles.'
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
            'Digitizing occupational health, safety, and environmental legal compliance',
            'Automated compliance audits and regulatory permit expiry alerts',
            'Incident logging protocols and structured mitigation workflows',
            'Safety management dashboard for operational directors'
          ],
          technologies: ['Regulatory Compliance Engine', 'Audit Matrices', 'Automated Notifications', 'Executive Dashboard'],
          impact: 'Ensured 100% regulatory compliance accountability and full audit-readiness across operational branches.'
        },
        {
          id: 'sip-sap-dahana',
          number: 'PROJECT 06',
          title: 'SIP & SAP Integration',
          client: 'PT Dahana',
          period: '2024–2025',
          category: 'SAP & SuccessFactors',
          description: 'Led the implementation of an inventory information system integrated with SAP ERP.',
          scope: [
            'Synchronizing inventory master data with SAP Materials Management',
            'Automating stock movement recording and reconciliation',
            'Tiered purchase requisition workflows and approval routing',
            'Multi-departmental UAT execution and end-user enablement'
          ],
          technologies: ['SAP ERP Integration', 'Inventory Information System', 'BAPI/API Connector', 'UAT Execution'],
          impact: 'Eliminated stock discrepancies and enabled real-time material visibility in the central ERP system.'
        },
        {
          id: 'she-app-development',
          number: 'PROJECT 07',
          title: 'SHE Application Development',
          client: 'PT SIG',
          period: '2023–2024',
          category: 'Custom Solutions',
          description: 'Enterprise occupational safety application implementation across manufacturing facilities.',
          scope: [
            'Mobile incident reporting and structured root cause analysis',
            'Digital safety inspections across industrial production sites',
            'Safety KPI monitoring and compliance analytics tracking',
            'Safety data integration across corporate holding facilities'
          ],
          technologies: ['Enterprise Mobile/Web', 'Safety Management System', 'Root Cause Tracking', 'Analytics Portal'],
          impact: 'Accelerated incident resolution times and fostered a proactive safety culture across plant operations.'
        },
        {
          id: 'transformation-project',
          number: 'PROJECT 08',
          title: 'Corporate Transformation Project',
          client: 'PT SIG',
          period: '2020',
          category: 'Custom Solutions',
          description: 'Supported corporate operational transformation initiatives during holding-wide consolidation.',
          scope: [
            'Operational process harmonization following business consolidation',
            'Standardizing digital workflows across operating subsidiaries',
            'Stakeholder coordination and cross-functional change alignment',
            'Tracking strategic transformation milestones'
          ],
          technologies: ['Operational Governance', 'Business Process Harmonization', 'Executive PMO Tracking'],
          impact: 'Ensured seamless post-merger operational continuity and structured governance.'
        },
        {
          id: 'stakeholder-database-pii',
          number: 'PROJECT 09',
          title: 'Application Stakeholder & Database',
          client: 'PT Penjamin Infrastruktur Indonesia (Persero)',
          period: '2020',
          category: 'Custom Solutions',
          description: 'Stakeholder database development and management for a national infrastructure guarantee institution.',
          scope: [
            'Relational database architecture for institutional stakeholders',
            'Managing relationships with government ministries and financial bodies',
            'Interaction logging and governance compliance audits',
            'Enterprise-grade security and role-based access control'
          ],
          technologies: ['Relational Database Architecture', 'Stakeholder CRM Engine', 'Role-Based Access Control'],
          impact: 'Standardized strategic stakeholder intelligence and supported transparent public sector governance.'
        }
      ]
    },
    education: {
      label: 'ACADEMIC BACKGROUND',
      title: 'Education & Credentials',
      subtitle: 'Advanced academic foundations in Computer Science, Software Engineering, and Enterprise Information Systems.',
      items: [
        {
          degree: 'Master of Informatics Engineering (M.Kom.)',
          institution: 'Universitas Putra Indonesia YPTK Padang',
          period: '2024 – 2026',
          description: 'Specialization in Enterprise Software Architecture, Project Governance, Strategic IT Management, and Data Engineering.',
          highlights: [
            'Specialization: Enterprise Software Architecture & IT Governance',
            'Application of agile & waterfall frameworks in corporate digital transformation'
          ]
        },
        {
          degree: 'Bachelor of Information Systems (S.Kom.)',
          institution: 'STMIK Indonesia Padang',
          period: '2011 – 2015',
          description: 'Rigorous foundation in software engineering, business process analysis, relational databases, and ERP architecture.',
          highlights: [
            'Specialization: Systems Analysis & Enterprise Software Development',
            'Pioneering operational business systems and database integrations'
          ]
        }
      ]
    },
    contact: {
      label: 'GET IN TOUCH',
      title: "Let's Create Something Impactful.",
      subtitle: 'Open to professional networking, enterprise technology consultation, and high-stakes digital transformation initiatives.',
      directWa: 'Direct WhatsApp',
      officialEmail: 'Official Email',
      copyTooltip: 'Copy email',
      copied: 'Copied!',
      locationLabel: 'Location',
      locationValue: 'Jakarta, Indonesia',
      linkedInLabel: 'LinkedIn',
      linkedInCta: 'Connect on LinkedIn',
      declaration: 'I declare the details stated to be true and complete.',
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Fill in the form below to initiate a strategic technology consultation.',
      formName: 'Full Name',
      formNamePlaceholder: 'e.g. John Doe',
      formEmail: 'Work Email',
      formEmailPlaceholder: 'john@enterprise.com',
      formSubject: 'Subject',
      formSubjectPlaceholder: 'Project Initiative / Consultation Inquiry',
      formMessage: 'Message / Project Scope',
      formMessagePlaceholder: 'Briefly describe your enterprise project requirements...',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you! Your email client will now open to dispatch your message.'
    },
    footer: {
      role: 'Project Manager | SAP SuccessFactors Consultant',
      sub: 'Jakarta, Indonesia • IT Professional since 2015',
      rights: 'All rights reserved.',
      backToTop: 'Back to Top'
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('lang') as Language | null;
    if (savedLang === 'id' || savedLang === 'en') {
      setLangState(savedLang);
    } else {
      // Default to Indonesian ('id')
      setLangState('id');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
