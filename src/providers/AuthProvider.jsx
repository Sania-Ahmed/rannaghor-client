/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile, onAuthStateChanged } from "firebase/auth";

import app from '../firebase/firebase.config';

export const AuthContext = createContext( null );
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();
const GitProvider = new GithubAuthProvider() ;


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const updateUser = (displayName, photoURL)=>{
        return  updateProfile(auth.currentUser, {displayName, photoURL})
       }
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signWithGoogle = () => {
    return signInWithPopup (auth, Googleprovider)
  }
  const signInWithGitHub = () => {
    return signInWithPopup(auth, GitProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedonUser)=>{
      // console.log(loggedonUser);
      setUser(loggedonUser);
      setIsLoading(false)
    })
  return () => {
    unsubscribe()
  };
  }, []) 




 const authInfo = {
     user,
     createUser,
     signIn,
     signWithGoogle,
     updateUser,
     signInWithGitHub ,
     setUser
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;