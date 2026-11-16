'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            {t.experience.label}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Elegant Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-border dark:border-dark-border space-y-12 ml-2 sm:ml-4">
          
          {t.experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-accent border-4 border-surface dark:border-dark-bg shadow-sm" />

              {/* Experience Card */}
              <div className="executive-card p-6 sm:p-8 rounded-3xl">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border dark:border-dark-border">
                  <div>
                    <span className="text-xs font-semibold text-accent dark:text-blue-400 flex items-center gap-1.5 mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {item.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white font-display">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent dark:text-blue-400 border border-accent/20">
                        {item.badge}
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-dark-surface border border-border dark:border-dark-border text-secondary dark:text-dark-muted flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3 h-3 text-secondary" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="mt-4 text-sm sm:text-base text-secondary dark:text-dark-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Sub-Engagements (if any, like PT PP and PT SIG) */}
                {item.subEngagements && (
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.subEngagements.map((sub) => (
                      <div 
                        key={sub.company}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-border/80 dark:border-dark-border/80"
                      >
                        <div className="flex items-center justify-between text-xs mb-2">
                          <strong className="text-primary dark:text-white font-semibold">
                            {sub.company}
                          </strong>
                          <span className="text-secondary dark:text-dark-muted font-mono">{sub.period}</span>
                        </div>
                        <ul className="space-y-1 text-xs text-secondary dark:text-dark-muted">
                          {sub.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-accent mt-0.5">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Responsibilities */}
                {!item.subEngagements && item.responsibilities.length > 0 && (
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-white block mb-1">
                      Key Deliverables &amp; Responsibilities
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-secondary dark:text-dark-muted">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skill / Capability Tags */}
                <div className="mt-6 pt-4 border-t border-border dark:border-dark-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-surface border border-border dark:border-dark-border text-secondary dark:text-dark-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
