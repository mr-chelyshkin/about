<script setup lang="ts">
import BlockContentHeader from '../content/BlockContentHeader.vue';
</script>

<template>
  <BlockContentHeader 
    title="Core Technologies & Methodologies" 
    subtitle="EXPERTISE" 
    number="02" 
  />
  
  <div class="container">
  <div class="expertise-content">
    <div class="methodology-section">
      <h3>Platform Engineering Philosophy</h3>
      <p>
        Я строю платформы, которые делают разработку предсказуемой и масштабируемой. 
        Мой подход основан на принципах "Platform as a Product" — каждая система должна 
        быть понятной, надежной и приносить измеримую ценность командам разработки.
      </p>
    </div>

    <div class="tech-stack">
      <h3>Technology Stack</h3>
      <div class="tech-categories">
        <div class="tech-category">
          <h4>Infrastructure & Cloud</h4>
          <ul>
            <li>AWS (EKS, ECS, Lambda, RDS, S3)</li>
            <li>Kubernetes + Helm</li>
            <li>Terraform + Terragrunt</li>
            <li>Docker + Container Orchestration</li>
          </ul>
        </div>
        
        <div class="tech-category">
          <h4>CI/CD & Automation</h4>
          <ul>
            <li>GitHub Actions, GitLab CI/CD</li>
            <li>ArgoCD для GitOps</li>
            <li>Ansible для configuration management</li>
            <li>Custom CLI tools (Go, Python)</li>
          </ul>
        </div>

        <div class="tech-category">
          <h4>Observability</h4>
          <ul>
            <li>Prometheus + Grafana</li>
            <li>ELK Stack / OpenSearch</li>
            <li>Jaeger для distributed tracing</li>
            <li>SLI/SLO methodology</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="approaches">
      <h3>Key Approaches</h3>
      <div class="approach-grid">
        <div class="approach-item">
          <h4>Infrastructure as Code</h4>
          <p>Все инфраструктурные изменения через код. Zero manual configuration, полная reproducibility.</p>
        </div>
        
        <div class="approach-item">
          <h4>GitOps Workflows</h4>
          <p>Git как single source of truth. Автоматический rollout и rollback через pull requests.</p>
        </div>
        
        <div class="approach-item">
          <h4>Developer Experience Focus</h4>
          <p>Платформа должна упрощать, а не усложнять. Self-service capabilities с правильными guard rails.</p>
        </div>
        
        <div class="approach-item">
          <h4>Observability First</h4>
          <p>Метрики, логи и трейсы встроены с самого начала. Проблемы выявляются до того, как их заметят пользователи.</p>
        </div>
      </div>
    </div>

    <div class="impact-metrics">
      <h3>Measured Impact</h3>
      <div class="metrics-grid">
        <div class="metric">
          <span class="metric-value">85%</span>
          <span class="metric-label">reduction in deployment time</span>
        </div>
        <div class="metric">
          <span class="metric-value">99.9%</span>
          <span class="metric-label">service uptime SLA</span>
        </div>
        <div class="metric">
          <span class="metric-value">60%</span>
          <span class="metric-label">faster feature delivery</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.expertise-content {
  padding: 2rem 0;
  
  .methodology-section {
    margin-bottom: 3rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
    }
  }
  
  .tech-stack {
    margin-bottom: 3rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    
    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      
      .tech-category {
        h4 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: #000;
        }
        
        ul {
          list-style: none;
          padding: 0;
          
          li {
            padding: 0.3rem 0;
            color: #666;
            border-left: 3px solid #42b983;
            padding-left: 1rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
  
  .approaches {
    margin-bottom: 3rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    
    .approach-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      
      .approach-item {
        padding: 1.5rem;
        border: 1px solid #eee;
        border-radius: 8px;
        
        h4 {
          margin-bottom: 0.8rem;
          color: #000;
        }
        
        p {
          color: #666;
          line-height: 1.5;
        }
      }
    }
  }
  
  .impact-metrics {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      
      .metric {
        text-align: center;
        padding: 1.5rem;
        border-radius: 8px;
        background: #f8f9fa;
        
        .metric-value {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #42b983;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          color: #666;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}
</style>