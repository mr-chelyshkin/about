<script setup lang="ts">
import BlockContentHeader from '@/components/content/BlockContentHeader.vue';
import ExpertiseSectionList from '@/components/content/ExpertiseSectionList.vue';
import CareerTimelineSection from '@/components/content/CareerTimelineSection.vue';

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
</script>

<template>
  <BlockContentHeader 
    title="Core Technologies & Methodologies" 
    subtitle="EXPERTISE" 
    number="02" 
  />
  
  <div class="container">
    <div class="expertise-content">
      <div class="expertise-layout">
        <ExpertiseSectionList :sections="expertiseSections" />

        <div class="sidebar-content">
          <CareerTimelineSection :items="careerItems" />

          <div class="problem-solutions">
            <div class="solutions-header">
              <span class="solutions-title">// Problem → Solution</span>
            </div>
            <div class="solution-list">
              <div class="solution-item">
                <div class="problem">Slow mobile app releases at Ozon</div>
                <div class="arrow">→</div>
                <div class="solution">Built unified CI/CD with mobile farm</div>
                <div class="result">25% faster time-to-market</div>
              </div>
              
              <div class="solution-item">
                <div class="problem">High DB costs at Aqua Security</div>
                <div class="arrow">→</div>
                <div class="solution">Automated Aurora Serverless migration</div>
                <div class="result">Reduced costs, improved performance</div>
              </div>
              
              <div class="solution-item">
                <div class="problem">Slow deployments at Mail.ru</div>
                <div class="arrow">→</div>
                <div class="solution">Migrated 50+ services to Kubernetes</div>
                <div class="result">35% shorter release cycle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="methodology-note">
      <div class="note-header">// Platform Engineering Philosophy</div>
      <p>
        Building platforms that make development predictable and scalable. 
        Every system should be understandable, reliable, and deliver measurable value to development teams.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.expertise-content {
  padding: 3rem 0;
  
  .expertise-layout {
    display: flex;
    margin-bottom: 3rem;
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
    flex: 0 0 360px;
    position: sticky;
    top: 2rem;
    height: fit-content;
    
    @media (max-width: 1200px) {
      flex: 0 0 300px;
    }
    
    @media (max-width: 968px) {
      flex: none;
      position: static;
    }
    
    .problem-solutions {
      margin-bottom: 2rem;
      padding: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .solutions-header {
      margin-bottom: 1.5rem;
      
      .solutions-title {
        font-size: $text-size-sm;
        color: $color-text-secondary;
      }
    }
    
    .solution-list {
      .solution-item {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #eee;
        
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .problem {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 0.3rem;
          font-weight: 500;
        }
        
        .arrow {
          font-family: 'Roboto Mono', monospace;
          color: $color-text-main;
          font-weight: 600;
          margin: 0.3rem 0;
        }
        
        .solution {
          font-size: 0.85rem;
          color: $color-text-main;
          margin-bottom: 0.3rem;
          font-weight: 500;
        }
        
        .result {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.8rem;
          color: #000;
          background: #e8f5e8;
          padding: 0.3rem 0.6rem;
          border-radius: 2px;
          font-weight: 600;
          display: inline-block;
        }
      }
    }
  }
}

.methodology-note {
  background: #f8f9fa;
  padding: 2rem;
  border-left: 4px solid $color-text-main;
  
  .note-header {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  p {
    color: $color-text-main;
    line-height: 1.6;
    font-size: 1.1rem;
    margin: 0;
  }
}
</style>