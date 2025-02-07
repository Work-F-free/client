import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  plugins: [react(), NodeGlobalsPolyfillPlugin()],
  define: {
    global: "window",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "window",
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
