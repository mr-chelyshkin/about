<script setup lang="ts">
import { ref } from 'vue'

import BaseContainer from '@/components/layout/BaseContainer.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseChain from '@/components/ui/BaseChain.vue'
import BaseDigitalImage from '@/components/ui/BaseDigitalImage.vue'
import BaseImage from '@/components/ui/BaseImage.vue'
import BaseKeyValueList from '@/components/ui/BaseKeyValueList.vue'
import BaseLink from '@/components/ui/BaseLink.vue'
import BaseListItem from '@/components/ui/BaseListItem.vue'
import BaseMatrixLink from '@/components/ui/BaseMatrixLink.vue'
import BaseNote from '@/components/ui/BaseNote.vue'
import BaseTextCard from '@/components/ui/BaseTextCard.vue'
import BaseTextNote from '@/components/ui/BaseTextNote.vue'
import IconCommunity from '@/components/ui/IconCommunity.vue'
import IconDocumentation from '@/components/ui/IconDocumentation.vue'
import IconEcosystem from '@/components/ui/IconEcosystem.vue'
import IconSupport from '@/components/ui/IconSupport.vue'
import IconTooling from '@/components/ui/IconTooling.vue'
import BaseView from '@/components/view/BaseView.vue'
import ContentAchievementTimeline from '@/components/view/ContentAchievementTimeline.vue'
import ContentCareerTimeline from '@/components/view/ContentCareerTimeline.vue'
import ViewSection from '@/components/view/ViewSection.vue'

// Temporary preview: keep demo data, controls, and layout in this file.
const sections = [
  { id: 'typography', title: 'Typography & colors' },
  { id: 'cards', title: 'Cards & notes' },
  { id: 'lists', title: 'Lists & timelines' },
  { id: 'links', title: 'Links & controls' },
  { id: 'media', title: 'Images & icons' },
]
const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const colors = [
  { name: 'Canvas', token: '--color-background-main' },
  { name: 'Ink', token: '--color-background-contrast' },
  { name: 'Lilac', token: '--color-lilac' },
  { name: 'Cyan', token: '--color-cyan' },
  { name: 'Pink', token: '--color-pink' },
  { name: 'Secondary', token: '--color-text-secondary' },
]
const fullCard = {
  header: { key: 'Sample project', value: 'A title with enough text to check wrapping.' },
  body: { key: 'Description', value: 'Demo content for checking spacing, hierarchy, and hover.' },
  footer: { key: 'Result', value: 'A short secondary line at the bottom of the card.' },
}
const noteParagraphs = [
  'This is the first paragraph of a sample note.',
  'The second paragraph makes the vertical rhythm and content spacing visible.',
]
const keyValues = [
  { key: 'Short', value: 'A compact value.' },
  { key: 'Longer label', value: 'A longer value that wraps onto another line on a narrow screen.' },
]
const chain = [
  { title: 'First step', text: 'A short description.' },
  { title: 'Second step', text: 'A longer description to compare marker alignment across rows.' },
  { title: 'Last step', text: 'The end of the chain.' },
]
const achievements = [
  { area: 'Sample area', result: 'Example result', description: 'A short supporting description.' },
  {
    area: 'Another area',
    result: 'A longer example result',
    description: 'More text to check how the heading, result, and description fit together.',
  },
]
const career = [
  { year: '2022', role: 'Sample role', company: 'Demo organization', current: false },
  {
    year: '2024',
    role: 'Another sample role',
    company: 'Another demo organization',
    current: false,
  },
  { year: 'Now', role: 'Current sample role', company: 'Current demo organization', current: true },
]
const icons = [
  { name: 'IconCommunity', component: IconCommunity },
  { name: 'IconDocumentation', component: IconDocumentation },
  { name: 'IconEcosystem', component: IconEcosystem },
  { name: 'IconSupport', component: IconSupport },
  { name: 'IconTooling', component: IconTooling },
]
const imageEffects = ref(false)
const fieldValue = ref('Preview value')
const selectedOption = ref('first')
const checked = ref(true)
const clicks = ref(0)
</script>

