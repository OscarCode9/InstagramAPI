export default {
  db: {
    host: 'localhost',
    port: 28015,
    db: 'platzigram',
    setup: true
  },
  secret: process.env.PLATZIGRAM_SECRET || 'pla4tzi' // never use default
}
