// Case study content, keyed by project id (see projects in ./content).
// Each section is a list of blocks: { type: 'p', text } or { type: 'list', items }.
// `process` is a list of named subsections, each with its own blocks.
export const caseStudies = {
  ebikes: {
    role: {
      intro: [
        {
          type: 'p',
          text: 'I coordinated the research phase and led the taxonomy development for the project. Two interdependent workstreams that formed the foundation for everything the AI system would later produce.',
        },
        {
          type: 'p',
          text: 'My work spanned the full arc of the project: from structuring and conducting the desk research, through designing the classification systems that trained the machine learning model, to analyzing the AI outputs in Tableau and producing the final insight reports delivered to marketing and sales teams.',
        },
      ],
      meta: [
        {
          label: 'Main responsibilities',
          value:
            'UX Research, Information Architecture, Taxonomy Development, Ontology Design, Strategic Reporting',
        },
        { label: 'Company', value: 'Birdie' },
        { label: 'Industry', value: 'Feedback Analytics / B2B SaaS' },
        { label: 'Tools', value: 'Miro, Notion, Tableau' },
      ],
    },
    problem: [
      {
        type: 'p',
        text: "An e-bike company needed to sell more effectively, but didn't know who they were actually selling to, or why different types of users made the decision to invest in one.",
      },
      { type: 'p', text: 'Three interconnected problems were identified:' },
      {
        type: 'list',
        items: [
          'How users perceived the value of owning an e-bike',
          'How they perceived the company itself relative to competitors',
          'How to match the right product to the right user segment with enough precision to make advertising more effective.',
        ],
      },
      {
        type: 'p',
        text: "The challenge wasn't a lack of customer data. It was that the data existed in an unstructured form — scattered across reviews, forums, videos, and articles — and no system existed to extract meaning from it at scale. That's where the project began.",
      },
    ],
    goals: [
      {
        type: 'p',
        text: 'Transform unstructured user feedback into actionable strategic intelligence that marketing and sales teams could use to make better decisions about messaging, targeting, and product positioning.',
      },
      { type: 'p', text: 'This required two things to be true simultaneously:' },
      {
        type: 'list',
        items: [
          'The research had to be deep enough to surface real user nuance',
          'The classification system had to be precise enough to make that nuance machine-readable.',
        ],
      },
    ],
    process: [
      {
        heading: 'Structuring the research',
        blocks: [
          {
            type: 'p',
            text: 'The desk research was conducted in Miro, starting with a broad collection phase: articles, reviews, company-produced content, user-generated videos, and advertising material. Separating user perspectives from company perspectives was a deliberate first step: conflating the two would have contaminated the insights from the start.',
          },
          {
            type: 'p',
            text: 'Once collected, the material was classified, annotated, and cross-referenced. Findings were compiled into a structured Notion document, standardized in format from the beginning so it could communicate effectively across teams, not just within the research group.',
          },
          {
            type: 'p',
            text: 'The report was organized around two dimensions that would later define the taxonomy:',
          },
          {
            type: 'list',
            items: [
              'Product Aspects: a detailed breakdown of every component of an e-bike and how users related to it',
              'Context of Use: the behaviors, motivations, and scenarios that surrounded the decision to own one.',
            ],
          },
        ],
      },
      {
        heading: 'Developing the taxonomy',
        blocks: [
          {
            type: 'p',
            text: "The Product Aspects taxonomy organized information hierarchically, creating a classification structure that the machine learning model could use to identify and categorize user feedback at scale. Getting it right required iteration: build, test against the ML output, evaluate, refine, and test again. Each cycle surfaced gaps in the classification logic that desk research alone couldn't have predicted.",
          },
        ],
      },
      {
        heading: 'Designing the ontology',
        blocks: [
          {
            type: 'p',
            text: 'Context of Use presented a different structural challenge. Contexts don\'t behave hierarchically — one context isn\'t inherently "above" another, and many interrelate by nature rather than by rank. A taxonomy would have forced an artificial structure onto information that resisted it.',
          },
          {
            type: 'p',
            text: 'The solution was to design it as an ontology, a system where concepts are interconnected rather than nested, forming a knowledge graph rather than a tree. This preserved the relational complexity of how users actually think and speak about e-bikes, and produced richer, more accurate insights as a result.',
          },
        ],
      },
      {
        heading: 'Analyzing outputs and producing reports',
        blocks: [
          {
            type: 'p',
            text: 'With the ML system trained and running, the work shifted to Tableau, analyzing the AI outputs, comparing them against the original desk research findings, and translating the data into insight reports for marketing and sales teams.',
          },
          {
            type: 'p',
            text: 'This phase closed the loop: the research had defined the questions, the taxonomy and ontology had structured the data, and the reports delivered the answers in a form the business could act on.',
          },
        ],
      },
    ],
    impact: [
      {
        type: 'p',
        text: "The project delivered something the company didn't previously have: a scalable system for understanding users, not just at the moment of the research, but continuously, as new feedback entered the platform.",
      },
      {
        type: 'p',
        text: 'Marketing teams gained the ability to create contextual, segment-specific advertising grounded in real user language and behavior. Sales teams gained clarity on which product attributes drove purchase decisions for different user profiles. And the business gained a structured view of how users perceived them relative to competitors — an insight that had previously existed only as intuition.',
      },
      {
        type: 'p',
        text: "The most durable outcome wasn't any single insight. It was the infrastructure that made generating future insights significantly faster and more reliable.",
      },
    ],
    insights: [
      {
        type: 'p',
        text: 'This project sits at the intersection of UX research, information architecture, and machine learning — a space where the quality of the structural decisions made early determines the quality of everything the system produces afterward.',
      },
      {
        type: 'p',
        text: "Getting the taxonomy right wasn't a research deliverable. It was an architectural decision with downstream consequences for every insight the AI would ever generate. That's the work this case is really about.",
      },
    ],
  },
}
