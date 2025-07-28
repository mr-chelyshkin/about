<script setup lang="ts"/>

<template>
  <div class="container">
  <div class="hero" data-block-title="WELCOME" data-block-number="01">
    <div class="hero__background_image">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Background Image" />
    </div>
    <div class="hero__content">
      <h1>Igor Chelyshkin</h1>
      <h2>Platform Engineer & Infrastructure Architect</h2>
      <p>
        Hello, I'm a platform engineer with 10+ years of expertise delivering scalable, secure, and efficient cloud-native infrastructure. I turn complex DevOps challenges into clear, optimised and actionable solutions.  
        <br/><br/>
        <span class="tech-stack">
          <span class="tech-item">Go</span>
          <span class="tech-item">Python</span>
          <span class="tech-item">Linux</span>
          <span class="tech-item">K8S</span>
          <span class="tech-item">AWS</span>
          <span class="tech-item">IaC</span>
          <span class="tech-item">WEB</span>
          <span class="tech-item">Cyber Security</span>
          <span class="tech-item">CI/CD</span>
        </span>
      </p>
      <br></br>
      <div>
        Let's build infrastructure you can trust.
      </div>
      <h3>Links:</h3>
      <div class="hero__links">
        <a href="https://www.linkedin.com/in/mr-chelyshkin/" target="_blank">LinkedIn</a>
        <a href="https://github.com/mr-chelyshkin" target="_blank">GitHub</a>
        <a href="mailto:igor.chelyshkin@madpixels.io">Email</a>
        <a href="https://t.me/mr_chelyshkin" target="_blank">Tg</a>
        <a href="/resume.pdf" target="_blank">CV</a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.hero {
  height: 100vh;

  &__background_image {
    position: absolute;
    overflow: hidden;
    right: 0px;
    top: 0px;
    width: 45%;
    height: 100vh;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
 
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: pulse 18s ease-in-out infinite;
    }

    @media (max-width: 979px) {
      display: none;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: self-start;
    height: 100%;
    width: 55%;

    @media (max-width: 979px) {
      width: 100%;
    }

    h2 {
      padding-bottom: 3rem;
    }

    h3 {
      padding-top: 3rem;
      font-size: 1.4rem;
    }
  }

  &__links {
    display: flex;
    gap: 2rem;
    margin-top: .5rem;
   
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tech-item {
    background: $color-text-main;
    color: $color-text-contrast;
    font-size: $text-size-sm;
    display: inline-block;
    padding: 0.3rem 0.8rem;
    letter-spacing: 0.3px;
    border-radius: 2px;
    font-weight: 500;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>