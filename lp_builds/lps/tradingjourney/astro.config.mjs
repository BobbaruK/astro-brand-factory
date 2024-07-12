import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/lp/tradingjourney_wa/pl/",
  // base: "/lp/tradingjourney/en/",
  // base: "/forexbeginner_wa/v1/sv/",
  base: "/lp/forexbeginner/en/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
