# mr-chelyshkin.com

Igor Chelyshkin's personal website. Vue 3, TypeScript and Sass, built with Vite
and published to S3 behind CloudFront.

## Local development

With Node.js 22 and npm:

```sh
cd app
npm ci
npm run dev -- --host 127.0.0.1
```

Vite prints the local URL. The `predev` script generates responsive images before
starting the server.

To use the pinned container tooling, install Task 3.53.1 and Docker, then run from
the repository root:

```sh
task run/dev
```

This serves the site at `http://127.0.0.1:5173`. The Taskfile pins Node.js,
Terraform and AWS CLI images through shared Taskfiles.

## Checks and production build

From `app/`:

```sh
npm run lint
npm run build
```

The build generates images, checks TypeScript and writes the static site to
`app/dist/`. Lint does not modify files; use `npm run lint:fix` for automatic
fixes and `npm run format` for source formatting.

The container equivalent runs a clean dependency install, lint and build:

```sh
task ci/build
```

## Source structure

```text
app/
  public/                 Static metadata, favicon, social image and error page
  scripts/                Responsive image generation
  src/
    assets/               Original photo, generated WebP files and face mask
    components/
      chrome/             Header, menu and footer
      icons/              Shared icon geometry
      layout/             Container primitive
      ui/                 Reusable icons, images and link components
      view/               Page wrapper and hero
    composables/          Glitch timing and menu scroll lock
    contents/             Current site content and inferred content types
    layouts/              Shared page layout
    router/               Route registration
    styles/               Sass layers, settings and component styles
    types/                UI types
    views/                Home page composition
tf/                      S3 and CloudFront infrastructure
.github/workflows/        PR checks, manual checks and tag publication
```

`app/src/contents/site.json` contains the current visible content. The document
title and social metadata are in `app/index.html`; crawler files are in
`app/public/`.

`app/src/assets/images-source/hero.png` is the original photograph. The image
script generates 400, 800, 1200 and 1600 px WebP versions under
`app/src/assets/images/`. These generated files are ignored by Git and imported
through Vite, which adds content hashes to their production URLs.

The hero's split channels, scanlines and face mask are rendered in the page.
When replacing the photograph, update `app/src/assets/hero-face-mask.svg` to match
its new face position. The [styles guide](app/src/styles/README.md) describes the
CSS organization.

Shared objects belong in `components/ui/`; page and menu components compose them.
Each icon in `components/icons/` uses `BaseIcon` for size, color and accessibility.
`BaseExternalLink` owns the compact icon-and-label tile and its interaction states;
`SocialLinks` maps profile data to a wrapping group of tiles. The menu controls placement and
closing behavior. Keep reusable objects independent of menu state and site data.

## Publication

The `Tag publish` workflow calls the shared S3 release workflow on `v*` tags.
Terraform, AWS credentials and deployment variables remain part of that existing
workflow. A local build produces files only; it does not publish the site.
