import firebase from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBlqLGvnd-yt1taXMGOVMCZf6DpnLOMHj0",
  authDomain: "testproject-903c3.firebaseapp.com",
  projectId: "testproject-903c3"
};
const firebaseApp = firebase.initializeApp(config);
export const fireAuth = firebaseApp.auth();