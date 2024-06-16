export type Experience = {
  organization: string;
  organizationUrl: string;
  designation: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrentEmployer: boolean;
  jobDescription: string;
};

export type Education = {
  institution: string;
  institutionUrl: string;
  degree: string;
  stream?: string;
  startDate?: string;
  endDate?: string;
  location: string;
  cgpa?: number;
  percentage?: number;
};

export type Project = {
  name: string;
  images: string;
  description: string;
  stack: string[];
  url: string;
  githubUrl?: string;
};

export type Resume = {
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
  linkedInUrl?: string;
  githubUrl?: string;
  about: string;
  imageUrl: string;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skills: string[];
  resumeUrl: string;
};
