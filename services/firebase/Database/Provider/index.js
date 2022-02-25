import React from "react";
import { firebaseService, firestoreDB } from "../../config.js";
import FirebaseContext from "../Context";


const FirebaseProvider = ({ children }) => {
  // Assist
  // Leaderboard
  // Current assist requests
  const COLLECTION = ""
  const firestoreCollectionRef = firestoreDB.collection(COLLECTION);

  const addToFirebase = async data => {
    await firestoreDB
      .collection(COLLECTION)
      .add(data)
      .then(firestoreRef => {
        firestoreRef.set({ uid: firestoreRef.id }, { merge: true });
      });
  };

  const editInFirestore = async (itemId, data) => {
    await firestoreCollectionRef.doc(itemId).update(data);
  };

  const getSingleFromFirestore = async itemId => {
    const data = await firestoreCollectionRef.doc(itemId).get();
    return data;
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseService,
        firestoreDB,
        addToFirebase,
        editInFirestore,
        getFromFirestore,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
