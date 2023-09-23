import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  /* --------Email Auth---------*/
  // create a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logoutUser=()=>{
    return signOut(auth)
  }

  // observe a user
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(loggedUser)=>{
      console.log("user is still logged",loggedUser);
      setUser(loggedUser)
    })
    return ()=>{ unsubscribe()}
  },[])
  // loginIn a user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*------------Google Auth Provdier---------------*/
  const googleProvider=new GoogleAuthProvider()
  const googleLoginUser=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  
  const authInfo = { user, createUser, loginUser,logoutUser,googleLoginUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
