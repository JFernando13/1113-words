import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: true,
    }),
    react(),
  ],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      // prefixDefaultLocale: false,
      strategy: "pathname",
    },
  },
  output: "hybrid",
  adapter: vercel(),
});
