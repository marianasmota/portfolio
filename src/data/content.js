export const profile = {
  name: 'Mariana Mota',
  role: 'Product Designer',
  shortTagline: 'IA, Design, Information',
  tagline:
    'I design the structure underneath the interface — information architecture, taxonomies and conversational behaviour for AI and data-heavy products.',
  aboutTeaser:
    "I work at system level: the taxonomy an AI model learns from, the conversation an assistant has, and the interface people use — made consistent.",
  focusAreas: ['Artificial Intelligence', 'Design', 'Information Architecture'],
  professionalBio: {
    heading: 'Positioning',
    oneLine:
      'Product Designer who makes complex, data-heavy and AI-enabled products clear by designing the structure underneath the interface: information architecture, taxonomies and conversational behaviour.',
    summary:
      "9+ years in UX (since 2017), 6+ of them in AI and data products (since 2020). I started as an information architect building taxonomies that trained machine learning models, and moved into end-to-end product design at Globo, Latin America's largest media company. There I design AI-enabled tools for advertising and audience intelligence, from first idea to production. I hold a Master's in Information Science focused on taxonomies for recommendation systems, and I teach Information Architecture for a Portugal-based design school.",
    difference:
      'Most designers work at screen level; I work at system level. I can design the taxonomy an AI model learns from, the conversation an assistant has, and the interface people use, and make the three consistent.',
    targetRoles:
      'Senior Product Designer in AI products, data platforms, internal tools and B2B SaaS. Remote or Europe-based.',
  },
  personalBio:
    "Beyond the title: I'm the person who gets curious about why a system is organized the way it is, long before I ask how it looks. I like taking something messy and complex and finding the shape that was already hiding inside it — whether that's a dataset, a taxonomy or a conversation flow. Outside of work, that same curiosity goes into teaching, learning, and generally being the friend who over-researches every decision.",
  skills: [
    'Information Architecture',
    'Systems Thinking',
    'AI / Conversational Design',
    'Data-Driven Design',
    'Product Design',
    'User Research',
    'Taxonomies',
    'User Interface Design',
  ],
  contact: {
    email: 'marianamk3@gmail.com',
    linkedin: 'https://linkedin.com/in/marianasmota',
    calendly: 'https://calendly.com/marianamk3/30min',
    github: 'https://github.com/marianasmota',
  },
}

export const projects = [
  {
    id: 'crypto-wallet',
    name: 'Crypto Wallet',
    description:
      'Self-initiated case study addressing complexity in crypto interfaces, focused on security, intuitiveness and accessibility.',
    tags: ['UI Design', 'UX Design'],
    image: 'crypto-wallet.png',
    link: '',
    status: 'live',
  },
  {
    id: 'gloria',
    name: 'Glor.IA',
    description:
      'AI designer platform supporting executive decision-making with data insights and visualizations.',
    tags: ['AI UX', 'UX Design', 'Information Architecture'],
    image: 'gloria.png',
    link: '',
    status: 'live',
  },
  {
    id: 'ebikes',
    name: 'Ebikes',
    description:
      'Converting customer feedback into strategic intelligence through research and machine learning.',
    tags: ['Information Architecture', 'Research'],
    image: 'ebikes.png',
    link: '',
    status: 'live',
  },
  {
    id: 'personas',
    name: 'Personas',
    description: 'Case study in progress.',
    tags: ['Information Architecture'],
    image: 'personas.png',
    link: '',
    status: 'wip',
  },
]

/* Work page filters — label to the project ids it shows.
   Information Architecture has no explicit list: it means "all",
   same as its role as the umbrella discipline in profile.focusAreas. */
export const workFilters = [
  { label: 'IA Designer', ids: ['gloria', 'personas'] },
  { label: 'UX/UI', ids: ['crypto-wallet'] },
  { label: 'Research', ids: ['ebikes'] },
  { label: 'Information Architecture', ids: null },
]
