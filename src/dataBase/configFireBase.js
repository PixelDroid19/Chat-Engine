import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";


// Config de nuestra app
const firebaseConfig = {
  apiKey: "AIzaSyDxNaQL1ohHzADGQSRdmXZ7vU5-hK3TqBQ",
  authDomain: "mpt-project-atlas.firebaseapp.com",
  projectId: "mpt-project-atlas",
  storageBucket: "mpt-project-atlas.appspot.com",
  messagingSenderId: "469702174105",
  appId: "1:469702174105:web:2b0388dc8d94fe3f8adf08",
  measurementId: "G-1MW9BNDHKE" 
};


const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();

export{
    app,
    google
}