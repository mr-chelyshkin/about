import { access, readFile, stat } from 'node:fs/promises'

import siteContent from '../src/contents/site.json' with { type: 'json' }

const requiredFiles = [
  'dist/index.html',
  'dist/styleguide/index.html',
  'dist/404.html',
  'dist/favicon.svg',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/social/igor-chelyshkin-preview.png',
]

for (const file of requiredFiles) {
  await access(new URL(`../${file}`, import.meta.url))
}

const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const styleguide = await readFile(new URL('../dist/styleguide/index.html', import.meta.url), 'utf8')
const socialImage = await stat(
  new URL('../dist/social/igor-chelyshkin-preview.png', import.meta.url),
)

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

for (const [name, html] of [
  ['home', home],
  ['styleguide', styleguide],
]) {
  assert(!/%[A-Z_]+%/.test(html), `${name} contains an unresolved metadata placeholder`)
  assert(html.includes(siteContent.meta.image), `${name} is missing the social image URL`)
}

assert(home.includes(siteContent.meta.url), 'Home output is missing its canonical URL')
assert(home.includes(siteContent.meta.title), 'Home output is missing its page title')
assert(
  styleguide.includes(siteContent.meta.styleguide.url),
  'Style guide output is missing its canonical URL',
)
assert(
  styleguide.includes(siteContent.meta.styleguide.title),
  'Style guide output is missing its page title',
)
assert(socialImage.size > 0, 'Social preview image is empty')

console.log(`Validated ${requiredFiles.length} production build artifacts`)
