import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAC4HME8bKQ94b4DAOwFDa9toaGjcZXbqk",
  authDomain: "vue-blog-system-5de20.firebaseapp.com",
  projectId: "vue-blog-system-5de20",
  storageBucket: "vue-blog-system-5de20.appspot.com",
  messagingSenderId: "121167049364",
  appId: "1:121167049364:web:0f24f80a895e5a9cc7fa81"
};
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};