interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Sveaflet',
    description: `Sveaflet provides Svelte components for Leaflet mapping components to allow simple construction of declarative maps.`,
    imgSrc: '/static/images/sveaflet.png',
    href: 'https://sveaflet.vercel.app/',
  },
]

export default projectsData
