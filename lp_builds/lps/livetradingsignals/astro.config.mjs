import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/livetradingsignals/v1/en/",
  // base: "/lp/livetradingsignals/v2/en/",
  base: "/lp/livetradingsignals/v1yah/es/",
  // base: "/lp/trading-signals/es/",
  // base: "/lp/trading-signals3/en/",
  // base: "/lp/livetradingsignals03/v1/ro/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
