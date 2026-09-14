'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCaseStudy } from '@/types/portfolio';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectDetailModal } from '@/components/projects/ProjectDetailModal';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, FolderCode } from 'lucide-react';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Full Stack', 'Enterprise Systems', 'Systems & Architecture'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const handleOpenModal = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/40 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="indigo" size="md">
            Engineered Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Software Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Real-world academic & industry projects showcasing frontend responsiveness, system architecture, database modeling, and problem-solving execution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))
          ) : (
            <div className="md:col-span-2 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-6 py-12 text-center">
              <FolderCode className="mx-auto mb-4 h-10 w-10 text-indigo-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Projects coming soon
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600 dark:text-slate-400">
                New case studies will appear here as they are added to the projects data.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Case Study Detail Modal Drawer */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
