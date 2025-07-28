<script setup lang="ts">
import BlockContentHeader from '@/components/content/BlockContentHeader.vue';
import ExpertiseSectionList from '@/components/content/ExpertiseSectionList.vue';
import CareerTimelineSection from '@/components/content/CareerTimelineSection.vue';
import CareerSolutionList from '@/components/content/CareerSolutionList.vue';
import ContentNote from '@/components/content/ContentNote.vue';

interface TechLine {
  label: string;
  value: string;
}

interface ExpertiseSection {
  number: string;
  title: string;
  techLines: TechLine[];
}

interface CareerItem {
  year: string;
  role: string;
  company: string;
  current?: boolean;
}

interface SolutionItem {
  problem: string;
  solution: string;
  result: string;
}

const expertiseSections: ExpertiseSection[] = [
  {
    number: '01',
    title: 'Cloud Infrastructure',
    techLines: [
      { label: 'Platform', value: 'AWS (EKS, Lambda, Aurora, Step Functions, DynamoDB)' },
      { label: 'Approach', value: 'Cost-effective architecture, minimal downtime migrations' }
    ]
  },
  {
    number: '02',
    title: 'Infrastructure as Code',
    techLines: [
      { label: 'Tools', value: 'Terraform, Ansible, Helm, SaltStack' },
      { label: 'Approach', value: 'Full automation, reproducible deployments' }
    ]
  },
  {
    number: '03',
    title: 'Container Orchestration',
    techLines: [
      { label: 'Stack', value: 'Kubernetes, Docker, EKS, Helm, ArgoCD' },
      { label: 'Approach', value: 'Zero-downtime deployments, auto-scaling platforms' }
    ]
  },
  {
    number: '04',
    title: 'CI/CD & GitOps',
    techLines: [
      { label: 'Pipeline', value: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD' },
      { label: 'Approach', value: 'Transparent deployments, automated rollbacks' }
    ]
  },
  {
    number: '05',
    title: 'Security & Compliance',
    techLines: [
      { label: 'Framework', value: 'DevSecOps, Vault, IAM, Container Security' },
      { label: 'Approach', value: 'Proactive vulnerability management, incident prevention' }
    ]
  },
  {
    number: '06',
    title: 'Programming & Automation',
    techLines: [
      { label: 'Languages', value: 'Go, Python, Bash, Rust' },
      { label: 'Approach', value: 'Clean code, maintainable infrastructure tooling' }
    ]
  },
  {
    number: '07',
    title: 'System Design & Architecture',
    techLines: [
      { label: 'Domains', value: 'High-load Platforms, Mobile Infrastructure, Hybrid & Multi-Cloud' },
      { label: 'Approach', value: 'Scalable, modular designs aligned with business goals and growth' }
    ]
  },
  {
    number: '08',
    title: 'Observability & Monitoring',
    techLines: [
      { label: 'Stack', value: 'Prometheus, Grafana, Datadog, ELK Stack, OpenTelemetry' },
      { label: 'Approach', value: 'Proactive incident detection, transparent metrics, end-to-end tracing' }
    ]
  }
];

const careerItems: CareerItem[] = [
  {
    year: '2013',
    role: 'QA Engineer',
    company: 'Raiffeisen Bank, VTB Bank'
  },
  {
    year: '2016',
    role: 'DevOps Team Lead',
    company: 'Mail.ru Group'
  },
  {
    year: '2022',
    role: 'Lead DevOps',
    company: 'Ozon'
  },
  {
    year: '2023+',
    role: 'Senior SRE Engineer',
    company: 'Aqua Security, Israel',
    current: true
  }
];

const solutionItems: SolutionItem[] = [
  {
    problem: 'Slow mobile app releases at Ozon',
    solution: 'Built unified CI/CD with mobile farm',
    result: '25% faster time-to-market'
  },
  {
    problem: 'High DB costs at Aqua Security',
    solution: 'Automated Aurora Serverless migration',
    result: 'Reduced costs, improved performance'
  },
  {
    problem: 'Slow deployments at Mail.ru',
    solution: 'Migrated 50+ services to Kubernetes',
    result: '35% shorter release cycle'
  }
];

const philosophyNote = {
  header: '// Philosophy',
  content: 'I believe in platforms that simplify, scale, and empower developers. My goal is creating infrastructure that\'s clear, predictable, and measurable—helping teams deliver faster and with confidence.'
};
</script>

<template>
  <BlockContentHeader title="Engineering Expertise & Practices" subtitle="EXPERTISE" number="02" />
  <div class="container">
    <ContentNote :header="philosophyNote.header" :content="philosophyNote.content"/>
    <div class="expertise-content">
      <div class="expertise-layout">
        <ExpertiseSectionList :sections="expertiseSections" />
        <div class="sidebar-content">
          <CareerTimelineSection :items="careerItems" />
          <!-- <CareerSolutionList :items="solutionItems" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.expertise-content {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 3rem 0;
  
  .expertise-layout {
    display: flex;
    gap: 4rem;
    
    @media (max-width: 1200px) {
      gap: 3rem;
    }
    
    @media (max-width: 968px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  
  .sidebar-content {
    height: fit-content;
    position: sticky;
    top: 5rem;
    
    @media (max-width: 1200px) {
      flex: 0 0 300px;
    }
    
    @media (max-width: 968px) {
      flex: none;
      position: static;
    }
  }
}
</style>