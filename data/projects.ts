import { ProjectCaseStudy } from '@/types/portfolio';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'sassa-frontend-app',
    title: 'SASSA Responsive Frontend Application',
    subtitle: 'Modern social grant portal frontend for improved mobile accessibility & citizen engagement.',
    category: 'Frontend',
    featured: true,
    overview: 'Developed during the INT Industry Exposure 2025 program, this project transforms the South African Social Security Agency (SASSA) grant portal into a highly responsive, accessible web application. The platform provides intuitive grant eligibility checking, status verification, document requirements guides, and streamlined application workflows for citizens across desktop and mobile devices.',
    problem: 'Legacy social grant platforms often suffer from cluttered desktop-only interfaces, high payload size, poor mobile responsiveness, low accessibility scores, and confusing user paths—causing frustration for citizens seeking vital social assistance.',
    solution: 'Engineered a modern client-side application built with React and custom utility styling. Implemented accessible component patterns, optimized state management for form inputs, responsive CSS layouts, and offline state caching for grant status checks.',
    features: [
      'Interactive Grant Eligibility & Status Verification Checker',
      'Mobile-First Responsive UI with clear touch targets and high-contrast accessibility',
      'Multi-step guided application & document requirement checklist',
      'Dynamic Form Validation with real-time feedback and error indicators',
      'Comprehensive Technical Documentation & Source Code documentation'
    ],
    technologies: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
      'Git / GitHub'
    ],
    architecture: {
      pattern: 'Component-Based Client SPA Architecture',
      description: 'Built following Clean Architecture frontend patterns, separating UI views, reusable components, validation rules, and mock API service handlers.',
      diagramSteps: [
        'User Client (Mobile/Desktop UI)',
        'React Component Layer (Form Control & Views)',
        'State & Validation Layer (Form State / Client Validation)',
        'API Mock Layer (Status Checker & Requirements Data)'
      ]
    },
    challenges: [
      'Designing an intuitive layout suitable for users with varying levels of digital literacy and device constraint.',
      'Ensuring WCAG AA high-contrast compliance for text elements and interactive buttons.',
      'Managing client state seamlessly across multi-step application forms without page reloads.'
    ],
    lessonsLearned: [
      'Accessibility is an integral feature, not an afterthought—designing mobile-first ensures inclusivity.',
      'Structured technical documentation improves codebase maintainability and team onboarding.',
      'Rigorous process testing catches edge cases early in the user lifecycle.'
    ],
    githubUrl: 'https://github.com/righteousdiphoko/sassa-responsive-frontend',
    demoUrl: 'https://sassa-frontend-demo.vercel.app',
    stats: [
      { label: 'Lighthouse Score', value: '98%' },
      { label: 'Form Completion Speed', value: '+45%' },
      { label: 'Mobile Responsiveness', value: '100%' }
    ],
    imagePlaceholderGradient: 'from-indigo-600 via-blue-600 to-indigo-900'
  },
  {
    id: 'student-information-management-system',
    title: 'Student Information Management System (SIMS)',
    subtitle: 'Enterprise academic administration platform for student records, enrollment, and course tracking.',
    category: 'Full Stack',
    featured: true,
    overview: 'Inspired by core Informatics coursework (System Analysis, DBMS, and IT Project Management), SIMS is an enterprise-grade academic management system designed to streamline student registration, module enrollment, academic record tracking, and faculty reporting.',
    problem: 'Educational institutions often struggle with fragmented student datasets across legacy spreadsheets, resulting in data duplication, delayed registration processing, and inefficient academic reporting.',
    solution: 'Designed and implemented a full-stack web system using Next.js App Router, TypeScript, and SQL database schemas. Built role-based access portals for Students, Lecturers, and Administrators with real-time record lookup.',
    features: [
      'Role-based dashboard for Students, Faculty, and Academic Administrators',
      'Automated course registration and prerequisite verification engine',
      'Academic transcript generator with automated GPA computation',
      'Advanced multi-parameter search & record filtering',
      'Normalized database schema for zero data redundancy'
    ],
    technologies: [
      'Next.js (App Router)',
      'TypeScript',
      'Node.js',
      'PostgreSQL / SQL DBMS',
      'Tailwind CSS',
      'Zod Validation'
    ],
    architecture: {
      pattern: 'Layered Enterprise Architecture (MVC / Server Actions)',
      description: 'Decoupled presentation layer from business logic controllers and data access repositories to enforce strict SOLID principles.',
      diagramSteps: [
        'Next.js Client Dashboards',
        'Server Actions / Route Handlers',
        'Business Logic Controller (Registration & Audit Engine)',
        'Database Layer (Normalized Relational DBMS)'
      ]
    },
    challenges: [
      'Ensuring transaction safety when concurrent students register for quota-limited modules.',
      'Modeling complex relational schemas connecting students, courses, departments, and prerequisite hierarchies.',
      'Optimizing database index performance for fast transcript search.'
    ],
    lessonsLearned: [
      'Strict database normalization prevents data corruption in multi-user enterprise systems.',
      'TypeScript interfaces dramatically reduce runtime errors across API boundaries.',
      'Agile iterative feedback helps refine administrative workflow interfaces.'
    ],
    githubUrl: 'https://github.com/righteousdiphoko/student-info-system',
    demoUrl: 'https://sims-demo.vercel.app',
    stats: [
      { label: 'Data Redundancy', value: '0%' },
      { label: 'Query Performance', value: '<50ms' },
      { label: 'Modules Handled', value: '500+' }
    ],
    imagePlaceholderGradient: 'from-blue-600 via-indigo-700 to-purple-900'
  },
  {
    id: 'inventory-management-system',
    title: 'Enterprise Inventory & Stock Management System',
    subtitle: 'Real-time supply chain tracking, automated reorder notifications, and stock analytics dashboard.',
    category: 'Enterprise Systems',
    featured: true,
    overview: 'Developed as a comprehensive Informatics systems analysis project, this platform enables retail and distribution businesses to monitor inventory levels, manage supplier purchase orders, track SKU movements, and receive automated low-stock warnings.',
    problem: 'Manual inventory tracking leads to stock-outs, over-purchasing, unrecorded shrinkage, and inaccurate financial reporting in small-to-medium enterprises.',
    solution: 'Engineered an interactive stock management application featuring live telemetry, inventory threshold alerts, barcode/SKU search, automated purchase order generation, and audit logging.',
    features: [
      'Real-time inventory level tracking with automated low-stock alerts',
      'Supplier portal & purchase order workflow approval pipeline',
      'Historical stock audit log with transaction timestamps',
      'Interactive analytics dashboard for inventory valuation & turnover',
      'CSV/PDF inventory report exporter'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'Chart Analytics'
    ],
    architecture: {
      pattern: 'Event-Driven Stock State Architecture',
      description: 'State updates trigger automatic notification listeners and real-time dashboard chart re-renders.',
      diagramSteps: [
        'Stock Movement Event (Inbound/Outbound)',
        'Validation Controller & Audit Logger',
        'DBMS State Persistence',
        'Real-time Dashboard Analytics Broadcast'
      ]
    },
    challenges: [
      'Maintaining accurate real-time inventory counts during rapid bulk updates.',
      'Creating dynamic chart visualizations that load smoothly without dropping UI frame rates.',
      'Designing intuitive barcode and SKU search filters.'
    ],
    lessonsLearned: [
      'Audit logs are critical for traceability in enterprise supply chain software.',
      'Modular utility functions simplify complex stock valuation formulas.',
      'Clean UI design helps warehouse staff process shipments quickly.'
    ],
    githubUrl: 'https://github.com/righteousdiphoko/inventory-management-system',
    demoUrl: 'https://inventory-system-demo.vercel.app',
    stats: [
      { label: 'Stockout Reduction', value: '78%' },
      { label: 'Audit Accuracy', value: '99.9%' },
      { label: 'Report Generation', value: 'Instant' }
    ],
    imagePlaceholderGradient: 'from-indigo-700 via-slate-800 to-indigo-950'
  },
  {
    id: 'enterprise-help-desk-platform',
    title: 'Enterprise IT Help Desk & Service Management Platform',
    subtitle: 'ITSM ticket management system with automated priority routing, SLA tracking, and resolution knowledge base.',
    category: 'Systems & Architecture',
    featured: true,
    overview: 'Rooted in Enterprise Architecture and Process Testing principles, this platform automates internal IT service management. It enables employees to submit support tickets, assigns tickets based on technician specialization, enforces SLA response times, and indexes solution articles.',
    problem: 'Unorganized IT support requests via informal email threads result in missed service-level agreements (SLAs), duplicate technician effort, and lack of visibility for IT leadership.',
    solution: 'Built a structured ticket management system with priority queues, automated status notifications, technician assignment algorithms, SLA countdown timers, and an integrated technical knowledge base.',
    features: [
      'Automated ticket routing based on issue category & staff workload',
      'Real-time SLA countdown timers & escalation triggers',
      'Integrated searchable IT Knowledge Base & troubleshooting guides',
      'Role-based access for End Users, Support Engineers, and IT Leads',
      'Comprehensive resolution analytics and response time reporting'
    ],
    technologies: [
      'Next.js (App Router)',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'Tailwind CSS',
      'Lucide Icons'
    ],
    architecture: {
      pattern: 'Service-Oriented Ticket Lifecycle Architecture',
      description: 'Structured state machine controlling ticket statuses (New -> Assigned -> In Progress -> Resolved -> Closed) with audit event hooks.',
      diagramSteps: [
        'Support Request Submission',
        'Priority & Category Classifier',
        'Technician Workload Dispatcher',
        'SLA Tracking Engine & Resolution Knowledge Base'
      ]
    },
    challenges: [
      'Managing state transitions cleanly across complex ticket lifecycle rules.',
      'Building responsive timers that update accurately across different timezones.',
      'Constructing a fast fuzzy-search engine for knowledge base articles.'
    ],
    lessonsLearned: [
      'IT Service Management frameworks (ITIL) translate directly into clean code state machines.',
      'Proper process testing ensures edge-case ticket transitions operate safely.',
      'Clear documentation empowers support staff to resolve tickets faster.'
    ],
    githubUrl: 'https://github.com/righteousdiphoko/enterprise-helpdesk-platform',
    demoUrl: 'https://helpdesk-demo.vercel.app',
    stats: [
      { label: 'SLA Compliance', value: '96.5%' },
      { label: 'Ticket Resolution Time', value: '-35%' },
      { label: 'Knowledge Base Articles', value: '120+' }
    ],
    imagePlaceholderGradient: 'from-violet-600 via-indigo-800 to-slate-900'
  }
];
