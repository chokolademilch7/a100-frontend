export default db => callback =>
  db.collection('stores').doc()[0]
  .onSnapshot(doc => callback(doc))