<template>
  <BaseView class="styleguide">
    <BaseContainer class="styleguide__intro" data-block-title="STYLEGUIDE" data-block-number="UI">
      <p class="styleguide__label">Styleguide / Study 01</p>
      <h1>Swiss Glitch<span class="styleguide__period">.</span></h1>
      <p class="styleguide__description">A clear structure. A little interference.</p>
      <nav aria-label="Styleguide sections" class="styleguide__index">
        <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
          {{ section.title }}
        </a>
      </nav>
    </BaseContainer>

    <BaseContainer
      class="styleguide__feature-wrapper"
      data-block-title="STYLEGUIDE"
      data-block-number="UI"
    >
      <div class="styleguide__feature">
        <p class="styleguide__label">01 / Highlighted surface</p>
        <h2>Order.<br /><span>Interrupted.</span></h2>
        <div class="styleguide__feature-caption">
          <span>Soft color. Hard edges.</span>
          <span>Cyan / Lilac / Pink</span>
        </div>
      </div>
    </BaseContainer>

    <ViewSection id="typography" title="Typography & colors" eyebrow="STYLEGUIDE" number="01">
      <div class="styleguide__body">
        <div class="styleguide__grid">
          <div v-for="tag in headingTags" :key="tag" class="styleguide__sample">
            <p class="styleguide__label">{{ tag }}</p>
            <component :is="tag">Aa Bb 0123</component>
          </div>
        </div>
        <div class="styleguide__sample">
          <p class="styleguide__label">Body / strong / emphasis / small / code</p>
          <p>
            The quick brown fox jumps over the lazy dog. <strong>Strong text</strong>,
            <em>emphasized text</em>, <small>small text</small>, and <code>inline code</code>.
          </p>
          <p>A second paragraph for comparing line height and paragraph spacing.</p>
        </div>
        <div class="styleguide__grid">
          <figure v-for="color in colors" :key="color.token" class="styleguide__sample">
            <div
              class="styleguide__swatch"
              :style="{ backgroundColor: `var(${color.token})` }"
              aria-hidden="true"
            ></div>
            <figcaption>
              {{ color.name }} <code>{{ color.token }}</code>
            </figcaption>
          </figure>
        </div>
      </div>
    </ViewSection>

    <ViewSection id="cards" title="Cards & notes" eyebrow="STYLEGUIDE" number="02">
      <div class="styleguide__body">
        <div class="styleguide__grid">
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseCard / slot</p>
            <BaseCard>
              <h4>Plain card</h4>
              <p>A card with custom content and no destination.</p>
            </BaseCard>
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseTextCard / header only</p>
            <BaseTextCard :header="fullCard.header" />
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseTextCard / accent / linked</p>
            <BaseTextCard v-bind="fullCard" href="#links" class="c-card--accent" />
          </div>
        </div>
        <div class="styleguide__grid">
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseNote / slot</p>
            <BaseNote header="Sample note">
              <p>A note containing <strong>custom slot content</strong>.</p>
            </BaseNote>
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseTextNote / accent / paragraphs</p>
            <BaseTextNote header="Text note" :content="noteParagraphs" class="c-note--accent" />
          </div>
        </div>
      </div>
    </ViewSection>

    <ViewSection id="lists" title="Lists & timelines" eyebrow="STYLEGUIDE" number="03">
      <div class="styleguide__body">
        <div class="styleguide__grid">
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseListItem / slot</p>
            <div>
              <BaseListItem number="01" title="First item"
                ><p>A short description.</p></BaseListItem
              >
              <BaseListItem number="02" title="Second item"
                ><p>Another description.</p></BaseListItem
              >
            </div>
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseKeyValueList</p>
            <BaseKeyValueList number="03" title="Sample properties" :data="keyValues" />
          </div>
        </div>
        <div class="styleguide__grid">
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseChain / custom rows</p>
            <BaseChain :items="chain">
              <template #default="{ item }">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
              </template>
            </BaseChain>
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">ContentAchievementTimeline</p>
            <ContentAchievementTimeline :items="achievements" />
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">ContentCareerTimeline / current state</p>
            <ContentCareerTimeline title="// Sample timeline" :items="career" />
          </div>
        </div>
      </div>
    </ViewSection>

    <ViewSection id="links" title="Links & controls" eyebrow="STYLEGUIDE" number="04">
      <div class="styleguide__body">
        <div class="styleguide__sample">
          <p class="styleguide__label">Native link / hover / keyboard focus</p>
          <a href="#typography">Back to typography</a>
        </div>
        <div class="styleguide__grid">
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseLink / active</p>
            <div class="styleguide__contrast"><BaseLink to="/styleguide">Styleguide</BaseLink></div>
          </div>
          <div class="styleguide__sample">
            <p class="styleguide__label">BaseMatrixLink / inactive / hover</p>
            <div class="styleguide__contrast"><BaseMatrixLink to="/">Home</BaseMatrixLink></div>
          </div>
        </div>
        <div class="styleguide__sample">
          <p class="styleguide__label">Controls / default / focus / disabled</p>
          <div class="styleguide__controls">
            <label>Text input <input v-model="fieldValue" type="text" /></label>
            <label>Disabled input <input value="Disabled value" type="text" disabled /></label>
            <label>
              Select
              <select v-model="selectedOption">
                <option value="first">First option</option>
                <option value="second">Second option</option>
              </select>
            </label>
            <label><input v-model="checked" type="checkbox" /> Checkbox</label>
            <div class="styleguide__actions">
              <button type="button" @click="clicks += 1">Click preview</button>
              <button type="button" disabled>Disabled button</button>
              <output aria-live="polite">Clicks: {{ clicks }}</output>
            </div>
          </div>
        </div>
      </div>
    </ViewSection>

    <ViewSection id="media" title="Images & icons" eyebrow="STYLEGUIDE" number="05">
      <div class="styleguide__body">
        <div class="styleguide__grid">
          <figure class="styleguide__sample">
            <figcaption class="styleguide__label">BaseImage / responsive</figcaption>
            <BaseImage
              src="hero"
              alt="Portrait image preview"
              :width="400"
              class="styleguide__image"
            />
          </figure>
          <figure class="styleguide__sample">
            <figcaption class="styleguide__label">BaseDigitalImage / pulse & glitch</figcaption>
            <div class="styleguide__image-frame">
              <BaseDigitalImage
                :key="String(imageEffects)"
                src="hero"
                alt="Portrait effect preview"
                :width="400"
                :pulse="imageEffects"
                :glitch="imageEffects"
              />
            </div>
            <label><input v-model="imageEffects" type="checkbox" /> Enable image effects</label>
          </figure>
        </div>
        <div class="styleguide__icons">
          <figure v-for="icon in icons" :key="icon.name" class="styleguide__sample">
            <component :is="icon.component" />
            <figcaption>{{ icon.name }}</figcaption>
          </figure>
        </div>
      </div>
    </ViewSection>
  </BaseView>
