export const TECH_MARQUEE: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Drizzle',
  'Redux Toolkit',
  'Vite',
  'Tailwind CSS',
  'AWS',
  'Docker',
  'Cognito',
  'REST APIs',
  'Socket.IO',
  'Redis',
  'LiveKit / WebRTC',
  'Express',
  'MongoDB',
  'Python',
  'PowerShell',
  'Linux',
  'CI/CD',
  'Git',
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux Toolkit / RTK Query', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'REST APIs',
      'PostgreSQL / Drizzle',
      'Socket.IO / WebSockets',
      'Redis',
      'LiveKit / WebRTC',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (EC2, Cognito, SES, SMS)', 'Docker / Compose', 'Caddy / Nginx', 'Datadog / Sentry', 'CI/CD'],
  },
  {
    title: 'Systems',
    items: ['Linux', 'Networking', 'PowerShell', 'Python', 'Bash'],
  },
]
