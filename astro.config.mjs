import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import uno from "astro-uno";
import { presetUno } from "unocss";

// https://astro.build/config
export default defineConfig({
  site: "https://cumcord.com",
  integrations: [
    uno({
      presets: [presetUno()],
      configFile: "uno.config.js"
    }),
    sitemap(),
  ],
});
