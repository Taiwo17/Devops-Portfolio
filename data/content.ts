export const stages = [
  'Source code',
  'Version control',
  'CI/CD',
  'Build',
  'Containerisation',
  'Infrastructure provisioning',
  'Deployment',
  'Monitoring',
]
export const principles = [
  [
    'Automation first',
    'Reduce repetitive manual work through scripting and automation.',
  ],
  [
    'Infrastructure as Code',
    'Manage infrastructure through version-controlled, repeatable configurations.',
  ],
  [
    'Reliability',
    'Build environments with predictable deployment processes and health checks.',
  ],
  [
    'Security awareness',
    'Apply access controls, environment management, and responsible infrastructure practices.',
  ],
  [
    'Continuous improvement',
    'Review workflows, identify inefficiencies, and improve deployment processes.',
  ],
] as const
export type Entry = {
  kind: string
  title: string
  detail: string
  when?: string
}
// Add entries here: employment, training, milestones. Newest first.
export const journey: Entry[] = [
  {
    kind: 'Training',
    title: 'AWS Cloud Practitioner Essentials',
    detail: 'Completed AWS cloud fundamentals training.',
    when: 'October 2026',
  },
  {
    kind: 'Project',
    title: 'AWS Infrastructure with Terraform',
    detail: 'VPC provisioning with an S3 remote state backend.',
  },
  {
    kind: 'Project',
    title: 'League API containerisation',
    detail: 'Docker Compose, MySQL 8.4 and migrations.',
  },
  {
    kind: 'Next',
    title: 'Professional DevOps role',
    detail:
      'Open to joining a team. This entry is replaced when a role begins.',
  },
]
export const certifications = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    status: 'Training completed, October 2026',
  },
]
