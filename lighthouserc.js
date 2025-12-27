module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
        onlyCategories: ['performance'],
      },
      startServerCommand: 'pnpm run start',
      startServerReadyPattern: 'Listening on',
      url: ['http://localhost:8000/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
