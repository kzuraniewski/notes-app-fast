import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/main.ts',
			formats: ['es'],
		},
		rollupOptions: {
			external: /^@microsoft\/fast-(element|components)/,
		},
	},
});
