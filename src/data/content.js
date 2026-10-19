export const profile = {
  name: 'Mariana Mota',
  role: 'Product Designer',
  shortTagline: 'Design, Information Architecture, Technology',
  tagline:
    'I design the structure underneath the interface — information architecture, taxonomies and conversational behaviour for AI and data-heavy products.',
  aboutTeaser:
    'I design the structure underneath complex, data-heavy and AI-enabled products: information architecture, taxonomies and conversational behaviour. I work at system level, not just screen level. I can design the taxonomy an AI model learns from, the conversation an assistant has, and the interface people use, and make the three consistent.',
  focusAreas: ['Design', 'Information Architecture', 'Technology'],
  hero: {
    greeting: "Hi, I'm ",
    name: 'Mariana Mota',
    line2: 'a Brazilian product designer based in Barcelona.',
    paragraphs: [
      "I came to design from library science, where I learned that information is only useful when someone can find it, and understand what they found. I still think that's most of the job.",
      'To me, design is translation: taking something tacit, a frustration, a habit, a need no one has named yet, and giving it a structure people can use. Today I do that for AI and data products, where the structure is often invisible: the taxonomy a model learns from, the conversation an assistant has, the interface people use on top of both. I like that work best when rigour and the invisible have to share the same room.',
    ],
  },
  about: {
    greeting: "Hi, I'm Mariana 👋",
    intro:
      'I design the structure underneath complex, data-heavy and AI-enabled products: information architecture, taxonomies and conversational behaviour. I work at system level, not just screen level. I can design the taxonomy an AI model learns from, the conversation an assistant has, and the interface people use, and make the three consistent.',
    sections: [
      {
        heading: 'How I got here',
        text: "I started in Library and Information Science, learning how people organise and find information. That led me to information architecture, and in 2020 to Birdie, where I built taxonomies that trained machine learning models. Most recently, at Globo, Latin America's largest media company, I've been taking AI-enabled tools for advertising and audience intelligence from first idea to production. I also hold a Master's in Information Science focused on taxonomies for recommendation systems, and I teach Information Architecture at The Starter, a Portugal-based design school.",
      },
      {
        heading: 'How I work',
        text: "I don't start from the interface. I start from the problem: how people think, what they expect, and where systems fail them. To me, design feels like translation, taking something tacit (a frustration, a need, a behaviour no one has named yet) and turning it into something clear and usable. That tension between rigour and imagination is what drew me to this field, and what keeps me here.",
      },
      {
        heading: "Where I'm based",
        text: "Rio de Janeiro (GMT-3), with a life shaped by curiosity about the world beyond it. I've worked with distributed teams for over six years and I'm looking for remote roles or roles in Europe.",
        languages: 'Portuguese (native), English (full professional), Spanish (basic).',
      },
    ],
  },
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
    bookCall: 'https://calendar.app.google/iAFWChPJPLbtvi5a7',
    github: 'https://github.com/marianasmota',
  },
}

export const projects = [
  {
    id: 'personas',
    name: 'Personas',
    description:
      'AI audience segmentation at Globo, from first idea to production. −60% time from analysis to cohort.',
    tags: ['AI UX', 'Information Architecture', 'UX Research'],
    image: 'personas.webp',
    link: '',
    status: 'live',
  },
  {
    id: 'gloria',
    name: 'AI Assistant',
    description:
      "Reframed a UI refresh into a redesign of an internal AI assistant's information architecture and conversation.",
    tags: ['AI UX', 'Conversation Design', 'Information Architecture'],
    image: 'gloria.webp',
    link: '',
    status: 'live',
  },
  {
    id: 'ebikes',
    name: 'Ebikes',
    description:
      'The taxonomy and ontology an ML model learned from, turning scattered feedback into a continuous insight system.',
    tags: ['Information Architecture', 'Research'],
    image: 'ebikes.webp',
    link: '',
    status: 'live',
  },
  {
    id: 'crypto-wallet',
    name: 'Crypto Wallet',
    description:
      'Self-initiated concept: a self-custody wallet designed first for beginners.',
    tags: ['UI Design', 'UX Design'],
    image: 'crypto-wallet.webp',
    link: '',
    status: 'live',
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
