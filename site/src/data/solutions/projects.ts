export interface ProjectItem {
  header: { key: string; value: string }
  body: { key: string; value: string }
  footer: { key: string; value: string }
  href?: string
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'Issue',
      value: 'Uncontrolled mobile app releases and unstable builds',
    },
    body: {
      key: 'Solution',
      value:
        'Built unified Mobile CI/CD and scalable mobile testing farms (20+ MacStudios, Kubernetes Android emulators)',
    },
    footer: {
      key: 'Result',
      value: '35% faster releases, increased reliability',
    },
  },
  {
    header: {
      key: 'Issue',
      value: 'High database costs and scalability bottlenecks',
    },
    body: {
      key: 'Solution',
      value:
        'Automated migration proccess to AWS Aurora Serverless (AWS Lambda, StepFunctions, CodeBuild)',
    },
    footer: {
      key: 'Result',
      value: '15% infrastructure cost reduction, improved performance',
    },
  },
  {
    header: {
      key: 'Issue',
      value: 'Complex manual management of OpenStack infrastructure',
    },
    body: {
      key: 'Solution',
      value:
        'Developed OpenStack CLI automation tool (Go, Python) with integrated SaltStack orchestration (like aws-cli)',
    },
    footer: {
      key: 'Result',
      value: 'Automated deployments, eliminated manual configuration errors',
    },
  },
  {
    header: {
      key: 'Issue',
      value: 'No clear visibility of hardware distribution in data centers',
    },
    body: {
      key: 'Solution',
      value:
        'Created internal Flask-based dashboard visualizing servers (relationship diagram), racks, and network equipment inventory',
    },
    footer: {
      key: 'Result',
      value: 'Improved infrastructure transparency and accelerated incident response',
    },
  },
  {
    header: {
      key: 'Issue',
      value: 'Inefficient artifact storage and delivery for mobile teams',
    },
    body: {
      key: 'Solution',
      value:
        'Developed unified artifact storage & distribution service with HTTP/gRPC API and web UI (Go, VueJS)',
    },
    footer: {
      key: 'Result',
      value: 'Simplified artifact management, enabled rapid app distribution (integrated in CI/CD)',
    },
  },
]
