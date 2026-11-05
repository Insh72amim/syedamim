import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3005,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin", "color-functions", "legacy-js-api"],
      },
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          reactflow: ["reactflow"],
          charts: ["recharts"],
          math: ["katex"],
          ui: ["lucide-react", "framer-motion", "zustand"],
          "syntax-highlighter": ["react-syntax-highlighter"],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
});
