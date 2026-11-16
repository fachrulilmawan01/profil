'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Printer } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 executive-nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <span className="w-10 h-10 rounded-xl bg-primary dark:bg-white text-white dark:text-primary font-bold text-base flex items-center justify-center font-display shadow-md shadow-primary/10 group-hover:scale-105 transition-transform">
            FI.
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-primary dark:text-white font-display">
              Fachrul Ilmawan
            </span>
            <span className="text-[11px] text-secondary dark:text-dark-muted font-medium">
              PM &amp; SAP SF Consultant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-secondary dark:text-dark-muted">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-accent dark:text-blue-400 font-bold border-b-2 border-accent dark:border-blue-400'
                    : 'hover:text-primary dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Utilities & Connect Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => window.print()}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-border dark:border-dark-border text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-all"
            title="Print or Save CV as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Prominent Let's Connect Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/25 transition-all hover:-translate-y-0.5"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden w-10 h-10 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-surface dark:bg-dark-bg border-b border-border dark:border-dark-border shadow-2xl p-6 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-sm font-semibold text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-secondary dark:text-dark-muted font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-border dark:border-dark-border flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-accent text-white flex items-center justify-center gap-2 shadow-md"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
