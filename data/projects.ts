export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  highlights: string[]
  repo: string
  flow?: string[]
}
// Add a new object here to add a project. Only list what is verified in the repo.
export const projects: Project[] = [
  {
    slug: 'aws-terraform',
    title: 'AWS Infrastructure with Terraform',
    summary:
      'Designed and provisioned AWS infrastructure using Terraform, applying Infrastructure as Code principles to manage cloud resources consistently and reproducibly.',
    tags: ['AWS', 'Terraform', 'VPC', 'S3 backend', 'IAM'],
    highlights: [
      'AWS VPC infrastructure',
      'Network resource provisioning',
      'Terraform configuration',
      'Remote state management using an S3 backend',
      'IAM and AWS account access management',
      'Infrastructure planning and change management',
    ],
    repo: 'https://github.com/Taiwo17/AWS-Infrastructure-with-Terraform-IaC-',
    flow: ['Write HCL', 'terraform plan', 'terraform apply', 'State in S3'],
  },
  {
    slug: 'league-api',
    title: 'League API: Containerisation and Deployment',
    summary:
      'Containerised a Node.js API using Docker and Docker Compose, integrating MySQL and database migration workflows to create a structured application deployment environment.',
    tags: ['Docker', 'Docker Compose', 'Node.js', 'MySQL 8.4', 'Sequelize'],
    highlights: [
      'Docker containerisation',
      'Docker Compose orchestration',
      'MySQL 8.4 integration',
      'Database migrations',
      'Container networking',
      'Environment configuration',
    ],
    repo: 'https://github.com/Taiwo17/League-API-Sequelize',
    flow: ['Build image', 'Compose up', 'Run migrations', 'API ready'],
  },
  {
    slug: 'epharmacy-api',
    title: 'EPharmacy API',
    summary:
      'An API project used to explore application infrastructure, containerisation, and DevOps deployment practices.',
    tags: ['API', 'Containerisation', 'Deployment'],
    highlights: [
      'Used to practise containerisation and deployment workflows',
      'Full technical breakdown to be added from the repository',
    ],
    repo: 'https://github.com/Taiwo17/EPharmacy-API',
  },
]
