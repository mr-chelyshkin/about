
import { defaultSEO } from '@/data/meta/tags'
import { heroData } from '@/data/hero/data'

const getSameAs = () => {
  return heroData.links
    .filter(link => ['LinkedIn', 'GitHub', 'Tg'].includes(link.label))
    .map(link => link.href)
}

const getEmail = () => {
  const emailLink = heroData.links.find(link => link.label === 'Email')
  return emailLink?.href.replace('mailto:', '') || ''
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: heroData.name,
  jobTitle: heroData.title,
  description: heroData.description,
  url: defaultSEO.ogUrl,
  email: getEmail(),
  sameAs: getSameAs(),
  knowsAbout: heroData.techStack,
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance & Contract Work',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: heroData.title,
    occupationLocation: {
      '@type': 'Place',
      name: 'Remote or EU & Israel',
    },
    skills: heroData.techStack,
  },
}