export interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  desc: string;
  visualKind: 'color' | 'image';
  visualValue: string;
  visualFit?: 'cover' | 'contain';
  visualPosition?: string;
  visualBackdrop?: string;
  tags: string[];
  year: string;
  highlights: string[];
  dark?: boolean;
}

export interface OtherProject {
  num: string;
  title: string;
  desc: string;
}

export interface ProjectsContent {
  featuredProjects: FeaturedProject[];
  otherProjects: OtherProject[];
}
