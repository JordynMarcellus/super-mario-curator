import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";
import AuthorizationContext from "../Context";

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState({
    userInfo: null,
    isLoggedIn: false,
  });

  const { firebaseService, firestoreDB } = useContext(FirebaseContext);

  const addUserToFirestore = async docReference => {
    try {
      const userDbRef = await firestoreDB
        .collection("users")
        .doc(docReference.user.uid)
        .set({
          playlists: [],
          courses: [],
        });
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    await firebaseService.auth().signOut();
  };

  const signIn = async ({ email, password }) => {
    await firebaseService.auth().signInWithEmailAndPassword(email, password);
  };

  // use auth, create user in user collection
  const signUp = ({ email, password, makerId }) => {
    //TODO: add user accounts on successful creation, associate with displayName and MakerId
    firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(addUserToFirestore)
      .catch(e => console.error(e));
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
