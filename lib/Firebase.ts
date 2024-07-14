// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { createContext, Dispatch, SetStateAction } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83RMdRw9tehM_svEvSGAyTLxHiIabvBQ",
  authDomain: "edenai-1b6d7.firebaseapp.com",
  projectId: "edenai-1b6d7",
  storageBucket: "edenai-1b6d7.appspot.com",
  messagingSenderId: "527920713497",
  appId: "1:527920713497:web:d5717378b446aff4707f88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function signInWithGoogle() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    return (await signInWithPopup(auth, provider)).user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    return null;
  }
}
async function signOut() {
  try {
    const auth = getAuth(app);
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
function checkLoggedIn() {
  const auth = getAuth(app);
  return auth.currentUser;
}
function onStateChange(
  current_state: UserState,
  setState: Dispatch<SetStateAction<UserState>>
) {
  const auth = getAuth(app);
  auth.onAuthStateChanged(async function (user) {
    const new_state: UserState = {
      current_user: null,
      user_context: null,
    };
    if (user) {
      new_state.current_user = user;
      const token = await user.getIdToken();
      console.log(current_state);
      if (!current_state.user_context) {
        const response = await axios.post(
          "api/login",
          {
            uid: user.uid,
            username: new_state.current_user?.displayName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        new_state.user_context = response.data.data as UserType;
      }
      setState(new_state);
    } else {
      setState(new_state);
    }
  });
}
async function getUserIDToken() {
  if (user_state.current_user) {
    return await user_state.current_user.getIdToken();
  } else {
    return null;
  }
}
const FirebaseHandler = {
  signInWithGoogle,
  signOut,
  checkLoggedIn,
  onStateChange,
  getUserIDToken,
};

export default FirebaseHandler;
export type UserState = {
  current_user: User | null | false;
  user_context: UserType | null;
};
export let user_state: UserState = {
  current_user: false,
  user_context: null,
};
