
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQsd3nRzfMF5ioyJdAq9IMET87o-bRP4s",
  authDomain: "event-app-a8615.firebaseapp.com",
  projectId: "event-app-a8615",
  storageBucket: "event-app-a8615.appspot.com",
  messagingSenderId: "970728588031",
  appId: "1:970728588031:web:b668f359f0422e302a42ca"
};
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app,auth,db};
