import { build } from 'vite';

async function run() {
  await build({
    build: {
      ssr: true,
      lib: {
        entry: 'tests/suite.ts',
        formats: ['es'],
        fileName: 'suite-bundle'
      },
      outDir: 'tests-dist',
      emptyOutDir: true
    }
  });
}
run();
