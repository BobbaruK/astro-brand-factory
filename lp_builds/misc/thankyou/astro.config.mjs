import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: "/thankyou/en/",
  // base: "/thankyou/it/",
  // base: "/thankyou/it/short",
  // base: "/thankyou/es/",
  // base: "/thankyou/es/short",
  // base: "/thankyou/pl/",
  base: "/thankyou/pl/short",
  // base: "/thankyou/sv/short",
  // base: "/thank-you/es/",
  // base: "/thank-you/ro/",
  // base: "/thank-you/en/",
  // base: "/thank-you/sv/short",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
