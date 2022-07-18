import { defineConfig } from "vite";

export default defineConfig({
    root: "newpage",
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})