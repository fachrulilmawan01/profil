'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Briefcase, 
  Server, 
  Users2, 
  Layers, 
  ClipboardCheck, 
  Sparkles 
} from 'lucide-react';

const coreStrengths = [
  {
    icon: Briefcase,
    title: 'End-to-End Project Management',
    description: 'Guiding complex enterprise IT lifecycles from charter initiation, WBS scheduling, and budget governance to post-launch hypercare.'
  },
  {
    icon: Server,
    title: 'Enterprise System Implementation',
    description: 'Seamless integration of SAP S/4HANA, ERP modules, facility management systems, and specialized business applications.'
  },
  {
    icon: Users2,
    title: 'Stakeholder Management',
    description: 'Building diplomatic bridges between C-level executives, cross-functional business units, external vendors, and technical developers.'
  },
  {
    icon: Layers,
    title: 'SAP SuccessFactors',
    description: 'Comprehensive functional expertise in Performance & Goals (PMGM), Succession (SCDP), Report Center, and Single Sign-On (SSO).'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance & UAT',
    description: 'Directing stringent User Acceptance Testing, master data migration verification, cutover planning, and operational QA compliance.'
  },
  {
    icon: Sparkles,
    title: 'Digital Transformation',
    description: 'Modernizing legacy processes and accelerating corporate business agility across leading BUMN holdings and private corporations.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            Beyond Technology, Driven by Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            Project Manager and SAP IT Consultant with extensive experience in enterprise technology implementation, dedicated to aligning technical architecture with tangible corporate outcomes.
          </p>
        </div>

        {/* Editorial Layout: Background Narrative & Core Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Editorial Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed"
          >
            <div className="p-6 rounded-3xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border shadow-sm">
              <h3 className="text-lg font-bold text-primary dark:text-white font-display mb-3">
                Executive Positioning
              </h3>
              <p className="text-sm sm:text-base italic text-primary dark:text-zinc-200 border-l-2 border-accent pl-4 my-2">
                &ldquo;Turning Complex Technology into Meaningful Business Impact.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted mt-3">
                Over 11 years in the IT landscape (since 2015) and leading projects since 2020, with over 37 enterprise initiatives successfully delivered across Indonesia.
              </p>
            </div>

            <p>
              Experienced in managing complete project lifecycles, coordinating internal teams, clients, vendors, and executive stakeholders.
            </p>

            <p>
              My professional ethos centers on precision governance: ensuring enterprise projects are delivered on-scope, on-time, and within budget, while creating frictionless digital experiences for end users.
            </p>

            <div className="pt-4 border-t border-border dark:border-dark-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-white mb-3">
                Academic &amp; Professional Credentials
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-secondary dark:text-dark-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span><strong>M.Kom</strong> – Master of Informatics Engineering (UPI &apos;YPTK&apos;)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span><strong>S.Kom</strong> – Bachelor of Information Systems (STMIK Indonesia)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Core Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="executive-card p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent dark:text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-primary dark:text-white font-display mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
