# Lanyard (React Bits)

Interactive 3D ID-card lanyard, adapted from https://reactbits.dev/components/lanyard
for Next.js (App Router + Turbopack).

## Files

- `Lanyard.tsx` — the R3F/Rapier component. Loads assets **by URL from `/public`**
  (Next has no Vite `assetsInclude`), so no `.glb`/`.png` module imports are needed.
- `LanyardSection.tsx` — client wrapper: `next/dynamic` (`ssr:false`) + lazy load +
  error boundary + reduced-motion/loading/failure fallback. Import **this** in pages.
- Assets: `public/lanyard/card.glb`, `public/lanyard/lanyard.png`.

## Swapping in a professional photo  ⚠️ ACTION REQUIRED

The card portrait is **baked into the texture inside `card.glb`** (the component reads
`materials.base.map`). It is **not** a swappable prop. The current `card.glb` is the
default React Bits placeholder card.

To put a real photo on the card:

1. Open https://modelviewer.dev/editor/ and drag in `public/lanyard/card.glb`.
2. Replace the `base` material's base-color texture with the professional photo
   (recommended ~1024×1024, card aspect; keep the existing UV layout).
3. Export the edited model and overwrite `public/lanyard/card.glb`.

No code changes are required after the swap — the path is already wired.

To restyle the strap, edit/replace `public/lanyard/lanyard.png` (any image editor).
