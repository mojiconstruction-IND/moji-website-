import type { Metadata } from 'next';
import { projects } from '@/data';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Moji Construction Portfolio — 150+ Completed',
  description:
    'Explore Moji Construction\'s portfolio — 150+ major completed transmission lines, 132kV–400kV substation structures, and solar power evacuation projects across Rajasthan.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((proj, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: proj.title,
        description: proj.description,
        creator: {
          '@type': 'ConstructionBusiness',
          name: 'Moji Construction Private Limited',
        },
        locationCreated: {
          '@type': 'Place',
          name: proj.location,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
