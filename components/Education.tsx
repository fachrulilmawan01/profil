'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            Academic Background
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            Formal foundations in computer science, software engineering, and strategic information systems analysis.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          
          {/* Degree 1: Master */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="executive-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent dark:text-blue-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent dark:text-blue-400 border border-accent/20 font-mono">
                  2024 – 2026
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted block mb-1">
                Postgraduate Degree (M.Kom)
              </span>
              <h3 className="text-2xl font-bold text-primary dark:text-white font-display mb-2">
                Master of Informatics Engineering
              </h3>
              <p className="text-sm font-semibold text-accent dark:text-blue-400 mb-4">
                Universitas Putra Indonesia &apos;YPTK&apos;
              </p>

              <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed">
                Specialized focus on advanced software engineering paradigms, strategic enterprise architecture, executive IT leadership, and business intelligence systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border dark:border-dark-border flex items-center gap-2 text-xs text-secondary dark:text-dark-muted font-medium">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Padang, Indonesia</span>
            </div>
          </motion.div>

          {/* Degree 2: Bachelor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="executive-card p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-dark-surface text-secondary dark:text-dark-muted border border-border dark:border-dark-border font-mono">
                  2011 – 2015
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted block mb-1">
                Undergraduate Degree (S.Kom)
              </span>
              <h3 className="text-2xl font-bold text-primary dark:text-white font-display mb-2">
                Information Systems
              </h3>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                STMIK Indonesia Padang
              </p>

              <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed">
                Core grounding in business process analysis, relational database architecture, software development lifecycles (SDLC), and data-driven systems design.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border dark:border-dark-border flex items-center gap-2 text-xs text-secondary dark:text-dark-muted font-medium">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Padang, Indonesia</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
