import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../env';

import apiTopContents from './topContents.js';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const topContents = apiTopContents(db);

export default { topContents }
