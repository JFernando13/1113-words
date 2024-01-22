import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss(
      {
        injectReset: true
      }
    ),
    tailwind(
      {
        nesting: true,
        applyBaseStyles: true
      }
    )
  ]
});