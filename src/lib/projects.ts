import type { CSSProperties } from 'react';
import projectsContent from '../data/projects.json';
import type { FeaturedProject, ProjectsContent } from '../types/projects';

const projectImageModules = import.meta.glob('../assets/projects/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const projectImages = Object.fromEntries(
  Object.entries(projectImageModules).map(([path, url]) => [path.split('/').pop() ?? path, url]),
);

function resolveProjectImage(image: string): string {
  if (image.startsWith('/') || image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }

  return projectImages[image] ?? image;
}

export const { featuredProjects, otherProjects } = projectsContent as ProjectsContent;

export function getProjectVisualStyle(project: FeaturedProject): CSSProperties {
  if (project.visualKind === 'color') {
    return { background: project.visualValue };
  }

  return {
    backgroundImage: `url(${resolveProjectImage(project.visualValue)})`,
    backgroundPosition: project.visualPosition ?? 'center',
    backgroundSize: project.visualFit ?? 'cover',
    backgroundColor: project.visualBackdrop ?? 'transparent',
  };
}
