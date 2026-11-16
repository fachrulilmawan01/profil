'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Cpu
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent dark:text-blue-400 border border-accent/20 mb-6 font-display">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{t.hero.label}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.08] font-display">
              {t.hero.headlinePrefix}
              <span className="relative inline-block text-accent dark:text-blue-400">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-secondary dark:text-dark-muted leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Key Profile Meta Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-secondary dark:text-dark-muted">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border shadow-sm">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="font-semibold text-primary dark:text-white">{t.hero.role1}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border shadow-sm">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span className="font-semibold text-primary dark:text-white">{t.hero.role2}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border shadow-sm">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface dark:bg-dark-surface border border-border dark:border-dark-border shadow-sm font-mono text-accent dark:text-blue-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.hero.experienceBadge}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary dark:bg-white text-white dark:text-primary text-sm font-semibold hover:bg-accent dark:hover:bg-blue-400 dark:hover:text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border dark:border-dark-border text-primary dark:text-white text-sm font-semibold hover:bg-surface dark:hover:bg-dark-surfaceHover transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-secondary dark:text-dark-muted" />
                <span>{t.hero.downloadCv}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Executive Identity & Subtle Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Executive Bento Container */}
            <div className="executive-card p-8 rounded-3xl relative overflow-hidden shadow-xl">
              
              {/* Subtle Animated Decorative Mesh / Node System */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/15 via-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Executive Portrait & Monogram Frame */}
              <div className="flex items-center gap-5 pb-6 border-b border-border dark:border-dark-border">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-slate-800 dark:from-blue-600 dark:to-indigo-600 flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg shadow-accent/20">
                    FI
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-surface dark:border-dark-surface" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-white font-display">
                    Fachrul Ilmawan
                  </h3>
                  <p className="text-xs font-semibold text-accent dark:text-blue-400 mt-0.5">
                    Project Manager &amp; SAP Consultant
                  </p>
                  <p className="text-xs text-secondary dark:text-dark-muted mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

              {/* Core Delivery Metrics */}
              <div className="grid grid-cols-2 gap-3 py-6 border-b border-border dark:border-dark-border">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-border dark:border-dark-border">
                  <div className="text-3xl font-extrabold text-primary dark:text-white font-display">{t.hero.stat1Value}</div>
                  <div className="text-xs font-medium text-secondary dark:text-dark-muted mt-1">{t.hero.stat1Label}</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-border dark:border-dark-border">
                  <div className="text-3xl font-extrabold text-accent dark:text-blue-400 font-display">{t.hero.stat2Value}</div>
                  <div className="text-xs font-medium text-secondary dark:text-dark-muted mt-1">{t.hero.stat2Label}</div>
                </div>
              </div>

              {/* Technology & Project Delivery Architecture Pulse */}
              <div className="pt-6">
                <div className="flex items-center justify-between text-xs text-secondary dark:text-dark-muted font-medium mb-3">
                  <span className="flex items-center gap-1.5 text-primary dark:text-white font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-accent" />
                    {t.hero.trackTitle}
                  </span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">{t.hero.statusBadge}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-border/80 dark:border-dark-border/80">
                    <span className="flex items-center gap-2 font-medium text-primary dark:text-white">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      SAP SuccessFactors &amp; ERP
                    </span>
                    <span className="text-[11px] font-mono text-secondary dark:text-dark-muted">PMGM • SCDP • S/4HANA</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-border/80 dark:border-dark-border/80">
                    <span className="flex items-center gap-2 font-medium text-primary dark:text-white">
                      <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
                      {t.hero.trackSubtitle}
                    </span>
                    <span className="text-[11px] font-mono text-secondary dark:text-dark-muted">Go-Live Cutover &amp; QA</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
