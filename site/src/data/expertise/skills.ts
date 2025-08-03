export interface SkillItem {
  key: string
  value: string
}

export interface Skills {
  data: SkillItem[]
  number: string
  title: string
}

export const skills: Skills[] = [
  {
    number: '01',
    title: 'Cloud Infrastructure',
    data: [
      { key: 'Platform', value: 'AWS (EKS, Lambda, Aurora, Step Functions, DynamoDB)' },
      { key: 'Approach', value: 'Strategic cloud transformation and optimization' },
    ],
  },
  {
    number: '02',
    title: 'Infrastructure as Code',
    data: [
      { key: 'Tools', value: 'Terraform, Ansible, Helm, SaltStack' },
      { key: 'Approach', value: 'Full automation, reproducible deployments' },
    ],
  },
  {
    number: '03',
    title: 'Container Orchestration',
    data: [
      { key: 'Stack', value: 'Kubernetes, Docker, EKS, Helm, ArgoCD' },
      { key: 'Approach', value: 'Production-grade orchestration and automation' },
    ],
  },
  {
    number: '04',
    title: 'CI/CD & GitOps',
    data: [
      { key: 'Pipeline', value: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD' },
      { key: 'Approach', value: 'GitOps-driven infrastructure and application delivery' },
    ],
  },
  {
    number: '05',
    title: 'Security & Compliance',
    data: [
      { key: 'Framework', value: 'DevSecOps, Vault, IAM, Container Security' },
      { key: 'Approach', value: 'Proactive vulnerability management, incident prevention' },
    ],
  },
  {
    number: '06',
    title: 'Full-stack platform development',
    data: [
      { key: 'Languages', value: 'Go, Python, Bash, Rust, VueJS' },
      { key: 'Approach', value: 'Production-grade applications with modern architectures' },
    ],
  },
  {
    number: '07',
    title: 'System Design & Architecture',
    data: [
      { key: 'Domains', value: 'High-load Platforms, Mobile Infrastructure, Hybrid & Multi-Cloud' },
      {
        key: 'Approach',
        value: 'Scalable, modular designs aligned with business goals and growth',
      },
    ],
  },
  {
    number: '08',
    title: 'Observability & Monitoring',
    data: [
      { key: 'Stack', value: 'Prometheus, Grafana, Datadog, ELK Stack, OpenTelemetry' },
      {
        key: 'Approach',
        value: 'Proactive incident detection, transparent metrics, end-to-end tracing',
      },
    ],
  },
]
