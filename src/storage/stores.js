export default db => {
  return {
      list: () => {
        return db.collection('stores').get()
          .then(snapShot => {
          let ret = [];
          snapShot.forEach(doc => {
              ret.push(Object.assign({}, doc.data(), {id: doc.id}));
          })
          return ret;
        });
      },

      onSnap: callback => {
        return db.collection('stores')
          .onSnapshot(doc => callback(doc))
      }
  }
};