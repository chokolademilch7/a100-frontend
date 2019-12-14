export default db => () => {
  let ret = []
  db.collection('topContents').get()
    .then(snapShot => snapShot.forEach(doc => {
      console.log(doc.data());
      ret = doc.data()
    }));
    return ret;
  }