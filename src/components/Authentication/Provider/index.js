import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";
import AuthorizationContext from "../Context";

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: null,
    isLoggedIn: false,
  });

  const { firebaseService } = useContext(FirebaseContext);
  const signOut = () => {
    firebaseService.auth().signOut()
  }
  const signIn = (email, password) => {
    firebaseService.auth().signInWithEmailAndPassword(email, password)
  }
  
  // use auth, create user in user collection
  const signUp = (email, password, makerId, ) => {
    firebaseService.auth().createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribeFromFirebaseObservable = firebaseService
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          setUser({
            userInfo: { email: user.email, displayName: user.displayName },
            isLoggedIn: true,
          });
          return false;
        }
        setUser({ user: null, isLoggedIn: false });
        return false;
      });
    return () => unsubscribeFromFirebaseObservable();
  }, [firebaseService]);

  return (
    <AuthorizationContext.Provider
      value={{
        user,
        signOut,
        signIn,
        signUp
      }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
