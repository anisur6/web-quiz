// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoBhOelIEdlOqofLQqlrj-dNPUFVX_eV0",
    authDomain: "react-quiz-web-b8d7f.firebaseapp.com",
    projectId: "react-quiz-web-b8d7f",
    storageBucket: "react-quiz-web-b8d7f.appspot.com",
    messagingSenderId: "624169535557",
    appId: "1:624169535557:web:0dce27ffb6061ef778fb2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

