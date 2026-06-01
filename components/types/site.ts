export type SiteConfig = {
  name: string;
  title: string;
  shortTitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  status: string;
  heroTagline: string;
  heroEyebrow: string;
  heroDescription: string;
};

export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type MetricItem = [label: string, value: string];
export type DataRow = [label: string, value: string];