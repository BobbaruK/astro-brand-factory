import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/lp/3signals/es/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
