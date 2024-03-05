import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  integrations: [relativeLinks(), tailwind(),  sitemap()]
});