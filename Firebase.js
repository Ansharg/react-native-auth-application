// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_D2Lrv0zuwcAtMxy2fj_RlAZjm8FVMY4",
  authDomain: "react-native-project-7d96a.firebaseapp.com",
  databaseURL: "https://react-native-project-7d96a-default-rtdb.firebaseio.com",
  projectId: "react-native-project-7d96a",
  storageBucket: "react-native-project-7d96a.firebasestorage.app",
  messagingSenderId: "917097770939",
  appId: "1:917097770939:web:ad591b4d605cc90f791e9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});