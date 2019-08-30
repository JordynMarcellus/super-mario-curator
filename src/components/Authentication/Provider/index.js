import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";
import AuthorizationContext from "../Context";

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: null,
    isLoggedIn: false,
  });

  const { firebaseService, firestoreDB } = useContext(FirebaseContext);

  const signOut = async () => {
    await firebaseService.auth().signOut();
  };

  const signIn = async ({ email, password }) => {
    await firebaseService.auth().signInWithEmailAndPassword(email, password);
  };

  // use auth, create user in user collection
  const signUp = async ({ email, password, makerId, displayName }) => {
    //TODO: add user accounts on successful creation, associate with displayName and MakerId
    try {
      const userReference = await firebaseService
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await userReference.user.updateProfile({
        displayName,
      });

      await firestoreDB
        .collection("users")
        .doc(userReference.user.uid)
        .set({ playlists: [], courses: [], makerId });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const unsubscribeFromFirebaseObservable = firebaseService
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          const { email, displayName, uid } = user;
          setUser({
            userInfo: { email, displayName, uid },
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
        signUp,
      }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
