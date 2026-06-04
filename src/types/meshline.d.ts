/* eslint-disable @typescript-eslint/no-explicit-any */

// Register the meshline classes (mounted via `extend`) as intrinsic R3F
// elements so <meshLineGeometry /> and <meshLineMaterial /> type-check.
// Typed as `any` (per React Bits guidance) — the strict generated element
// types demand constructor `args`, which these uniform-driven elements set
// declaratively via props instead.
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any
    meshLineMaterial: any
  }
}

export {}
