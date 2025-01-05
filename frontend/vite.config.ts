import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import circleDependency from 'vite-plugin-circular-dependency';
import unusedCode from 'vite-plugin-unused-code';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
    },
  },
  plugins: [
    react(),
    circleDependency(),
    unusedCode({
      patterns: ['src/**/*.*'],
      exclude: ['src/**/*.d.ts', 'src/**/*.ts', 'src/stories/**/*'],
      failOnHint: true,
    }),
  ],
});
