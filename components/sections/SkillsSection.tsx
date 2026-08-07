'use client';

import React, { useState } from 'react';
import { skillsData } from '@/data/resume';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Skill } from '@/types/portfolio';
import {
  Code,
  Server,
  Terminal,
  Wrench,
  Cpu,
  CheckCheck,
  FileSpreadsheet,
  Kanban,
  Users,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code className="w-5 h-5 text-indigo-500" />,
  Backend: <Server className="w-5 h-5 text-indigo-500" />,
  Programming: <Terminal className="w-5 h-5 text-indigo-500" />,
  'Development Tools': <Wrench className="w-5 h-5 text-indigo-500" />,
  'Software Engineering': <Cpu className="w-5 h-5 text-indigo-500" />,
  Testing: <CheckCheck className="w-5 h-5 text-indigo-500" />,
  'Business Analysis': <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
  'Project Management': <Kanban className="w-5 h-5 text-indigo-500" />,
  'Soft Skills': <Users className="w-5 h-5 text-indigo-500" />
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Software Engineering',
    'Testing',
    'Business Analysis',
    'Development Tools',
    'Soft Skills'
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesQuery =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Group skills by category for category cards view
  const groupedCategories = categories.filter((c) => c !== 'All');

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="indigo" size="md">
            Technical Capabilities & Engineering Mindset
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Core Competencies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Structured across full-stack development, software testing, system analysis, enterprise modeling, and team collaboration.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full space-y-3 p-5 border-slate-200/80 dark:border-slate-800/80 group hover:border-indigo-500/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800/60">
                      {categoryIcons[skill.category] || <Code className="w-5 h-5 text-indigo-500" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 font-mono">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No skills match your search &quot;{searchQuery}&quot;.
          </div>
        )}

      </div>
    </section>
  );
};
