import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const root = path.resolve(__dirname, "src");
const components = path.resolve(__dirname, "src/components");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
      "@components": components,
    } as AliasOptions,
  },
});
