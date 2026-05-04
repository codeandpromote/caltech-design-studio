/**
 * Shimmer blur placeholder for next/image. Produces a tiny base64 SVG that
 * displays as a soft animated gradient while the real image is loading.
 * Use as: `placeholder="blur" blurDataURL={shimmer(700, 475)}`.
 */

const shimmerSvg = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2c2c2c" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a1a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.4s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const shimmer = (w = 700, h = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmerSvg(w, h))}`;

/** A pre-baked default suitable for most aspect ratios. */
export const SHIMMER_DARK = shimmer(700, 475);
