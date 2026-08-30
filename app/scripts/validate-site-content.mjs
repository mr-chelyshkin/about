import { access, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const appRoot = fileURLToPath(new URL('..', import.meta.url))
const siteContent = JSON.parse(await readFile(new URL('../src/contents/site.json', import.meta.url), 'utf8'))

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function assertHttps(value, label) {
  const url = new URL(value)
  assert(url.protocol === 'https:', `${label} must use HTTPS`)
  return url
}

function assertInternalOrHttps(value, label) {
  if (value.startsWith('/')) return
  assertHttps(value, label)
}

function assertUnique(items, key, label) {
  const values = items.map((item) => item[key])
  assert(new Set(values).size === values.length, `${label} values must be unique`)
}

const canonicalUrl = assertHttps(siteContent.meta.url, 'meta.url')
const styleguideUrl = assertHttps(siteContent.meta.styleguide.url, 'meta.styleguide.url')
const socialImageUrl = assertHttps(siteContent.meta.image, 'meta.image')

assert(canonicalUrl.origin === styleguideUrl.origin, 'Page canonical URLs must share one origin')
assert(canonicalUrl.origin === socialImageUrl.origin, 'Social image must use the canonical origin')
assert(siteContent.person.name.length > 0, 'person.name is required')
assert(siteContent.person.role.length > 0, 'person.role is required')
assert(siteContent.hero.title.length > 0, 'hero.title is required')
assert(siteContent.navigation.length > 0, 'At least one navigation item is required')

for (const [name, value] of Object.entries(siteContent.links)) {
  assertInternalOrHttps(value, `links.${name}`)
}

for (const [index, item] of siteContent.navigation.entries()) {
  assertInternalOrHttps(item.href, `navigation[${index}].href`)
}

for (const [index, item] of siteContent.openSource.items.entries()) {
  assertHttps(item.url, `openSource.items[${index}].url`)
}

assertUnique(siteContent.services.items, 'number', 'services.items.number')
assertUnique(siteContent.work.items, 'number', 'work.items.number')
assertUnique(siteContent.openSource.items, 'name', 'openSource.items.name')
assertUnique(siteContent.about.timeline, 'year', 'about.timeline.year')

const socialImagePath = fileURLToPath(
  new URL(`../public${socialImageUrl.pathname}`, import.meta.url),
)

await access(socialImagePath)
await access(new URL('../styleguide/index.html', import.meta.url))
await access(new URL('../public/404.html', import.meta.url))

const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8')
const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8')

assert(robots.includes(`${canonicalUrl.origin}/sitemap.xml`), 'robots.txt must reference sitemap.xml')
assert(sitemap.includes(siteContent.meta.url), 'sitemap.xml must include the home canonical URL')
assert(sitemap.includes(siteContent.meta.styleguide.url), 'sitemap.xml must include the style guide URL')

console.log(`Validated site content in ${appRoot}`)
