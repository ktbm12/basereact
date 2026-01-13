import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/"  // Assure que tous les assets sont servis depuis la racine
});
