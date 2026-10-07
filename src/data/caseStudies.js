// Case study content, keyed by project id (see projects in ./content).
//
// Shape:
//   { hero?: { meta?, summary?: Block[], tagline? },
//     sections: [{ heading, blocks?: Block[], meta?: {label,value}[],
//                  subsections?: [{ heading, blocks: Block[] }] }] }
//
// Block = { type: 'p', text } | { type: 'list', items } | { type: 'quote', text }
export const caseStudies = {
  ebikes: {
    sections: [
      {
        heading: 'Role',
        blocks: [
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
      {
        heading: 'Problem',
        blocks: [
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
      },
      {
        heading: 'Goals',
        blocks: [
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
      },
      {
        heading: 'Process',
        subsections: [
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
      },
      {
        heading: 'Impact',
        blocks: [
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
      },
      {
        heading: 'Insights & Learnings',
        blocks: [
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
    ],
  },

  'crypto-wallet': {
    hero: {
      meta: 'Self-initiated concept · Solo product designer (research, UX, UI) · 12 weeks',
      summary: [
        {
          type: 'p',
          text: 'This is a self-initiated case study driven by a personal pain point: the crypto world is complex, and most interfaces reflect — rather than reduce — that complexity. The challenge was to design a crypto wallet that is secure, intuitive, and genuinely accessible to users with no prior experience, without sacrificing the depth that experienced users expect.',
        },
      ],
      tagline: "The interface doesn't simplify crypto. It absorbs the complexity so the user doesn't have to.",
    },
    sections: [
      {
        heading: 'Problem',
        blocks: [
          {
            type: 'p',
            text: "I tried to use a crypto platform and felt completely lost. My first thought was that maybe I just didn't understand finance. Then I asked a better question: is this the real complexity of crypto, or is it a design problem?",
          },
          {
            type: 'p',
            text: "I picked this challenge because it was unfamiliar. Redesigning something I already knew would have been easier. Here I had to understand how a world that isn't mine works before I could make it accessible to others.",
          },
          {
            type: 'quote',
            text: 'Guiding question: what would a crypto wallet look like if it were designed first for someone who has never used one?',
          },
        ],
      },
      {
        heading: 'Research',
        blocks: [
          {
            type: 'p',
            text: 'A lightweight study: 2 interviews with active crypto users, observation of Reddit communities, and a competitive analysis of 3 wallets.',
          },
        ],
        subsections: [
          {
            heading: 'Key insights',
            blocks: [
              {
                type: 'list',
                items: [
                  'Losing access is the biggest fear. Both interviewees raised it, and it was the most repeated fear across Reddit threads. One mistake with the recovery phrase means losing everything, permanently.',
                  'Information overload creates anxiety. Most wallets put charts, numbers and colors on screen all at once, which favors density over clarity.',
                  'Privacy matters. Interviewees and Reddit users wanted to know how their data is handled, especially in markets with strong data protection laws (Brazil, EU).',
                  'Multiple wallets are expected. Feedback from a crypto user mid-process showed that having several wallets in one app is common, and it changed the structure of the Home screen.',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Goals',
        blocks: [
          {
            type: 'list',
            items: [
              'Build trust and educate without overwhelming.',
              'Make security clear without making it scary.',
              'Support informed decisions, especially when money moves.',
              'Let a first-time user get around confidently with no prior crypto knowledge.',
            ],
          },
        ],
      },
      {
        heading: 'Onboarding',
        subsections: [
          {
            heading: 'Educate before asking for anything.',
            blocks: [
              {
                type: 'p',
                text: "Up to three illustrated screens in Stories format explain what a wallet is, how access works, and why security comes first. They're short, visual, and ask for no commitment.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-onboarding-educate.webp',
                alt: 'Three onboarding screens: "All your crypto, one wallet", "Your wallet, your access", and "Access your wallet securely"',
              },
            ],
          },
          {
            heading: 'No social login.',
            blocks: [
              {
                type: 'p',
                text: 'Signing in with Apple or Google removes friction, but tying a wallet to a third-party account makes beginners feel less safe. The product promises security, and that promise has to show up in every small decision.',
              },
            ],
          },
          {
            heading: "Email and SMS for the account. Identity data only when it's needed.",
            blocks: [
              {
                type: 'p',
                text: "A self-custody wallet doesn't need to know who you are in order to hold your assets. Identity and address are requested only in the Buy flow, by the broker, and a privacy message appears before that step.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-onboarding-identity.webp',
                alt: 'Account creation screens: email, 6-digit code, phone number, and personal/address data entered only later in the flow',
              },
            ],
          },
          {
            heading: 'Transition screens as trust signals.',
            blocks: [
              {
                type: 'p',
                text: 'A passive screen (loading after setup) and an active one (an action is required to continue). Both tell the user the same thing: this is a serious product, not something that just "appears."',
              },
              {
                type: 'image',
                src: 'crypto-wallet-onboarding-security.webp',
                alt: 'A passive "Analysing your information" loading screen next to active passcode and Face ID setup screens',
              },
            ],
          },
        ],
      },
      {
        heading: 'The most critical screen',
        blocks: [
          {
            type: 'p',
            text: "The recovery phrase can't be copied or screenshotted. Users are asked to grab pen and paper and write it down, then confirm 3 words before continuing. Until this point nothing has been stored: the wallet only exists once they continue, and from then on they are the only ones responsible for the phrase.",
          },
          {
            type: 'image',
            src: 'crypto-wallet-recovery-phrase.webp',
            alt: 'Recovery phrase flow: a prompt to grab pen and paper, the public key, the hidden private key, and a final confirmation screen',
          },
          {
            type: 'p',
            text: "Trade-off: closing the app at this step restarts the whole setup. That's real friction, and I accepted it because a skipped backup is the most expensive mistake a beginner can make.",
          },
        ],
      },
      {
        heading: 'Navigation',
        subsections: [
          {
            heading: 'Home — no pressure to buy.',
            blocks: [
              {
                type: 'p',
                text: "The empty state invites exploration instead of pushing a purchase. Once there are assets, each one is its own clickable card, because splitting attention is risky when money is involved. The multi-wallet dropdown came from user feedback I hadn't planned for, and it changed the structure of the screen.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-nav-home.webp',
                alt: 'Home screen states: empty wallet, populated asset list, the multi-wallet switcher, and a single asset detail view',
              },
            ],
          },
          {
            heading: 'Explore — education first, then the market.',
            blocks: [
              {
                type: 'p',
                text: "New users see a crypto learning section above the asset list, an idea borrowed from digital banks that I hadn't found in any wallet. Once the wallet is active, the focus moves to the market. Open question: should this section disappear or move somewhere else? I'd compare both versions with new users and track whether they come back to it.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-nav-explore.webp',
                alt: 'Explore screen: a crypto learning section above the asset list, the full market list, and an asset detail with Buy/Swap',
              },
            ],
          },
          {
            heading: 'Activity — list and chart, connected.',
            blocks: [
              {
                type: 'p',
                text: "The list shows transactions. The chart, inspired by Banco Inter's investments tab, shows asset allocation at a glance so users don't have to add up positions in their head. None of the wallets I researched solved this.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-nav-activity.webp',
                alt: 'Activity screen: transaction list, a swap detail view, and the asset-allocation donut chart',
              },
            ],
          },
        ],
      },
      {
        heading: 'Transactions',
        blocks: [
          {
            type: 'p',
            text: 'Receive, Buy, Send, Swap. All transactions open in full-screen modals, outside the main navigation. They are short, focused actions, always tied to the selected wallet. Keeping them separate from browsing makes the moment of moving money feel deliberate.',
          },
        ],
        subsections: [
          {
            heading: 'Receive',
            blocks: [
              {
                type: 'p',
                text: 'Copy the public address or generate a QR code. The first and last 6 characters are highlighted, because an experienced user told me checking a long address character by character is tedious and error-prone.',
              },
              {
                type: 'image',
                src: 'crypto-wallet-receive.webp',
                alt: 'Receive flow: asset list with copy and QR actions, then a generated QR code for the selected wallet',
              },
            ],
          },
          {
            heading: 'Buy',
            blocks: [
              {
                type: 'p',
                text: "Starts with the amount in local currency, not crypto, because that's how beginners think about money. The broker appears as a separate layer, which reinforces that this is a wallet, not an exchange.",
              },
              {
                type: 'image',
                src: 'crypto-wallet-buy.webp',
                alt: 'Buy flow: asset search, amount in local currency, a list of broker options, payment confirmation, and success',
              },
            ],
          },
          {
            heading: 'Send',
            blocks: [
              {
                type: 'p',
                text: 'Shows only the assets the user owns. A summary card shows the origin and destination, with the same 6-character highlight.',
              },
              {
                type: 'image',
                src: 'crypto-wallet-send.webp',
                alt: 'Send flow: asset and recipient selection, amount entry, confirmation summary, and success screen',
              },
            ],
          },
          {
            heading: 'Swap',
            blocks: [
              {
                type: 'p',
                text: 'Same logic as Send. Users see what they pay and what they receive in real time, with a clear error when the amount is higher than their balance.',
              },
              {
                type: 'image',
                src: 'crypto-wallet-swap.webp',
                alt: 'Swap flow: pay/receive asset selection, an insufficient-balance error state, swap details, and success',
              },
            ],
          },
          {
            heading: 'Face ID is required for Buy, Send and Swap.',
            blocks: [
              {
                type: 'p',
                text: 'At first I planned it only for Send and Swap, the clearly irreversible actions. On review I added Buy too: any action that moves real money deserves the same protection.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Visual identity',
        blocks: [
          {
            type: 'p',
            text: 'Green, black and gray, rooted in the visual language of financial services. The neon green adds the cyberpunk feel that is part of crypto culture, and black and gray keep it serious.',
          },
          {
            type: 'p',
            text: 'The illustrations started from Nano Banana outputs. I then gave them a style direction and refined them by hand in Photoshop so they work as one consistent visual system.',
          },
        ],
      },
      {
        heading: "What I'd validate next",
        blocks: [
          {
            type: 'p',
            text: "This is an unshipped concept. The riskiest assumptions are that beginners will go through the intro instead of skipping it, and that they'll accept restarting setup rather than drop off at the recovery step. Next, I'd test the onboarding with 5 first-time users and track how many complete it and confirm their recovery phrase. If I started over, I'd define the custody model before designing registration, because it changes what data the app should ask for at all.",
          },
        ],
      },
    ],
    // Purely decorative — shown after all sections, not tied to any one of them.
    closingImage: 'crypto-wallet-closing.webp',
  },
}
