import siteContent from './site.json'

export { siteContent }
export type SiteContent = typeof siteContent
export type ContentPage = SiteContent['pages']['content']
