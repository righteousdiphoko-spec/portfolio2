'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/types/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, FolderCode, Layers, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenModal: (project: ProjectCaseStudy) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full flex flex-col justify-between group overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50">
        <div className="space-y-4">
          {/* Header & Category Badge */}
          <div className="flex items-center justify-between gap-2">
            <Badge variant="indigo" size="sm">
              {project.category}
            </Badge>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/60">
                <Star className="w-3 h-3 fill-amber-400" /> Featured Case Study
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Placeholder Visual Graphic Header */}
          <div
            className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.imagePlaceholderGradient} p-4 flex flex-col justify-between text-white relative overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform`}
          >
            <div className="flex items-center justify-between text-white/80 text-xs">
              <span className="font-mono">{project.architecture.pattern}</span>
              <Layers className="w-4 h-4 opacity-75" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white/90">Key Technologies</div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Stats Grid */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 dark:border-slate-800/80">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60 mt-4">
          <Button
            size="sm"
            variant="glass"
            onClick={() => onOpenModal(project)}
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="w-full text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60"
          >
            View Case Study
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
