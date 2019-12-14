export default db => () => 
  db.collection('topContents').get()
    .then(snapShot => {
      let ret = [];
      snapShot.forEach(doc => {
        ret.push(doc.data())
      })
      console.log('topC', ret)
      return ret[0]
    });