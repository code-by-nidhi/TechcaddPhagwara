/**
 * Ambient declarations for stylesheets shipped by dependencies.
 *
 * IMPORTANT: this file must NOT contain a top-level `import` or `export`.
 * Adding one turns it into a module, at which point `declare module 'x'` is
 * treated as *augmentation* of an existing module rather than a new ambient
 * declaration, and TypeScript reports TS2664. That is why these live here
 * instead of alongside the augmentations in types/global.d.ts.
 *
 * Swiper exposes its CSS through the package `exports` map as bare specifiers
 * ('swiper/css', 'swiper/css/pagination'). Under moduleResolution: "bundler"
 * TypeScript resolves those to .css files it has no declaration for, which
 * surfaces as TS2307/TS2882 on the side-effect imports in app/layout.tsx.
 */

declare module 'swiper/css'
declare module 'swiper/css/*'
