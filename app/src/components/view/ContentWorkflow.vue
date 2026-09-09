<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseNote from '@/components/ui/BaseNote.vue'
import BaseTextCard from '@/components/ui/BaseTextCard.vue'
import content from '@/contents/homepage.json'

const environment = ref<'local' | 'ci'>('local')
const context = computed(() =>
  environment.value === 'local'
    ? {
        name: 'Your local environment',
        command: 'task ci/build',
        description:
          'You invoke the project task from your checkout. The shared module runs the build in the selected container.',
        owner: 'Your checkout, local credentials, and local container runtime.',
      }
    : {
        name: 'Your CI runner',
        command: 'task --trusted-hosts raw.githubusercontent.com ci/build',
        description:
          'The CI job invokes the project task after checkout. The same shared module runs the build in the selected container.',
        owner: 'The CI job handles checkout, credentials, scheduling, and artifact upload.',
      },
)
const taskExample = `tasks:
  ci/build:
    desc: Build the application.
    cmds:
      - task: node:run
        vars:
          SCRIPT: build`
</script>

<template>
  <div class="content-workflow">
    <fieldset class="content-workflow__switch">
      <legend>{{ content.approach.demoLabel }}</legend>
      <label
        ><input v-model="environment" type="radio" value="local" name="environment" /> Local</label
      >
      <label
        ><input v-model="environment" type="radio" value="ci" name="environment" /> CI runner</label
      >
    </fieldset>
    <BaseNote header="Entry command">
      <div aria-live="polite" aria-atomic="true">
        <p>{{ context.name }}</p>
        <pre class="content-workflow__command"><code>{{ context.command }}</code></pre>
        <p>{{ context.description }}</p>
      </div>
    </BaseNote>
    <div class="content-view__solutions-prj-grid content-workflow__shared">
      <BaseNote header="Shared project task · Taskfile.yml excerpt">
        <pre class="content-workflow__source"><code>{{ taskExample }}</code></pre>
      </BaseNote>
      <BaseTextCard
        :header="{
          key: 'node:run',
          value: 'The shared module runs npm ci and npm run build in the selected container.',
        }"
        :body="{ key: 'In this environment', value: context.owner }"
        :footer="{ key: 'Execution boundary', value: content.approach.boundary }"
      />
    </div>
    <p>
      <small>{{ content.approach.demoNote }}</small>
    </p>
  </div>
</template>

<style scoped lang="scss">
.content-workflow {
  margin-top: 3rem;
}
.content-workflow__switch {
  border: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
  legend {
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: var(--text-size-xsm);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  label {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }
}
.content-workflow__command {
  margin-block: 1rem;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.content-workflow__source {
  overflow-x: auto;
}
.content-workflow__shared {
  margin-block: 2rem 1rem;
}
</style>
