import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mockServer from 'vite-plugin-mock-server';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mockServer()],
});
