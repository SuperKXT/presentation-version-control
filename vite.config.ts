/* eslint-disable import/no-default-export */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error missing types
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig((env) => ({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	plugins: [react(), eslint()],
	build: { outDir: 'build' },
	server:
		env.mode === 'development'
			? { open: true, port: 3000, host: true }
			: undefined,
}));
