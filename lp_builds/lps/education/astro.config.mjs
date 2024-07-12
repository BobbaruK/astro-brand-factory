import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/education_wa/v1/sv/",
  // base: "/lp/education_wa/v1/en/",
  // base: "/lp/education-v3/en/",
  base: "/lp/education/en/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
