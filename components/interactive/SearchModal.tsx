'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, FolderCode, Cpu, User, Mail, FileText, X } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/resume';
import { scrollToSection } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = skillsData.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  );

  const quickLinks = [
    { name: 'Home Section', id: 'hero', icon: User, category: 'Navigation' },
    { name: 'About & Timeline', id: 'about', icon: User, category: 'Navigation' },
    { name: 'Skills & Capabilities', id: 'skills', icon: Cpu, category: 'Navigation' },
    { name: 'Featured Projects', id: 'projects', icon: FolderCode, category: 'Navigation' },
    { name: 'Interactive Résumé', id: 'resume', icon: FileText, category: 'Navigation' },
    { name: 'Contact Tshiamo', id: 'contact', icon: Mail, category: 'Navigation' },
  ].filter((link) => link.name.toLowerCase().includes(query.toLowerCase()));

  const handleSelectSection = (id: string) => {
    onClose();
    setQuery('');
    scrollToSection(id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, or jump to section..."
                className="w-full bg-transparent text-slate-900 dark:text-slate-100 text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
                  ESC
                </kbd>
              )}
            </div>

            {/* Search Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {/* Quick Navigation Links */}
              {quickLinks.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
                    Sections & Pages
                  </div>
                  <div className="space-y-1">
                    {quickLinks.map((link) => {
                      const IconComp = link.icon;
                      return (
                        <button
                          key={link.id}
                          onClick={() => handleSelectSection(link.id)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                              <IconComp className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300" />
                            </div>
                            <span className="text-sm font-medium">{link.name}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
                    Projects ({filteredProjects.length})
                  </div>
                  <div className="space-y-1">
                    {filteredProjects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleSelectSection('projects')}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                            <FolderCode className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              {project.title}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {project.subtitle}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {project.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {filteredSkills.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
                    Skills ({filteredSkills.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {filteredSkills.slice(0, 8).map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => handleSelectSection('skills')}
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-left group transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          {skill.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quickLinks.length === 0 && filteredProjects.length === 0 && filteredSkills.length === 0 && (
                <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                  No matches found for &quot;{query}&quot;. Try searching for &quot;React&quot;, &quot;SASSA&quot;, &quot;Informatics&quot;, or &quot;Résumé&quot;.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <Command className="w-3.5 h-3.5 text-indigo-500" />
                <span>Command Palette</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Press <kbd className="font-mono text-[10px] bg-white dark:bg-slate-800 border px-1 rounded">ESC</kbd> to exit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
