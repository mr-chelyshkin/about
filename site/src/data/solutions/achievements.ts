export interface AchievementItem {
  area: string;
  result: string;
  description: string;
}

export const achievements: AchievementItem[] = [
  {
    area: 'Cost Optimization',
    result: '25-35% savings',
    description: 'Strategic infrastructure audits and automated resource optimization across all environments'
  },
  {
    area: 'Platform Migration',
    result: '50+ services migrated',
    description: 'Production workloads moved to Kubernetes with 35% faster deployment cycles'
  },
  {
    area: 'Team Development',
    result: '10+ engineers mentored',
    description: 'Built high-performing DevOps teams from scratch with strong knowledge-sharing culture'
  },
  {
    area: 'Security Implementation',
    result: 'Zero incidents achieved',
    description: 'Proactive security practices eliminated vulnerabilities through automation'
  },
  {
    area: 'Database Operations',
    result: '100% uptime maintained',
    description: 'Zero-downtime migrations with robust rollback mechanisms across platforms'
  },
  {
    area: 'Developer Experience',
    result: 'Custom tooling delivered',
    description: 'CLI tools and APIs that dramatically reduced manual operational overhead'
  }
];