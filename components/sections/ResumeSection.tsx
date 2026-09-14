'use client';

import React from 'react';
import { personalDetails, education, leadershipExperience, referencesData, skillsData } from '@/data/resume';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { basePath } from '@/lib/utils';
import { Download, Printer, ExternalLink, FileText, Phone, Mail, UserCheck, GraduationCap, Briefcase } from 'lucide-react';

export const ResumeSection = () => {
  const handlePrint = () => {
    window.open(`${basePath}/resume`, '_blank');
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="indigo" size="md">
            Professional Qualifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Curriculum <span className="text-indigo-600 dark:text-indigo-400">Vitae</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Download or view the printable résumé formatted for software engineering recruiters and hiring managers.
          </p>

          {/* Download & Print Actions */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button
              size="md"
              variant="primary"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Print / Export PDF CV
            </Button>
            <a href={`${basePath}/resume`} target="_blank">
              <Button
                size="md"
                variant="outline"
                leftIcon={<ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
              >
                View Printable Layout
              </Button>
            </a>
          </div>
        </div>

        {/* Web Resume Card Container */}
        <Card className="max-w-4xl mx-auto p-8 sm:p-12 border-slate-200 dark:border-slate-800 space-y-10 shadow-xl">
          
          {/* Header Contact Strip */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                {personalDetails.fullName}
              </h3>
              <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                {personalDetails.headline}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                Student Number: {personalDetails.studentNumber}
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <a href={`mailto:${personalDetails.email}`} className="hover:text-indigo-600">
                  {personalDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-500" />
                <span>{personalDetails.phone}</span>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500">
                {personalDetails.location}
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalDetails.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education & Academic Qualifications
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {education.degree}
                </div>
                <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                  Target Completion: {education.completionDate}
                </div>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Relevant Courses: {education.courses.join(', ')}.
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Experience & Leadership Roles
            </h4>
            {leadershipExperience.map((exp, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {exp.role} — <span className="text-slate-600 dark:text-slate-400 font-normal">{exp.organization}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Verified References */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4" /> Professional References
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {referencesData.map((ref, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                  <div className="font-bold text-slate-900 dark:text-slate-100">{ref.name}</div>
                  <div className="text-slate-500 dark:text-slate-400">{ref.relation}</div>
                  <div className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                    Phone: {ref.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </Card>
      </div>
    </section>
  );
};
