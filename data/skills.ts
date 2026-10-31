export type Level = 'hands-on' | 'exploring'
export type SkillGroup = {
  id: string
  label: string
  items: { name: string; level: Level }[]
}
const h = (n: string) => ({ name: n, level: 'hands-on' as Level })
const e = (n: string) => ({ name: n, level: 'exploring' as Level })
export const skillGroups: SkillGroup[] = [
  {
    id: 'cloud',
    label: 'Cloud',
    items: [
      'AWS',
      'EC2',
      'VPC',
      'IAM',
      'S3',
      'Systems Manager (SSM)',
      'Route 53',
      'Auto Scaling',
    ].map(h),
  },
  {
    id: 'containers',
    label: 'Containers',
    items: [
      'Docker',
      'Docker Compose',
      'Container networking',
      'Docker images',
      'Container health checks',
    ].map(h),
  },
  {
    id: 'iac',
    label: 'Infrastructure as Code',
    items: [
      'Terraform',
      'Remote state',
      'S3 backend',
      'Provisioning',
      'Resource management',
    ].map(h),
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    items: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'YAML',
      'Automated builds',
      'Deployment workflows',
      'Shell scripting',
    ].map(h),
  },
  {
    id: 'os',
    label: 'Linux & Networking',
    items: [
      'Linux',
      'Amazon Linux',
      'Ubuntu',
      'SSH',
      'Nginx',
      'DNS',
      'TCP/IP',
      'LVM',
      'NFS',
    ].map(h),
  },
  {
    id: 'apps',
    label: 'Apps & Databases',
    items: [
      'Node.js',
      'Python',
      'Java',
      'Express.js',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'API deployment',
      'Database migrations',
    ].map(h),
  },
  {
    id: 'explore',
    label: 'Exploring',
    items: [
      e('Kubernetes'),
      e('kubectl'),
      e('Cluster management'),
      e('Prometheus'),
      e('Grafana'),
      e('CloudWatch'),
    ],
  },
]
export const ecosystem: { label: string; items: string[] }[] = [
  { label: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
  {
    label: 'Infrastructure as Code',
    items: ['Terraform', 'OpenTofu', 'Ansible', 'Pulumi'],
  },
  { label: 'Containers', items: ['Docker', 'Podman'] },
  { label: 'Orchestration', items: ['Kubernetes', 'Helm'] },
  {
    label: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Azure DevOps'],
  },
  { label: 'Monitoring', items: ['Prometheus', 'Grafana', 'OpenTelemetry'] },
  { label: 'Logging', items: ['Loki', 'ELK Stack'] },
  {
    label: 'Security',
    items: ['HashiCorp Vault', 'Trivy', 'Snyk', 'SonarQube'],
  },
  { label: 'GitOps', items: ['Argo CD', 'Flux'] },
  { label: 'Networking', items: ['Nginx', 'HAProxy', 'DNS', 'TCP/IP'] },
  {
    label: 'Platform Engineering',
    items: ['Backstage', 'Internal Developer Platforms'],
  },
  { label: 'Cloud Native', items: ['AWS EKS', 'ECS', 'ECR'] },
]
