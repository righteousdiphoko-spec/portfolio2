'use client';

import React from 'react';
import { education, leadershipExperience } from '@/data/resume';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, Briefcase, CheckCircle2, UserCheck, ShieldCheck, Cpu, Layout, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/40 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="indigo" size="md">
            Biography & Timeline
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Connecting User Needs with <span className="text-indigo-600 dark:text-indigo-400">Robust Engineering</span>
          </h2>
          <div className="space-y-4 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            <p>
              I&apos;m a Software Developer Intern focused on building my skills in{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                full-stack development, AI-assisted development, and modern web technologies
              </strong>
              . During my internship, I&apos;ve gained hands-on experience with{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                Next.js, Tailwind CSS, Node.js, PostgreSQL, Git, GitHub, Vercel, and Render
              </strong>
              .
            </p>
            <p>
              I&apos;ve worked on projects involving{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                personal portfolio development, frontend and backend authentication, database integration, responsive UI design, and deployment
              </strong>
              . I&apos;ve also learned how to use AI effectively throughout the development process, from writing structured prompts and generating solutions to reviewing, debugging, and understanding the code.
            </p>
            <p>
              My internship has taught me to think beyond just writing code:{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                understand the problem, plan the solution, build it, test and debug it, secure it, and deploy it
              </strong>
              .
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Cpu,
              title: 'Full Stack Engineering',
              description: 'Building end-to-end web applications with React, Next.js App Router, TypeScript, Node.js, and SQL databases.'
            },
            {
              icon: Layout,
              title: 'Systems & Business Analysis',
              description: 'Translating business rules into structured requirements, use cases, workflow diagrams, and enterprise specs.'
            },
            {
              icon: ShieldCheck,
              title: 'Process Testing & QA',
              description: 'Rigorous process validation, UI debugging, component unit testing, and structured user acceptance testing.'
            },
            {
              icon: Users,
              title: 'Leadership & Mentorship',
              description: 'Extracurricular Student Ambassador experienced in stakeholder communication, forum advocacy, and mentoring.'
            }
          ].map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full space-y-3 p-6 border-slate-200/80 dark:border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-800/60">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Timeline: Education & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Education Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Academic Credentials
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Specialization in Informatics
                </p>
              </div>
            </div>

            <Card className="space-y-4 p-6 border-indigo-200/60 dark:border-indigo-800/60">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    {education.degree}
                  </h4>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                    {education.institution}
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {education.completionDate}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {education.summary}
              </p>

              {/* Coursework List */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Relevant Informatics Coursework:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Leadership & Experience Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Leadership & Experience
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Extracurricular Advocacy & Mentorship
                </p>
              </div>
            </div>

            {leadershipExperience.map((exp, idx) => (
              <Card key={idx} className="space-y-4 p-6 border-indigo-200/60 dark:border-indigo-800/60">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                      {exp.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Gained Tags */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
