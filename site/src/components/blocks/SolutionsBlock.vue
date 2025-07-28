<script setup lang="ts">
import BlockContentHeader from '@/components/content/BlockContentHeader.vue';
import CareerSolutionList from '@/components/content/CareerSolutionList.vue';

interface SolutionItem {
  problem: string;
  solution: string;
  result: string;
}

const solutionItems: SolutionItem[] = [
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
  <BlockContentHeader title="Real-World Impact" subtitle="SOLUTIONS" number="03" />


  <div class="container">
    <CareerSolutionList :items="solutionItems" />
  </div>
</template>

<style scoped lang="scss">

</style>