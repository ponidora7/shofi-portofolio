export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Activity {
  title: string;
  image: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  about: string;
  education: {
    degree: string;
    university: string;
    period: string;
    focus: string;
    status: string;
  };
  experiences: Experience[];
  achievements: Achievement[];
  projects: Project[];
  skills: SkillCategory[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  activities: Activity[];
}
