import { defineConfig } from 'astro/config';
import { vitePlugin as fakeApiVitePlugin } from 'fake-api-middleware';

export default defineConfig({
  vite: {
    plugins: [
      fakeApiVitePlugin({
        responsesFile: './apiDummies/index.ts',
      }),
    ],
  },
});
