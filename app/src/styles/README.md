# Styles

`main.scss` loads the cascade layers declared in `_layers.scss`:

1. `generic/` — reset, focus outline and document defaults.
2. `elements/` — typography, links and form controls.
3. `objects/` — page layout and container.
4. `components/` — header, navigation, footer, image and link behavior.
5. `views/` — homepage section compositions and their responsive rules.

Each layer exposes its partials through `_index.scss`. `settings/` holds Sass
values; `themes/_site.scss` exposes the used CSS custom properties. `tools/`
contains shared mixins and emits no standalone CSS.

Vue files own markup and behavior. Their selectors and media queries live here.
The current page has a hero, a practice section and shared chrome.

## Hero

`views/_content-view.scss` contains the photo, oversized headline, vertical
discipline label and static signal effects. The SVG color filter is defined by
`ContentHero.vue`. A masked copy of the photo keeps the face clear above the
color split and scanlines; the contrast gradient sits above both image layers.

The face mask uses the source photo's dimensions. Its `cover` sizing and
`50% 40%` position match the image crop.

## Practice section

`ContentPractice.vue` follows the hero and receives its copy from `site.json`.
`views/_content-practice.scss` continues the hero's poster geometry: `--poster-rail`
and `--poster-gutter` come from `themes/_site.scss`, so the section's display type
starts on the hero headline's left edge and the right rail keeps the hero rail's
width and position, inverted to a dark surface. The vertical index and label use
the same hover glitch as the hero.

The lede and every layer share one `7fr / 5fr` split, which holds the secondary
column on a single vertical line down the section; hairline rules separate the
layers, and the layers read as a stack from what the team works with down to what
it runs on. Each headline line carries a `BaseSignalText` tear with its own cut and
offset, and hovering the headline drifts those slices in discrete steps. There are
no fixed heights, connector lines or scroll effects.

## Motion and interaction

`components/_animations.scss` contains the two active glitch effects:
`digital-corruption` for the vertical rail labels and `matrix-split` for the menu
link. They run once on hover and respect `prefers-reduced-motion`.

Both animate the standalone `translate` property instead of `transform`, so they
compose with an element's own `transform` rather than replacing it: a rotated label
keeps its rotation while it glitches. Keyframes meant to override a base transform,
such as the headline slice drift in the practice section, use `transform` on purpose.

The navigation keeps the dark panel and small mono link from `v0.0.1`.
Strike-through is a hover effect; the active route uses a heavier font weight.

## Reusable objects

Keep object styles in their own component partials. Page and menu selectors
control placement, not the icon geometry, typography or interaction states of
shared objects.

- `BaseSignalText` renders readable text with two decorative copies hidden from
  accessibility for local signal slices. It inherits typography and the hero's
  signal colors. `--signal-cut`, `--signal-cut-secondary` and `--signal-offset`
  control the slices; `--signal-surface` sets the background on another surface.
- `BaseIcon` owns the SVG frame and the shared `size`/`label` API. Named icons
  contain their paths and use `currentColor`. Without a label they are decorative.
- `BaseExternalLink` owns the compact tile, icon slot, label, border and hover/focus
  treatment. It inherits its text color; borders and hover backgrounds derive
  from that color for use on both light and dark surfaces.
- `SocialLinks` owns the wrapping horizontal list and its profile-to-icon mapping. It receives data
  through props and emits clicks; it does not control navigation state.

Reuse these components when the same objects appear elsewhere. Keep the
router-link and external-link contracts explicit; their appearance and behavior
are defined by their respective components.
