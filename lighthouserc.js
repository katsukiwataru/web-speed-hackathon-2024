module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox',
      },
      startServerCommand: 'pnpm run start',
      startServerReadyPattern: 'Listening on',
      url: [
        'http://localhost:8000/',
        'http://localhost:8000/books/ed941d18-6eb7-4e71-b7d0-dd2b4c870f39',
        'http://localhost:8000/authors/a16ea1c8-9584-4139-bbe6-03175e301491',
        'http://localhost:8000/books/af7583e6-e52e-4f28-86dd-04f0af9d4868/episodes/0b1703b1-033a-4f4d-a420-f318afbaa597',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
