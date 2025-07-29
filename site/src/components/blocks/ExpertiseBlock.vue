<script setup lang="ts">
import ContentCareerTimeline from '@/components/content/ContentCareerTimeline.vue';
import ItemNoteText from '@/components/items/ItemNoteText.vue';
import ItemListKV from '@/components/items/ItemListKV.vue';
import BaseBlock from '@/components/base/BaseBlock.vue';

interface TechLine {
  key: string;
  value: string;
}

interface ExpertiseSection {
  number: string;
  title: string;
  data: TechLine[];
}

interface CareerItem {
  year: string;
  role: string;
  company: string;
  current?: boolean;
}

const expertiseSections: ExpertiseSection[] = [
  {
    number: '01',
    title: 'Cloud Infrastructure',
    data: [
      { key: 'Platform', value: 'AWS (EKS, Lambda, Aurora, Step Functions, DynamoDB)' },
      { key: 'Approach', value: 'Cost-effective architecture, minimal downtime migrations' }
    ]
  },
  {
    number: '02',
    title: 'Infrastructure as Code',
    data: [
      { key: 'Tools', value: 'Terraform, Ansible, Helm, SaltStack' },
      { key: 'Approach', value: 'Full automation, reproducible deployments' }
    ]
  },
  {
    number: '03',
    title: 'Container Orchestration',
    data: [
      { key: 'Stack', value: 'Kubernetes, Docker, EKS, Helm, ArgoCD' },
      { key: 'Approach', value: 'Zero-downtime deployments, auto-scaling platforms' }
    ]
  },
  {
    number: '04',
    title: 'CI/CD & GitOps',
    data: [
      { key: 'Pipeline', value: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD' },
      { key: 'Approach', value: 'Transparent deployments, automated rollbacks' }
    ]
  },
  {
    number: '05',
    title: 'Security & Compliance',
    data: [
      { key: 'Framework', value: 'DevSecOps, Vault, IAM, Container Security' },
      { key: 'Approach', value: 'Proactive vulnerability management, incident prevention' }
    ]
  },
  {
    number: '06',
    title: 'Programming & Automation',
    data: [
      { key: 'Languages', value: 'Go, Python, Bash, Rust' },
      { key: 'Approach', value: 'Clean code, maintainable infrastructure tooling' }
    ]
  },
  {
    number: '07',
    title: 'System Design & Architecture',
    data: [
      { key: 'Domains', value: 'High-load Platforms, Mobile Infrastructure, Hybrid & Multi-Cloud' },
      { key: 'Approach', value: 'Scalable, modular designs aligned with business goals and growth' }
    ]
  },
  {
    number: '08',
    title: 'Observability & Monitoring',
    data: [
      { key: 'Stack', value: 'Prometheus, Grafana, Datadog, ELK Stack, OpenTelemetry' },
      { key: 'Approach', value: 'Proactive incident detection, transparent metrics, end-to-end tracing' }
    ]
  }
];

const careerItems: CareerItem[] = [
  {
    year: '2013',
    role: 'QA Engineer',
    company: 'VTB Bank, Russia'
  },
  {
    year: '2014',
    role: 'Sr QA Engineer',
    company: 'Raiffeisen Bank, Russia'
  },
  {
    year: '2016',
    role: 'DevOps / DevOps Team Lead',
    company: 'Mail.ru Group (VK), Russia'
  },
  {
    year: '2022',
    role: 'Lead DevOps (mobile infrastrucutre)',
    company: 'OzonTech, Russia'
  },
  {
    year: '2023+',
    role: 'Senior SRE Engineer (core team)',
    company: 'Aqua Security, Israel',
    current: true
  }
];

const philosophyNote = {
  header: 'Philosophy',
  content: [
    'I believe in platforms that simplify, scale, and empower developers.',
    'My goal is creating infrastructure that\'s clear, predictable, and measurable—helping teams deliver faster and with confidence.'
  ]
};
</script>

<template>
  <BaseBlock title="Engineering Expertise & Practices" subtitle="EXPERTISE" number="02">
    <ItemNoteText :header="philosophyNote.header" :content="philosophyNote.content" />
    <div class="expertise-content">
      <div class="expertise-layout">
        <div class="expertise-list">
          <ItemListKV
            v-for="section in expertiseSections"
            :key="section.number"
            :number="section.number"
            :title="section.title"
            :data="section.data"
          />
        </div>
        <div class="sidebar-content">
          <ContentCareerTimeline :items="careerItems" />
        </div>
      </div>
    </div>
  </BaseBlock>
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

  .expertise-list {
    flex: 1;
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