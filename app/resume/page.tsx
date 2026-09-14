'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { personalDetails, education, leadershipExperience, referencesData } from '@/data/resume';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { basePath } from '@/lib/utils';

export default function ResumePage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === '1') {
      const timer = window.setTimeout(() => {
        window.print();
      }, 350);

      return () => window.clearTimeout(timer);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white text-slate-900 dark:text-slate-100">
      
      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between no-print">
        <Link href="/">
          <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Portfolio
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" onClick={handlePrint} leftIcon={<Printer className="w-4 h-4" />}>
            Print / Save as PDF
          </Button>
        </div>
      </div>

      {/* Printable Paper Card */}
      <main className="max-w-4xl mx-auto bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-8 sm:p-14 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 print:shadow-none print:border-none print:p-0 print:max-w-full">
        
        {/* Header Block */}
        <header className="border-b-2 border-indigo-600 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase">
                {personalDetails.fullName}
              </h1>
              <img
                src={`${basePath}/images/picture.JPEG`}
                alt={`${personalDetails.fullName} profile`}
                className="w-20 h-20 rounded-full object-cover border border-slate-200 dark:border-slate-800 shadow-sm"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                {personalDetails.headline}
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                Student No: {personalDetails.studentNumber}
              </div>
            </div>
          </div>

          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 font-medium mt-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-indigo-600" />
              <span>{personalDetails.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-indigo-600" />
              <span>{personalDetails.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>{personalDetails.location}</span>
            </div>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {personalDetails.bio}
          </p>
        </section>

        {/* Technical Skills Matrix */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Technical & Informatics Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100">Frontend:</span> React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS.
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100">Backend:</span> Node.js, Express, Route Handlers, DBMS (SQL).
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100">Engineering:</span> System Analysis, Process Testing, IT Project Management, Enterprise Architecture.
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6 space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Education & Academic Qualifications
          </h2>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
              <span>{education.degree} — {education.institution}</span>
              <span className="font-mono text-indigo-600">{education.completionDate}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <span className="font-semibold">Relevant Courses:</span> {education.courses.join(', ')}.
            </p>
          </div>
        </section>

        {/* Industry Projects */}
        <section className="mb-6 space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Key Software & Informatics Projects
          </h2>
          <div className="space-y-3 text-xs">
            {projectsData.map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>{project.title}</span>
                  <span className="font-mono text-slate-500">{project.category}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
                <div className="text-[11px] text-indigo-600 font-mono">
                  Stack: {project.technologies.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Extracurricular */}
        <section className="mb-6 space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Leadership & Extracurricular Experience
          </h2>
          {leadershipExperience.map((exp, i) => (
            <div key={i} className="space-y-1 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                <span>{exp.role} — {exp.organization}</span>
                <span className="font-mono text-slate-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-0.5">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* References */}
        <section className="space-y-2">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Professional References
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            {referencesData.map((ref, i) => (
              <div key={i} className="space-y-0.5">
                <div className="font-bold text-slate-900 dark:text-slate-100">{ref.name}</div>
                <div className="text-slate-500">{ref.relation}</div>
                <div className="font-mono text-indigo-600">Phone: {ref.phone}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
