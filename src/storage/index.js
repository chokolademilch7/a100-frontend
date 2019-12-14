import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../env';


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const topContents = () => {
  return db.collection('topContents').get()
    .then(snapShot => {
      let ret = [];
      snapShot.forEach(doc => {
      ret.push(doc.data());
    })
    console.log('topC', ret)
    return ret[0]
  });
  }

export default { topContents }
