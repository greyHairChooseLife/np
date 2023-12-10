import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      port: 3000, // HMR이 사용할 포트
      protocol: 'ws', // WebSocket 사용
    },
  },
});
