export interface ProjectItem {
  header: { key: string; value: string }
  body: { key: string; value: string }
  footer: { key: string; value: string }
  href?: string
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'Mobile Platform Consolidation',
      value: 'Fragmented mobile infrastructure: teams managing isolated build/test environments',
    },
    body: {
      key: 'Solution',
      value:
        'Designed centralized mobile platform with resource allocation, standardized workflows (20+ MacStudios, K8s Android farm)',
    },
    footer: {
      key: 'Result',
      value: '35% faster releases, unified processes across teams',
    },
  },
  {
    header: {
      key: 'Pipeline-as-a-Service',
      value: 'Fragmented CI/CD landscape: each mobile team supporting custom pipeline solutions',
    },
    body: {
      key: 'Solution',
      value:
        'Built self-service Pipeline-as-a-Service with standardized core logic and configurable project adaptations',
    },
    footer: {
      key: 'Result',
      value: 'Centralized pipeline management, improved developer velocity',
    },
  },
  {
    header: {
      key: 'Aurora Serverless Migration',
      value: 'High database costs and operational scaling complexity',
    },
    body: {
      key: 'Solution', 
      value: 'Automated migration to Aurora Serverless v2 with demand-based capacity management',
    },
    footer: {
      key: 'Result',
      value: '15% cost reduction, eliminated manual capacity planning',
    },
  },
  {
    header: {
      key: 'OpenStack CLI Tool',
      value: 'Complex manual management of OpenStack infrastructure',
    },
    body: {
      key: 'Solution',
      value: 'Developed OpenStack CLI automation tool Python with integrated SaltStack orchestration (like aws-cli)',
    },
    footer: {
      key: 'Result',
      value: 'Eliminated manual operations, standardized infrastructure workflows',
    },
  },
  {
    header: {
      key: 'Internal Artifact Platform',
      value: 'Expensive third-party artifact platform with limited customization options',
    },
    body: {
      key: 'Solution',
      value:
        'Developed unified artifact storage & distribution service with HTTP/gRPC API and web UI (Go, VueJS)',
    },
    footer: {
      key: 'Result',
      value: 'Reduced platform costs, simplified artifact management with seamless CI/CD integration',
    },
  },
]
