'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Calendar, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/60 dark:bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-xl border border-border dark:border-dark-border flex items-center justify-center text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surfaceHover transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Header Info */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-accent dark:text-blue-400">
                <span>{project.number}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-white font-display">
                {project.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-secondary dark:text-dark-muted pb-4 border-b border-border dark:border-dark-border">
                <span className="flex items-center gap-1.5 text-primary dark:text-white font-semibold">
                  <Building2 className="w-4 h-4 text-accent" />
                  {project.client}
                </span>
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-4 h-4 text-secondary" />
                  {project.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted mb-2 font-display">
                  Project Overview
                </h4>
                <p className="text-sm text-primary dark:text-zinc-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted mb-2 font-display">
                  Scope of Delivery &amp; Architecture
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary dark:text-dark-muted">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Impact */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted mb-2 font-display">
                  Corporate Impact
                </h4>
                <div className="p-4 rounded-2xl bg-accent/5 dark:bg-accent/10 border border-accent/20 text-xs sm:text-sm text-primary dark:text-zinc-200">
                  {project.impact}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-dark-muted mb-2 font-display">
                  Technologies &amp; Methodologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-bg border border-border dark:border-dark-border text-primary dark:text-zinc-200 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-border dark:border-dark-border flex justify-end">
              <button
                onClick={onClose}
                type="button"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary dark:bg-white text-white dark:text-primary hover:bg-accent dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
              >
                Close Project Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
