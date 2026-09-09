# Style architecture

`main.scss` loads the global stylesheet in this order:

1. `settings/` - the site's source values as Sass variables.
2. `themes/` - CSS custom properties emitted from those values.
3. `tools/` - reusable mixins that emit CSS only when included.
4. `generic/` - reset and document defaults.
5. `elements/` - native HTML element defaults.
6. `objects/` - layout primitives, including `o-container` and `app-layout`.
7. `components/` - reusable UI (`c-*`) and site chrome (`site-*`).
8. `views/` - content view composition (`content-view__*`).

The emitted rules use the `generic`, `elements`, `objects`, `components`, and
`views` cascade layers. These layers expose their partials through `_index.scss`.
`themes/_site.scss` exposes the single site palette from `settings/_colors.scss`
on `:root`. There are no theme variants or `data-theme` selectors.
Sass color calculations use settings directly when they need a color value.

The Swiss Glitch style uses off-white and near-black surfaces, sans-serif
headings, mono labels, square corners, and thin rules. Cyan, lilac, and pink
are reserved for highlighted surfaces and small chromatic offsets. Use
`c-card--accent` or `c-note--accent` to highlight a component; both share the
static grain treatment in `tools.accent-surface`. Motion follows
`prefers-reduced-motion`.

Vue components use these global class names. Their markup and behavior remain
in Vue; selectors, responsive rules, and animations live here. Keep animation
trigger rules after image styles in the component index, allowing a glitch to
override the image pulse while it is active.

`StyleguideView.vue` is a temporary exception: its fixtures and preview layout
stay together in that file for easy removal.
