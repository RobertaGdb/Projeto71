import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCMiGsRjgYhCc6vzSfAZSLWh-wON08J8E0",
    authDomain: "projeto-71-df95b.firebaseapp.com",
    projectId: "projeto-71-df95b",
    storageBucket: "projeto-71-df95b.appspot.com",
    messagingSenderId: "79019452818",
    appId: "1:79019452818:web:2208c2346c2412a8bcf94b"
  }
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
