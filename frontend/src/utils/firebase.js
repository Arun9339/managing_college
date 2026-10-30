import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC_hKeZwAsUpmUbmq_smYKZunl9YzJzn4",
  authDomain: "studentmanagemen-46fa9.firebaseapp.com",
  projectId: "studentmanagemen-46fa9",
  storageBucket: "studentmanagemen-46fa9.firebasestorage.app",
  messagingSenderId: "852849542565",
  appId: "1:852849542565:web:c45b4360e77022e44e544c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };