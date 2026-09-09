# Style architecture

`main.scss` declares the cascade order in `_layers.scss` before loading rules:

1. `generic/` - reset and document defaults.
2. `elements/` - native HTML element defaults.
3. `objects/` - layout primitives, including `o-container` and `app-layout`.
4. `components/` - reusable UI (`c-*`) and site chrome (`site-*`).
5. `views/` - content view composition (`content-view__*`).

The emitted rules use the `generic`, `elements`, `objects`, `components`, and
`views` cascade layers. These layers expose their partials through `_index.scss`.
`settings/` provides Sass values; `tools/` provides mixins and emits CSS only
when they are included. `themes/_site.scss` exposes the site's settings as
unlayered custom properties on `:root`. There are no theme variants or
`data-theme` selectors.
Sass color calculations use settings directly when they need a color value.

The Swiss Glitch style uses off-white and near-black surfaces, sans-serif
headings, mono labels, square corners, and thin rules. Steel, blue gray, and stone
are used for highlighted surfaces and small chromatic offsets. The original
glitch animations keep their RGB colors. The static grain treatment in
`tools.accent-surface` is reserved for the large highlighted block. Cards and
notes have no textured background variant. Motion follows `prefers-reduced-motion`.

Cards, notes, and career timelines share `tools.panel` and `--panel-padding`.
Component headings use `tools.component-title`; short labels use
`tools.meta-text`. Interactive offsets use `tools.interaction-offset`.
The strike-through scales with the link font, with a minimum thickness of 1px.

Vue components use these global class names. Their markup and behavior remain
in Vue; selectors, responsive rules, and animations live here. Keep animation
trigger rules after image styles in the component index, allowing a glitch to
override the image pulse while it is active.
