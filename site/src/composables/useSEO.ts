export const useSEO = () => {
  const updateMeta = (meta: {
    title?: string
    description?: string
    keywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogUrl?: string
  }) => {
    if (meta.title) {
      document.title = meta.title
    }

    updateMetaTag('name', 'description', meta.description)
    updateMetaTag('name', 'keywords', meta.keywords)

    updateMetaTag('property', 'og:title', meta.ogTitle || meta.title)
    updateMetaTag('property', 'og:description', meta.ogDescription || meta.description)
    updateMetaTag('property', 'og:image', meta.ogImage)
    updateMetaTag('property', 'og:url', meta.ogUrl)
    updateMetaTag('property', 'og:type', 'website')

    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', meta.ogTitle || meta.title)
    updateMetaTag('name', 'twitter:description', meta.ogDescription || meta.description)
    updateMetaTag('name', 'twitter:image', meta.ogImage)
  }

  const updateMetaTag = (attrName: string, attrValue: string, content?: string) => {
    if (!content) return

    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
    if (element) {
      element.setAttribute('content', content)
    } else {
      element = document.createElement('meta')
      element.setAttribute(attrName, attrValue)
      element.setAttribute('content', content)
      document.head.appendChild(element)
    }
  }

  return { updateMeta }
}
