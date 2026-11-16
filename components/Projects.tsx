'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, ArrowUpRight, Layers } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

const categories = ['All Projects', 'SAP & SuccessFactors', 'Enterprise Systems', 'Custom Solutions'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All Projects') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 border-t border-border dark:border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent dark:text-blue-400 font-display">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-white tracking-tight mt-2 font-display">
              Selected Enterprise Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-secondary dark:text-dark-muted leading-relaxed">
              Curated enterprise systems and digital initiatives delivered for leading BUMN and commercial clients.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-border dark:border-dark-border w-fit">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-accent text-white shadow-md shadow-accent/25'
                      : 'text-secondary dark:text-dark-muted hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveProject(project)}
              className="executive-card p-7 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono font-bold text-accent dark:text-blue-400">
                    {project.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-surface border border-border dark:border-dark-border font-mono text-[11px] text-secondary dark:text-dark-muted">
                    {project.period}
                  </span>
                </div>

                {/* Client Label */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-dark-muted mb-2">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>{project.client}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-primary dark:text-white font-display mb-3 group-hover:text-accent dark:group-hover:text-blue-400 transition-colors flex items-start justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-secondary/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-secondary dark:text-dark-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="mt-6 pt-4 border-t border-border dark:border-dark-border flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-surface text-secondary dark:text-dark-muted font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-surface text-secondary dark:text-dark-muted font-mono">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Project Deep Dive */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
