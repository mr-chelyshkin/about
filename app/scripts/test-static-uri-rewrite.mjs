import { readFile } from 'node:fs/promises'
import vm from 'node:vm'

const source = await readFile(
  new URL('../../tf/functions/static-uri-rewrite.js', import.meta.url),
  'utf8',
)
const handler = vm.runInNewContext(`${source}\nhandler`)

const cases = [
  ['/', '/index.html'],
  ['/styleguide', '/styleguide/index.html'],
  ['/styleguide/', '/styleguide/index.html'],
  ['/assets/site.js', '/assets/site.js'],
  ['/favicon.svg', '/favicon.svg'],
  ['/robots.txt', '/robots.txt'],
]

for (const [uri, expected] of cases) {
  const request = handler({ request: { uri } })
  if (request.uri !== expected) {
    throw new Error(`Expected ${uri} to resolve to ${expected}, received ${request.uri}`)
  }
}

console.log(`Validated ${cases.length} static route rewrites`)
