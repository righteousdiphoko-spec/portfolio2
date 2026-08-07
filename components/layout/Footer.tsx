'use client';

import React from 'react';
import { personalDetails } from '@/data/resume';
import { scrollToSection } from '@/lib/utils';
import { ArrowUp, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/20">
                TD
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                  {personalDetails.fullName}
                </h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  {personalDetails.headline}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Specializing in Informatics, full-stack software development, responsive web design, systems analysis, and enterprise architecture. Seeking internship and junior engineering opportunities.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Available for Junior & Internship Software developer Roles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About & Timeline', id: 'about' },
                { label: 'Skills & Tools', id: 'skills' },
                { label: 'Case Studies', id: 'projects' },
                { label: 'Résumé', id: 'resume' },
                { label: 'Contact Me', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Connect & Social
            </h5>
            <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="truncate">{personalDetails.linkedin.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{personalDetails.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Tshiamo Diphoko. Built with Next.js, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
