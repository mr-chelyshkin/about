import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'

import siteContent from './src/contents/site.json'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function serializeJsonForHtml(value: unknown) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteContent.person.name,
  url: siteContent.meta.url,
  jobTitle: siteContent.person.role,
  sameAs: [siteContent.links.github, siteContent.links.linkedin],
}

function siteContentPlugin(): Plugin {
  return {
    name: 'site-content',
    transformIndexHtml: {
      order: 'pre',
      handler(html, context) {
        const isStyleguide = context.path.startsWith('/styleguide/')
        const page = isStyleguide
          ? siteContent.meta.styleguide
          : {
              url: siteContent.meta.url,
              title: siteContent.meta.title,
              description: siteContent.meta.description,
            }

      return html
        .replaceAll('%PAGE_URL%', escapeHtml(page.url))
        .replaceAll('%SITE_NAME%', escapeHtml(siteContent.person.name))
        .replaceAll('%PAGE_TITLE%', escapeHtml(page.title))
        .replaceAll('%PAGE_DESCRIPTION%', escapeHtml(page.description))
        .replaceAll('%SITE_IMAGE%', escapeHtml(siteContent.meta.image))
        .replaceAll('%SITE_IMAGE_ALT%', escapeHtml(siteContent.meta.imageAlt))
        .replaceAll('%PERSON_STRUCTURED_DATA%', serializeJsonForHtml(personStructuredData))
      },
    },
  }
}

const appRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [siteContentPlugin(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(appRoot, 'index.html'),
        styleguide: resolve(appRoot, 'styleguide/index.html'),
      },
    },
  },
})
