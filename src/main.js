import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjfTM3vVCDvXVS88AVjGqGy5RWn8fbPw",
  authDomain: "altschool-auth-1fb04.firebaseapp.com",
  projectId: "altschool-auth-1fb04",
  storageBucket: "altschool-auth-1fb04.appspot.com",
  messagingSenderId: "1005772827473",
  appId: "1:1005772827473:web:da8d21b292dc8cd6058170"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
