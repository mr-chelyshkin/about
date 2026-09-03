export interface AchievementItem {
  area: string
  result: string
  description: string
}

export const achievements: AchievementItem[] = [
  {
    area: 'Cost Optimization',
    result: '15-25% infrastructure savings',
    description:
      'Strategic infrastructure audits and automated resource optimization across all environments',
  },
  {
    area: 'Cross-team Collaboration',
    result: '10+ trainings delivered',
    description: 'Led hands-on workshops and mentoring on DevOps tools and best practices.',
  },
  {
    area: 'Technical Leadership',
    result: 'Standards rolled out to 15+ teams',
    description:
      'Developed and enforced infrastructure standards adopted across multiple engineering teams.',
  },
  {
    area: 'Migration Projects',
    result: 'Zero-downtime transitions',
    description: 'Successfully migrated critical workloads to modern platforms without downtime',
  },
  {
    area: 'Process Improvement',
    result: 'Unified deployment workflows',
    description: 'Established consistent deployment and infrastructure management practices',
  },
  {
    area: 'Platform Development',
    result: 'Reusable service components',
    description: 'Developed foundational services and APIs used across multiple engineering teams',
  },
  {
    area: 'Infrastructure Automation',
    result: 'Reduced manual work',
    description:
      'Created Terraform modules and CI/CD templates eliminating repetitive infrastructure tasks',
  },
]
