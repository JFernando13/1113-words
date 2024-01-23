import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    injectReset: true
  }), tailwind({
    nesting: true,
    applyBaseStyles: true
  }), svelte()],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    },
  }
});