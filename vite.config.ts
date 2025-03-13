import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@/utils": "/src/lib/utils",
      "@/ui": "/src/components/ui",
      "@/lib": "/src/lib",
      "@/hooks": "/src/hooks"
    }
  }
});
