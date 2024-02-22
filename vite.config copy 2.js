import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueI18n({
			// if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
			compositionOnly: true,

			// you need to set i18n resource including paths !
			include: './src/locales/**',
		}),
	],
	server: {
		port: 3000,
		compression: true,
	},
	vueCompilerOptions: {
		productionMode: true,
	},
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: 'index.html',
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
				manualChunks: { vue: ['vue'] },
			},
		},
		// habilitar la generación de service workers
		sourcemap: true,
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1500,
		manifest: true,
		outDir: 'dist',
	},
	// habilitar el Service Worker
	serviceWorker: {
		register: true,
		scope: './index.html',
		// configuración adicional del Service Worker, si es necesario
	},
});