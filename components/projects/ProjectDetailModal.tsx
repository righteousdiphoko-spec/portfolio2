'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/types/portfolio';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  isOpen,
  onClose
}: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="4xl">
      <div className="space-y-8 text-slate-800 dark:text-slate-200">
        {/* Header Header Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <Badge variant="indigo">{project.category}</Badge>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
              {project.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" leftIcon={<GithubIcon className="w-4 h-4" />}>
                Repository
              </Button>
            </a>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="primary" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Live Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Executive Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Executive Overview
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.overview}
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> Problem Statement
            </h5>
            <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Engineered Solution
            </h5>
            <p className="text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Key Application Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="space-y-3 p-5 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Architecture & Data Flow
            </h4>
            <span className="text-[11px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
              {project.architecture.pattern}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {project.architecture.description}
          </p>

          {/* Architecture Diagram Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
            {project.architecture.diagramSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between text-xs space-y-2 relative"
              >
                <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono">
                  <span>Step 0{idx + 1}</span>
                  {idx < project.architecture.diagramSteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-indigo-400 hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
                <div className="font-semibold text-slate-100">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" /> Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Technical Challenges
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-indigo-500" /> Lessons & Key Takeaways
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
