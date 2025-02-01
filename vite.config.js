import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/dev3/", // Change this to match your subdirectory
  plugins: [react(), tailwindcss()],
});
