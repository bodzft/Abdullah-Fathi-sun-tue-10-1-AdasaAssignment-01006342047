import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Abdullah-Fathi-sun-tue-10-1-AdasaAssignment-01006342047/",
  build: {
    outDir: "docs"
  }
});
