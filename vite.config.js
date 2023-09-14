import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    port: 3004,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "js"),
    },
    extensions: [".js", ".css"],
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        api: resolve(__dirname, "api-call.html"),
        boring: resolve(__dirname, "boring-page.html"),
        callcenter: resolve(__dirname, "callcenter.html"),
        claim: resolve(__dirname, "claim.html"),
        confirmation: resolve(__dirname, "confirmation.html"),
        autocall: resolve(__dirname, "auto-call.html"),
        faq: resolve(__dirname, "faq.html"),
        contacts: resolve(__dirname, "contacts.html"),
        nonboring: resolve(__dirname, "non-boring-page.html"),
        links: resolve(__dirname, "links.html"),
        manual: resolve(__dirname, "manual.html"),
        incoming: resolve(__dirname, "incoming.html"),
        seo: resolve(__dirname, "seo-page.html"),
        price: resolve(__dirname, "price.html"),
        videoinstruction: resolve(__dirname, "videoinstruction.html"),
      },
    },
  },
});
