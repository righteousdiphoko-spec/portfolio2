'use client';

import React from 'react';
import { personalDetails } from '@/data/resume';
import { Button } from '@/components/ui/Button';
import { TypingHeader } from '@/components/interactive/TypingHeader';
import { scrollToSection, basePath } from '@/lib/utils';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(79,70,229,0.10),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-indigo-200" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              Informatics & Full-Stack Developer
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-indigo-600">{personalDetails.fullName}</span>
            </h1>

            <div className="mt-8 min-h-12 text-2xl font-bold text-indigo-600 sm:text-3xl">
              <TypingHeader />
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {personalDetails.bio}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {['React & Next.js', 'TypeScript', 'System Analysis', 'Responsive UI'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-indigo-300 px-4 py-2 text-xs font-semibold text-indigo-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="bg-indigo-600 text-white shadow-indigo-500/30 hover:bg-indigo-700"
              >
                Explore Projects
              </Button>
              <a href={`${basePath}/resume`} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<Download className="h-4 w-4" />}
                  className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Download CV
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[
                { label: 'GitHub Profile', href: personalDetails.github, icon: <GithubIcon className="h-5 w-5" /> },
                { label: 'LinkedIn Profile', href: personalDetails.linkedin, icon: <LinkedinIcon className="h-5 w-5" /> },
                { label: 'Email', href: `mailto:${personalDetails.email}`, icon: <Mail className="h-5 w-5" /> }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-colors hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-indigo-300/60" />
              <div className="absolute -inset-8 rounded-full border border-indigo-200/40" />
              <img
                src={`${basePath}/images/picture.JPEG`}
                alt={personalDetails.fullName}
                className="relative h-64 w-64 rounded-full border-4 border-indigo-500/70 object-cover shadow-2xl shadow-indigo-500/10 sm:h-80 sm:w-80"
              />
            </div>

            <div className="mt-16 grid w-full max-w-lg grid-cols-3 gap-3">
              {[
                { value: '10+', label: 'Core Skills' },
                { value: 'Intern', label: '' },
                { value: '∞', label: 'Curiosity' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white px-3 py-5 text-center shadow-sm ring-1 ring-slate-200">
                  <div className="text-3xl font-black text-indigo-600">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
