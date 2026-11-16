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
import { useLanguage } from '@/context/LanguageContext';

const icons = [Briefcase, Server, Users2, Layers, ClipboardCheck, Sparkles];

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            {t.about.label}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            {t.about.p1}
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
                {lang === 'id' ? 'Posisi Eksekutif' : 'Executive Positioning'}
              </h3>
              <p className="text-sm sm:text-base italic text-primary dark:text-zinc-200 border-l-2 border-accent pl-4 my-2">
                &ldquo;{lang === 'id' ? 'Mengubah Kompleksitas Teknologi Menjadi Dampak Bisnis Nyata.' : 'Turning Complex Technology into Meaningful Business Impact.'}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted mt-3">
                {lang === 'id' 
                  ? 'Lebih dari 11 tahun di industri IT (sejak 2015) dan memimpin proyek sejak 2020, dengan 37+ inisiatif enterprise sukses diselesaikan di Indonesia.'
                  : 'Over 11 years in the IT landscape (since 2015) and leading projects since 2020, with over 37 enterprise initiatives successfully delivered across Indonesia.'
                }
              </p>
            </div>

            <p>
              {t.about.p2}
            </p>

            <div className="pt-4 border-t border-border dark:border-dark-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-white mb-3">
                {lang === 'id' ? 'Kredensial Akademik & Profesional' : 'Academic & Professional Credentials'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-secondary dark:text-dark-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span><strong>M.Kom</strong> – {lang === 'id' ? 'Magister Teknik Informatika' : 'Master of Informatics Engineering'} (UPI &apos;YPTK&apos;)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span><strong>S.Kom</strong> – {lang === 'id' ? 'Sarjana Sistem Informasi' : 'Bachelor of Information Systems'} (STMIK Indonesia)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Core Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.strengths.map((strength, index) => {
              const Icon = icons[index % icons.length];
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
