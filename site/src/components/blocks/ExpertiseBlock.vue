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
      <div class="expertise-layout">
        <div class="expertise-list">
          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">01</span>
              <h4>Cloud Infrastructure</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Platform:</span>
                <span class="tech-value">AWS (EKS, Lambda, Aurora, Step Functions, DynamoDB)</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Cost-effective architecture, minimal downtime migrations</span>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">02</span>
              <h4>Infrastructure as Code</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Tools:</span>
                <span class="tech-value">Terraform, Ansible, Helm, SaltStack</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Full automation, reproducible deployments</span>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">03</span>
              <h4>Container Orchestration</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Stack:</span>
                <span class="tech-value">Kubernetes, Docker, EKS, Helm, ArgoCD</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Zero-downtime deployments, auto-scaling platforms</span>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">04</span>
              <h4>CI/CD & GitOps</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Pipeline:</span>
                <span class="tech-value">GitHub Actions, GitLab CI, Jenkins, ArgoCD</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Transparent deployments, automated rollbacks</span>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">05</span>
              <h4>Security & Compliance</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Framework:</span>
                <span class="tech-value">DevSecOps, Vault, IAM, Container Security</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Proactive vulnerability management, incident prevention</span>
              </div>
            </div>
          </div>

          <div class="expertise-section">
            <div class="section-header">
              <span class="section-number">06</span>
              <h4>Programming & Automation</h4>
            </div>
            <div class="section-content">
              <div class="tech-line">
                <span class="tech-label">Languages:</span>
                <span class="tech-value">Go, Python, Bash, Rust</span>
              </div>
              <div class="tech-line">
                <span class="tech-label">Approach:</span>
                <span class="tech-value">Clean code, maintainable infrastructure tooling</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-content">
          <div class="career-timeline">
            <div class="timeline-header">
              <span class="timeline-title">// Career Journey</span>
            </div>
            <div class="timeline-track">
              <div class="timeline-item">
                <div class="timeline-year">2013</div>
                <div class="timeline-role">QA Engineer</div>
                <div class="timeline-company">Raiffeisen Bank, VTB Bank</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-role">DevOps Team Lead</div>
                <div class="timeline-company">Mail.ru Group</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">2022</div>
                <div class="timeline-role">Lead DevOps</div>
                <div class="timeline-company">Ozon</div>
              </div>
              <div class="timeline-item current">
                <div class="timeline-year">2023+</div>
                <div class="timeline-role">Senior SRE Engineer</div>
                <div class="timeline-company">Aqua Security, Israel</div>
              </div>
            </div>
          </div>

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
  display: flex;
  justify-content: center;
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
  
  .expertise-list {
    flex: 1;
    
    .expertise-section {
      border-bottom: 1px solid $color-border-main;
      padding: 2rem 0;
      
      &:last-child {
        border-bottom: none;
      }
      
      .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        
        .section-number {
          background: $color-text-main;
          color: $color-text-contrast;

          padding: 0.3rem 0.8rem;
          margin-right: 1.5rem;
          border-radius: 2px;
          font-size: 0.85rem;
          font-weight: 600;
          min-width: 3rem;
          text-align: center;
        }
        
        h4 {
          color: $color-text-main;
        }
      }
      
      .section-content {
        margin-left: 4.5rem;
        
        @media (max-width: 768px) {
          margin-left: 0;
        }
        
        .tech-line {
          margin-bottom: $text-size-xsm;
          display: flex;
          
          @media (max-width: 768px) {
            flex-direction: column;
            gap: 0.3rem;
          }
          
          .tech-label {
            font-size: $text-size-sm;
            color: $color-text-accent;

            min-width: 100px;
            font-weight: 700;
          }
          
          .tech-value {
            color: $color-text-main;
            font-weight: 400;
          }
        }
      }
    }
  }
  
  .sidebar-content {
    flex: 0 0 360px;
    position: sticky;
    height: fit-content;
    
    @media (max-width: 1200px) {
      flex: 0 0 300px;
    }
    
    @media (max-width: 968px) {
      flex: none;
      position: static;
    }
    
    .career-timeline,
    .problem-solutions {
      margin-bottom: 2rem;
      padding: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .timeline-header,
    .solutions-header {
      margin-bottom: 1.5rem;
      
      .timeline-title,
      .solutions-title {
        font-size: $text-size-sm;
        color: $color-text-secondary;
      }
    }
    
    .timeline-track {
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: 2.5rem;
        top: 0.5rem;
        bottom: 0;
        width: 2px;
        background: #b3b3b3;
      }
      
      .timeline-item {
        position: relative;
        margin-bottom: 1.5rem;
        padding-left: 4rem;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        &::before {
          content: '';

          position: absolute;
          left: 2.2rem;
          top: 0.3rem;
          width: 10px;
          height: 10px;
          background: $color-gray;
          border-radius: 50%;
          border: 2px solid $color-white;
        }
        
        &.current::before {
          background: $color-accent;
        }
        
        .timeline-year {
          color: $color-text-secondary;
          font-size: $text-size-xsm;

          font-weight: 600;
        }
        
        .timeline-role {
          font-size: $text-size-sm;
          color: $color-text-main;
          
          font-weight: 600;
          margin: 0.2rem 0;
        }
        
        .timeline-company {
          font-size: $text-size-xsm;
          color: $color-text-secondary;
        }
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