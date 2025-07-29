export interface ProjectItem {
  header: { key: string; value: string };
  body: { key: string; value: string };
  footer: { key: string; value: string };
  href?: string;
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'Problem',
      value: 'Slow and unreliable mobile app delivery process'
    },
    body: {
      key: 'Solution',
      value: 'Architected and built a scalable mobile CI/CD platform with automated iOS & Android testing farms'
    },
    footer: {
      key: 'Result',
      value: 'Reduced release cycles by 25%, significantly increased deployment stability and developer productivity'
    },
    href: '/mobile-ci'
  },
  {
    header: {
      key: 'Problem',
      value: 'Growing infrastructure costs and database performance bottlenecks'
    },
    body: {
      key: 'Solution',
      value: 'Designed and fully automated seamless zero-downtime migrations to serverless database architecture (Aurora Serverless)'
    },
    footer: {
      key: 'Result',
      value: 'Achieved 30% infrastructure cost reduction with noticeable improvements in application performance'
    },
    href: '/serverless-db'
  },
  {
    header: {
      key: 'Problem',
      value: 'Complex legacy infrastructure slowing down service deployments'
    },
    body: {
      key: 'Solution',
      value: 'Led migration and standardization of 50+ core services to Kubernetes with automated CI/CD pipelines'
    },
    footer: {
      key: 'Result',
      value: 'Deployment speed increased by 35%, drastically reduced manual intervention and downtime'
    },
    href: '/kubernetes-migration'
  },
  {
    header: {
      key: 'Problem',
      value: 'Manual and error-prone infrastructure management'
    },
    body: {
      key: 'Solution',
      value: 'Developed custom Infrastructure as Code (IaC) tooling and robust APIs using Terraform, Go, and Python'
    },
    footer: {
      key: 'Result',
      value: 'Ensured reproducibility, eliminated manual errors, and cut operational overhead significantly'
    },
    href: '/iac-tooling'
  },
  {
    header: {
      key: 'Problem',
      value: 'Security vulnerabilities and inconsistent compliance across environments'
    },
    body: {
      key: 'Solution',
      value: 'Implemented proactive DevSecOps practices, centralized secrets management, and automated vulnerability scanning'
    },
    footer: {
      key: 'Result',
      value: 'Reduced security incidents to zero, established continuous compliance across infrastructure and CI/CD pipelines'
    },
    href: '/devsecops'
  }
];