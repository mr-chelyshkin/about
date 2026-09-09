import siteContent from './site.json'

export { siteContent }
export type SiteContent = typeof siteContent
export type ContentPage = SiteContent['pages']['content']
export type CareerItem = ContentPage['expertise']['career'][number]
export type AchievementItem = ContentPage['solutions']['achievements'][number]
