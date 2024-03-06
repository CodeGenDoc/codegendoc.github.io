import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import relativeLinks from "astro-relative-links";

export default defineConfig({
  site: "https://storage.googleapis.com",
  base: "/code-craft-doc-site",
  // @ts-ignore
  integrations: [relativeLinks(), tailwind(), sitemap()],
});
