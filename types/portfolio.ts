export interface Skill {
  name: string;
  category: 
    | 'Frontend'
    | 'Backend'
    | 'Programming'
    | 'Development Tools'
    | 'Software Engineering'
    | 'Testing'
    | 'Business Analysis'
    | 'Project Management'
    | 'Soft Skills';
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Proficient';
  iconName?: string;
  description: string;
  featured?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Frontend' | 'Enterprise Systems' | 'Systems & Architecture';
  featured: boolean;
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  technologies: string[];
  architecture: {
    pattern: string;
    description: string;
    diagramSteps: string[];
  };
  challenges: string[];
  lessonsLearned: string[];
  githubUrl: string;
  demoUrl: string;
  stats?: { label: string; value: string }[];
  imagePlaceholderGradient: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  completionDate: string;
  status: string;
  courses: string[];
  summary: string;
}

export interface LeadershipExperience {
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface ReferenceItem {
  name: string;
  phone: string;
  title?: string;
  relation?: string;
}

export interface PersonalDetails {
  fullName: string;
  studentNumber: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  bio: string;
  github: string;
  linkedin: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
