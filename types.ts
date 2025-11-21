export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface LinkedInPost {
  title: string;
  link: string;
  snippet: string;
  source?: string;
}

export enum FetchState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}