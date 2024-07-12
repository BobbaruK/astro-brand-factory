import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/corsitrading_wa/v1/sv/",
  // base: "/lp/corsitrading_wa/v2/pl/",
  // base: "/corsitrading/c/wa/pl/",
  // base: "/lp/corsitrading/it/",
  // base: "/lp/corsitrading/v2/pl/",
  // base: "/lp/bitcoin_bubble/it/",
  base: "/lp/corsitrading/v1/es/",
  base: "/lp/educationalkitstocks_v2/en/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
