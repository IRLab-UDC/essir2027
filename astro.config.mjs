// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://essir2027.irlab.org',
  vite: {
    server: {
      allowedHosts: true,
      watch: { usePolling: true, interval: 300 },
    },
  },
});
