export interface Item {
  key: string
  value: string
}

export interface CoreCompetency {
  number: string
  title: string
  data: Item[]
}

export const coreCompetencies: CoreCompetency[] = [
  {
    number: '01',
    title: 'Platform Engineering',
    data: [
      { key: 'Focus', value: 'Build internal platforms that turn ops complexity into self-service capabilities' },
      { key: 'Goal', value: 'Enable developer autonomy while removing operational bottlenecks' },
    ]
  },
  {
    number: '02',
    title: 'Infrastructure at Scale',
    data: [
      { key: 'Approach', value: 'Design and operate infrastructure with full automation' },
      { key: 'Result', value: 'Reproducible, auditable systems that scale reliably' },
    ]
  },
  {
    number: '03',
    title: 'CI/CD & Delivery Automation',
    data: [
      { key: 'Delivery', value: 'Build pipelines that enable confident, frequent deployments' },
      { key: 'Workflow', value: 'GitOps-driven with proper rollbacks and continuous improvement' },
    ]
  },
]
