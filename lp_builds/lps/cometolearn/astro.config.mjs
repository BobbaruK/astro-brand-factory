import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/cometolearn_wa/pl/",
  // base: "/cometolearn_professionalblack_v1_wa/sv/",
  // base: "/lp/cometolearn_wa/pl/",
  base: "/lp/cometolearn/en/",
  // base: "/lp/ctl2/pl/",
  // base: "/ctl2/c/wa/pl/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
