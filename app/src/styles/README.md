# Styles

`main.scss` loads the cascade layers declared in `_layers.scss`:

1. `generic/` — reset, focus outline and document defaults.
2. `elements/` — typography, links and form controls.
3. `objects/` — page layout and container.
4. `components/` — header, navigation, footer, image and link behavior.
5. `views/` — hero composition and its responsive rules.

Each layer exposes its partials through `_index.scss`. `settings/` holds Sass
values; `themes/_site.scss` exposes the used CSS custom properties. `tools/`
contains shared mixins and emits no standalone CSS.

Vue files own markup and behavior. Their selectors and media queries live here.
The current page has one hero, shared chrome and no additional content sections.

## Hero

`views/_content-view.scss` contains the photo, oversized headline, vertical
discipline label and static signal effects. The SVG color filter is defined by
`ContentHero.vue`. A masked copy of the photo keeps the face clear above the
color split and scanlines; the contrast gradient sits above both image layers.

The face mask uses the source photo's dimensions. Its `cover` sizing and
`50% 40%` position match the image crop.

## Motion and interaction

`components/_animations.scss` contains the two active glitch effects:
`digital-corruption` for the discipline label and `matrix-split` for the menu
link. They run once on hover and respect `prefers-reduced-motion`.

The navigation keeps the dark panel and small mono link from `v0.0.1`.
Strike-through is a hover effect; the active route uses a heavier font weight.
