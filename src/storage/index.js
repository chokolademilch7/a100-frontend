import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../env';

import apiTopContents from './topContents.js';
import apiStores from './stores.js';
import apiSeats from './seats.js';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const topContents = apiTopContents(db);
const stores = apiStores(db);
const seats = apiSeats(db);

export default { topContents, stores, seats}
