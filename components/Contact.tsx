'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight 
} from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = 'fachrul.ilmawan@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('Email copied: ' + email);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link or handle form submission gracefully
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
            Let&apos;s Create Something Impactful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
            Open to professional networking, technology collaboration, and opportunities to create meaningful digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & VCards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/6285263416474?text=Halo%20Fachrul%20Ilmawan,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek/kolaborasi"
              target="_blank"
              rel="noopener noreferrer"
              className="executive-card p-6 rounded-3xl flex items-center justify-between group hover:border-emerald-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-secondary dark:text-dark-muted uppercase tracking-wider">
                    WhatsApp Direct
                  </span>
                  <div className="text-base font-bold text-primary dark:text-white font-mono mt-0.5">
                    085263416474
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Card */}
            <div className="executive-card p-6 rounded-3xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-secondary dark:text-dark-muted uppercase tracking-wider">
                    Official Email
                  </span>
                  <div className="text-base font-bold text-primary dark:text-white truncate max-w-[200px] sm:max-w-xs mt-0.5 font-mono">
                    {email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy Email"
                  className="p-2 rounded-xl border border-border dark:border-dark-border text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="p-2 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors"
                  title="Compose Email"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & LinkedIn Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="executive-card p-5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs text-secondary dark:text-dark-muted font-medium block">
                  Location
                </span>
                <span className="text-sm font-bold text-primary dark:text-white mt-0.5 block">
                  Jakarta, Indonesia
                </span>
              </div>

              <a
                href="https://linkedin.com/in/fachrul-ilmawan"
                target="_blank"
                rel="noopener noreferrer"
                className="executive-card p-5 rounded-2xl group hover:border-blue-500/50"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="text-xs text-secondary dark:text-dark-muted font-medium flex items-center justify-between">
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-bold text-primary dark:text-white mt-0.5 block">
                  Connect on LinkedIn
                </span>
              </a>
            </div>

            {/* Formal Declaration Notice */}
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-border dark:border-dark-border text-center">
              <p className="text-xs text-secondary dark:text-dark-muted italic">
                &ldquo;I declare the details stated to be true and complete.&rdquo;
              </p>
              <p className="text-xs font-bold text-primary dark:text-white mt-1 font-display">
                Fachrul Ilmawan, S.Kom., M.Kom.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="executive-card p-8 sm:p-10 rounded-3xl">
              <h3 className="text-xl font-bold text-primary dark:text-white font-display mb-2">
                Send an Executive Message
              </h3>
              <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted mb-6">
                Have a project to discuss or an enterprise inquiry? Fill out the form below.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                  <Check className="w-8 h-8 mx-auto" />
                  <h4 className="font-bold text-base font-display">Message Dispatched</h4>
                  <p className="text-xs sm:text-sm">
                    Thank you. Your email client has been prepared, or message sent to Fachrul Ilmawan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-primary dark:text-zinc-200 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-primary dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-primary dark:text-zinc-200 block mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-primary dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-primary dark:text-zinc-200 block mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Enterprise SAP SuccessFactors Implementation"
                      className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-primary dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-primary dark:text-zinc-200 block mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share requirements, timeline, or discussion topics..."
                      className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-slate-50 dark:bg-dark-bg text-primary dark:text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-md shadow-accent/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    <span>Send Message Directly</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
