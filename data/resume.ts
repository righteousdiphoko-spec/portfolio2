import { PersonalDetails, EducationItem, LeadershipExperience, ReferenceItem, Skill } from '@/types/portfolio';

export const personalDetails: PersonalDetails = {
  fullName: 'Tshiamo Diphoko',
  studentNumber: '222041260',
  headline: 'Modern Full Stack Developer | Software Engineering Candidate',
  email: 'righteousdiphoko@gmail.com',
  phone: '0676159077',
  location: 'South Africa (Open to Local & International Remote Roles)',
  availability: 'Immediate / Junior & Internship Opportunities',
  bio: `Full Stack Developer Intern with a solid foundation in Information Systems, Informatics, and academic project engineering. Experienced in connecting complex user requirements with robust, scalable technical solutions. Demonstrates strong capabilities across frontend development, system analysis, process testing, database management, and technical documentation with a commitment to clean code and continuous growth.`,
  github: 'https://github.com/righteousdiphoko-spec/portfolio2',
  linkedin: 'https://www.linkedin.com/in/tshiamo-diphoko-5a0965208/',
};

export const education: EducationItem = {
  degree: 'Specialisation in Informatics',
  institution: 'University / Higher Education Institution',
  period: '2022 – 2025',
  completionDate: 'June 2025',
  status: 'Candidate (Specialisation in Informatics)',
  courses: [
    'System Analysis',
    'IT Project Management',
    'Business Analysis',
    'Database Management System (DBMS)',
    'Process Testing',
    'Information System Deployment',
    'Introduction to Enterprise Architecture'
  ],
  summary: 'Comprehensive curriculum focused on enterprise software modeling, system lifecycle analysis, agile project management, database design, software quality assurance, and modern full-stack deployment.'
};

export const leadershipExperience: LeadershipExperience[] = [
  {
    role: 'Student Ambassador',
    organization: 'Directorate of Extracurricular Development',
    period: 'March 2024 – November 2025',
    responsibilities: [
      'Represented the directorate across official student forums to advocate for student interests and academic enrichment.',
      'Supported strategic event planning, logistics, and digital marketing efforts to boost student participation.',
      'Mentored incoming students, providing academic orientation, guidance, and community integration.',
      'Facilitated cross-functional collaboration between student bodies and university administration.'
    ],
    skillsGained: [
      'Stakeholder Communication',
      'Event Planning & Project Execution',
      'Student Mentorship',
      'Interpersonal & Adaptability Skills',
      'Team Leadership'
    ]
  }
];

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Component architecture, state management, hooks, modern single-page applications.',
    featured: true
  },
  {
    name: 'Next.js (App Router)',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Server Components, Client Components, Route Handlers, Server Actions, SSR & SSG.',
    featured: true
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Strict type safety, generics, interfaces, scalable code organization.',
    featured: true
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 'Expert',
    description: 'Async programming, DOM manipulation, ES modules, dynamic execution.',
    featured: true
  },
  {
    name: 'HTML5 & Semantic Markup',
    category: 'Frontend',
    level: 'Expert',
    description: 'SEO-friendly structure, accessible DOM hierarchy, WCAG standards.',
    featured: false
  },
  {
    name: 'CSS3 & Modern Styling',
    category: 'Frontend',
    level: 'Expert',
    description: 'Flexbox, Grid, CSS animations, custom design tokens, responsive layouts.',
    featured: false
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Utility-first CSS, dynamic dark mode, custom keyframe animations, glassmorphism.',
    featured: true
  },

  // Backend & Programming
  {
    name: 'Node.js & Express',
    category: 'Backend',
    level: 'Advanced',
    description: 'REST API design, backend routing, asynchronous processing, middleware.',
    featured: true
  },
  {
    name: 'Next.js Route Handlers',
    category: 'Backend',
    level: 'Advanced',
    description: 'API endpoints, Server Actions, secure environment variable validation.',
    featured: true
  },
  {
    name: 'Database Management Systems (DBMS)',
    category: 'Backend',
    level: 'Intermediate',
    description: 'Relational data modeling, SQL queries, schema design, normalized tables.',
    featured: true
  },

  // Software Engineering & Testing
  {
    name: 'Software & Process Testing',
    category: 'Testing',
    level: 'Advanced',
    description: 'Integration testing, user acceptance testing (UAT), bug tracking, test case design.',
    featured: true
  },
  {
    name: 'System Analysis & Requirements',
    category: 'Business Analysis',
    level: 'Advanced',
    description: 'Use case modeling, requirements elicitation, workflow mapping, gap analysis.',
    featured: true
  },
  {
    name: 'Enterprise Architecture',
    category: 'Software Engineering',
    level: 'Intermediate',
    description: 'Layered architecture, component decouplings, service boundaries, TOGAF principles.',
    featured: false
  },
  {
    name: 'IT Project Management',
    category: 'Project Management',
    level: 'Advanced',
    description: 'Agile sprints, task tracking, deliverable documentation, risk assessment.',
    featured: false
  },

  // Development Tools
  {
    name: 'Git & GitHub',
    category: 'Development Tools',
    level: 'Advanced',
    description: 'Version control, branch management, pull requests, conventional commits.',
    featured: true
  },
  {
    name: 'Vercel Deployment',
    category: 'Development Tools',
    level: 'Advanced',
    description: 'CI/CD pipeline integration, production builds, analytics, speed insights.',
    featured: true
  },
  {
    name: 'UI/UX & Prototyping',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'User-centered design, responsive wireframing, component-driven layouts.',
    featured: false
  },

  // Soft Skills
  {
    name: 'Stakeholder Communication',
    category: 'Soft Skills',
    level: 'Expert',
    description: 'Translating technical requirements into clear business communication.',
    featured: true
  },
  {
    name: 'Student Mentorship & Leadership',
    category: 'Soft Skills',
    level: 'Expert',
    description: 'Guiding peers, leading group initiatives, facilitating student forum discussions.',
    featured: false
  },
  {
    name: 'Technical Documentation',
    category: 'Soft Skills',
    level: 'Advanced',
    description: 'System specifications, API docs, user guides, architecture blueprints.',
    featured: false
  }
];

export const referencesData: ReferenceItem[] = [
  {
    name: 'Jack Sibanyoni',
    phone: '072 042 7654',
    title: 'Academic / Professional Reference',
    relation: 'Informatics Supervisor & Mentor'
  },
  {
    name: 'Hezekiel Mshitiseng Mashego',
    phone: '077 428 1889',
    title: 'Directorate Reference',
    relation: 'Directorate of Extracurricular Development Lead'
  }
];