</template>

<style scoped lang="scss">
@use '@/styles/tools';

.styleguide {
  padding-top: var(--header-height);

  > [id] {
    scroll-margin-top: calc(var(--header-height) + 1rem);
  }
}

.styleguide__intro {
  display: grid;
  gap: 1.5rem;
  padding-top: clamp(3rem, 6vw, 6rem);
  padding-bottom: 3rem;
}

.styleguide__period {
  text-shadow:
    -3px 0 var(--color-cyan),
    3px 0 var(--color-pink);
}

.styleguide__description {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  letter-spacing: -0.02em;
}

.styleguide__feature-wrapper {
  padding-bottom: clamp(3rem, 6vw, 6rem);
}

.styleguide__feature {
  @include tools.accent-surface;
  display: grid;
  gap: 3rem;
  padding: clamp(1.5rem, 4vw, 4rem);
  border: 1px solid var(--color-border-main);
  position: relative;

  &::after {
    content: '+';
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-family: var(--font-mono);
    font-size: 2rem;
  }

  .styleguide__label {
    color: var(--color-text-main);
  }

  h2 {
    font-size: clamp(2.75rem, 7.5vw, 8rem);
  }
  h2 span {
    display: inline-block;
    text-shadow:
      -3px 0 var(--color-cyan),
      3px 1px var(--color-pink);
    transform: skewX(-6deg);
  }
}

.styleguide__feature-caption {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-main);
  font-family: var(--font-mono);
  font-size: var(--text-size-xsm);
  text-transform: uppercase;
}

.styleguide__label {
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: var(--text-size-xsm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.styleguide__index {
  font-family: var(--font-mono);
  font-size: var(--text-size-xsm);
}

.styleguide__index,
.styleguide__actions,
.styleguide__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.styleguide__body {
  display: grid;
  gap: 3rem;
  padding: 3rem 0;
}

.styleguide__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  align-items: start;
  gap: 2rem;
}

.styleguide__sample {
  display: grid;
  gap: 1rem;
  min-width: 0;

  figcaption {
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: var(--text-size-xsm);
  }
}

.styleguide__swatch {
  height: 6rem;
  border: 1px solid var(--color-border-main);
}

.styleguide__contrast {
  padding: 1rem 2rem;
  background: var(--color-background-contrast);
}

.styleguide__controls {
  display: grid;
  gap: 1rem;

  label {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  input,
  select {
    max-width: 100%;
  }
}

.styleguide__icons {
  justify-content: space-between;
  gap: 2rem;
  .styleguide__sample {
    padding: 1.5rem 0;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
}

.styleguide__image {
  width: 100%;
  height: auto;
}

.styleguide__image-frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
</style>
