import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 3001,
		compression: true,
	},
	vueCompilerOptions: {
		productionMode: true,
	},
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: "index.html",
			output: {
				// entryFileNames: `assets/[name].js`,
				// chunkFileNames: `assets/[name].js`,
				// assetFileNames: `assets/[name].[ext]`,
				manualChunks: { vue: ["vue"] },
			},
		},
		// habilitar la generación de service workers
		sourcemap: true,
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1500,
		manifest: true,
		outDir: "dist",
	},
	// habilitar el Service Worker
	serviceWorker: {
		register: true,
		scope: "/",
		// configuración adicional del Service Worker, si es necesario
	},
});
