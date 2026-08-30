# Style architecture

The stylesheet entry point follows a strict low-to-high specificity order:

1. `settings/` — Sass maps and token emitters.
2. `themes/` — runtime CSS custom properties.
3. `tools/` — mixins that emit nothing by themselves.
4. `generic/` — reset, document defaults, reduced motion.
5. `elements/` — native HTML defaults.
6. `objects/` — layout-only primitives using `o-*`.
7. `components/` — reusable chrome and interface styles using `c-*`.
8. `views/` — route-level composition.

The rendered design contract lives at `/styleguide/`. Glitch effects never own essential content, and every animation must degrade through `prefers-reduced-motion`.
