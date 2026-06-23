export interface Project {
  subheading: string
  heading: string
  tld: string
  tags: string[]
  description: string
  gitLink: string
  siteLink?: string
  /** Optional screenshot. When omitted, the card shows a gradient placeholder.
   *  (Add fresh captures of the redesigned apps once deployed.) */
  image?: string
  /** Featured projects render as large, full-width showcase cards. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    subheading: 'Full-Stack · Fintech',
    heading: 'Mock Bank',
    tld: '.georgegarciadev.com',
    tags: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'React',
      'Vite',
      'Double-Entry Ledger',
      'REST API',
      'Docker',
    ],
    siteLink: 'https://bank.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/mock-bank',
    description:
      'A mock retail bank built on a double-entry ledger. Card authorizations land as holds, then settle into posted transactions. It also exposes two partner-facing products: a card-acceptance Network API and a Plaid-style account-linking Connect API. Both authenticate with a partner API key.',
    featured: true,
  },
  {
    subheading: 'Full-Stack · Service Desk',
    heading: 'Help Desk Hero',
    tld: '.georgegarciadev.com',
    tags: [
      'React',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'NestJS',
      'PostgreSQL',
      'AWS Cognito',
      'Recharts',
    ],
    siteLink: 'https://helpdeskhero.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/Ticketing-tool-client',
    description:
      'A ServiceNow-style IT ticketing console. Users open tickets; agents triage, assign, and resolve them through an activity timeline. Dashboards chart open, assigned, and overdue tickets by status and priority.',
    featured: true,
  },
  {
    subheading: 'Full-Stack · Gaming',
    heading: 'Lucky Spin Casino',
    tld: '.georgegarciadev.com',
    tags: ['React', 'Vite', 'TypeScript', 'Express', 'SQLite', 'Provably Fair'],
    siteLink: 'https://casino.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/lucky-spin-casino',
    description:
      "An online casino that funds a chip wallet by swiping a card through Mock Bank's Network API or linking an account with the Connect SDK, plays a provably-fair game, then cashes out back to the bank.",
  },
  {
    subheading: 'Single Page App',
    heading: 'This Portfolio',
    tld: '.com',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Framer Motion'],
    siteLink: 'https://georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/Portfolio',
    description:
      'The site you are looking at. I rebuilt it from Create React App into a Vite + TypeScript single-page app, with a data-driven projects section, an animated gradient background, and motion throughout.',
  },
]
