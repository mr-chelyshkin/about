<script setup lang="ts">
import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'

const colors = [
  { token: '--color-void', name: 'Void', value: '#07090A', className: 'void' },
  { token: '--color-paper', name: 'Paper', value: '#F3F0E8', className: 'paper' },
  { token: '--color-acid', name: 'Acid', value: '#D8FF3E', className: 'acid' },
  { token: '--color-cyan', name: 'Cyan split', value: '#23D9F5', className: 'cyan' },
  { token: '--color-magenta', name: 'Magenta split', value: '#FF3F8F', className: 'magenta' },
]

const spacing = ['04', '08', '12', '16', '24', '32', '48', '64', '96']
</script>

<template>
  <main id="main-content" class="styleguide-view">
    <section class="styleguide-hero o-container" aria-labelledby="styleguide-title">
      <p class="c-eyebrow">{{ siteContent.styleguide.eyebrow }}</p>
      <h1
        id="styleguide-title"
        class="styleguide-hero__title c-glitch-text"
        :data-text="siteContent.styleguide.title"
      >
        {{ siteContent.styleguide.title }}
      </h1>
      <p>{{ siteContent.styleguide.description }}</p>
    </section>

    <section class="styleguide-section" aria-labelledby="principles-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="01 // Principles"
          title="The rules before the effects."
          title-id="principles-title"
          compact
        />
        <div class="principles-grid">
          <article
            v-for="principle in siteContent.styleguide.principles"
            :key="principle.number"
            class="principle-card"
          >
            <span>{{ principle.number }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="styleguide-section" aria-labelledby="color-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="02 // Color"
          title="One signal. Two controlled errors."
          title-id="color-title"
          compact
        />
        <div class="color-grid">
          <article v-for="color in colors" :key="color.token" class="color-card">
            <div :class="['color-card__swatch', `color-card__swatch--${color.className}`]"></div>
            <div>
              <strong>{{ color.name }}</strong>
              <code>{{ color.token }}</code>
              <span>{{ color.value }}</span>
            </div>
          </article>
        </div>
        <p class="styleguide-note">
          Acid is the action signal. Cyan and magenta exist only as chromatic displacement; they do not compete for primary actions.
        </p>
      </div>
    </section>

    <section class="styleguide-section" aria-labelledby="type-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="03 // Typography"
          title="Editorial scale. Terminal precision."
          title-id="type-title"
          compact
        />
        <div class="type-specimens">
          <article class="type-specimen type-specimen--display">
            <span>Space Grotesk / Display 01</span>
            <p>Hard systems.<br />Clear interfaces.</p>
          </article>
          <article class="type-specimen type-specimen--body">
            <span>Space Grotesk / Body</span>
            <p>Large headlines carry the argument. Body copy explains the contract without becoming a wall of text.</p>
          </article>
          <article class="type-specimen type-specimen--mono">
            <span>IBM Plex Mono / Signal</span>
            <p>MODE=BUILD // STATE=EXPLICIT // NOISE=CONTROLLED</p>
          </article>
        </div>
      </div>
    </section>

    <section class="styleguide-section" aria-labelledby="grid-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="04 // Grid & spacing"
          title="The structure must survive the damage."
          title-id="grid-title"
          compact
        />
        <div class="spacing-row" aria-label="Spacing scale in pixels">
          <div v-for="value in spacing" :key="value">
            <span>{{ value }}</span><i :style="{ width: `${Number(value)}px` }"></i>
          </div>
        </div>
        <div class="grid-demo" aria-hidden="true">
          <span v-for="index in 12" :key="index">{{ String(index).padStart(2, '0') }}</span>
        </div>
      </div>
    </section>

    <section class="styleguide-section" aria-labelledby="components-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="05 // Components"
          title="Square edges. Visible states."
          title-id="components-title"
          compact
        />
        <div class="component-demo">
          <div class="component-demo__buttons">
            <a class="c-button c-button--primary" href="#components-title">Primary signal</a>
            <a class="c-button c-button--ghost" href="#components-title">Secondary action</a>
          </div>
          <article class="service-card">
            <span class="service-card__number">01</span>
            <h3>System surface</h3>
            <p>One-pixel rules, no decorative radius, and enough negative space to make the content legible.</p>
          </article>
          <div class="component-demo__status">
            <span class="c-badge c-badge--live">Operational</span>
            <span class="c-badge">Documented</span>
            <span class="c-badge c-badge--danger">Blocked</span>
          </div>
        </div>
      </div>
    </section>

    <section class="styleguide-section styleguide-effects" aria-labelledby="effects-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="06 // Glitch & motion"
          title="Brief interruption, immediate recovery."
          title-id="effects-title"
          compact
        />
        <div class="effects-grid">
          <article class="effect-card">
            <span>LEVEL 01 // CHROMATIC SPLIT</span>
            <strong class="c-glitch-text" data-text="SIGNAL">SIGNAL</strong>
            <p>Use on one headline per viewport. Trigger on hover or focus.</p>
          </article>
          <article class="effect-card c-signal-frame">
            <span>LEVEL 02 // FRAME DROP</span>
            <strong>CONTROL</strong>
            <p>A single two-pixel jump marks live or changing system state.</p>
          </article>
          <article class="effect-card effect-card--slice">
            <span>LEVEL 03 // DATA SLICE</span>
            <strong>RUNTIME</strong>
            <p>Reserve sliced blocks for hero or transition surfaces. Never apply to body copy.</p>
          </article>
        </div>
        <div class="motion-contract">
          <p><strong>140ms</strong><span>interaction response</span></p>
          <p><strong>260ms</strong><span>layout transition</span></p>
          <p><strong>0ms</strong><span>when reduced motion is requested</span></p>
        </div>
      </div>
    </section>

    <section class="styleguide-section" aria-labelledby="usage-title">
      <div class="o-container">
        <SectionIntro
          eyebrow="07 // Usage"
          title="Break the image, not the interface."
          title-id="usage-title"
          compact
        />
        <div class="usage-grid">
          <article>
            <h3>Do</h3>
            <ul>
              <li>Keep essential text readable without the effect.</li>
              <li>Attach distortion to hierarchy or interaction.</li>
              <li>Retain keyboard focus and high contrast.</li>
              <li>Provide a reduced-motion path.</li>
            </ul>
          </article>
          <article>
            <h3>Do not</h3>
            <ul>
              <li>Animate every surface at the same time.</li>
              <li>Use color split for paragraph text.</li>
              <li>Hide controls behind visual noise.</li>
              <li>Make corruption look like an application failure.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
