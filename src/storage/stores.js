export default db => () => 
  db.collection('stores').get()
    .then(snapShot => {
      let ret = [];
      snapShot.forEach(doc => {
        ret.push(Object.assign({}, doc.data(), {id: doc.id}));
      })
      return ret;
});

