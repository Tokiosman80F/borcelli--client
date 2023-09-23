import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GithubAuthProvider,
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
  const [loader,setLoader]=useState(true)

  /* --------Email Auth---------*/
  // create a user
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logoutUser=()=>{
    setLoader(true)
    return signOut(auth)
  }

  // observe a user
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(loggedUser)=>{
      console.log("user is still logged",loggedUser);
      setUser(loggedUser)
      setLoader(false)
    })
    return ()=>{ unsubscribe()}
  },[])
  // loginIn a user
  const loginUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*------------Google Auth Provdier---------------*/
  const googleProvider=new GoogleAuthProvider()
  const googleLoginUser=()=>{
    setLoader(true)
    return signInWithPopup(auth,googleProvider)
  }

  /*---------------Git hub provider-----------------*/ 
 const githubProvider=new GithubAuthProvider()
 const githubLoginUser=()=>{
  setLoader(true)
  return signInWithPopup(auth,githubProvider)
 } 
 
 const authInfo = { user,loader,createUser, loginUser,logoutUser,googleLoginUser,githubLoginUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
