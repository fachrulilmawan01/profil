'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className="inline-flex items-center p-1 rounded-xl border border-border dark:border-dark-border bg-slate-100/80 dark:bg-dark-surface shadow-sm"
      role="group"
      aria-label="Language Selector"
    >
      <div className="pl-1.5 pr-1 text-secondary dark:text-dark-muted hidden sm:flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang('id')}
        className={`px-2 py-1 rounded-lg text-xs font-bold transition-all font-display ${
          lang === 'id'
            ? 'bg-white dark:bg-dark-surfaceHover text-accent dark:text-blue-400 shadow-sm'
            : 'text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white'
        }`}
        aria-pressed={lang === 'id'}
        title="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-lg text-xs font-bold transition-all font-display ${
          lang === 'en'
            ? 'bg-white dark:bg-dark-surfaceHover text-accent dark:text-blue-400 shadow-sm'
            : 'text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white'
        }`}
        aria-pressed={lang === 'en'}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
