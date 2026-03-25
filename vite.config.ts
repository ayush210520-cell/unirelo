import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Root base for Vercel / most hosts. (GitHub Pages project URLs need e.g. base: "/repo-name/".)
export default defineConfig({
  plugins: [react()],
});
