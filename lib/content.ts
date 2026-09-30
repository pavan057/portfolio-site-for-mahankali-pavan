export const profile = {
  name: 'Mahankali Pavan',
  role: 'Software Engineer · AI Evaluation Engineer & Benchmark Task Author',
  location: 'Hyderabad, Telangana, India',
  locationShort: 'Hyderabad, India',
  email: 'mahankalipavan5811@gmail.com',
  mailto: 'mailto:mahankalipavan5811@gmail.com?subject=Hello%20Pavan',
  linkedin: 'https://www.linkedin.com/in/pavan-mahankali-1771a8271',
  github: 'https://github.com/pavan057',
  about:
    "Software engineer with 2+ years of production backend experience, now authoring and hardening agent-evaluation benchmarks for a frontier AI data lab. I work inside agentic coding environments, directing, challenging and validating AI agents across system design, implementation, debugging and verification. I bring the judgement to tell a well-formed wrong answer from a correct one, and the precision to explain why in writing.",
}

export const atAGlance = [
  { label: 'Location', value: 'Hyderabad, Telangana, India' },
  { label: 'Current role', value: 'AI Evaluation Engineer & Benchmark Task Author' },
  { label: 'Education', value: 'B.Tech, Computer Science and Engineering' },
  { label: 'Certification', value: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)' },
  { label: 'Languages', value: 'English (fluent) · Telugu (native) · Hindi (fluent)' },
]

export type ExperienceItem = {
  title: string
  org: string
  meta?: string
  dates: string
  current: boolean
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'AI Evaluation Engineer & Benchmark Task Author (Contract)',
    org: 'Frontier AI Data Lab (client confidential)',
    meta: 'Remote',
    dates: '2026 – Present',
    current: true,
    points: [
      'Author agent-evaluation tasks end to end: instruction, reference solution, deterministic verifier and written rationale.',
      'Review agent session traces to find why a model passed or failed, isolating the step that diverged and classifying the failure mode.',
      'Build adversarial cases where a plausible but wrong method still produces well-formed output, and prove it diverges measurably.',
      'Uphold evaluation integrity: containerised environments, pinned dependencies, ground truth recomputed at verification time, and a 31-criterion review rubric.',
    ],
  },
  {
    title: 'Practitioner & Session Trace Author',
    org: 'Independent Practice (Agentic AI-Assisted Engineering & Research)',
    dates: '2025 – Present',
    current: true,
    points: [
      'Multi-session technical work in Claude Cowork and Claude Code: architecture, implementation, verification and iterative repair.',
      'Structured human intervention: require empirical verification, reject unsupported claims, and document every correction.',
    ],
  },
  {
    title: 'Java Developer',
    org: 'ZOHO',
    meta: 'India',
    dates: 'Mar 2024 – May 2025',
    current: false,
    points: [
      "Built enterprise Java and Spring Boot services, REST APIs and optimised MySQL schemas; diagnosed production defects and reviewed peers' code.",
    ],
  },
  {
    title: 'Senior Associate – Java Developer',
    org: 'Prominent Scientific Private Limited',
    meta: 'India',
    dates: 'Apr 2023 – Jan 2024',
    current: false,
    points: [
      'Implemented backend business logic, JPA/JDBC data access and front-end interfaces from functional specifications.',
    ],
  },
]

export const projects = [
  {
    title: 'ReviewOps',
    subtitle: 'Annotation & Quality-Review Platform for AI Data Teams',
    description:
      'Full data-labeling lifecycle: bulk upload, annotation, two-tier peer and QA review, ML dataset export, a five-dimension quality scorecard and a six-state workflow.',
    stats: ['186 Java files', '79 REST endpoints'],
    stack: ['Java 21', 'Spring Boot 3.3', 'MySQL 8', 'Docker'],
    href: 'https://github.com/pavan057/ai-document-review-system',
  },
  {
    title: 'Pirate Battle Royale',
    subtitle: 'Authoritative Multiplayer Game Server',
    description:
      'Server-authoritative 20 Hz simulation for 60-player matches, with anti-cheat validation and interest-area filtering that prevents wall-hacks.',
    stats: ['1,842 concurrent players on one node', 'GC pauses < 20 ms'],
    stack: ['Java 21', 'Spring WebSocket', 'Redis', 'MySQL 8'],
    href: 'https://github.com/pavan057/pirate-battle-royale-server',
  },
]

export const skillGroups = [
  {
    name: 'Agentic AI & Evaluation',
    skills: [
      'Session trace review',
      'AI output validation',
      'Failure-mode taxonomy',
      'Adversarial test construction',
      'Deterministic verification',
      'Claude Cowork',
      'Claude Code',
    ],
  },
  {
    name: 'Engineering',
    skills: [
      'Java 8–21',
      'Python',
      'Spring Boot 3',
      'Spring Security',
      'Hibernate 6',
      'REST',
      'WebSocket',
      'MySQL 8',
      'Redis',
      'Docker',
      'Git',
      'Linux',
      'JVM & GC tuning',
    ],
  },
  { name: 'Testing', skills: ['JUnit 5', 'Mockito', 'pytest'] },
  {
    name: 'Data & Communication',
    skills: ['Power BI', 'DAX', 'Data modelling', 'Technical specification writing', 'Code review'],
  },
]

export const education = [
  {
    kind: 'degree' as const,
    title: 'B.Tech, Computer Science and Engineering',
    detail: 'CMR Institute of Technology, Hyderabad',
    dates: '2018 – 2022',
  },
  {
    kind: 'cert' as const,
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
  },
  { kind: 'cert' as const, title: 'Full Stack Web Development', detail: 'Udemy' },
  { kind: 'cert' as const, title: 'SQL (Basic) and Java (Basic)', detail: 'HackerRank Verified' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
