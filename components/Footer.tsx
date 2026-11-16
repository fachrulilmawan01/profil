'use client';

import React from 'react';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border dark:border-dark-border bg-surface dark:bg-dark-bg/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border dark:border-dark-border">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-xl bg-primary dark:bg-white text-white dark:text-primary font-bold text-sm flex items-center justify-center font-display">
                FI.
              </span>
              <span className="text-xl font-bold tracking-tight text-primary dark:text-white font-display">
                FACHRUL ILMAWAN
              </span>
            </div>
            <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted font-medium">
              {t.footer.role}
            </p>
            <p className="text-xs text-secondary/70 dark:text-dark-muted/70 mt-1">
              {t.footer.sub}
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:fachrul.ilmawan@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6285263416474"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary dark:text-dark-muted hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/fachrul-ilmawan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary dark:text-dark-muted hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-accent text-white hover:bg-accent-hover flex items-center justify-center transition-colors shadow-sm ml-2"
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Navigation & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary dark:text-dark-muted">
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div>
            &copy; {currentYear} Fachrul Ilmawan, S.Kom., M.Kom. {t.footer.rights}
          </div>
        </div>

      </div>
    </footer>
  );
}
