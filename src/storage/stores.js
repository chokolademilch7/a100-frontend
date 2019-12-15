export default db => () => 
  db.collection('stores').get()
    .then(snapShot => {
      let ret = [];
      snapShot.forEach(doc => {
        ret.push(doc.data())
      })
      console.log('topC', ret)
      return ret;
});

