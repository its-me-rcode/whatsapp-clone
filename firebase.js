import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWyoSI4aG2DcWdMHT2kaRw3LGHMBvyRgU",
  authDomain: "whatsapp-next-c8d5c.firebaseapp.com",
  projectId: "whatsapp-next-c8d5c",
  storageBucket: "whatsapp-next-c8d5c.appspot.com",
  messagingSenderId: "672330796342",
  appId: "1:672330796342:web:213854ee4e477555f23797",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
