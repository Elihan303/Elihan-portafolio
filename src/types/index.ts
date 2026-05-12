export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl?: string;
}

export interface IHeroProps {
  name: string;
  role: string;
  about: string;
  socialMedia: ISocialMedia;
  profileImage?: string;
}

export interface ISocialMedia {
  facebook: string;
  twitter: string;
  github: string;
  email: string;
  linkedin: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface ISkillCategory {
  category: string;
  skills: string[];
}

export interface IProject {
  title: string;
  description?: string;
  isFeatured: boolean;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}
