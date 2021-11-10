import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentaction = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentaction;
