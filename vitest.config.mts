import { join } from 'node:path';
import { cwd } from 'node:process';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    root: './',
    exclude: [...defaultExclude, '**/docker/**'],
    alias: [
      {
        find: '@',
        replacement: join(cwd(), 'src'),
      },
    ],
  },
});
