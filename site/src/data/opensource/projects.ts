export interface ProjectItem {
  header: { key: string; value: string }

  href?: string
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'goldmark-tgmd',
      value: 'Go extension for goldmark: converts Markdown to Telegram MarkdownV2 format',
    },
    href: 'https://github.com/Mad-Pixels/goldmark-tgmd',
  },
  {
    header: {
      key: 'go-dyno',
      value: 'Schema-driven Go code generator for type-safe DynamoDB operations from JSON schemas',
    },
    href: 'https://github.com/Mad-Pixels/go-dyno',
  },
  {
    header: {
      key: 'github-workflows',
      value: 'Collection of reusable GitHub Actions workflows and actions for CI/CD automation',
    },
    href: 'https://github.com/Mad-Pixels/github-workflows',
  },
  {
    header: {
      key: 'applingo-ios',
      value: 'iOS flash card game for learning foreign words through interactive flashcards and mini-games',
    },
    href: 'https://github.com/Mad-Pixels/applingo-ios',
  },
]
