export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  status: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type MissionItem = {
  label: string;
  text: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};