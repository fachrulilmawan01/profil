'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            {t.education.label}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            {t.education.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {t.education.items.map((item, index) => {
            const isMaster = index === 0;
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="executive-card p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isMaster 
                        ? 'bg-accent/10 text-accent dark:text-blue-400' 
                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {isMaster ? <Award className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent dark:text-blue-400 border border-accent/20 font-mono">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted block mb-1">
                    {isMaster ? 'Postgraduate Degree (M.Kom)' : 'Undergraduate Degree (S.Kom)'}
                  </span>
                  <h3 className="text-2xl font-bold text-primary dark:text-white font-display mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-accent dark:text-blue-400 mb-4">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-xs text-secondary dark:text-dark-muted">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border dark:border-dark-border flex items-center gap-2 text-xs text-secondary dark:text-dark-muted font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Padang, Indonesia</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
