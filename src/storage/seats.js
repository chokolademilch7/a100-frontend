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
    },
    one: (storeId, seatId) => {
      return db.collection('stores')
        .doc(storeId)
        .collection('seats')
        .doc(seatId)
        .get()
        .then(doc => {
          console.log(doc);
          return doc.data();
      });
    }
  }
};