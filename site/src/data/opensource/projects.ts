export interface ProjectItem {
  header: { key: string; value: string }

  href?: string
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'Issue',
      value:
        'Lack of user-friendly tools for managing Wi-Fi on headless Linux devices (e.g. Raspberry Pi)',
    },

    href: 'https://github.com/Mad-Pixels/wf',
  },
  {
    header: {
      key: 'Issue',
      value: 'No convenient solution to learn foreign languages using personal vocabulary lists',
    },

    href: 'https://github.com/Mad-Pixels/applingo-ios',
  },
  {
    header: {
      key: 'Issue',
      value: 'Manual effort required to convert Markdown documents for Telegram channels and bots',
    },

    href: 'https://github.com/Mad-Pixels/goldmark-tgmd',
  },
  {
    header: {
      key: 'Issue',
      value: 'Tedious manual coding required for DynamoDB schema integrations in Go projects',
    },

    href: 'https://github.com/Mad-Pixels/go-dyno',
  },
  {
    header: {
      key: 'Issue',
      value:
        'Complex workflows for publishing articles and content simultaneously to multiple platforms',
    },

    href: 'https://github.com/Mad-Pixels/Postify',
  },
]
