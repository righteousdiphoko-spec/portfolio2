'use client';

import React from 'react';
import { personalDetails } from '@/data/resume';
import { Button } from '@/components/ui/Button';
import { TypingHeader } from '@/components/interactive/TypingHeader';
import { scrollToSection } from '@/lib/utils';
import { ArrowRight, Download, Mail, Terminal, CheckCircle2, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Glowing Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pulse Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Junior & Internship Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]">
                Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">{personalDetails.fullName}</span>.
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold min-h-[50px] flex items-center">
                <TypingHeader />
              </div>
            </div>

            {/* Concise Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Informatics specialist and full-stack software developer with strong software engineering fundamentals. Skilled in connecting complex user requirements with clean, scalable web applications, system analysis, and responsive frontend design.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-indigo-500/30"
              >
                View Projects
              </Button>

              <a href="/resume" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
                >
                  Download CV
                </Button>
              </a>

              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                leftIcon={<Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Informatics & System Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Full-Stack Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Visual Card (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Code & Architecture Display Card */}
            <div className="relative glass-card bg-slate-900 text-slate-100 dark:bg-slate-950 rounded-3xl p-6 shadow-2xl border border-slate-800 space-y-4 font-mono text-xs">
              
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] text-slate-400 font-sans flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" /> developer-profile.ts
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-yellow-300">Developer</span> &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-300">&apos;Tshiamo Diphoko&apos;</span>;
                </div>
                <div className="pl-4">
                  degree: <span className="text-emerald-300">&apos;Specialisation in Informatics&apos;</span>;
                </div>
                <div className="pl-4">
                  stack: [<span className="text-emerald-300">&apos;React&apos;</span>, <span className="text-emerald-300">&apos;Next.js&apos;</span>, <span className="text-emerald-300">&apos;TypeScript&apos;</span>, <span className="text-emerald-300">&apos;Node.js&apos;</span>];
                </div>
                <div className="pl-4">
                  competencies: [<span className="text-emerald-300">&apos;System Analysis&apos;</span>, <span className="text-emerald-300">&apos;Testing&apos;</span>, <span className="text-emerald-300">&apos;DBMS&apos;</span>];
                </div>
                <div className="pl-4">
                  seeking: <span className="text-indigo-400">&apos;Junior & Internship Roles&apos;</span>;
                </div>
                <div>&#125;</div>
                <div className="pt-2 text-slate-500">
                  // Enterprise architecture & clean code implementation
                </div>
                <div>
                  <span className="text-indigo-400">export default</span>{' '}
                  <span className="text-purple-400">new</span>{' '}
                  <span className="text-yellow-300">SoftwareEngineer</span>();
                </div>
              </div>

              {/* Floating Pill Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-sans"
              >
                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">React & Next.js</div>
                  <div className="text-[10px] text-slate-500">App Router & TypeScript</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 glass-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-sans"
              >
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">System Analysis</div>
                  <div className="text-[10px] text-slate-500">Requirements & Testing</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
