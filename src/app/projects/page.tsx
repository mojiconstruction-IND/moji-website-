import type { Metadata } from 'next';
import { projects } from '@/data';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Infrastructure Portfolio',
  description:
    'Explore Moji Construction\'s portfolio — 150+ major & 500+ overall completed transmission lines, 132kV-400kV substation structures, and solar power projects across Rajasthan.',
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
