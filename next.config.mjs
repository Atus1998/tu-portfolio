/** Static export: the whole site is plain HTML/CSS, deployable to Vercel, Netlify or GitHub Pages. */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
