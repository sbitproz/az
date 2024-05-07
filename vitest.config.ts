import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['test/setupTest.ts'],
        unstubGlobals: true,
        server: {
          deps: {
            inline: ['@testing-library/user-event'],
          },
        },
      },
    }),
  ),
);
