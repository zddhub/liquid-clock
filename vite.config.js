export default {
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist', // Default output directory
    assetsDir: 'assets', // Default assets directory
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
      },
    },
  }
}
