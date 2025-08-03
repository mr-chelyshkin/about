export interface ProjectItem {
  header: { key: string; value: string }

  href?: string
}

export const projects: ProjectItem[] = [
  {
    header: {
      key: 'goldmark-tgmd',
      value: 'Goldmark extension: Markdown → Telegram MarkdownV2 converter',
    },
    href: 'https://github.com/Mad-Pixels/goldmark-tgmd',
  },
  {
    header: {
      key: 'go-dyno',
      value: 'Schema-driven Go code generator for DynamoDB from JSON schemas',
    },
    href: 'https://github.com/Mad-Pixels/go-dyno',
  },
  {
    header: {
      key: 'github-workflows',
      value: 'Reusable GitHub Actions workflows for CI/CD automation',
    },
    href: 'https://github.com/Mad-Pixels/github-workflows',
  },
  {
    header: {
      key: 'applingo-ios',
      value: 'iOS flashcard app with mini-games for learning foreign words',
    },
    href: 'https://github.com/Mad-Pixels/applingo-ios',
  },
]
