export default db => {
  return {
    list: storeId => {
      return db.collection('stores')
        .doc(storeId)
        .collection('seats').get()
        .then(snapShot => {
          let ret = [];
          snapShot.forEach(doc => {
            ret.push(Object.assign({}, doc.data(), {id: doc.id}));
          })
          console.log(ret);
          return ret;
      });
    }
  }
};



