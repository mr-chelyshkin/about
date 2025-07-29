<script setup lang="ts">
import BlockHeader from '@/components/content/BlockHeader.vue';
import ItemPSR from '@/components/items/ItemPSR.vue'

interface ProjectItem {
  problem: string;
  solution: string;
  result: string;
}

const projectItems: ProjectItem[] = [
  {
    problem: 'Slow and unreliable mobile app delivery process',
    solution: 'Architected and built a scalable mobile CI/CD platform with automated iOS & Android testing farms',
    result: 'Reduced release cycles by 25%, significantly increased deployment stability and developer productivity'
  },
  {
    problem: 'Growing infrastructure costs and database performance bottlenecks',
    solution: 'Designed and fully automated seamless zero-downtime migrations to serverless database architecture (Aurora Serverless)',
    result: 'Achieved 30% infrastructure cost reduction with noticeable improvements in application performance'
  },
  {
    problem: 'Complex legacy infrastructure slowing down service deployments',
    solution: 'Led migration and standardization of 50+ core services to Kubernetes with automated CI/CD pipelines',
    result: 'Deployment speed increased by 35%, drastically reduced manual intervention and downtime'
  },
  {
    problem: 'Manual and error-prone infrastructure management',
    solution: 'Developed custom Infrastructure as Code (IaC) tooling and robust APIs using Terraform, Go, and Python',
    result: 'Ensured reproducibility, eliminated manual errors, and cut operational overhead significantly'
  },
  {
    problem: 'Security vulnerabilities and inconsistent compliance across environments',
    solution: 'Implemented proactive DevSecOps practices, centralized secrets management, and automated vulnerability scanning',
    result: 'Reduced security incidents to zero, established continuous compliance across infrastructure and CI/CD pipelines'
  }
];
</script>

<template>
  <BlockHeader title="Real-World Impact" subtitle="SOLUTIONS" number="03" />

  <div class="container">
    <h4>// Projects</h4>
    <div class="solutions-grid">
      <ItemPSR
        v-for="(item, index) in projectItems" :key="index" :problem="item.problem" :solution="item.solution" :result="item.result"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }
}
</style>