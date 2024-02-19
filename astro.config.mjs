import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
    }),
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
      prefixDefaultLocale: false,
    },
  },
});
