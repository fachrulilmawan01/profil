'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Server, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Users2 
} from 'lucide-react';
import { expertiseData } from '@/data/expertise';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Server,
  Layers,
  CheckCircle2,
  Sparkles,
  Users2,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            CORE COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            Areas of Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            Six interconnected pillars of technical expertise, enterprise solution architecture, and strategic management.
          </p>
        </div>

        {/* Sophisticated Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Briefcase;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="executive-card p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-secondary/60 dark:text-dark-muted/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary dark:text-white font-display mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-xs text-secondary dark:text-dark-muted">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-border dark:border-dark-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-surface text-secondary dark:text-dark-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
