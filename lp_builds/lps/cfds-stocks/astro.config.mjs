import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/cfds-stocks-wa/pl/",
  base: "/cfd-bonus/v2/en/",
  base: "/cfd-bonus/v2/vi/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
