import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";
import AuthorizationContext from "../Context";

const INITIAL_STATE = {
  userInfo: null,
  userContent: null,
  isLoggedIn: false,
};

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const { firebaseService, firestoreDB } = useContext(FirebaseContext);

  const signOut = async () => {
    await firebaseService.auth().signOut();
  };

  const signIn = async ({ email, password }) => {
    await firebaseService.auth().signInWithEmailAndPassword(email, password);
  };

  // use auth, create user in user collection
  const signUp = async ({ email, password, displayName }) => {
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
        // TODO: figure out initial data structure
        .set({});
    } catch (e) {
      console.error(e);
    }
  };

  // TODO: simplify this hook
  // figure out error handling
  useEffect(() => {
    const unsubscribeFromFirebaseObservable = firebaseService
      .auth()
      .onAuthStateChanged(async user => {
        if (user) {
          const { email, displayName, uid } = user;

          const userDbObject = await firestoreDB
            .collection("users")
            .doc(uid)
            .get()
            .then(ref => {
              const refData = ref.data();
              return refData;
            });

          setUser({
            userInfo: { email, displayName, uid },
            userContent: {
              ...userDbObject,
            },
            isLoggedIn: true,
          });
          return false;
        }
        setUser(INITIAL_STATE);
        return false;
      });
    return () => unsubscribeFromFirebaseObservable();
  }, [firebaseService, firestoreDB]);

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
