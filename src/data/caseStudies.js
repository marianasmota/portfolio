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

  gloria: {
    hero: {
      summary: [
        {
          type: 'p',
          text: "Redesigning Globo's internal AI research assistant: from a UI refresh to the information architecture and conversation behind it.",
        },
      ],
    },
    sections: [
      {
        heading: 'Role',
        meta: [
          {
            label: 'Problem',
            value:
              'People tried the assistant and didn\'t come back. The team assumed the problem was visual.',
          },
          {
            label: 'My role',
            value:
              'Information architecture, the interface concept and most of the components. Conversation design together with my design partner.',
          },
          {
            label: 'Team',
            value: '1 product owner, 2 designers, 1 data scientist, 1 data engineer, 2 developers.',
          },
          {
            label: 'Timeline',
            value:
              'Jul–Nov 2025: heuristic evaluation (Jul), interface (Aug–Sep), conversation design hackday and presentation (Oct), refinement and final interface (Nov).',
          },
          {
            label: 'Outcome',
            value:
              'Launched to a test group of managers with consistent positive feedback. The work became an internal reference across areas.',
          },
        ],
      },
      {
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: "Glor.IA is an internal AI assistant that answers business questions with Globo's data: audience, content performance and finance. People can ask freely, or pick a module (Globoplay, Publishing, AdTech, FP&A…) to scope the analysis.",
          },
          { type: 'p', text: 'Two kinds of people use it:' },
          {
            type: 'list',
            items: [
              'People who need answers to make decisions: executives, and the analysts who prepare the data for them.',
              'People who build data products and agents: data engineers, who need to test how the agents behave.',
            ],
          },
        ],
      },
      {
        heading: 'Problem',
        blocks: [
          { type: 'p', text: "The assistant existed. People didn't come back." },
          {
            type: 'p',
            text: 'We were brought in to refresh the interface. The assumption was that colours, typography and a cold look were pushing users away.',
          },
          {
            type: 'p',
            text: "Our evaluation told a different story. Answers came in one long block, with no checkpoints and weak hierarchy. Responses were slow. And most people didn't know what the assistant could do.",
          },
          {
            type: 'p',
            text: 'When we got access to the monitoring dashboard near the end of the project, it confirmed the picture: sessions averaged two questions.',
          },
          {
            type: 'image',
            src: 'gloria-before.webp',
            alt: 'Before screens next to an analysis of real chat conversations',
          },
        ],
      },
      {
        heading: 'Goals',
        blocks: [
          {
            type: 'list',
            items: [
              "Bring people back. A tool used once isn't delivering value.",
              'Make capabilities discoverable. People should find out what the assistant can do without being told.',
              "Align with Globo's brand. A tool that doesn't look like its company loses trust before the first question.",
            ],
          },
        ],
      },
      {
        heading: 'Diagnosis',
        subsections: [
          {
            heading: 'Evaluated the information architecture against ten heuristics.',
            blocks: [
              {
                type: 'p',
                text: "With my design partner, I rated the existing product against Abby Covert's information architecture heuristics: findable, clear, credible, controllable and more. The biggest gaps were findability, the structure of the answers, and no way to measure frustration or drop-off.",
              },
              {
                type: 'image',
                src: 'gloria-heuristics.webp',
                alt: 'Heuristic evaluation scoring the existing product against ten information architecture heuristics',
              },
            ],
          },
          {
            heading: 'Classified real conversations to see what people actually ask.',
            blocks: [
              {
                type: 'p',
                text: 'Four groups emerged: audience metrics, financial performance, specific content (BBB, the Olympics) and exploration. The last group was greetings and "what can you do?", which showed that discoverability was a problem in its own right.',
              },
            ],
          },
          {
            heading: 'Built personas for both profiles.',
            blocks: [
              {
                type: 'p',
                text: 'Ana (executive), Rafael (analyst) and Samuel (data engineer) had different goals but shared one complaint: long, slow answers, and no confidence that the AI was using the right data.',
              },
              {
                type: 'image',
                src: 'gloria-personas.webp',
                alt: 'Three personas: Ana the executive, Rafael the analyst, and Samuel the data engineer',
              },
            ],
          },
        ],
      },
      {
        heading: 'Designing the conversation',
        subsections: [
          {
            heading: "Took on conversation design, which wasn't in scope.",
            blocks: [
              {
                type: 'p',
                text: 'The business team hadn\'t mapped it, but we saw it as the main reason people left. We proposed it on our own initiative in a hackday, presented it to the team, and it was well received.',
              },
            ],
          },
          {
            heading: 'Organised every conversation in three stages.',
            blocks: [
              {
                type: 'p',
                text: 'Using ChatGPT as a thinking partner, we structured the flow in three stages:',
              },
              {
                type: 'list',
                items: [
                  'Collect: intent and context.',
                  'Understand: processing and checkpoints.',
                  'Convert: delivery and next steps.',
                ],
              },
              {
                type: 'image',
                src: 'gloria-conversation-flow.webp',
                alt: 'Conversation flow diagram walked through with a Telecine example',
              },
            ],
          },
          {
            heading: 'Asked only when the question was ambiguous.',
            blocks: [
              {
                type: 'p',
                text: 'Many people typed into the assistant as if it were a search engine: a few loose keywords. Asking every time would slow down executives who want ready answers. Never asking meant answering the wrong question. So the assistant answers clear questions directly and asks for the missing detail only when the intent is ambiguous. After clarifying, it confirms what it understood before running:',
              },
              { type: 'quote', text: 'You need Telecine data since 19 August. Confirm?' },
              {
                type: 'p',
                text: 'The trade-off: a little more friction on vague questions, in exchange for answers people can trust.',
              },
            ],
          },
          {
            heading: 'Answered first, then offered more.',
            blocks: [
              {
                type: 'p',
                text: 'The assistant answers the main question directly. Then it suggests a breakdown or asks whether the user wants a table or a chart.',
              },
            ],
          },
          {
            heading: 'Matched the format to the content.',
            blocks: [
              { type: 'p', text: 'Text for narrative answers, tables for comparisons, charts for trends.' },
            ],
          },
          {
            heading: 'Closed the loop.',
            blocks: [
              { type: 'p', text: 'After delivering, the assistant asks whether the answer helped.' },
            ],
          },
        ],
      },
      {
        heading: 'Rebuilding the structure',
        subsections: [
          {
            heading: 'Rebuilt the information architecture from scratch.',
            blocks: [
              {
                type: 'p',
                text: 'A new navigation model brings together chat, history, modules, documentation and the development area, each with a clear place.',
              },
              {
                type: 'image',
                src: 'gloria-ia-map.webp',
                alt: 'Information architecture map, before and after the redesign',
              },
            ],
          },
          {
            heading: 'Took the screen concept from tools people already trust.',
            blocks: [
              {
                type: 'p',
                text: 'I benchmarked Claude and Gemini: a clean layout, neutral colours and the conversation at the centre. Less to learn, more focus on the data.',
              },
            ],
          },
          {
            heading: 'Let people scope the analysis by module.',
            blocks: [
              {
                type: 'p',
                text: 'Choosing a module narrows the search to one area: faster answers, and confidence that the data is the right one.',
              },
              {
                type: 'image',
                src: 'gloria-modules.webp',
                alt: 'Module picker scoping the assistant to one business area, such as Globoplay or AdTech',
              },
            ],
          },
          {
            heading: 'Gathered outputs in a library.',
            blocks: [
              {
                type: 'p',
                text: 'Conversations, tables and charts live in one place in the side menu, instead of getting lost in long threads.',
              },
              {
                type: 'image',
                src: 'gloria-library.webp',
                alt: 'Library of saved conversations, tables and charts in the side menu',
              },
            ],
          },
          {
            heading: "Sent each person to the documentation they're allowed to see.",
            blocks: [
              {
                type: 'p',
                text: 'Documentation varied by role. A single button routes each user to their own.',
              },
            ],
          },
          {
            heading: "Opened a split screen for deep research, following Gemini's model.",
            blocks: [
              {
                type: 'p',
                text: "Our manager asked for something like Gemini's deep research, and we agreed: long analyses need room. The split opens only when someone picks a deep research source or combines sources, so quick questions keep the simple chat view.",
              },
              {
                type: 'image',
                src: 'gloria-split-screen.webp',
                alt: 'Deep research source loading in the split screen while the main panel streams its answer',
              },
            ],
          },
        ],
      },
      {
        heading: 'Interface',
        blocks: [
          {
            type: 'p',
            text: "Built on Globo's corporate design system, and designed most of the components.",
          },
          {
            type: 'p',
            text: 'Neutral palette, Globo accents and a clear typographic hierarchy. Here, visual noise is a usability problem, not just an aesthetic one.',
          },
          {
            type: 'image',
            src: 'gloria-interface.webp',
            alt: 'Final interface showing the chat, modules and neutral visual language',
            caption: 'Some information in the screens has been blurred to protect company data.',
          },
        ],
      },
      {
        heading: 'Trade-off: Dev Mode',
        blocks: [
          {
            type: 'p',
            text: 'Dev Mode is where data engineers test agents. They create evaluations from sets of questions, run them, and inspect the query behind each answer in SQL or LookML. My design partner owned it.',
          },
          {
            type: 'image',
            src: 'gloria-dev-mode.webp',
            alt: 'Evaluate flow: building a set of test questions and inspecting the query behind an answer',
          },
        ],
        subsections: [
          {
            heading: 'Shipped as a switch, not the button I suggested.',
            blocks: [
              {
                type: 'p',
                text: 'I would have used a button leading to a separate area: a clear change of context for a mode that changes what the user can do. My partner argued that a switch was simpler and more immediate. The project was large and time was short, so we went with the switch.',
              },
              {
                type: 'quote',
                text: "What I'd do differently: run a small A/B test with a limited group, instead of deciding by consensus under pressure.",
              },
            ],
          },
        ],
      },
      {
        heading: 'Outcome and learnings',
        blocks: [
          {
            type: 'p',
            text: 'We launched to a test group of managers and got consistent positive feedback. We only had access to monitoring data near the end, and the team was restructured before we could track return rate. What I can point to: the work outlived the team and became an internal reference across areas.',
          },
          {
            type: 'p',
            text: 'Adapting tone of voice to each profile was planned for a second version.',
          },
          {
            type: 'p',
            text: "If I ran it again, I'd ask for monitoring access on day one, so the diagnosis and the result could be measured.",
          },
          {
            type: 'quote',
            text: "The lesson: engagement problems in AI products are rarely solved by a prettier interface. They're solved by making the interaction worth coming back to.",
          },
        ],
      },
    ],
  },

  personas: {
    hero: {
      summary: [
        {
          type: 'p',
          text: "An AI-enabled tool that turns a written persona into ready-to-launch audience segments, used by Globo's advertising team in production.",
        },
      ],
      tagline: 'From spreadsheet guesswork to AI-built audiences.',
    },
    sections: [
      {
        heading: 'Role',
        blocks: [{ type: 'p', text: 'Lead UX designer, from first idea to production.' }],
        meta: [
          {
            label: 'Team',
            value:
              '1 PM, 1 PO, 1 data scientist, 2 data engineers, 1 developer, 1 designer (me)',
          },
          { label: 'Timeline', value: 'Nov 2025 – May 2026' },
          { label: 'Product', value: 'Internal web platform, Globo Ads' },
        ],
      },
      {
        heading: 'Impact (Jan–Jun 2026)',
        blocks: [
          {
            type: 'list',
            items: [
              '−60% time from analysis to cohort',
              '75 advertisers and 139 orders supported',
              'Standardised recommendations and a fully scalable process',
            ],
          },
          {
            type: 'image',
            src: 'personas-hero.webp',
            alt: 'Personas chat with a table of matching cohorts, each with an action to add it to the audience',
          },
        ],
      },
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'Audience personas were built by hand, over weeks, with no way to know if they would perform.',
          },
          {
            type: 'p',
            text: 'When an advertiser asked for personas around a theme, like home renovation, analysts ran overlap and affinity studies in the DMP, copied the results into spreadsheets and picked segments one by one. They then tested cohorts to estimate reach and wrote up to three personas in a deck for the client.',
          },
          {
            type: 'p',
            text: "The process depended on each analyst's judgement. The last step, checking that the persona made sense, was where they felt least confident:",
          },
          {
            type: 'quote',
            text: "It's more to be sure that what I did actually made sense.",
          },
          {
            type: 'p',
            text: "Users: advertising analysts who build audience cohorts for Globo's advertisers.",
          },
          {
            type: 'p',
            text: 'Business goal: faster, data-backed personas that set Globo apart in the Latin American ad market.',
          },
        ],
      },
      {
        heading: 'Discovery',
        blocks: [
          {
            type: 'p',
            text: 'I mapped how analysts actually built personas before deciding what to automate.',
          },
          {
            type: 'p',
            text: 'The request reached me as "automate persona creation". Before designing anything, I ran two interviews with the analyst team. The first was a kickoff to map pains and expectations. The second followed the full path from briefing to final deliverable. It was year-end, when most teams protect their own deliveries, so time with users was scarce.',
          },
          {
            type: 'image',
            src: 'personas-interviews.webp',
            alt: 'Interview synthesis notes for two analysts, Natacha and Jungle, with highlighted quotes on how they build personas today',
          },
          {
            type: 'p',
            text: 'From these interviews I built a user journey and a service blueprint. They showed two entry points: a client briefing, or no briefing at all, where analysts started from a market study. Both paths ended in the same manual loop of DMP tests, screenshots and slides.',
          },
          {
            type: 'p',
            text: 'What this changed: the concept became a backstage platform where analysts describe a persona in words and the AI returns matching segments with reach and performance data. Analysts would keep control of the final choice.',
          },
          {
            type: 'image',
            src: 'personas-journey-map.webp',
            alt: 'User journey map: stages across objective, doing, thinking and saying, sentiment, opportunities and touchpoint',
          },
          {
            type: 'image',
            src: 'personas-service-blueprint.webp',
            alt: 'Service blueprint showing the with-briefing and without-briefing flows, from advertiser to delivery',
          },
        ],
      },
      {
        heading: 'Timeline',
        blocks: [
          {
            type: 'quote',
            text: 'With little time, we designed, shipped and validated in production rather than in prototypes.',
          },
        ],
        meta: [
          { label: 'Nov 2025 – Jan 2026', value: 'User research and data architecture' },
          { label: 'Feb – Mar 2026', value: 'First backend tests' },
          { label: 'Mar – Apr 2026', value: 'First interface deliveries' },
          {
            label: 'Apr – May 2026',
            value: 'Interfaces shipped to production and tested with users',
          },
          { label: 'May 2026', value: 'Query builder, new tests, current version delivered' },
        ],
      },
      {
        heading: 'Beta research: trusted, but not used to the end',
        blocks: [
          {
            type: 'p',
            text: 'Analysts trusted the recommendations but abandoned the tool at the last step.',
          },
          {
            type: 'p',
            text: 'During the beta, I observed analysts using Personas on real work. They thought aloud, and I tracked friction, workarounds and trust. Recommendations scored 7–8 out of 10 on confidence. They matched the analysts\' own manual analysis. They also showed CTR, which the DMP did not.',
          },
          {
            type: 'p',
            text: 'Then, at export, they stopped and rebuilt the audience by hand in the DMP. Four problems explained why:',
          },
          {
            type: 'list',
            items: [
              'AND-only logic. Export combined every attribute with AND, shrinking reach below what a campaign needs. "We can\'t work with a very limited volume."',
              'False affordance. Checkboxes let users select cohorts, but the system sent the whole list anyway.',
              'The assistant skipped steps. Asked to show attributes before creating the persona, it created it anyway, and repeated the mistake after a direct correction.',
              'Silent failures. No confirmation after sending to the DMP. One analyst found out days later that cohorts never arrived.',
            ],
          },
          {
            type: 'p',
            text: 'The insight: the AI was good enough. What users lacked was control over the output and visibility into what the system did with it.',
          },
        ],
      },
      {
        heading: 'Design decisions',
        blocks: [
          {
            type: 'p',
            text: "The answer was a split screen: the chat suggests cohorts on one side, a query builder shapes the audience on the other. I benchmarked the builder against the DMP's own planning tool, so analysts would recognise the logic. The interface is built on Globo's design system for internal platforms, and I followed it closely. The exception was the query builder: the system had nothing like it, so I designed it from scratch.",
          },
        ],
        subsections: [
          {
            heading: "Split the screen instead of doing everything in the chat's table.",
            blocks: [
              {
                type: 'p',
                text: 'The first idea was to build audiences inside the table the chat returned. Two complex flows were competing for one space, so I proposed separating them: recommendations on one side, audience building on the other.',
              },
              {
                type: 'p',
                text: 'Inside it, I also pushed back on disabling the table while the builder was open: analysts often go back to add more segments. The table stayed active.',
              },
              {
                type: 'image',
                src: 'personas-split-screen.webp',
                alt: 'Split screen: the chat and cohort table on the left, the query builder open on the right',
              },
            ],
          },
          {
            heading: 'Boolean logic that mirrors how analysts already work.',
            blocks: [
              {
                type: 'p',
                text: "Analysts built audiences by hand as groups of segments following specific rules. Instead of inventing a new model, the builder automates that one: AND/OR within a group, between groups and between single cohorts. It also replaced the fixed AND that was cutting reach. With no equivalent in the design system, I built this component from the ground up, in the system's visual language.",
              },
              {
                type: 'image',
                src: 'personas-query-builder.webp',
                alt: 'Query builder with nested cohort groups connected by AND/OR toggles, and total reach shown top right',
              },
            ],
          },
          {
            heading: 'A "+" instead of a checkbox.',
            blocks: [
              {
                type: 'p',
                text: 'The checkbox promised a selection the system didn\'t honour. A "+" says exactly what happens: this cohort goes into the audience. "Select all" stays for bulk work.',
              },
            ],
          },
          {
            heading: 'Export lives in one place.',
            blocks: [
              {
                type: 'p',
                text: 'I raised that export was still available in the chat\'s table, so it moved to the query builder only. One button opens two destinations, CSV or DMP, and high-stakes actions ask for confirmation.',
              },
              {
                type: 'image',
                src: 'personas-export-dropdown.webp',
                alt: 'Export button open, showing two destinations: CSV and Send to DMP',
              },
            ],
          },
          {
            heading: 'Two big numbers, not a wall of them.',
            blocks: [
              {
                type: 'p',
                text: 'The business wanted many headline metrics on screen. I argued for fewer, and we prioritised two: people reached per segment group and pageviews.',
              },
            ],
          },
          {
            heading: 'Smaller refinements.',
            blocks: [
              {
                type: 'list',
                items: [
                  'Folder rows for groups of cohorts, plain rows for single cohorts.',
                  'Refresh only appears in error states; the cohort name is edited inline in the top bar instead of a modal.',
                  'The table resizes with the side panel, with no horizontal scroll; impressions and CTR collapse first.',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Results',
        blocks: [
          {
            type: 'p',
            text: 'Personas is in production and cut the time from analysis to cohort by 60%.',
          },
          {
            type: 'p',
            text: 'In the first half of 2026 it supported 75 advertisers and 139 orders. Recommendations now follow one standard across analysts, and the process is fully scalable.',
          },
          {
            type: 'p',
            text: 'The advertising team received it very well.',
          },
          {
            type: 'p',
            text: "Source: the business team's internal results report, Jan–Jun 2026.",
          },
        ],
      },
      {
        heading: "What's next",
        blocks: [
          {
            type: 'p',
            text: "As the query builder grew stronger, the chat's role became the open question.",
          },
          {
            type: 'p',
            text: 'Before launch, I argued that the chat would become a dead end once the table took over, and asked to revisit how the split screen connects back to the conversation. There was no time, and the flow shipped as it was. Instead of letting the concern go, I turned it into the next research round, with five hypotheses I wrote from the interviews, workshops, observation sessions and business goals:',
          },
          {
            type: 'list',
            items: [
              'Users may leave the conversation once the cohort is built and exported.',
              'Too many actions around the chat may blur the ideal path.',
              'Few signals while the AI is processing may read as slowness or failure.',
              'Personas may be used for one-off tasks rather than daily work.',
              "The chat's value should be reassessed now that most of the job happens in the table.",
            ],
          },
          {
            type: 'image',
            src: 'personas-workshop.webp',
            alt: 'Workshop board: ideas to dream about, what\'s feasible, and what will be prioritised, voted and sized',
          },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: "I'd ask for time to refine the interface, not just to research it.",
          },
          {
            type: 'p',
            text: 'Once the backend was ready, the project sped up fast. Users loved the first live version and asked for many new, elaborate features, which the business added right away. Through May, large changes, from backend to interface structure, had one-week deadlines, and some new interfaces were due in three days.',
          },
          {
            type: 'p',
            text: 'I repeatedly argued that structural changes would hurt the product. I won some of those arguments and lost many.',
          },
          {
            type: 'p',
            text: 'The advertising team loved the result. Still, Personas packs a lot of information into a complex flow, and it deserved more care. Next time I\'d ask for more time to refine the interface and rethink how much each screen carries.',
          },
          {
            type: 'p',
            text: "The gap I'd close first is designing for AI errors. Research showed the assistant skipping steps and suggesting unrelated cohorts, but there was no time to design for it. I'd start by showing why each cohort was suggested, what the AI is doing while it works, and whether a sync to the DMP succeeded.",
          },
        ],
      },
    ],
  },
}
